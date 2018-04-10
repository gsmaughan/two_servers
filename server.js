// / Require/import the express module
var express = require("express");

// Use the Express package to create our server.
var app = express();


// Define a port to listen for incoming requests
var PORT = 7000;   //good
var PORT2 = 7500;  //bad

// Create a generic function to handle requests and responses
app.get("*", function (req, res) {
  res.send("It Works!! Path Hit: " + req.url);
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log("You're good looking");
});

app.listen(PORT2, function () {
  // Log (server-side) when our server has started
  console.log("You're fat and ugly");
});