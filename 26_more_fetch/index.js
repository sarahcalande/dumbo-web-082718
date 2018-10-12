document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector("#new-item-form")

  getAllItems()


  form.addEventListener("submit", handleSubmit)


})

function getAllItems(){
  fetch('http://localhost:3000/items')
    .then(resp => resp.json())
    .then(items => items.forEach(addSingleItem))
}

function handleSubmit(event){
  event.preventDefault()
  const name = event.target.name.value
  const category = event.target.category.value
  const image = event.target.image.value

  createItem(name, category, image)
    .then(res => res.json())
    .then(addSingleItem)



}

function createItem(name, category, image){
  const options = {
    method: "POST",
    body: JSON.stringify({
      name: name,
      category: category,
      image: image
    }),
    headers: {
      "Content-Type": "application/json"
    }
  }


  return fetch('http://localhost:3000/items', options)
}

// function addItemsToPage(items){
//   console.log(items);
//   items.forEach(addSingleItem)
//
// }

function addSingleItem(item){
  const list = document.querySelector('#item-list')

  const li = document.createElement('li')
  const h = document.createElement('h3')
  h.innerText = item.name
  const p = document.createElement('p')
  p.innerText = item.category
  const img = document.createElement('img')
  img.src = item.image


  li.append(h, p, img)


  list.append(li)
}
