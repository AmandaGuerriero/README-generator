const inquirer = require('inquirer');
const fs = require('fs');

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'project',
        message: 'What is the title of your project?',
        validate: titleInput => {
            if (titleInput) {
              return true;
            } else {
              console.log('Please enter your project title!');
              return false;
            }
          }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Description of your project'
    },
    {
        type: 'input',
        name: 'install',
        message: 'Installation Details'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Usage Details'
    },
    {
        type: 'input',
        name: 'credit',
        message: 'Credits'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license would you like to use?',
        choices: ["MIT", "Apache", "ISC", "GNU"]
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Who contributed to the project?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'What tests should be run?'
    },
];

// function to prompt Questions
inquirer
    .prompt(questions)
    .then((response) => {

    // function to write README file
    // Create the Project Title
    fs.writeFile('README.md', ('# Project Title\ ' + response.project) + '\n', function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Success")
        }
    })
    // Create the Project Description
    fs.appendFileSync('README.md', ('# Description\ ' + response.description) + '\n', function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Success")
        }
    })
    // Create the Installation Instructions
    fs.appendFileSync('README.md', ('# Installation\ ' + response.install) + '\n', function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Success")
        }
    })
    // Create the Usage Instructions
    fs.appendFileSync('README.md', ('# Usage\ ' + response.usage) + '\n', function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Success")
        }
    })
    // Create the Credits
    fs.appendFileSync('README.md', ('# Credits\ ' + response.credit) + '\n', function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Success")
        }
    })
    // Create the License
    fs.appendFileSync('README.md', ('# License\ ' + response.license) + '\n', function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Success")
        }
    })
    // Create the Contributions
    fs.appendFileSync('README.md', ('# Contributions\ ' + response.contribution) + '\n', function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Success")
        }
    })
    // Create the Tests
    fs.appendFileSync('README.md', ('# Tests\ ' + response.test) + '\n', function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Success")
        }
    })
});

// function to initialize program
function init() {

}

// function call to initialize program
init();
