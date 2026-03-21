import { chromium } from 'playwright';
import { spawn } from 'child_process';
import path from 'path';
import fs from 'fs';

async function generatePdf() {
  const args = process.argv.slice(2);
  const urlArg = args.find(arg => arg.startsWith('--url='))?.split('=')[1];
  const outputArg = args.find(arg => arg.startsWith('--output='))?.split('=')[1];
  
  const PORT = 3001;
  const isDev = process.env.NODE_ENV === 'development' || args.includes('--dev');
  
  // Default output directory: 'dist' for Cloudflare, '.output/public' for Node, 'public' for local dev
  const getOutputDirectory = () => {
    if (isDev) return path.resolve(process.cwd(), 'public');
    if (fs.existsSync(path.resolve(process.cwd(), 'dist'))) return path.resolve(process.cwd(), 'dist');
    return path.resolve(process.cwd(), '.output/public');
  };
  
  const OUTPUT_PATH = outputArg 
    ? path.resolve(process.cwd(), outputArg)
    : path.join(getOutputDirectory(), 'cv.pdf');

  let server;
  let targetUrl = urlArg || `http://localhost:${PORT}/cv-print`;

  if (!urlArg) {
    // Try to find the built server path
    const builtServerPath = path.resolve(process.cwd(), '.output/server/index.mjs');
    const cloudflareWorkerPath = path.resolve(process.cwd(), 'dist/_worker.js');
    
    if (fs.existsSync(builtServerPath)) {
      console.log('🚀 Starting temporary Node.js server for PDF generation...');
      server = spawn('node', [builtServerPath], {
        env: { ...process.env, PORT: PORT.toString(), NODE_ENV: 'production' },
        stdio: 'inherit'
      });
    } else if (fs.existsSync(cloudflareWorkerPath)) {
      console.log('🚀 Starting Cloudflare wrangler preview for PDF generation...');
      // Use wrangler to preview the built worker
      server = spawn('npx', ['wrangler', 'pages', 'dev', 'dist', '--port', PORT.toString()], {
        shell: true,
        stdio: 'inherit'
      });
    } else {
      // Fallback: Try to start dev server if build is missing, or ask user to provide --url
      console.log('⚠️  No production build found. Attempting to use nuxt dev temporarily...');
      server = spawn('npx', ['nuxi', 'dev', '--port', PORT.toString()], {
        shell: true,
        stdio: 'inherit'
      });
    }

    // Give the server a few seconds to start
    console.log('⏳ Waiting for server to initialize...');
    await new Promise(resolve => setTimeout(resolve, 8000));
  } else {
    console.log(`🔗 Using existing server at: ${targetUrl}`);
  }

  try {
    // Ensure parent directory of output exists
    const outputDir = path.dirname(OUTPUT_PATH);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    console.log(`🌐 Launching browser to capture CV from ${targetUrl}...`);
    const browser = await chromium.launch();
    const page = await browser.newPage();
    
    // Set viewport for A4 width
    await page.setViewportSize({ width: 794, height: 1123 });
    await page.emulateMedia({ media: 'print' });

    await page.goto(targetUrl, {
      waitUntil: 'networkidle',
    });

    // Wait for fonts to be ready
    console.log('🔡 Waiting for fonts to load...');
    await page.evaluateHandle(() => document.fonts.ready);
    
    // Give icons and transitions a moment to settle
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log('📄 Generating PDF...');
    await page.pdf({
      path: OUTPUT_PATH,
      format: 'A4',
      printBackground: true,
      margin: {
        top: '1cm',
        right: '1cm',
        bottom: '1cm',
        left: '1cm',
      }
    });

    console.log(`✅ PDF successfully generated at: ${OUTPUT_PATH}`);
    await browser.close();
  } catch (error) {
    console.error('❌ Error during PDF generation:', error);
  } finally {
    if (server) {
      console.log('🛑 Shutting down temporary server...');
      server.kill();
    }
    // Don't exit if we were called as part of a watch process, 
    // but here we are running as a standalone script.
    if (!args.includes('--no-exit')) {
      process.exit(0);
    }
  }
}

generatePdf();
