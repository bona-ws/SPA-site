// import CORS
var cors = require("cors");

var express = require("express"),
  app = express(),
  port = process.env.PORT || 9000,
  bodyParser = require("body-parser"),
  controller = require("./routes/controller");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// allowing CORS
app.use(cors());

var routes = require("./routes/");
routes(app);

app.listen(port);
console.log("RESTful API server started on: " + port);
