const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

async function main() {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(process.env.DB_URI);
    console.log("Sucessfully connected to the database!");
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

module.exports = main;
