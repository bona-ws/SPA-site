const response = require("../config/response");
const connection = require("../config/connection");

// login user
exports.login = (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  connection.query(
    `SELECT id, username, email FROM user WHERE email = '${email}' AND password = '${password}' `,
    (error, rows, fields) => {
      if (!error) {
        response.ok(rows, res);
      } else {
        console.log(error);
      }
    }
  );
};
