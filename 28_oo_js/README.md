## Goals
- Understand why OO is used
- Create a class using both ES5 and ES6 syntaxes
  - instance variables
  - instance methods
  - private class methods
- Understand `this` and `new`
- Review closures and IIFEs

### Why do we use OO
- build relationships, connect things
- structure
- avoid redundancy, DRY, modular

## Patterns

#### Making Objects By Hand
- repetitive
- prone to syntax errors (missed commas, etc)
- a lot of typing

#### Factory Pattern
- create a function which returns objects in the structure we want
- takes arguments in, and assign them as properties to the object


#### ES5
- new keyword gives constructor access to this (being the new object it will returns)
- prototypes: save memory by giving multiple objects access to the same functions
- a prototype of an object is another object it can 'borrow' properties from
- if an object does not have a certain property, JS will look through the prototype chain to see if something else has that property


#### ES6
- class keyword
- easy way to make class and instance methods


#### Closures
- functions get access to variables defined where they are defined
- immediately invoked function expression means function is invoked only once
- we use this to create private class variables that only our class can edit


