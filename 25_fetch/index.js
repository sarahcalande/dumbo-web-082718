//  always start your index.js file with this
document.addEventListener('DOMContentLoaded', () => {
  // first thing is fetch data from API
  // once we have data, programmatically put it on the dom
  fetch('http://localhost:3000/items')
    .then(resp => resp.json())
    .then(items => {
      // all the code in here waits for the data to return before running
      // go through array
      items.forEach((item) => {
        // each item needs elements created
        // properties assigned to elements
        // add any event listeners?
        const li = document.createElement('li')
        const h = document.createElement('h3')
        h.innerText = item.name
        const p = document.createElement('p')
        p.innerText = item.category
        const img = document.createElement('img')
        img.src = item.image

        // connect elements to each other
        li.append(h, p, img)

        // attach it all to a parent on the DOM
        const list = document.querySelector('#item-list')
        list.append(li)

      })
    })
    // i can write code out here that runs independently of the fetch
})


//  here is how we can mix and match innerHTML and createElement
items.forEach((item) => {
  // create a parent element
  const li = document.createElement('li')
  // add child elements using innerHTML
  li.innerHTML = `
    <h3>${item.name}</h3>
    <p>${item.category}</p>
    <img src=${item.image} />

  `
  // append the new li to a parent on the DOM
  const list = document.querySelector('#item-list')
  list.append(li)
})


