# This in JavaScript

## Objectives

- Answer Dan Abramov's [question](https://twitter.com/dan_abramov/status/790858537513656320)
- Understand when the value of `this` gets set? 
- Understand the 4 vital rules for determining `this`
- Understand how arrow functions come into play with the `this` keyword


#What is this? What's weird about it?
-kind of like self in Ruby 
- references an object 
- can reference window object 
- can reference a specific object 
- nested this gets weird
- Biggest thing: THIS changes context 
- "this" is set when a function is executed- only thing that matters is how I use the function 
- "execution context"- the execution context of a function includes its scope, its "this", and takes into account how the function is executed. Execution context determines a function's "this" 
---

### The 4 JS environment rules that govern `this` within functions defined using the `function` keyword

1. Default Binding Rule: `this` within a function that is invoked freely (not on a particular object) will be always be the window object (browser) or the global object (Node). If we are in [strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode) `this` will be `undefined`.

2. Implicit Binding Rule: `this` within a `function` called on a particular object (i.e. `Object.method()`) will be the object.

3.  Explicit Binding Rule: `this` within a function called with `apply/call/bind` will be the object passed as the first parameter.

4.  `New` Binding Rule: this` within a constructor function called with the keyword `new` in front will point to the newly created object:
  - Note that **we cannot use the `new` keyword for arrow functions**.
  - [MDN Article on the `new` operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new)

---

### The `this` of arrow functions

1.  TLDR: `this` will be **whatever it is in the enclosing scope of where the arrow function was defined**.

2. Don't use arrow functions inside of object literals.

3.  Full version: "An arrow function does not have its own `this`; the `this` value of the enclosing _lexical context_ is used i.e. Arrow functions follow the normal variable lookup rules. So while searching for `this` which is not present in current scope they end up finding `this` from its enclosing scope" - [MDN Article on Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
  - Lexical Scoping defines how variable names are resolved in nested functions: inner functions contain the scope of parent functions even if the parent function has returned.

- Please note that we cannot, and should not, use `bind`, `call`, and `apply` on an arrow function. The purpose of these functions is to **fix** the value of `this` to a particular object. Arrow functions will already have `this` fixed to their enclosing lexical scope.

- This makes arrow functions unsuitable for methods defined on an object.

---

## External Resources

- [Strict Mode in JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)
- [MDN `this` article](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
- [MDN `new` Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new)
- [MPJ JS This Keyword](https://www.youtube.com/watch?v=GhbhD1HR5vk)
- [MDN Arrow Function Article](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [MDN On Why Arrow Functions Help Us leverage `this`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#No_separate_this)
