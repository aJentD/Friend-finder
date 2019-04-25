var friends = require("../app/data/friends");

module.exports = function(app) {
  // GET /api/friends
  app.get("api/friends", function(req, res) {
    res.json(friends);
  });
  // POST /api/friends
  app.post("api/friends", function(req, res) {
    res.json(friends);
  });
};
