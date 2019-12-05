const inquirer = require("inquirer");

class Engineer {
    constructor (name, id, title, role, github) {
    this.name = name
    this.id = id
    this.title = title
    this.role = role
    this.github = github
  }
    getName (){}
    getId (){}
    getTitle (){}
    getRole (){}
    getGithub (){}
  }

class Engineer {
    askEngineerQuestions() {
        inquirer
        .prompt([
            {
                type: 'input',
                name: 'first_name',
                message: "What's your first name"
            },
            {
                type: 'input',
                name: 'last_name',
                message: "What's your last name"
            },
            {
                type: 'input',
                name: 'email',
                message: "What is your email?"
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

        )
    }
}

module.exports = Engineer