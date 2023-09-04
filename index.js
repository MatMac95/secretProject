//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

//find folder name dynamically
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

//import body-parser pre-proccesing middleware to parse data form the form
import bodyParser from "body-parser";
import express from "express";

const app = express();
const port = 3000;

//calling bodyparser middleware before request handlers
app.use(bodyParser.urlencoded({ extended: true }));

//request handlers
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
app.post("/check", (req, res) => {
  if (req.body.password === "ILovePizza") {
    res.sendFile(__dirname + "/public/secret.html");
  } else {
    res.redirect("/");
  }
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
