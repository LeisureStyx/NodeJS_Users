const Joi = require("joi");
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
  res.send({ success: true, });
});

app.get("/users", (req, res) => {
  res.send(trueResponse(users));
});

app.post("/users", (req, res) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required()
  });

  const result = schema.validate(req.body);
  if (result.error) {
    return res.status(400).send(result.error.details[0].message);
  }

  const user = {
    id: users.length + 1,
    name: req.body.name
  };
  users.push(user);
  res.send(user);
});

app.put("/users/:id", (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).json({ success: false });
  }

  const schema = Joi.object({
    name: Joi.string().min(3).required()
  });

  const result = schema.validate(req.body);
  if (result.error) {
    return res.status(400).send(result.error.details[0].message);
  }
  
  user.name = req.body.name
  res.send(user);

});

app.get("/users/:id", (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).json({ success: false });
  }
  res.send(trueResponse(user));
});

app.delete("/users/:id", (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).json({ success: false });
  }

  const indexUsers = users.indexOf(user);
  users.splice(indexUsers, 1);

  res.send(user);
});

app.listen(3000, () => console.log("Listening to 3000.."));
