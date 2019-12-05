const inquirer = require("inquirer");

class Intern {
    constructor (name, id, title, school) {
    this.name = name
    this.id = id
    this.title = title
    this.school = school
    }
    getName () {}
    getId () {}
    getEmail () {}
    getRole () {}
    getSchool () {}
  
  }

class Intern {
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
                name: 'school',
                message: "What is your school?"
            },
        ]

        )
    }
}

module.exports = Intern