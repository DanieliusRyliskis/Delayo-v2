const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

mongoose
  .connect(process.env.dbURI)
  .then((result) => {
    app.listen(5000);
  })
  .catch((err) => {
    console.log(err);
  });

app.post("/register", (req, res) => {
  console.log("request received");
});

// Check if the user exists in the database
// const existingUser = await collection.findOne({data.name})

// Hashing the password
// const hashedPassword = await bcrypt.hash(data.password, saltRounds)
// data.password = hashedPassword

// Comparing passwords
// const isPasswordMatch = await bcrypt.compare(req.body.password, check.password)
