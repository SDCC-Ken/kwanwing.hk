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
  
  // Default output: .output/public/cv.pdf for build/deploy, public/cv.pdf for local dev
  const defaultOutputDir = isDev 
    ? path.resolve(process.cwd(), 'public')
    : path.resolve(process.cwd(), '.output/public');
    
  const OUTPUT_PATH = outputArg 
    ? path.resolve(process.cwd(), outputArg)
    : path.join(defaultOutputDir, 'cv.pdf');

  let server;
  let targetUrl = urlArg || `http://localhost:${PORT}/cv-print`;

  if (!urlArg) {
    // Ensure output directory exists for production build
    const serverPath = path.resolve(process.cwd(), '.output/server/index.mjs');
    if (!fs.existsSync(serverPath)) {
      console.error(`Error: ${serverPath} not found. Please run "bun run build" first or provide --url.`);
      process.exit(1);
    }

    console.log('🚀 Starting temporary server for PDF generation...');
    server = spawn('node', [serverPath], {
      env: { ...process.env, PORT: PORT.toString(), NODE_ENV: 'production' },
      stdio: 'inherit'
    });

    // Give the server a few seconds to start
    await new Promise(resolve => setTimeout(resolve, 5000));
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
