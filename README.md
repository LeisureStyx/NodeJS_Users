# NodeJS_Users
This project is for my own education and learning about [Node.js](https://nodejs.org/en) and RESTful API(HTTP). I'm using [Express.js](https://expressjs.com/) for most of the code, and [Joi](https://joi.dev/) for schema and validation, plus [Nodemon](https://nodemon.io/) for monitoring development.

## :mortar_board: There are objectives when it comes to this project
- Create a local web server. In this project, we will be using a method from [Express.js](https://expressjs.com/)
- Create the following endpoint(s):
  - `/ping`
  - `/users`
  - `/users/:id`
- When the client sends an HTTP GET Requests:
  - For `/ping` , `/users` , and `users/:id` , have response code of **200** and JSON should contain "success: true"
    - Additionally for `/users` and `users/:id`, all user data should be included in the JSON response
    - For `users/:id` , only the data for the specified ID should be returned in the JSON response. For example, `users/2/` ,  only user with ID 2 should be returned to that endpoint. If the specified ID does not exist, for example ID 100, the response code should be **400** or **404** and JSON contain "success false".
- (Optional) Create a response to a HTTP POST, PUT, and DELETE Requests.

Personally will be using Git Bash as a terminal, using [Postman](https://www.postman.com/) for testing HTTP requests and responses, and I already added a npm script on `package.json` for running [Nodemon](https://nodemon.io/), which will be mentioned later.

## :hammer_and_wrench: Installation
Follow these instructions to install this project on your computer:
1. Clone this repository
```bash
git clone https://github.com/LeisureStyx/NodeJS_Users.git
```
2. Navigate to the project directory, or run a terminal(for example Git Bash) on the project directory by right clicking -> Git Bash Here
```bash
cd project-directory-name # For example, cd D:/Projects/NodeJS_Users
```
3. Install dependecies
```bash
npm install
```
4. Run the local web/development server using nodemon, with npm run
```bash
npm run dev
```