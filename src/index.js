//Importing
const express = require("express");
const mongoose = require("mongoose");

//setting express and port
const app = express();
const port = process.env.PORT || 4000;

//Enabaling JSON reading
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

//Database connection
const conn = require("./config/db");
conn();

//Set listening port
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
