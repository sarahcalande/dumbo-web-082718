document.addEventListener('DOMContentLoaded', init)

function init() {
  // fetch data
  // put data on DOM
  getToys()

  showToy({
      "id": 1,
      "name": "Woody",
      "image": "http://www.pngmart.com/files/3/Toy-Story-Woody-PNG-Photos.png",
      "likes": 5
    })
  // adding any initial event listeners
  const addBtn = document.querySelector('#new-toy-btn')
  const toyForm = document.querySelector('.container')
  let addToy = false

  addBtn.addEventListener('click', () => {
    // hide & seek with the form
    addToy = !addToy
    if (addToy) {
      toyForm.style.display = 'block'
      toyForm.addEventListener('submit', handleSubmit)
    } else {
      toyForm.style.display = 'none'
    }
  })
}

function getToys() {
  fetch('http://localhost:3000/toys')
    .then(r => r.json())
    .then(toys => toys.forEach(toy => showToy(toy)))
}

function showToy(toy) {
  // take a toy object, put it on the DOM
  // create an element
  // set any properties, event listeners, innerText
  // add it to the DOM
    // queryselect a parent or container element
    // append new element to it
  const div = document.createElement('div')
  div.className = 'card'
  div.innerHTML = `<h2>${toy.name}</h2>
    <img src=${toy.image} class="toy-avatar" />
    <p>${toy.likes} Likes </p>
    <button data-id=${toy.id} data-likes=${toy.likes} class="like-btn">Like <3</button>`

  div.addEventListener('click', handleClick)
  const container = document.querySelector('#toy-collection')
  container.append(div)
  // div.querySelector('button')
}

// if we createElement button, we can add a listener to it immediately
// query select appended button off page, and add listener
// add event listener to container, event delegation

// event delegation
// put listener on a larger element
// in the listener callback, check if the correct thing was clicked

// create elements for everything inside the toy div
// append elements to div
// append div to container


function handleSubmit(e) {
  // pull things off the dom
  // send the somewhere
  // do stuff with it?
  e.preventDefault()

  let data = {
    name: e.target.name.value,
    image: e.target.image.value,
    likes: 0
  }
  createToy(data)

  e.target.name.value = ''
  e.target.image.value = ''
}

function createToy(obj) {
  const options = {
    method: 'POST',
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  }
  fetch('http://localhost:3000/toys', options)
    .then(r => r.json())
    .then(toy => showToy(toy))
}

function handleClick(e) {
  // logic to check if the e.target is the button
  const el = e.target
  if (el.tagName === 'BUTTON') {
    const id = el.dataset.id
    const likes = parseInt(el.dataset.likes) + 1
    el.dataset.likes = likes
    el.parentElement.querySelector('p').innerText = `${likes} Likes`
    updateLikes(id, likes)
    // figure out how many likes i have
    // send a patch request for 1 more like than that
  }
}

function updateLikes(id, likes) {
  let url = `http://localhost:3000/toys/${id}`
  let options = {
    method: 'PATCH',
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({likes: likes})
  }
  fetch(url, options)
}


