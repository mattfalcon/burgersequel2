var db = require("../models");

module.exports = function(app) {
  // GET route for getting all of the posts
  app.get("/", function(req, res) {
    // Add sequelize code to find all posts, and return them to the user with res.json
    db.Burger.findAll({})
    .then(function(dbBurger) {
      res.render("index", dbBurger);
    });
  });
};