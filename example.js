import SimpleSpinner from "./simplejack.js";

// Example 1: Basic usage
const spinner1 = new SimpleSpinner("Processing...");
spinner1.start();

// Simulate some work
setTimeout(() => {
  spinner1.succeed("Processing complete!");
}, 2000);

// Example 2: Custom frmes
const customFrames = ["🌑", "🌒", "🌓", "🌔", "🌕", "🌖", "🌗", "🌘"];
const spinner2 = new SimpleSpinner("Loading data...", customFrames);
spinner2.start();

setTimeout(() => {
  spinner2.succeed("Data loaded successfully!");
}, 3000);

// Example 3: Changing text during operation
const spinner3 = new SimpleSpinner("Starting up..");
spinner3.start();

setTimeout(() => {
  spinner3.setText("Connecting to database...");
}, 1000);

setTimeout(() => {
  spinner3.setText("Fetching user data...");
}, 2000);

setTimeout(() => {
  spinner3.succeed("All operations completed!");
}, 3000);

// Example 4: Error handling
const spinner4 = new SimpleSpinner("Downloading file...");
spinner4.start();

setTimeout(() => {
  spinner4.fail("Download failed: Conection timeout");
}, 2500);

// Example 5: Manual stop
const spinner5 = new SimpleSpinner("Calculating...");
spinner5.start();

setTimeout(() => {
  spinner5.stop("Calculation stopped by some jack");
}, 1500);
