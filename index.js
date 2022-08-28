const inquirer = require('inquirer');
const fs = require('fs')


const createManager = (data) => {
    inquirer
  .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the team manager\'s name?',
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is the team manager\'s id?',
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is the team manager\'s email?',
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is the team manager\'s office number?',
      },
      {
        type: 'checkbox',
        message: 'What languages do you know?',
        name: 'stack',
        choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
      },
      {
        type: 'list',
        message: 'What is your preferred method of communication?',
        name: 'contact',
        choices: ['email', 'phone', 'telekinesis'],
      },
  ])
.then((data) => {

    fs.writeFile('index.html', JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });

}

createManager();

  


