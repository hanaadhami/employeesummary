const inquirer = require("inquirer");

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
