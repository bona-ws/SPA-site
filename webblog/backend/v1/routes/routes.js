module.exports = app => {
  var controller = require("./controller");

  app.route("/api/v1/").get(controller.index);

  app.route("/api/v1/blogs").get(controller.blogs);

  app.route("/api/v1/blogs/:category").get(controller.category);

  app.route("/api/v1/blog/read/:title").get(controller.read);
};
