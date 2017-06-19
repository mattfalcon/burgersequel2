// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

// When you require a folder, it will look for index.js
var db = require("./models");

// Sets up the Express app
// =============================================================
var app = express();
app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({
	extended: false
}));

app.use(methodOverride("_method"));

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({
	defaultLayout: "main"
}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller");

app.use("/", routes);
app.use("/update", routes);
app.use("/create", routes);

var port = process.env.PORT || 3000;
db.sequelize.sync().then(function(){
	app.listen(port);
})