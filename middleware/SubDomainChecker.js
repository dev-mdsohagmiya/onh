const GenerateSubDomain = require("../model/GenerateSubDomain");
const express = require("express");
const app = express();
const path = require("path");

// Application level
function SubDomainChecker(req, res, next) {
  console.log(req.hostname.split(".")[0]);
  GenerateSubDomain.find({ subdomain: req.hostname.split(".")[0] }).then(
    (result) => {
      if (result[0]) {
        console.log("sub domain found!");
        next();
      } else {
        // console.log("sub domain not found!", generateId());
        res.sendFile(path.join(__dirname, "404/index.html"));
      }
    }
  );
}

module.exports = SubDomainChecker;
