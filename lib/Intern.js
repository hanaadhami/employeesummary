class Intern {
    constructor (name, id, title, school) {
    this.name = name
    this.id = id
    this.title = title
    this.school = school
    }
    getName () {
      return this.name
    }
    getId () {
      return this.id
    }
    getTitle () {
      return this.title
    }
    getSchool () {
      return this.school
    }
  }

module.exports = Intern