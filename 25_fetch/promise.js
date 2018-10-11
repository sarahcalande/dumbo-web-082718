// line code 1
// line of code 2{
//  body
// }
// line of code 3

// fetch('https://pokeapi.co/api/v2/pokemon/')
//   .then(function(response) {
//     return response.json()
//   })
//   .then(function(jsonData) {
//     console.log(jsonData.results)
//   })
//
// fetch('https://pokeapi.co/api/v2/pokemon/')
//   .then((response) => {return response.json()})
//   .then((jsonData) => {console.log(jsonData.results)})

// works but not a great pattern
// let poke
// fetch('https://pokeapi.co/api/v2/pokemon/')
//   .then(response => response.json())
//   .then(jsonData => poke = jsonData.results)
//
//   button.addEventListener('click', console.log)