// Import the prompt
const EditorPrompt = require('../index.js');

// Create a new instance of the prompt
const prompt = new EditorPrompt({
  type: 'editor',
  message: 'Opens an editor to edit a string',
  initial: 'String to be edited',
});

// Run the prompt
prompt.run()
    .then(console.log)
    .catch(console.error);
