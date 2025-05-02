# simplejack

A lightweight, customizable terminal spinner for Node.js applications.

## Features

- Simple and intuitive API
- Customizable animation frames
- Dynamic text updates
- Success and error states
- Manual control
- Unicode character support

## Installation

## Usage

```javascript
import SimpleSpinner from "simplejack";

// Basic usage
const spinner = new SimpleSpinner("Processing...");
spinner.start();

// After some work
spinner.succeed("Complete!");

// Or on error
spinner.fail("Failed!");
```

## Examples

### Custom Animation Frames

```javascript
const customFrames = ["🌑", "🌒", "🌓", "🌔", "🌕", "🌖", "🌗", "🌘"];
const spinner = new SimpleSpinner("Loading...", customFrames);
spinner.start();
```

### Dynamic Text Updates

```javascript
const spinner = new SimpleSpinner("Starting up...");
spinner.start();

// Update text during operation
spinner.setText("Processing data...");
```

### Error Handling

```javascript
const spinner = new SimpleSpinner("Downloading...");
spinner.start();

// On error
spinner.fail("Download failed: Connection timeout");
```

## API

### Constructor

```javascript
new SimpleSpinner(
  (text = "Loading..."), // Default text
  (frames = [
    // Default animation frames
    "⠋",
    "⠙",
    "⠹",
    "⠸",
    "⠼",
    "⠴",
    "⠦",
    "⠧",
    "⠇",
    "⠏",
  ])
);
```

### Methods

- `start()`: Starts the spinner
- `stop(finalText)`: Stops the spinner with optional final text
- `succeed(text)`: Stops with success indicator (✅)
- `fail(text)`: Stops with error indicator (❌)
- `setText(text)`: Updates the spinner text

## License

MIT
