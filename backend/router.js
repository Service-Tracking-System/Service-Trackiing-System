const Router = require("express").Router();

Router.get("/", (req, res) => {
  res.send({
    message: "hi",
  });
});

module.exports = Router;
