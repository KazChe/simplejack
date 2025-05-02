class SimpleSpinner {
  frames;
  interval;
  currentFrame;
  timer;
  text;

  /**
   * @param {string} text - The text to display
   * @param {string[]} frames - The frames to display
   * characters from https://www.unicode.org/charts/nameslist/n_2800.html
   */
  constructor(text = "Loading...", frames = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"]) {
    this.frames = frames;
    this.interval = 80; // milliseconds
    this.currentFrame = 0;
    this.timer = null;
    this.text = text;
  }

  start() {
    if (!this.timer) {
      // pain = save cursor position and hide cursor
      process.stdout.write("\u001B[?25l");
      this.timer = setInterval(() => {
        this.render();
      }, this.interval);
    }
    return this;
  }

  stop(finalText) {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
      // clears line
      process.stdout.write("\r\u001B[2K");
      // show the cursor again
      process.stdout.write("\u001B[?25h");
      // write a final text if provided
      if (finalText) {
        process.stdout.write(finalText + "\n");
      }
    }
    return this;
  }

  succeed(text) {
    return this.stop(`✅ ${text || this.text}`);
  }

  fail(text) {
    return this.stop(`❌ ${text || this.text}`);
  }

  setText(text) {
    this.text = text;
    return this;
  }

  render() {
    const frame = this.frames[this.currentFrame];
    // clear the current line and move the cursor to the start
    process.stdout.write("\r\u001B[2K");
    // write the frame and text
    process.stdout.write(`${frame} ${this.text}`);
    // increment the frame counter and loop if necessary
    this.currentFrame = (this.currentFrame + 1) % this.frames.length;
  }
}
export default SimpleSpinner;