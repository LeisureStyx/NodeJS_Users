# NodeJS_Users
This project is for my own education and learning about [Node.js](https://nodejs.org/en) and RESTful API (HTTP). I'm using [Express.js](https://expressjs.com/) for most of the code, and [Joi](https://joi.dev/) for schema and validation, plus [Nodemon](https://nodemon.io/) for monitoring development.

## :mortar_board: There are objectives when it comes to this project
- Create a local web server. In this project, will be using a method from [Express.js](https://expressjs.com/)
- Create the following endpoint(s):
  - `/ping`
  - `/users`
  - `/users/:id`
- When the client sends an HTTP GET Requests:
  - For `/ping` , `/users` , and `users/:id` , have response code of **200** and JSON should contain "success: true"
    - Additionally for `/users` and `users/:id` , all user data should be included in the JSON response
    - For `users/:id` , only the data for the specified ID should be returned in the JSON response. For example, `users/2/` ,  only user with ID 2 should be returned to that endpoint. If the specified ID does not exist, for example ID 100, the response code should be **400** or **404** and JSON contain "success false".
- (Optional) Create a response to a HTTP POST, PUT, and DELETE requests.

Personally will be using Git Bash as a terminal, using [Postman](https://www.postman.com/) for testing HTTP requests and responses, and I already added a npm script on `package.json` for running [Nodemon](https://nodemon.io/), which will be mentioned later.

## :hammer_and_wrench: Installation
Follow these instructions to install this project on your computer:
### 1. Clone this repository:
```bash
git clone https://github.com/LeisureStyx/NodeJS_Users.git
```
### 2. Navigate to the project directory:
```bash
cd project-directory-name # For example, cd D:/Projects/NodeJS_Users
```
*Or run a terminal(for example Git Bash) on the project directory by right clicking -> Git Bash Here*

### 3. Install dependecies:
```bash
npm install
```

## :rocket: Run & Test :test_tube:
Once the dependecies are installed, follow these instructions to run and test this project:
### 1. :rocket: Run the local web/development server using nodemon, with provided script:
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

### 2. :test_tube: To test if the project works:
   - #### HTTP GET Request
     - **(Not Recommended)** You can open up your browser and type in your address bar: `http://localhost:3000/users` , and it should appear a JSON that contains all user data, or
     - Open up [Postman](https://www.postman.com/); in the top-middle of the window, slightly to the left (or in the workbench), click the `+` button and you will open a new a request and response tab. At the request section, by default, response method will be `GET` , if it doesn't, change the HTTP request method to `GET` and type in request URL: `http://localhost:3000/users` , then press Send. The response will be located at the bottom of the request section
     
     ![image](https://user-images.githubusercontent.com/129574206/231051422-38ffda14-f3a1-4423-863c-a33950a383bb.png)
   
     The response body will be the same for both, except in a browser it may be not raw formatted:
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
     To see the response code in a browser (for example, Google Chrome), press `F12` or right click -> Inspect, then click `>>` -> Network, recommend to disabling cache, after that refresh `F5`. But it's better to use [Postman](https://www.postman.com/).
     
     To see the response code in [Postman](https://www.postman.com/), after sending a HTTP GET request, check the response section around the bottom of the screen. You should see a `200 OK` response code, along with the response time and size.
     
     ![image](https://user-images.githubusercontent.com/129574206/231051603-eda884c8-ca11-426f-9cee-a05d98000628.png)

     ***[Postman](https://www.postman.com/) will continue to be used going forward for HTTP POST, PUT, and DELETE requests.***

   - #### HTTP POST Request

     Still in [Postman](https://www.postman.com/), change the request method to
     `POST` with the same request URL; just at the bottom of it, click `Body` and pick the `raw` tab, then the drop-down list (which is set to **Text** by default) into `JSON`. What you will be typing in the body is a `name`(at least 3 characters) and `age` (at least 1 number); both are required every time a client wants to send an HTTP POST request. For example:
     ```json
     {
        "name": "jerry",
        "age": 25
     }
     ```

     After sending a HTTP POST request, response code will be `201 Created` with body of the response will be as follows:

     ```json
     {
        "id": 3,
        "name": "jerry",
        "age": 25
     }
     ```

     **IF** client sends a HTTP POST request with an empty body, the response will give an error, **IF** the body consists of a `name` with the right value but doesn't include `age` , **IF** `name` is less than 3 characters, or **IF** `name` value is right but the `age` value is less than 1 (this can be changed in the code), it will show an error message with response code `400 Bad Request`:
     ```
     "name" is required
     "age" is required
     "name" length must be at least 3 characters long
     "age" must be greater than or equal to 1
     ```

     ***You can check if it's actually POST (Create in CRUD operations), by send HTTP GET request.***

   - #### HTTP PUT Request

     Update in CRUD operations is `PUT` in a HTTP request, which means to test this, change the request method to `PUT` and the url to `http://localhost:3000/users/3` with a body consisting of `name` or `age` with the changed value.
     
     For example, let's change the age of a user with an ID of 3 that we just POST:
     ```json
     {
        "age": 30
     }
     ```

     When we clicked send, if we checked `/users` by sending a HTTP GET request to `http://localhost:3000/users` , the user `age` with an ID of 3 will changed to `30`, and keep `name` as normal:
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
         },
         {
           "id": 3,
           "name": "jerry",
           "age": 30
         }
       ]
     }
     ```

  - #### HTTP DELETE Request

    In this project, we can send an HTTP DELETE request to delete a user from user's data. Changed the HTTP request method to `DELETE` and kept the URL, unless you wanted to delete a different user.

    After you sent it, it should have returned a response with a JSON of that user, and you can check it at `http://localhost:3000/users` by sending an HTTP GET request. For example, first I sent an HTTP DELETE request for `http://localhost:3000/users/1`, then I sent an HTTP GET request to check, and the response was as follows:
    ```json
    {
      "success": true,
      "data": [
        {
          "id": 2,
          "name": "jkl",
          "age": 32
        },
        {
          "id": 3,
          "name": "jerry",
          "age": 30
        }
      ]
    }
    ```
## Usage
This project is intended for educational purposes only. Feel free to clone the project and modify the code to suit your own learning needs.