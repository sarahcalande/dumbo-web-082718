
function whoDis() {
	let joke = "Knock, knock! Who's there?"
	return this
}

// Rule 1: Default binding rule. "this" is global
whoDis()

// arrow functions carry whatever "this" was when they were defined
// "this" in arrows are turtles, who carry their shells with them
const arrowDis = () => {
	let joke = "Knock, knock! Who's there?"
	return this
}

let obj = {
	name: "JavaSCript Boiiii",
	// whoDis- Rule 2: implicit binding rule- will refer to object when we call obj.whoDis()
	whoDis: whoDis,
	// arrowDis will be global
	arrowDis: arrowDis
}

let obj = {
	name: "JavaSCript Boiiii",
	whoDis: whoDis,
	// here arrowDis will be the object because we created an outer function using the function keyword and the inner arrow function yields to the "this" where it was defined
	arrowDis: function(){
		console.log(this)
		return function(){
			let joke = "Knock, knock! Who's there?"
			return this
		}
	}
}
obj.arrowDis()()

obj.whoDis()
obj.arrowDis()
// obj.arrowDis()
// obj.whoDis = whoDis()
// obj.whoDis()

let niky = {
	name: "Niky",
	role: "Lead Instructor",
	hobby: "swimming with sharks",
	getHobby: function() {
		return `Hello, I'm  ${this.name} and my hobby is ${this.hobby}`
	}
}

niky.getHobby()

let matt = {
	name: "Matt",
	role: "TCF",
	hobby: "selling meat"
}

// notice we are able to pass around functions from obejct to object
// "this" is like a migratory bird
matt.getHobby = niky.getHobby
matt.getHobby()

// Rule 3: explicit binding rule: call, apply, bind
matt.getHobby = niky.getHobby.bind(niky)

function onTheWeekend(friend1, friend2) {
	return `Hi, I'm ${this.name}, and on the weekend, I enjoy ${this.hobby} with ${friend1} and not ${friend2}`
}

onTheWeekend.call(niky, "Prince", "Matt")
onTheWeekend.apply(niky, ["Prince", "Matt"])

const mattTime = onTheWeekend.bind(matt)
mattTime("Jane", "Niky")
niky.funTime = mattTime
niky.funTime("Jane", "Matt")

// const whoDis = obj.whoDis
// whoDis()
// obj.whoDis()



// Rule 4: new binding rule: used with constructor functions, which are invoked with the "new" keyword
function Instructor(name, role, hobby) {
	this.name = name
	this.role = role
	this.hobby = hobby
}

// "class" is syntactic sugar for constructor function
// class Instructor{
// 	constructor(name, role, hobby){

// 	this.name = name
// 	this.role = role
// 	this.hobby = hobby
// 	}
// }

let jane = new Instructor("Jane", "TCF", "salsa dancing")
let graham = new Instructor("Graham", "Lead Instructor", "pokemon")
