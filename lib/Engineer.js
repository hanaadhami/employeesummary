class Engineer {
    constructor (name, id, title, role, github) {
    this.name = name
    this.id = id
    this.title = title
    this.role = role
    this.github = github
  }
    getName (){
        return this.name
    }
    getId (){
        return this.id
    }
    getTitle (){
        return this.title
    }
    getRole (){
        return this.role
    }
    getGithub (){
        return this.github
    }
  }

module.exports = Engineer