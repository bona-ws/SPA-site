module.exports = app => {
  //blog router
  const blogRouter = require("./blogRouter");
  app.route("/").get(blogRouter.index);
  app.route("/blogs").get(blogRouter.blogs);
  app.route("/blogs/:category").get(blogRouter.category);
  app.route("/blog/read/:title").get(blogRouter.read);

  // user router
  const userRouter = require("./userRouter");
  app.route("/login").post(userRouter.login);
};
