const mysql = require("mysql");

const db_config = {
  host: "localhost",
  user: "root",
  password: "",
  database: "letsblog"
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
      console.error("error connecting: " + err.stack);
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

//export db connection
module.exports = dbConnection;
