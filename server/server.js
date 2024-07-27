const express = require("express");
const mongoose = require("mongoose");
const app = express();
const User = require("./models/user");
const bcrypt = require("bcrypt");
const cors = require("cors");
require("dotenv").config();

app.use(cors());

mongoose
  .connect(process.env.dbURI)
  .then((result) => {
    app.listen(5000);
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.post("/signup", async (req, res) => {
  const usernameFound = await User.findOne({ username: req.body.username });
  const emailFound = await User.findOne({ email: req.body.email });
  if (usernameFound) {
    res.status(409).json({ error: "Username already exists." });
  } else if (emailFound) {
    res.status(409).json({ error: "Email already exists." });
  } else {
    const saltRounds = 9;
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
    req.body.password = hashedPassword;
    const user = new User(req.body);
    await user.save();
    res.status(200).json({ sucess: "User has been added" });
  }
});

app.post("/login", async (req, res) => {
  const checkUser = await User.findOne({ email: req.body.email });
  if (checkUser) {
    const isPasswordMatch = await bcrypt.compare(
      req.body.password,
      checkUser.password
    );
    if (isPasswordMatch) {
      res.status(200).json({ success: `${checkUser.username} has logged in` });
    } else {
      res.status(409).json({ error: "Invalid email or password." });
    }
  } else {
    res.status(409).json({ error: "Invalid email or password." });
  }
});
