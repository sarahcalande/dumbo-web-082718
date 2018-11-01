## React State, Events, and Forms

**Don't fall for the trap, these are tools not patterns**

\*Tools from yesterday

- Smart Components vs. Presentational Components
  - Calling props using props.key instead of this.props.key
- More State
  - setState
  - Lifting state
- This
  - review
- Events
  - Event Handlers in React vs Vanilla JS
  - Synthetic Events
    - By React so there's consistency across browsers
    - setState
      - mutating state
- Forms
  - Controlled vs Uncontrolled (https://reactjs.org/docs/forms.html)

\*Tools we'll learn Today:

- Component LifeCycle Methods
  - componentDidMount()
  - componentDidUpdate()
  - componentWillUnmount()

\*Questions Asked in Class:

1. When should we write a component as a class (aka Smart Component) vs function (Presentational Component)?

- Class: state, lifecycle methods, additional functions like event handlers

2. Why shouldn't we mutate state directly?

- If we mutate state directly it can impede React's ability to recognize that there was a change in state

3. What operator can we use to make a copy of an array or object?

- [...]

4. On a scale of 1-10 how comfortable are we with React?
5. How do you feel about React: Red Zone/Overwhelmed, Comfortable/keep practicing, Excelling/bordering on boredom?
