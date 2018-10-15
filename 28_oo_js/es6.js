// Making objects using the class syntax

let Instructor = (function() {
  // private class variable
  let all = []

  return class {
    constructor(name, role, hobby) {
      // instance variables
      this.name = name
      this.role = role
      this.hobby = hobby
      all.push(this)
    }

    // instance methods
    onWeekends() {
      return `Hi I'm ${this.name} and on weekends I ${this.hobby}`
    }

    // class methods
    static giveIntros() {
      return `All the instructors love JavaScript`
    }

    static getAll() {
      // return all.slice()
      return [...all]
    }
  }
})()


let jane = new Instructor('Jane', 'TCF', 'code JavaScript')


