// Import enquirer and the editor prompt
const Enquirer = require('enquirer');
const EditorPrompt = require('./index.js');

// Create a new instance of enquirer and register the prompt
const enquirer = new Enquirer();
enquirer.register('editor', EditorPrompt);

// Create your questions
const questions = [
  {
    type: 'editor',
    name: 'editor',
    message: 'Opens an editor to edit a string',
    initial: 'String to be edited',
  },
  {
    type: 'confirm',
    name: 'proceed',
    message: 'Are you sure?',
  }
];

// Run prompt with your questions
enquirer.prompt(questions)
    .then(console.log)
    .catch(console.error);
