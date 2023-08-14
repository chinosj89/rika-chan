// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
  //Title, sections: Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
  {
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'in 2 sentences: What is your project about/for?',
    name: 'description',
  },
  {
    type: 'input',
    message: 'How should your project be installed by other developers?',
    name: 'installation',
  },
  {
    type: 'editor',
    message: 'Provide usage instructions; a .txt file will pop up. Please write all your steps and add `<br>` after each steps if necessary',
    name: 'usage',
  },
  {
    type: 'input',
    message: 'Any Credits?',
    name: 'credits',
  },
  {
    type: 'list',
    message: 'What License did you use?',
    name: 'license',
    choices: [
      'MIT',
      'Apache',
      'GPL',
    ],
  },
  {
    type: 'input',
    message: 'How can other developers contribute?',
    name: 'contribution',
  },
  {
    type: 'input',
    message: 'Testing?',
    name: 'tests',
  },
  {
    type: 'input',
    message: 'If there are questions, what is your email?',
    name: 'email',
  },
  {
    type: 'input',
    message: 'If there are questions, what is your github username?',
    name: 'github',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error('Error!', err) : console.log('See your ReadMe!'))
}

// TODO: Create a function to initialize app
function init() {
  const readMeEl = [];
  return inquirer.prompt(questions)
    .then((data) => {
      if (data) {
        // User option if not input is placed; if data is true; then add to the readMeEl which will go to the generateMarkdown.js
        readMeEl.push(generateMarkdown(data));
        writeToFile('readMe.md', readMeEl.join('\n'));
      }
    });
}
// Function call to initialize app
init();

