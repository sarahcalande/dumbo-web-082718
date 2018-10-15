class DogController {

  renderDog(dog) {
    const newDog = new Dog(dog)
    const tbody = document.querySelector('#table-body')
    tbody.innerHTML += newDog.el()
  }

  renderFormDog(dog) {
    const newDog = new Dog(dog)
    const properties = ['name', 'gender', 'breed', 'id']
    const form = document.querySelector('#dog-form')
    properties.forEach(prop => {
      console.log(form[prop]);
      form[prop].value = newDog[prop]
    })
  }

  readFormInputs() {
    const name = document.querySelector('#name').value
    const gender = document.querySelector('#gender').value
    const breed = document.querySelector('#breed').value
    const id = document.querySelector('#id').value
    return {name, gender, breed, id}
  }

  renderupdatedDog(dog) {
    const newDog = new Dog(dog)
    const tr = document.querySelector(`#row-${newDog.id}`)
    const el = newDog.el()
    tr.innerHTML = el
  }
}


