// go between for view and model
// takes data and puts it on the DOM
// reads information off the DOM and does things with it

class ChoreController {
  static init() {
    const form = document.querySelector('#new-chore-form')
    form.addEventListener('submit', ChoreController.createChore)

    Adapter.getChores()
      .then(chores => chores.forEach(ChoreController.displayChore))
  }

  static displayChore(json) {
    // selecting parent on dom
    // appending html to parent
    const chore = new Chore(json)
    const list = document.querySelector('#chore-list')
    const el = chore.el()
    list.append(chore.el())
  }

  static deleteChore(e) {
    // conditional to check if delete button
    if (e.target.tagName === 'BUTTON') {
      // remove div
      e.target.parentElement.remove()
      // delete request
      const id = e.target.dataset.id
      Adapter.deleteChore(id)
        .then(console.log)
    }
  }

  static createChore(e) {
    e.preventDefault()

    const data = {
      title: e.target.title.value,
      priority: e.target.priority.value,
      duration: e.target.duration.value
    }
    // posting info
    // take the response and displayChore
    Adapter.createChore(data)
      .then(ChoreController.displayChore)

    e.target.title.value = ''
    e.target.priority.value = ''
    e.target.duration.value = ''
  }

  static editChore(event, id) {
    const priority = event.target.value
    Adapter.editChore({priority}, id)
    // make a patch request to update the chore
    // do we need to update the dom after?
  }
}

// take a lot of chores
// put each chore on the page

