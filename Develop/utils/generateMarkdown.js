// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  return `# ${data.title}
  <br />
## Description <br />
${data.description}
<br />
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contribution](#how-to-contribute)
- [Tests](#tests)
- [Questions](#questions)
<br />
## Installation <br />
${data.installation}
<br />
## Usage <br />
${data.usage}
<br />
## Credits <br />
${data.credits}
<br />
## License <br />
${data.license}
<br />
## How to Contribute <br />
${data.contribution}
<br />
## Tests <br />
${data.tests}
<br />
## Questions<br />
### Github: ${data.github}<br />
### Email: ${data.email}<br />
`;
}



module.exports = generateMarkdown;
