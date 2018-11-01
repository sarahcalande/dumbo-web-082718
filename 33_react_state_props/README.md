## React State, Events, and Forms

**Don't fall for the trap, these are tools not patterns**

\*Tools from yesterday

- Component hierarchy
- State vs. Props
- When to use a constructor
- How to render a different block of code based on some condition
- JS expressions vs. JS statements
- When to use {}

\*Tools we will learn/expand upon today

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

\*Questions Asked in Class:

1. How many React apps have we built outside of labs and lecture?
2. Why haven't we built more?
3. What is the difference between state and props?

- State can be changed
  - Props can be changed but not by the component that receives those props. Must be changed from a component above, in the hierarchy
- Component owns its State

4. When should we use state vs props?

- Use state if changes in information does not need to be sent to a component higher in the hierarchy
- Use props to pass some information to a child component

5. When should we use constructor to create state?

- If we have to run some code immediately before creating state
- One way of binding This to instance methods

6. How do we pass props?
7. **Bonus** How do we change a component's state from outside of that component?

- Events, Event Listeners, etc...
