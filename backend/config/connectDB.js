const chalk = require("chalk");
const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    const connec = await mongoose.connect(
      process.env.MONGO_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log(chalk.bold.yellow("Connected to DB"));
  } catch (e) {
    console.log(chalk.red(e));
  }
};

module.exports = connectDB;
