const inquirer = require("inquirer");

class Employee {
    constructor (name, id, title, email) {
    this.name = name
    this.id = id
    this.title = title
    this.email = email
    }
    getName (){}
    getId (){}
    getEmail (){}
    getRole(){}
  }

class Employee {
    askEmployeeQuestions() {
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
        ]

        )
    }
}

module.exports = Employee