"use strict";

const response = require("../config/response");
const connection = require("../config/connection");

// api blogs
exports.blogs = (req, res) => {
  connection.query(
    "SELECT id_blog,category,thumbnail,title,sub_title FROM blog",
    (error, rows, fields) => {
      if (error) {
        console.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};

//api blog
exports.read = (req, res) => {
  const get_title = req.params.title;
  const title = get_title.split("-").join(" ");

  connection.query(
    `SELECT * FROM blog WHERE title = '${title}'`,
    (error, rows, fields) => {
      if (error) {
        console.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};

// api category
exports.category = (req, res) => {
  connection.query(
    "SELECT * FROM blog  WHERE category = ?",
    req.params.category,
    (error, rows, fields) => {
      if (error) {
        console.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};

exports.index = (req, res) => {
  response.ok("Hello from the Node JS RESTful side!", res);
};
