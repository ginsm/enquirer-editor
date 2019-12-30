// Import the prompt
const EditorPrompt = require('../index.js');

// Create a new instance of the prompt
const prompt = new EditorPrompt({
  type: 'editor',
  message: 'Please write a short bio of at least 3 lines',
  initial: 'Start writing!',
  validate: function (response) {
    if (response.split('\n').length < 4) {
      return 'Must be at least 3 lines.';
    }
    return true;
  }
});

// Run the prompt
prompt.run()
    .then(console.log)
    .catch(console.error);
