


document.addEventListener("DOMContentLoaded", onLoad)
// const, var, let
var onLoad = () => {
  console.log("Hello World")
}

const apples = "apples"

function seeMyApples(){
  const apple = "bananas"
  return function(){
    const apples = "oranges"
    console.log(apples)
  }
}


// for (let i = 0; i < 5; i++){
// }

// console.log(i)

console.log("result of mapping:", [1,2,3,4,5,6].map(x => x + 2))

console.log("result of filter", [1,2,3,4,5,6].filter(x => x > 2))





