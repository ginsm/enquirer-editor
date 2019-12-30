// Import the prompt
const EditorPrompt = require('../index.js');

// Create a new instance of the prompt
const prompt = new EditorPrompt({
  type: 'editor',
  message: 'Opens an editor to edit a string',
  initial: 'It allows for an initial value',
});

// Run the prompt
prompt.run()
    .then(console.log)
    .catch(console.error);
