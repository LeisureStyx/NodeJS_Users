const express = require("express");
const app = express();

const users = [
  { id: 1, name: "asd", age: 15 },
  { id: 2, name: "jkl", age: 32 },
];

app.get("/", (req, res) => {
  res.send("We Humans needs to stick together-<br>*COUGH* WELCOME!");
});

app.get("/ping", (req, res) => {
  res.send("Pong");
});

app.get("/users", (req, res) => {
  res.send(users);  
});

app.get("/users/:id", (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).json({ success: false })
  };
  res.send({ sucess: true, data: user });
});

app.listen(3000, () => console.log("Listening to 3000.."));
