// Making objects using the new keyword and prototypes
// `this` within a constructor function called with the keyword `new` in front will point to the newly created object

function Instructor(name, role, hobby) {
  // instance variables
  this.name = name
  this.role = role
  this.hobby = hobby

  // instance method
  this.onWeekends = onWeekends
}

function onWeekends() {
  return `On weekends, I like ${this.hobby}`
}

let matt = new Instructor('Matt', 'TCF', 'selling meat')

Instructor.prototype.intro = function() {
  return `Hey I'm ${this.name} and I teach at Flatiron`
}

matt.intro()

// prototypes
// connect objects to other objects
// if a property isn't found on an object, it will look to the prototype for it

let animal = {name: 'animal', alive: true, hungry: 'sometimes'}

// sets animal as mammal's prototype
let mammal = Object.create(animal)
mammal.name = 'mammal'
mammal.warmBlooded = true

// sets mammal as dog's prototype
let dog = Object.create(mammal)
dog.name = 'dog'
dog.hungry = 'always'

// ignores prototype bc dog has hungry property
dog.hungry // always

// looks to mammal prototype bc dog has no warmBlooded property
dog.warmBlooded // true

// looks to animal prototype bc dog and mammal have no alive properties
dog.alive // true







