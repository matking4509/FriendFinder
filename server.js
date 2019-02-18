// 2. Your `server.js` file should require the basic npm packages we've used in class: `express` and `path`.

// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var friends = require("./app/data/friends");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//Start Server Listener
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});