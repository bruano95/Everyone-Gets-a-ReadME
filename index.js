const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

function init() {




  inquirer
    .prompt([
      {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
      },
      {
        type: 'input',
        message: 'Please give a description of the project',
        name: 'description',
      },
      {
        type: 'input',
        message: 'Please provide installation instructions',
        name: 'installation'
      },
      {
        type: 'input',
        message: 'How do you use this project?',
        name: 'usage'
      },
      {
        type: 'list',
        message: 'What license is used for this project?',
        name: 'license',
        choices: [
          'Apache',
          'BSD',
          'Eclipse',
          'GNU'
        ]
      },
      {
        type: 'input',
        message: 'Who provided contribution to this project?',
        name: 'contribution',
      },
      {
        type: 'input',
        message: 'Test instructions:',
        name: 'test',
      },
      {
        type: 'input',
        message: 'Provide your GitHub username',
        name: 'github'
      },
      {
        type: 'input',
        message: 'Provide your email address',
        name: 'email'
      },
    ]).

    then((data) => {
      const filename = `${data.title}.md`;
      let generatedString = generateMarkdown(data)

      fs.writeFile(filename, generatedString, (err) =>
        err ? console.log(err) : console.log('Success!')
      );
    })
  }

  init()