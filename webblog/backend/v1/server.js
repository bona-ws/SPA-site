const express = require("express"), // import express
  routes = require("./routes/"), // import routes config files
  cors = require("cors"), // import CORS
  app = express(), // use express as app
  port = process.env.PORT || 9000, // define port
  bodyParser = require("body-parser"),
  // import al router file
  blogRouter = require("./routes/blogRouter"),
  userRouter = require("./routes/userRouter");

app.use(bodyParser.urlencoded({ extended: true })); //get request parameter from url
app.use(bodyParser.json()); //get request parameter from body post
app.use(cors()); // allowing CORS

routes(app);

app.listen(port);

console.log("REST API server on: " + port);
