import config from "@babel/core/lib/config";
import express from "express";
import configViewEngine from "./configs/viewEngine";

const app = express();
const port = 3000;

configViewEngine(app);

// định hướng router
app.get("/", (req, res) => res.render("index.ejs"));

app.get("/about", (req, res) => res.send("I'm Nam"));
app.get("/home", (req, res) => res.send("I'm Nammmm"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
