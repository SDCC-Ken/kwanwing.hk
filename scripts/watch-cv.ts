import { watch } from "fs";
import { spawn } from "child_process";
import path from "path";

const WATCH_FILES = [path.resolve(process.cwd(), "pages/cv-print.vue")];

console.log("👀 Watching CV files for changes...");

let isGenerating = false;
let pendingGeneration = false;

async function runGenerate() {
  if (isGenerating) {
    pendingGeneration = true;
    return;
  }

  isGenerating = true;
  pendingGeneration = false;

  console.log("🔄 Regenerating PDF...");

  // Use bun to run the script
  const gen = spawn(
    "bun",
    [
      "run",
      "scripts/generate-cv.ts",
      "--dev",
      "--port=3000",
      "--existing-server",
      "--no-exit",
    ],
    {
      stdio: "inherit",
    },
  );

  gen.on("close", (code) => {
    isGenerating = false;
    if (code === 0) {
      console.log("✅ PDF Updated! Waiting for changes...");
    } else {
      console.error(`❌ PDF generation failed with code ${code}`);
    }

    if (pendingGeneration) {
      runGenerate();
    }
  });
}

// Initial generation
runGenerate();

WATCH_FILES.forEach((file) => {
  try {
    watch(file, (eventType, filename) => {
      if (filename) {
        console.log(`📝 Change detected in ${filename}`);
        runGenerate();
      }
    });
  } catch (e) {
    console.error(`Failed to watch ${file}:`, e);
  }
});
