// Import the prompt
const EditorPrompt = require('..');

// Create a new instance of the prompt (name not required)
const prompt = new EditorPrompt({
  type: 'editor',
  message: 'Please write a short bio of at least 3 lines',
  initial: 'Start writing!',
  validate: function (response) {
    if (response.split('\n').length < 4) {
      return 'The bio must be at least 3 lines.';
    }
    return true;
  },
});

// Run the prompt
prompt.run()
    .then(console.log)
    .catch(console.error);