// Factories are functions that return objects

function instructorFactory(name, role, hobby) {
  const obj = {}
  obj.name = name
  obj.role = role
  obj.hobby = hobby
  obj.onWeekends = onWeekends
  return obj
}

function onWeekends() {
  return `On weekends, I like ${this.hobby}`
}

function fancyFactory(name, role, hobby) {
  return {name: name, role: role, hobby: hobby, onWeekends: onWeekends}
}

function fancierFactory(name, role, hobby) {
  return {name, role, hobby, onWeekends}
}

let graham = fancyFactory('Graham', 'Lead Instructor', 'singing spice girls')

// destructuring
// taking apart objects (or arrays) and saving the individual keys (or elements) to different variable names

// makes variables for banana, orange and soup
let {name: banana, role: orange, hobby: soup} = {name: "Graham", role: "Lead Instructor", hobby: "singing spice girls"}

// makes variables for name, role and hobby
let {name: name, role: role, hobby: hobby} = {name: "Graham", role: "Lead Instructor", hobby: "singing spice girls"}

// also makes variables for name, role and hobby
let {name, role, hobby} = {name: "Graham", role: "Lead Instructor", hobby: "singing spice girls"}





