const mysql = require("mysql");

const db_config = {
  // host: "156.67.212.239",
  // user: "u5995498_nara",
  // password: "cekenitjeges",
  // database: "u5995498_blog_dummy"
  host: "localhost",
  user: "root",
  password: "",
  database: "geeksjapan"
};

const dbConnection = mysql.createConnection(db_config);

dbConnection.connect(err => {
  if (err) throw err;
});

// function "ping" to avoid lost connection
const ping = ping => {
  console.log("ping connection :");
  return dbConnection.ping(err => {
    if (err) {
      console.error(`error connecting: ${err.stack}`);
      return false;
    } else {
      console.log(
        dbConnection.state == "authenticated"
          ? `authenticated with id ${dbConnection.threadId}`
          : "connection failed"
      );
    }
  });
};

setInterval(() => ping(), 10000);

//export dbConnection
module.exports = dbConnection;
