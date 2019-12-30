const { Prompt } = require('enquirer');
const Editor = require('external-editor');

class EditorPrompt extends Prompt {
  constructor(options = {}) {
    super(options);
    this.value = this.state.initial || '';
  }

  async suffix(addon = '') {
    const suffix = this.state.cancelled ? ' — Aborted' :
        this.state.submitted ? ' — Received' :
        ' — Press <Enter> to launch an editor';
    return this.styles.dim(suffix + ' ' + addon);
  }

  // Intercept submit and launch the editor
  submit() {
    this.value = Editor.edit(this.value);
    return super.submit();
  }

  async render() {
    const size = this.state.size;
    const prefix = await this.prefix() + ' ';
    const message = await this.message();
    const error = await this.error();
    const suffix = error ? await this.suffix('again') : await this.suffix();
    
    this.clear(size);
    this.cursorHide();

    this.write(prefix + message + suffix);
    (error && this.write('\n' + error.split('\n').join('')));
  }
}

module.exports = EditorPrompt;
