
//dependencies
var express = require("require");
var bodyParser = require("body-parser");
var app=express();
//set handlebars.
var exphbs =require("express-handlebars");
// Import routes and give the server access to them.
var route= require("./controllers/burgers_controllers.js");
var port =process.env.PORT || 8080;
// server static content for the app from the view directory in the application directory.
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extend:false}));

app.engine("handlebars",exphbs({defaultLayout:"main"}));
app.set("view engine", "handlebars");
app.use("/", route)
app.listen(port);