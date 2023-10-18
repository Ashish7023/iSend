const express = require("express");
const chalk = require("chalk");
const connectDB = require("./config/connectDB");
const userRoute = require('./Routes/userRoutes')
require("dotenv").config();
// _______________________________________________________
connectDB();
const app = express();
app.use('/',userRoute);
// _______________________________________________________
app.listen(
  process.env.PORT,
  console.log(chalk.blue.bold("PORT is running on " + process.env.PORT))
);
