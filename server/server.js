const express = require("express");
const app = express();

// Server will be running on port 5000 and the client on port 3000 because React by default runs on port 3000
app.listen(5000, () => {
  console.log("Server started on port 5000");
});

// For single page applications you only need the html for the first request
