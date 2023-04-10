# NodeJS_Users
This project is for my own education and learning about [Node.js](https://nodejs.org/en) and RESTful API(HTTP). I'm using [Express.js](https://expressjs.com/) for most of the code, and [Joi](https://joi.dev/) for schema and validation, plus [Nodemon](https://nodemon.io/) for monitoring development.

There's objectives when it comes to this project:
- Create the following endpoint(s):
  - `/ping`
  - `/users`
  - `/users/:id`
- When the client sends an HTTP GET Request:
  - For `/ping `, `/users` , and `users/:id` , have response code of **200** and JSON should contain "success: true"
    - Additionally for `/users` and `users/:id`, all user data should be included in the JSON response
    - For `users/:id` , only the data for the specified ID should be returned in the JSON response. For example, `users/2/` ,  only user with ID 2 should be returned to that endpoint. If the specified ID does not exist, for example ID 100, the response code should be **400** or **404** and JSON contain "success false".
- (Optional) Create a response to a HTTP POST, PUT, and DELETE Request.

