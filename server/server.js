const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/:name", (req, res) => {
  greeting = "<h1>This is the greeting</h1>";
  const name = req.params["name"];
  if (name) {
    greeting = greeting + name;
  }
  res.send(greeting);
});

app.listen(port, () => console.log("App is running on the port as mentioned"));
