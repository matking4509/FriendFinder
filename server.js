// 2. Your `server.js` file should require the basic npm packages we've used in class: `express` and `path`.

// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//*
app.get("/", function(req, res) {
    // res.send("Welcome to the Star Wars Page!")
    res.sendFile(path.join(__dirname, "index.html"));
});
//*
app.get("/api/curTables", function(req, res) {
    // res.send("Welcome to the Star Wars Page!")
    res.json(dinerInfo);
});
//*
app.post("/api/makeRes", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    if (dinerInfo.length >= maxTables) {
      var waitlistRes = req.body;
      waitlistInfo.push(waitlistRes);
      console.log("waitlist",waitlistRes);
    } else {
      var newRes = req.body;
      
      // Randomly Select Table
      randomTable();
      newRes.table = rTn;
      console.log("reserved",newRes);
    
      // We then add the json the user sent to the character array
      dinerInfo.push(newRes);
    
      // We then display the JSON to the users
      
      
    }
    res.json(dinerInfo);
    // res.json(waitlistInfo);
});



//Server Start
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});