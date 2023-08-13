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
    message: 'Provide usage instructions; a .txt file will pop up. Please write all your steps',
    name: 'LinkedIn',
  },
  {
    type: 'input',
    message: 'what is your github? Enter your URL',
    name: 'Github',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const fileName = `readMe.md`;
  const readMeEl = generateMarkdown(data);
  fs.writeFile(fileName, readMeEl, (err) =>
    err ? console.error('Error!', err) : console.log('See your ReadMe!'))
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
    .then((data) => {
      writeToFile('readMe.md', data);
    }
    )
}
// Function call to initialize app
init();

