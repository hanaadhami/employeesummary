const inquirer = require("inquirer");

class Manager {
    constructor (name, id, title, officeNumber) {
    this.name = name
    this.id = id
    this.title = title
    this.email = email
    this.role = role
    this.officeNumber = officeNumber
  }
    getName () {}
    getId () {}
    getEmail (){}
    getRole (){}
  
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
                name: 'phone',
                message: "What is your office number?",
                validate: function(value) {
                    var pass = value.match(
                      /^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i
                    );
                    if (pass) {
                      return true;
                    }
              
                    return 'Please enter a valid phone number';
                  }
            },
        ]

        )
    }
}
module.exports = Manager