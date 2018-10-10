document.addEventListener('DOMContentLoaded', function(e) {

  // every callback to an event listener gets passed a reference to the event that triggered it
  console.log(e.target);


  // taking an array of band objects
  // running showBand for each band object
  // eighties.forEach((band) => showBand(band))
  eighties.forEach(showBand2)
  // const images = document.querySelectorAll('img')
  // console.log(images);
})

// updating the DOM using inner HTML
function showBand(band) {
  // found parent element
  const list = document.querySelector('#band-list')
  // adding html to the parent element
  list.innerHTML += `<li>
  <h3>${band.name}</h3>
  <img src="${band.picture}">
    <p>${band.bio}</p>
  </li>`
}

// updating the DOM using append
function showBand2(band) {
  // found parent element
  const list = document.querySelector('#band-list')

  // create elemnets to put on the page
  const li = document.createElement('li')

  const h = document.createElement('h3')
  // give properties to the new elements
  h.innerText = band.name

  const img = document.createElement('img')
  img.src = band.picture
  img.addEventListener('click', function(e) {
    alert(band.name)
  })

  const p = document.createElement('p')
  p.innerText = band.bio

  // assemble new elements
  li.append(h, img, p)

  // attach new elements to something that already exists on the DOM
  list.append(li)
}

