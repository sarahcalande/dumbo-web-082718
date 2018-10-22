# GOALS

- understand project structure
- request response cycle
- client/server
- configure rails to serve json data
- protect from forgery
  - in application controller, tell rails not to check for the authenticity token
  - different for different version of rails
- customize data using serializers
  - active_model_serializer gem
  - `rails g serializer resource_name`
  - rails uses automatically
- understand CORS
  - application rejects requests from other websites (origins)
  - done as protection
  - can use rack-cors gem to allow certain website origins to fetch data
- rails new project_name -T --database=postgresql --api