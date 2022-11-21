const Manager = require('./lib/manager.js');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');

const inquirer = require('inquirer');
const fs = require('fs');

let team = [];

let managers = [];
let interns = [];
let engineers = [];


// function generateEngineer(data) {
//     console.log(getRole())
//     return getRole();
// }

//fs.unlinkSync('./dist/index.html')


function createTopHTML() {
    fs.writeFileSync('./dist/index.html', 
    `
    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <!-- //<link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"> -->
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            <link rel="stylesheet" href="../assets/styles.css">
        </head>

        <body>
            <div class="container">
                <div class="header">
                    <h1>MY TEAM</h1>
                </div>

            <div class="employee-list">
            
    `)
}

createTopHTML();

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
            interns.push(intern);
            console.log(interns)
            //console.log(team)
            createInternCard();
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
            engineers.push(engineer)
            console.log(engineers)
            createEngineerCard();
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
            managers.push(manager)
            console.log(managers)
            createManagerCard();
            //console.log(team)

            if (managerAnswers.anotherEmployee === 'Create Intern') {
                addIntern();
            }
            if (managerAnswers.anotherEmployee === 'Create Engineer') {
                addEngineer();
            }
            if (managerAnswers.anotherEmployee === 'No, generate my team') {
                generateBottomHTML();
                generateTeam();
            }

            //fs.appendFileSync('./dist/index.html', createManagerCard(manager))
        }
    )
};

function generateIntern(intern) {
    return `
    <div class="card">
                <div class="top-card">
                    <h3 class="name">Intern: ${intern.name}</h3>

                    <div class="sub-container">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mortarboard" viewBox="0 0 16 16">
                            <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5ZM8 8.46 1.758 5.965 8 3.052l6.242 2.913L8 8.46Z"/>
                            <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46l-3.892-1.556Z"/>
                        </svg>
                        <h3 class="role">${intern.role}</h3>
                    </div>   
                </div>

                <div class="main-card">
                    <p>ID: ${intern.id}</p>
                    <p>Email: ${intern.email}</p>
                    <p>School: ${intern.school}</p>
                </div>
            </div>

    `
}

function generateManager(manager) {
    return `
    <div class="card">
                <div class="top-card">
                    <h3 class="name">Manager: ${manager.name}</h3>

                    <div class="sub-container">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cup-hot" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M.5 6a.5.5 0 0 0-.488.608l1.652 7.434A2.5 2.5 0 0 0 4.104 16h5.792a2.5 2.5 0 0 0 2.44-1.958l.131-.59a3 3 0 0 0 1.3-5.854l.221-.99A.5.5 0 0 0 13.5 6H.5ZM13 12.5a2.01 2.01 0 0 1-.316-.025l.867-3.898A2.001 2.001 0 0 1 13 12.5ZM2.64 13.825 1.123 7h11.754l-1.517 6.825A1.5 1.5 0 0 1 9.896 15H4.104a1.5 1.5 0 0 1-1.464-1.175Z"/>
                            <path d="m4.4.8-.003.004-.014.019a4.167 4.167 0 0 0-.204.31 2.327 2.327 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.31 3.31 0 0 1-.202.388 5.444 5.444 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 3.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 3.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 3 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 4.4.8Zm3 0-.003.004-.014.019a4.167 4.167 0 0 0-.204.31 2.327 2.327 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.31 3.31 0 0 1-.202.388 5.444 5.444 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 6.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 6.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 6 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 7.4.8Zm3 0-.003.004-.014.019a4.077 4.077 0 0 0-.204.31 2.337 2.337 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.198 3.198 0 0 1-.202.388 5.385 5.385 0 0 1-.252.382l-.019.025-.005.008-.002.002A.5.5 0 0 1 9.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 9.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 9 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 10.4.8Z"/>
                        </svg>
                        <h3 class="role">${manager.role}</h3>
                    </div>   
                </div>

                <div class="main-card">
                    <p>ID: ${manager.id}</p>
                    <p>Email: ${manager.email}</p>
                    <p>School: ${manager.officeNum}</p>
                </div>
            </div>

    `
}

function generateEngineer(engineer) {
    return `
    <div class="card">
                <div class="top-card">
                    <h3 class="name">Engineer: ${engineer.name}</h3>

                    <div class="sub-container">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyeglasses" viewBox="0 0 16 16">
                            <path d="M4 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm2.625.547a3 3 0 0 0-5.584.953H.5a.5.5 0 0 0 0 1h.541A3 3 0 0 0 7 8a1 1 0 0 1 2 0 3 3 0 0 0 5.959.5h.541a.5.5 0 0 0 0-1h-.541a3 3 0 0 0-5.584-.953A1.993 1.993 0 0 0 8 6c-.532 0-1.016.208-1.375.547zM14 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>
                        </svg>
                        <h3 class="role">${engineer.role}</h3>
                    </div>   
                </div>

                <div class="main-card">
                    <p>ID: ${engineer.id}</p>
                    <p>Email: ${engineer.email}</p>
                    <p>School: ${engineer.github}</p>
                </div>
            </div>

    `
}

function createManagerCard() {
    managers.forEach(manager =>{
        fs.appendFileSync('./dist/index.html', generateManager(manager))
    })
}

function createEngineerCard() {
    engineers.forEach(engineer =>{
        fs.appendFileSync('./dist/index.html', generateEngineer(engineer))
    })
}

function createInternCard() {
    interns.forEach(intern =>{
        fs.appendFileSync('./dist/index.html', generateIntern(intern))
    })
}

function generateBottomHTML() {

    fs.appendFileSync('./dist/index.html',
    `
    </div>

    </div>

</body>
</html>
`

)
}

const generateTeam = () => {
    console.log(team)





    let newTeam = JSON.stringify(team);

    generateBottomHTML();

    // fs.appendFileSync('./dist/index.html', newTeam, err => {
    //     if(err) {
    //         return;
    //     }
    // })
}

createManager();

//createTeamCards(team);



