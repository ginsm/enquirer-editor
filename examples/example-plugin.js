// Import enquirer and the editor prompt
const Enquirer = require('enquirer');
const EditorPrompt = require('..');

// Create a new instance of enquirer and register the prompt
const enquirer = new Enquirer();
enquirer.register('editor', EditorPrompt);

// Create your questions (name required)
const questions = [
  {
    type: 'editor',
    name: 'bio',
    message: 'Please write a short bio of at least 3 lines',
    initial: 'Start writing!',
    validate: function (response) {
      if (response.split('\n').length < 4) {
        return 'The bio must be at least 3 lines.';
      }
      return true;
    },
  },
];

// Run prompt with your questions
enquirer.prompt(questions)
    .then(console.log)
    .catch(console.error);