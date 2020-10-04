const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

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
        message: 'Installation Details',
        default: 'npm install'
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
        choices: ["MIT", "Apache", "ISC", "GNU", "None"]
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Who contributed to the project?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'What tests should be run?',
        default: 'npm test'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github name?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
];

// function to initialize program
function init() {
    inquirer
    .prompt(questions)
    .then((response) =>  {
        fs.writeFile('./README.md', generateMarkdown(response), (err) => {
            if (err) {
                return err;
            }
        })
    });
}

// function call to initialize program
init();
