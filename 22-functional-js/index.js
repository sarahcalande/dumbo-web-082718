document.addEventListener("DOMContentLoaded", function(){
	let randomColor = Math.floor(Math.random()*256)
	let randomColor2 = Math.floor(Math.random()*256)
	let randomColor3 = Math.floor(Math.random()*256)
	const els = document.querySelectorAll('li')
	els.forEach(function(elem){
		elem.style.color = `rgb(${randomColor}, ${randomColor2}, ${randomColor3})`
		randomColor = Math.floor(Math.random()*256)
		randomColor2 = Math.floor(Math.random()*256)
		randomColor3 = Math.floor(Math.random()*256)
	})
})

// const array = [1,2,3,4,5]


// // pure function
// function doubler(arr){
// 	const copy = [...arr]
// 	for (let i = 0; i < arr.length; i++){
// 		copy[i] = copy[i] * 2
// 	}
// 	return copy
// }

// // writing declaratively with map
// // map, filter, etc are higher order functions
// // const doubler = arr => arr.map(elem => elem * 2)

// const matt = {
// 	name: "Matt",
// 	personality: "funny",
// 	occupation: "TCF",
// 	obj: {hello: "blood oaths", world: "vampires"}
// }

// // const copy = {...matt, age: 24, occupation: "developer"}

// // Object.assign
// const copy = {...matt, ...matt.obj}


// function functionRunner(arrOfFuncs){
// 	const results = []
// 	for (let i = 0; i < arrOfFuncs.length; i++){
// 		results.push(arrOfFuncs[i]())
// 	}
// 	return results
// }

// // writing declaratively with map
// const functionRunner = arrOfFuncs => arrOfFuncs.map(func => func())

// function hello(){
// 	return "hello"
// }

// function world(){
// 	return "world"
// }


// const apples = () => {
// 	let count = 0;
// 	return function(){
// 		count++
// 		return `I've sold ${count} apples`
// 	}
// }

// // const appleSeller = apples()


// const pears = () => {
// 	let count = 0;
// 	return function(){
// 		count++
// 		return `I've sold ${count} pears`
// 	}
// }

// // const pearSeller = pears()


// const fruitStand = (fruit) => {
// 	let count = 0;
// 	return function(){
// 		count++
// 		return `I've sold ${count} ${fruit}`
// 	}
// }

// const bananas = fruitStand("bananas")
// const coconuts = fruitStand("coconuts")
// const mangos = fruitStand("mangos")


// const pears = () => {
// 	count++
// 	return `I've sold ${count} pears`
// }






