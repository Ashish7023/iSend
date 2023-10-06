const express = require("express");
const chalk = require("chalk");
const Data = require("./Data/Data");
require("dotenv").config();
const app = express();
app.get("/", (req, res) => {
  res.send("Ashish");
});
app.get("/chat", (req, res) => {
  res.send(Data);
});

app.listen(
  process.env.PORT,
  console.log(chalk.red.bold("PORT is running on " + process.env.PORT))
);
