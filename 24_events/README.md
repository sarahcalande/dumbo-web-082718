# Review
- select elements using querySelector functions or getElement functions
- add new elements to the DOM by using innerHTML or append

# Goals
- Define an event
- https://developer.mozilla.org/en-US/docs/Web/API/Event
- Create event listeners
- Distinguish between event types
- Explain when and why to use event listeners
- Write event listeners as stand-alone functions and in-line functions
- Use event listeners to manipulate the DOM

## innerHTML
- grabbing a parent element
- adding to the innerHTML property

## createElement
- grab a parent element on the DOM
- create a new element
- add properties to new element
- append new element to parent

## Events
- interactions with the page
  - cause by user or other code

## Events Listeners
- add event listeners that will run code when a certain thing happens
- can call the addEventListener function on DOM elements
- addEventListener takes 2 arguments
  - type of event as a string
  - callback function to run
    - callback function receives an argument of the event object

## Callbacks
- reference an outside function by name
- inline callbacks are anonymous
  - keyword function or arrow function defined pieces of code

QuerySelector
document.querySelector('ul')
document.querySelector('#band-list')
document.querySelectorAll('.cool')


