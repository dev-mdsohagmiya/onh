const express = require("express");
const http = require("http");
const cors = require("cors");
const morgan = require("morgan");
const publicRouter = require("./router/PublicRouter");
const vhost = require("vhost");
const path = require("path");
const app = express();

//
const server = http.createServer(app);

app.use(morgan("dev"), cors(), express.json());

// //router
app.use(publicRouter);

// Start the server
server.listen(process.env.PORT || 5051);
