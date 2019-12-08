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
    getName () {
      return this.name
    }
    getId () {
      return this.id
    }
    getTitle (){
      return this.title
    }

    getEmail (){
      return this.email
    }
    getRole (){
      return this.role
    }
    getOfficeNumber (){
      return this.officeNumber
    }
  }

module.exports = Manager