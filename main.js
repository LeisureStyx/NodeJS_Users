const express = require("express");
const app = express();

app.use(express.json());

const users = [
  { id: 1, name: "asd", age: 15 },
  { id: 2, name: "jkl", age: 32 },
];

function trueResponse(data) {
  return {
    success: true,
    data: data,
  };
}

app.get("/", (req, res) => {
  res.send("We Humans needs to stick together-<br>*COUGH* WELCOME!");
});

app.get("/ping", (req, res) => {
  res.send("Pong");
});

app.get("/users", (req, res) => {
  res.send(trueResponse(users));
});

app.post("/users", (req, res) => {
  if (!req.body.name || req.body.name.length < 3) {
    res.status(400).send("Name should be min. 3 characters")
    return;
  }
  const user = {
    id: users.length + 1,
    name: req.body.name
  };
  users.push(user);
  res.send(user);
});

app.get("/users/:id", (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).json({ success: false });
  }
  res.send(trueResponse(user));
});

app.listen(3000, () => console.log("Listening to 3000.."));
