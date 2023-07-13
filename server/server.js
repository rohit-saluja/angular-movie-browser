const express = require("express");
const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.send("rohit is very healthy and relaxed");
});
app.listen(3000, () => console.log("app is restarted"));