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

app.post("/signup", async (req, res) => {
  const usernameFound = await User.findOne({ username: req.body.username });
  const emailFound = await User.findOne({ email: req.body.email });
  if (usernameFound || emailFound) {
  } else {
    const saltRounds = 9;
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
    req.body.password = hashedPassword;
    const user = new User(req.body);
    await user.save();
    // Redirect to the client's page
    // res.redirect("/home");
  }
});
