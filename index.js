const { Prompt } = require('enquirer');
const Editor = require('external-editor');

class EditorPrompt extends Prompt {
  constructor(options = {}) {
    super(options);
    this.state.answered = false;
    this.cursorHide();
  }

  // Intercept submit and launch the editor
  submit() {
    this.value = Editor.edit(this.state.initial);
    this.state.answered = true;
    return super.submit();
  }

  async render() {
    this.clear();
    const prefix = await this.prefix() + ' ';
    const message = await this.message();
    const suffix = this.styles.dim(this.state.answered ?
        ' — Received' : ' — Press <enter> to launch editor');
    this.write(prefix + message + suffix);
  }
}

module.exports = EditorPrompt;
