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
    fs.appendFileSync('README.md', ('#' + response.title) + '\n', function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Success")
        }
    })
})

// function to initialize program
function init() {

}

// function call to initialize program
init();
