const publicRouter = require("express").Router();

//
publicRouter.get("/url", (req, res) => {
  res.send("url route");
});

module.exports = publicRouter;
