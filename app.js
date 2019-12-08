const inquirer = require("inquirer");
const Employee = require("./lib/Employee")

function askEmployeeQuestions() {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: "What's your first name"
        },
        {
            type: 'input',
            name: 'id',
            message: "What's your id"
        },
        {
            type: 'input',
            name: 'title',
            message: "What's your title?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your email?"
        },
    ]

    ).then(answers => {
        var employee = new Employee(answers.name, 1, answers.title, answers.email)     
    })
}

function askEngineerQuestions() {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: "What's your first name"
        },
        {
            type: 'input',
            name: 'id',
            message: "What's your id"
        },
        {
            type: 'input',
            name: 'title',
            message: "What is your title?"
        },
        {
            type: 'input',
            name: 'role',
            message: "What is your role?"
        },
        {
            type: 'input',
            name: 'github',
            message: "What is your github?"
        },
    ]

    ).then(answers =>{
        var engineer = new Engineer(answers.name, 1, answer.title, answer.role, answer.github)
    })
}

function askInternQuestions() {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: "What's your name"
        },
        {
            type: 'input',
            name: 'id',
            message: "What's your id"
        },
        {
            type: 'input',
            name: 'title',
            message: "What is your title?"
        },
        {
            type: 'input',
            name: 'school',
            message: "What is your school?"
        },
    ]
    ).then(answers => {
        var intern = new Intern(answers.name, 1, answers.title, answers.school)
    })
}

function askManagerQuestions() {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: "What's your name"
        },
        {
            type: 'input',
            name: 'id',
            message: "What's your id"
        },
        {
            type: 'input',
            name: 'title',
            message: "What is your title?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your email?"
        },
        {
            type: 'input',
            name: 'role',
            message: "What's your role?"
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What's your office?"
        }
    ]
    ).then(answers => {
        var manager = new Manager(answers.name, 1, answers.title, answers.email, answers.role, answers.officeNumber)
    })
}