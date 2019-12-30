const Enquirer = require('enquirer');
const { edit } = require('external-editor');
const { Prompt } = Enquirer;

class EditorInput extends Prompt {
  constructor(options = {}) {
    super(options);
    this.state.answered = false;
    this.cursorHide();
  }

  submit() {
    this.value = edit(this.state.initial);
    this.state.answered = true;
    return super.submit();
  }

  render() {
    this.clear();
    const suffix = this.state.answered ?
        ' — Received' : ' — Press <enter> to launch editor';
    this.write(
      this.styles.success('? ') + 
      this.state.message + 
      this.styles.dim(suffix),
    );
  }
}

const enquirer = new Enquirer();

enquirer.register('editor-input', EditorInput);

module.exports = enquirer;
