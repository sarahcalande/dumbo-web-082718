Using json-server:
to install:
    npm install -g json-server
to start server:
  json-server --watch db.json


# Controller
- go-between for models and views

# Delete Button
1) at the moment we create dele button attach event listener
  - needs to be delete button object
  - needs data-id to know which thing to delete
2) query select all delete buttons and add event listeners after the fact
  - no single source of truth for how to add event listeners
3) event delegation add listener to div and check if it was delete button that triggered it
  - make sure you have the chore id


# New Form
- select the form, add an event listener
- grab input values
