"use strict";

module.exports = function(app) {
  var controller = require("./controller");

  app.route("/").get(controller.index);

  app.route("/blogs").get(controller.blogs);

  app.route("/blogs/:category").get(controller.category);

  app.route("/blog/read/:title").get(controller.read);
};
