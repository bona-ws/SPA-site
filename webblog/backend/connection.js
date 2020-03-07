var mysql = require("mysql");

var dbConn = mysql.createConnection({
  host: "156.67.212.239",
  user: "u5995498_nara",
  password: "cekenitjeges",
  database: "u5995498_blog_dummy"
});

dbConn.connect(function(err) {
  if (err) throw err;
});

module.exports = dbConn;
