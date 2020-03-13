// import all dependencies we need
let express = require("express"),
  app = express(),
  port = process.env.PORT || 9000, //using environment port if it setted up.
  bodyParser = require("body-parser"),
  cors = require("cors"); // import CORS

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors()); // allowing CORS

// import our controller and routes files
let controller = require("./routes/controller"),
  routes = require("./routes/routes");

routes(app);

app.listen(port);

console.log(`RESTful API server started on ${port}`);
