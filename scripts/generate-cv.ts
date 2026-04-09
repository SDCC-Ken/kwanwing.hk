import { chromium } from 'playwright';
import { spawn } from 'child_process';
import path from 'path';
import fs from 'fs';

async function generatePdfs() {
  const args = process.argv.slice(2);
  const urlArg = args.find(arg => arg.startsWith('--url='))?.split('=')[1];
  const outputArg = args.find(arg => arg.startsWith('--output='))?.split('=')[1];
  
  const PORT = parseInt(args.find(arg => arg.startsWith('--port='))?.split('=')[1] || '3001');
  const skipServer = args.includes('--existing-server');
  const isDev = process.env.NODE_ENV === 'development' || args.includes('--dev');
  
  // Default output directory
  const getOutputDirectory = () => {
    if (isDev) return path.resolve(process.cwd(), 'public');
    if (fs.existsSync(path.resolve(process.cwd(), 'dist'))) return path.resolve(process.cwd(), 'dist');
    return path.resolve(process.cwd(), '.output/public');
  };
  
  const outputDir = getOutputDirectory();

  // Define targets
  const targets = urlArg 
    ? [{ url: urlArg, output: outputArg || 'cv.pdf' }]
    : [
        { url: `http://localhost:${PORT}/cv-print`, output: 'cv.pdf' },
        { url: `http://localhost:${PORT}/cv-print?salary=true`, output: 'cv-salary.pdf' }
      ];

  let server;

  if (!urlArg && !skipServer) {
    const builtServerPath = path.resolve(process.cwd(), '.output/server/index.mjs');
    const cloudflareWorkerPath = path.resolve(process.cwd(), 'dist/_worker.js');
    
    if (fs.existsSync(builtServerPath)) {
      console.log('🚀 Starting temporary Node.js server...');
      server = spawn('node', [builtServerPath], {
        env: { ...process.env, PORT: PORT.toString(), NODE_ENV: 'production' },
        stdio: 'inherit'
      });
    } else if (fs.existsSync(cloudflareWorkerPath)) {
      console.log('🚀 Starting Cloudflare wrangler preview...');
      server = spawn('npx', ['wrangler', 'pages', 'dev', 'dist', '--port', PORT.toString()], {
        shell: true,
        stdio: 'inherit'
      });
    } else {
      console.log('⚠️  No production build found. Using nuxt dev...');
      server = spawn('npx', ['nuxi', 'dev', '--port', PORT.toString()], {
        shell: true,
        stdio: 'inherit'
      });
    }

    console.log('⏳ Waiting for server to initialize...');
    await new Promise(resolve => setTimeout(resolve, 8000));
  }

  try {
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    console.log('🌐 Launching browser...');
    const browser = await chromium.launch();
    
    for (const target of targets) {
      const outputPath = path.isAbsolute(target.output) 
        ? target.output 
        : path.join(outputDir, target.output);
        
      console.log(`📄 Capturing ${target.url} -> ${path.basename(outputPath)}`);
      const page = await browser.newPage();
      await page.setViewportSize({ width: 794, height: 1123 });
      await page.emulateMedia({ media: 'print' });

      await page.goto(target.url, { waitUntil: 'networkidle' });
      await page.evaluateHandle(() => document.fonts.ready);
      await new Promise(resolve => setTimeout(resolve, 2000));

      await page.pdf({
        path: outputPath,
        format: 'A4',
        printBackground: true,
        margin: { top: '1cm', right: '1cm', bottom: '1cm', left: '1cm' }
      });
      
      console.log(`✅ Generated: ${outputPath}`);
      await page.close();
    }

    await browser.close();
  } catch (error) {
    console.error('❌ Error during generation:', error);
  } finally {
    if (server) {
      console.log('🛑 Shutting down temporary server...');
      server.kill();
    }
    if (!args.includes('--no-exit')) {
      process.exit(0);
    }
  }
}

generatePdfs();
