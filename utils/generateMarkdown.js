// Error Handling for Badge
function errorBadge(license) {
  if (license !== 'None') {
    return `[![Github license](https://img.shields.io/badge/license-${license}-blue.svg)](https://google.com)`
  }
  return ' ';
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.project}

${errorBadge(data.license)}

## Description
${data.description}

## Table of Contents
* [Installation Details](#install)
* [Usage Details](#usage)
* [Credits](#credits)
* [Contributions](#contributions)
* [License](#license)
* [Tests](#tests)
* [Questions](#questions)

## Install
${data.install}

## Usage
${data.usage}

## Credits
${data.credit}

## Contributions
${data.contribution}

## Tests
${data.test}

## License
${data.license}

# Questions?

## Github Profile
[https://github.com/${data.github}](https://github.com/${data.github})

## Email
[${data.email}](mailto:${data.email})
`;
}

// Need to add license information

module.exports = generateMarkdown;
