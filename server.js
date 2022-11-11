const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hello Worldd!"));

app.get("/about", (req, res) => res.send("I'm Nam"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
