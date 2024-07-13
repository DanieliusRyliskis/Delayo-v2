const express = require("express");
const mongoose = require("mongoose");
const app = express();
const User = require("./models/user");
const bcrypt = require("bcrypt");
require("dotenv").config();

mongoose
  .connect(process.env.dbURI)
  .then((result) => {
    app.listen(5000);
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.urlencoded({ extended: true }));

app.post("/signup", (req, res) => {
  const saltRounds = 9;
  bcrypt.hash(req.body.password, saltRounds).then((result) => {
    req.body.password = result;
    const user = new User(req.body);
    user.save().then(() => {
      console.log("Saved");
      // Redirect to the client's page
      // res.redirect("/home");
    });
  });
});
