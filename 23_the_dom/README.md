# Goals
- Define the DOM and DOM nodes
- Query the DOM using selectors
- Manipulate the DOM by adding, removing, and editing the properties of DOM elements
- Use the Chrome Developer tools to debug

## The Browser (DOM, BOM)
- What is it?
  - interface for us to change HTML
  - a representation of what is on a webpage
  - Application Programming Interface
  - collection of functions we can use to interact with a webpage
- How does JavaScript work in the browser?
  - Browser code
  - Browser turns strings into objects
  - JavaScript engine
  - Browser APIs: the defined way to interact with something
  - Your code!
- DOM (Document Object Model)
  - A tree structure starting at the document
  - Every element is a node related to other nodes in the tree
  - https://www.pottermore.com/features/black-family-tree
- Element interfaces
  - Elements have properties that can be manipulated
  - Different elements (`table`, `p`, `image`) support different methods
- BOM (Browser Object Model)
  - The things that we can access about the browser in our code
  - Examples
    - `console` object
    - `navigator` object
    - `location` object
    - `history` object
    - `localStorage` object
    - timers
  - Everything that is not part of the document
- DOM and BOM APIs
  - The code that is available to us to manipulate the DOM and the BOM

## Selecting elements off the DOM
- most methods return null for no matches

  #### Query Selectors
  - functions we are calling on the document or another Node
  - use querySelectorAll when you know you need multiple results
  - pass argument as string
    - for id, prepend # to the string
    - for class, prepend . to the string
    - for tag, just list the tag name
  - querySelectorAll
    - selects and returns all matches
    - returns NodeList (array-like object)
    - lets you iterate over elements using forEach
  - querySelector
    - selects and returns the first match
    - returns the html element
    - use it with unique identifiers, like ids

  #### Get Elements
  - function we are calling on the document or another Node
  - getElementbyId
  - getElementsByClassName
  - getElementsByTagName
  - some functions return array-like elements and others return Nodes
  - array-like elements don't let you iterate over elements using forEach


## How to add/change things to the DOM

  #### Using Node properties
  - InnerHTML
    - a property on the elements that returns a stringified version of the element
    -  = wipes out original and resets
    - += keeps original data and adds to it
  - innerText
    - can add text inside but can't add HTML

  #### Creating and Appending Nodes
  - step 1: create
    - document.createElement('img')
  - step 2: add properties
    - img.src
  - step 3:
    - find parent using selectors
    - add to DOM by attaching child to parent
      - parent.append(child)
  - append
    - newer syntax, accepts HTML objects OR text
  - appendChild
    - older syntax, accepts only HTML objects (Nodes)