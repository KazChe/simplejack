import SimpleSpinner from "./simplejack.js";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function runExamples() {
  // Example 1: Basic usage
  console.log("\nExample 1: Basic usage");
  const spinner1 = new SimpleSpinner("Processing...");
  spinner1.start();
  await sleep(2000);
  spinner1.succeed("Processing complete!");
  // example 2: Custom frames
  console.log("\nExample 2: Custom frames");
  const customFrames = ["🌑", "🌒", "🌓", "🌔", "🌕", "🌖", "🌗", "🌘"];
  const spinner2 = new SimpleSpinner("Loading data...", customFrames);
  spinner2.start();
  await sleep(3000);
  spinner2.succeed("Data loaded successfully!");

  // example 3: Changing text during operation
  console.log("\nExample 3: Dynamic text updates");
  const spinner3 = new SimpleSpinner("Starting up...");
  spinner3.start();
  await sleep(1000);
  spinner3.setText("Connecting to database...");
  await sleep(1000);
  spinner3.setText("Fetching user data...");
  await sleep(1000);
  spinner3.succeed("All operations completed!");

  // Example 4: Error handling
  console.log("\nExample 4: Error handling");
  const spinner4 = new SimpleSpinner("Downloading file...");
  spinner4.start();
  await sleep(2500);
  spinner4.fail("Download failed: Connection timeout");

  // Example 5: manual stop
  console.log("\nExample 5 Manual stop");
  const spinner5 = new SimpleSpinner("Calculating...");
  spinner5.start();
  await sleep(1500);
  spinner5.stop("Calculation stopped by user");
}

runExamples();
