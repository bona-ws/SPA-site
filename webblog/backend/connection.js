var mysql = require("mysql");

var dbConn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "geeksjapan"
});

dbConn.connect(function(err) {
  if (err) throw err;
});

module.exports = dbConn;
