# sinatra-mvc-intro

## SWBATs

* Explain the Model View Controller \(MVC\) pattern and give an example
* Explain how web frameworks \(like Sinatra\) use the MVC pattern and why
* Define 'convention over configuration'
* Implement one model that inherits from ActiveRecord
* Implement one controller to route and process requests
  * Demonstrate how the params hash changes and where the data comes from
* Implement ERB template and get it to render data from controller and model
* Practice file structure in Sinatra
* Identify the connection between REST and CRUD

## Resources

* [Example Video](https://youtu.be/hHM9mRlynXM)
* [Starter Code](https://github.com/learn-co-curriculum/lectures-starter-code/tree/master/sinatra/sinatra-mvc-intro)
* [Stateless Requests](https://stackoverflow.com/questions/13200152/why-say-that-http-is-a-stateless-protocol)
* [Corneal](https://github.com/thebrianemory/corneal)

## Outline

```text
20m MVC Architecture
40m Setup Sinatra app with Directory Structure
20m CRUD, URLs, and REST (if we get there)
===
80m Total
```

AGENDA
* Compare / contrast routing in Rack vs Sinatra
* Talk about dynamic routing
* Why Sinatra?
  - higher-order concepts
  - convention
  - modularity
* Introduce Corneal
* Introduce MVC
  - Note on paradigms
  - Restaurant analogy
  - Mod 1 projects
* MVC in Sinatra
  - AR review
  - Dynamic routing and Params
  - Links between pages
* REST
  - rest as a standard and not as a mandate
  - fill out a crud matrix (10 minutes with HTTP verbs)
    - CRUD, SQL, HTTP Verb
  - HTTP is stateless

