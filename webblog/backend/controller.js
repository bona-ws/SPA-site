"use strict";

var response = require("./response");
var connection = require("./connection");

// api blogs
exports.blogs = function(req, res) {
  connection.query(
    "SELECT id_blog,category,thumbnail,title,sub_title FROM blog",
    function(error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};

//api blog
exports.read = function(req, res) {
  const get_title = req.params.title;
  const title = get_title.split("-").join(" ");

  connection.query(`SELECT * FROM blog WHERE title = '${title}'`, function(
    error,
    rows,
    fields
  ) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

// api category
exports.category = function(req, res) {
  connection.query(
    "SELECT * FROM blog  WHERE category = ?",
    req.params.category,
    function(error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};

exports.index = function(req, res) {
  response.ok("Hello from the Node JS RESTful side!", res);
};
