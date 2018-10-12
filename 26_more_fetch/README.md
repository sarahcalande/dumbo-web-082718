# FETCH CONTINUED

### Objectives
* Review fetch and promise intro
* [JSON Server](https://github.com/typicode/json-server)
* Request Headers
* Fetch with multiple types of requests

### Promises
* An object that has three possible states:
	* Pending
	* Resolved
	* Rejected
* Handling Promise Contents
	* .then
	* .catch
	* Promise chaining

### POST Requests
  * In a `GET` request, `fetch` only takes in the url as a string as an argument
  * With every other type of request, `fetch` must take in an additional argument
    of a Javascript object with more information describing the request:
    * `method:` `POST`, `PATCH`, or `DELETE`
    * `body:` what is being created or edited
    * `headers:` information describing the request so the server knows how to handle it

   For example, if we wanted to create a new Item for Meat Matt's Meat Market, we would need to send the following information:
    
```javascript
const newItem = {
	name: "BBQ Jackfruit",
	category: "meat",
	image: "https://minimalistbaker.com/wp-content/uploads/2015/03/Simple-BBQ-Jackfruit-Sandwiches-30-minutes-and-BIG-flavor-vegan-glutenfree-bbq.jpg"
}

const options = {
	headers: {
		"Content-Type": "application/json"
	},
	method: "POST",
	body: JSON.stringify(newItem)
}
	
fetch("https://localhost:3000/items", options)
```
The `newItem` object literal represents the new Item that is being created. 
The keys to this object correspond to the attributes of an Item.

Our `options` object must include a method of `POST` to ensure the request hits the correct endpoint for creating an item.

The `"Content-Type"` header tells the server that we are sending JSON.

Lastly, and perhaps most importantly, in order for the `newItem` to be sent, it must be converted into JSON. If it is sent as a Javascript object literal, it will not be able to be parsed, as it is not actually JSON (yet). This is where `JSON.stringify()` comes in.
