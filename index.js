const Manager = require('./lib/manager.js');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');

const inquirer = require('inquirer');
const fs = require('fs');

//const createTeamCards = require('./generateHTML.js')



let team = [];



const addIntern = (data) => {
    
    inquirer.prompt ([
    {
        type: 'input',
        name: 'name',
        message: 'What is the intern\'s name?',
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the intern\'s id?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the intern\'s email?',
    },
    {
        type: 'input',
        name: 'school',
        message: 'What is the intern\'s school?',
    },
    ])

    .then((internAnswers) => {

        const intern = new Intern (
            internAnswers.name,
            internAnswers.id,
            internAnswers.email,
            internAnswers.school
        );
            team.push(intern)
            console.log(team)
            addAnotherEmployee();
        }
    )
}



const addEngineer = (data) => {

    inquirer.prompt ([
    {
        type: 'input',
        name: 'name',
        message: 'What is the engineer\'s name?',
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the engineer\'s id?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the engineer\'s email?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is the engineer\'s github?',
    },
    ])

    .then((engineerAnswers) => {

        const engineer = new Engineer (
            engineerAnswers.name,
            engineerAnswers.id,
            engineerAnswers.email,
            engineerAnswers.github
        );
            team.push(engineer)
            console.log(team)
            addAnotherEmployee();
        }
    ) 
};



const addAnotherEmployee = (data) => {

    inquirer.prompt ([
        {
            type: 'list',
            name: 'anotherEmployee',
            message: 'Would you like to add another Intern or Engineer? Or would you like to generate the team?',
            choices: ['Add Intern', 'Add Engineer', 'Generate Team']
        },
        ])

        .then((answers) => {
            if (answers.anotherEmployee === 'Add Intern') {
                addIntern();
            }
            if (answers.anotherEmployee === 'Add Engineer') {
                addEngineer();
            }
            if (answers.anotherEmployee === 'Generate Team') {
                generateTeam();
            }
        })
};



const createManager = (data) => {

    inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is the team manager\'s name?',
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the team manager\'s id?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the team manager\'s email?',
    },
    {
        type: 'input',
        name: 'officeNum',
        message: 'What is the team manager\'s office number?',
    },
    {
        type: 'list',
        message: 'Would you like to create another Employee?',
        name: 'anotherEmployee',
        choices: ['Create Intern', 'Create Engineer', 'No, generate my team'
        ],
    },
  ])


  
.then((managerAnswers) => {

        const manager = new Manager (
            managerAnswers.name,
            managerAnswers.id,
            managerAnswers.email,
            managerAnswers.officeNum
        );
            team.push(manager)
            console.log(team)

            if (managerAnswers.anotherEmployee === 'Create Intern') {
                addIntern();
            }
            if (managerAnswers.anotherEmployee === 'Create Engineer') {
                addEngineer();
            }
            if (managerAnswers.anotherEmployee === 'No, generate my team') {
                generateTeam();
            }

            //fs.appendFileSync('./dist/index.html', createManagerCard(manager))
        }
    )
};



const generateTeam = () => {
    console.log(team)

    let newTeam = JSON.stringify(team);

    fs.appendFileSync('./dist/index.html', newTeam, err => {
        if(err) {
            return;
        }
    })
}

createManager();

//createTeamCards(team);


