const express = require("express");
const app = express();

// Server will be running on port 5000 and the client on port 3000 because React by default runs on port 3000
app.listen(5000, () => {
  console.log("Server started on port 5000");
});

// Check if the user exists in the database
// const existingUser = await collection.findOne({data.name})

// Hashing the password
// const hashedPassword = await bcrypt.hash(data.password, saltRounds)
// data.password = hashedPassword

// Comparing passwords
// const isPasswordMatch = await bcrypt.compare(req.body.password, check.password)
