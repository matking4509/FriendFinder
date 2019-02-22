var express = require("express");
var path = require("path");
var friends = require("./app/data/friends");

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Require Seperate Route Files.
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//Start Server Listener
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});