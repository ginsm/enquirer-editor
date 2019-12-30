const enquirer = require('./index.js');

const questions = [
  {
    type: 'editor-input',
    name: 'editor',
    message: 'Opens an editor to edit a string',
    initial: 'String to be edited',
  },
];

enquirer.prompt(questions)
    .then(console.log)
    .catch(console.error);
