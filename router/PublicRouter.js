const publicRouter = require("express").Router();

publicRouter.get("/", (req, res) => {
  res.send("root route");
});
//
publicRouter.get("/url", (req, res) => {
  res.send("url route");
});

module.exports = publicRouter;
