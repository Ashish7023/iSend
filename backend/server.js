const express = require("express");
const chalk = require("chalk");
const Data = require("./Data/Data");
const connectDB = require("./config/connectDB");
require("dotenv").config();
connectDB();
const app = express();
app.get("/", (req, res) => {
  res.send("Ashish");
});
app.get("/chat", (req, res) => {
  res.send(Data);
});

app.listen(
  process.env.PORT,
  console.log(chalk.blue.bold("PORT is running on " + process.env.PORT))
);
