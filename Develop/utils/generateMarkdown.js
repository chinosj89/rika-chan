// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badges = {
    MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    Apache: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    GPL: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
  };
  return badges[license]
 }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { 
  const licenseLinks = {
    MIT: '[MIT License](https://opensource.org/licenses/MIT)',
    Apache: '[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)',
    GPL: '[GNU GPLv3](https://www.gnu.org/licenses/gpl-3.0)',
  };
  return licenseLinks[license]
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { 
  if (license) {
    return `This project uses the ${renderLicenseLink(license)} license`
  } else {
    return ''
  }
}
// creating the licenses learned here: https://www.youtube.com/watch?v=QFV7jzu8mKw
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  return `
  # ${data.title}

  ${renderLicenseBadge(data.license)}


  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Contribution](#how-to-contribute)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage 
  \`\`\`
  ${data.usage}
  \`\`\`
  
  ## Credits
  ${data.credits}
  
  ## License
  ${renderLicenseSection(data.license)}
  
  ## How to Contribute
  ${data.contribution}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  ### Github: https://github.com/${data.github}
  ### Email: ${data.email}
  
`;
}



module.exports = generateMarkdown;
