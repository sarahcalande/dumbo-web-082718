// get information from an external source and package it the way we want
// separates the rest of our code so that it doesn't care how an API functions

class Adapter {

  static getChores() {
    // returing the JSON data within a promise
    return fetch('http://localhost:3000/chores')
      .then(r=>r.json())
  }

  static deleteChore(id) {
    return fetch(`http://localhost:3000/chores/${id}`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(r=>r.json())
  }

  static createChore(data) {
    return fetch(`http://localhost:3000/chores`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(r=>r.json())
  }

  static editChore(data, id) {
    return fetch(`http://localhost:3000/chores/${id}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(r => r.json())
  }

}