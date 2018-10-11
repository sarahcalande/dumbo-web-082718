# Goals
- understand the role request/response plays in our application
- recognize json data
- learn fetch syntax
- write async code
- understand promises and how to handle them
- render DOM elements based on fetched data

### State of the World
- js syntax
- callbacks, scope
- js on the dom
- so far we only have a front-end
- we need persistence

### Request Response
- client front-end js application
  - presentational
  - request information and put on the page
  - respond to user interactions, clicks, forms, etc
- server rails backend
  - data
  - store data in a database
  - returns data to front-end
  - responsible for sorting data or any logic around data
- GET, PATCH, POST, DELETE
- RESTful routes

### JSON
- JavaScript Object Notation
- https://developer.mozilla.org/en-US/docs/Glossary/JSON
- https://json.org/
- JSONview Chrome extension

### AJAX
- Asynchronous JavaScript and XML
- https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX

### Sync vs Async
- synchronous code runs in order
  - waits for one item to finish before the next starts
  - blocks any further code from running
- blocking
start = new Date().getTime();
now = start;
while(now < start + 10000) {
  now = new Date().getTime();
}

- asynchronous code is non-blocking
setTimeout(function(){console.log('done')}, 10000)


### Fetch
- https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
- returns promise
- the pattern for a GET request fetch
fetch(url)
.then(response => response.json())
.then(doesSomethingWithData)


### Promises
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
- promise to return a value in the future
- resolved or pending
- we chain a .then onto a promise to receive the data the promise returns
  - .then takes a callback as an argument
  - .then passes the return value of the previous promise to that callback as an argument
- every .then returns another promise


### JSON-Server
To discuss tomorrow


### Build a Thing!
