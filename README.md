# NodeJS_Users
This project is for my own education and learning about [Node.js](https://nodejs.org/en) and RESTful API(HTTP). I'm using [Express.js](https://expressjs.com/) for most of the code, and [Joi](https://joi.dev/) for schema and validation, plus [Nodemon](https://nodemon.io/) for monitoring development.

## :mortar_board: There are objectives when it comes to this project
- Create a local web server. In this project, will be using a method from [Express.js](https://expressjs.com/)
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
1. Clone this repository:
```bash
git clone https://github.com/LeisureStyx/NodeJS_Users.git
```
2. Navigate to the project directory:
```bash
cd project-directory-name # For example, cd D:/Projects/NodeJS_Users
```
Or run a terminal(for example Git Bash) on the project directory by right clicking -> Git Bash Here

3. Install dependecies:
```bash
npm install
```

## :rocket: Run & Test :test_tube:
Once the dependecies are installed, follow these instructions to run and test this project:
### 1. Run the local web/development server using nodemon, with provided script:
```bash
npm run dev
```
Wait a few seconds; it will be ready when you see the following output by default in your terminal:
```bash
[nodemon] 2.0.22
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node main.js`
Listening to 3000..
```
### 2. To test if the project works:
   - HTTP GET Request
     - **(Not Recommended)** You can open up your browser and type in your address bar: `http://localhost:3000/users` , and it should appear a JSON that contains all user data, or
     - Open up [Postman](https://www.postman.com/); in the top-middle of the window, slightly to the left(or in the workbench), click the **+** button and you will open a new a request and response tab. At the request section, by default, response method will be `GET`, and type in request URL: `http://localhost:3000/users`, then press Send. The response will be located at the bottom of the request section
   
     The response will be the same for both, except in a browser it may be not raw formatted:
     ```json
     {
         "success": true,
         "data": [
             {
                 "id": 1,
                 "name": "asd",
                 "age": 15
             },
             {
                 "id": 2,
                 "name": "jkl",
                 "age": 32
             }
         ]
     }
     ```
     To see the response code in a browser(for example, Google Chrome), press `F12` or right click -> Inspect, then click `>>` -> Network, recommend to disabling cache, after that refresh(`F5`). But it's better to use [Postman](https://www.postman.com/).
     
     To see the response code in [Postman](https://www.postman.com/), after sending a HTTP GET Request, check the response section at the bottom of the screen. You should see a `200 OK` response code, along with the response time and size.
   - HTTP POST Request
   
