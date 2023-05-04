const express = require("express");
const mongoose = require("mongoose");
const http = require("http");
const cors = require("cors");
const morgan = require("morgan");
const publicRouter = require("./router/PublicRouter");
const path = require("path");
const SubDomainChecker = require("./middleware/subDomainChecker");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

//
const server = http.createServer(app);
// app.use(express.static(path.join(__dirname, "static/app/dist")));
// application level middleare
app.use(morgan("dev"), cors(), express.json());
app.use(SubDomainChecker);

// Router
app.use(publicRouter);
app.get("/", (req, res) => {
  app.use(express.static(path.join(__dirname, "static/app/dist")));
  res.sendFile(path.join(__dirname, "static/app/dist/index.html"));
  console.log("this is / route");
});

//Database Connection
main()
  .then(() => {
    console.log("database connected");
    //
  })

  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.DATABASE_URL);
}

// Start the server
server.listen(process.env.PORT || 5052);
