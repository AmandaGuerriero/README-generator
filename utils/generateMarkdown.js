// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.project}

[![Github license](https://img.shields.io/badge/license-${data.license}-blue.svg)](https://google.com)

## Description
${data.description}

## Table of Contents
* [Installation Details](#install)
* [Usage Details](#usage)
* [Credits](#credits)
* [Contributions](#contributions)
* [Tests](#tests)
* [License](#license)

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

## Tests
${data.license}

## Questions

`;
}

module.exports = generateMarkdown;
