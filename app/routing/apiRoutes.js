var friendData = require("../data/friends");

// Export Function for server Call.
module.exports = function(app) {
  // Simple return data api call.
  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });

  // Recieves data from post, sums the two arrays and looks for the lowest difference in answers.  The nreturns the match object.
  app.post('/api/friends', function(req, res){
      var lowestTotalDifference = 1000;
      var match;
      // Convert HTML scores from strings to int.  
      for (i=0; i < req.body.scores.length; i++) {
        req.body.scores[i] = parseInt(req.body.scores[i])
      }

      for(var i in friendData){
        var totalDifference = Math.abs(req.body.scores.reduce(getSum) - friendData[i].scores.reduce(getSum));
        if(totalDifference < lowestTotalDifference){
            lowestTotalDifference = totalDifference;
            match = friendData[i]
        }
      }
      friendData.push(req.body);
      res.send(match);

      // Function for getting total of arrays.
      function getSum(total, num) {
        return total + num;
      }
  });

  // Clear data out of arrays.
  app.post("/api/clear", function(req, res) {
    friendData.length = [];
    res.json({ ok: true });
  });
};



