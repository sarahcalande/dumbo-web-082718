class Chore {
  // constructor(obj) {
  //   this.id = obj.id
  //   this.title = obj.title
  //   this.priority = obj.priority
  //   this.duration = obj.duration
  // }

  constructor({id, title, priority, duration}) {
    this.id = id
    this.title = title
    this.priority = priority
    this.duration = duration
  }

  el(){
    // creating chore html
    // assigning properties
    // return an html object or template with all this chore info inside it
    const div = document.createElement('div')
    div.className = 'chore-card'
    div.innerHTML = `
      <button class='delete-button' data-id=${this.id}>X</button>
      <h3>${this.title}</h3>
      <p>Duration: ${this.duration}</p>
    `
    const input = document.createElement('input')
    input.value = this.priority
    div.append(input)
    div.addEventListener('click', ChoreController.deleteChore)
    input.addEventListener('blur', (e) => ChoreController.editChore(e, this.id))

    return div
  }
}