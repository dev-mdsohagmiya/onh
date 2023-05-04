const { Schema, model } = require("mongoose");

const GenerateSubDomain = new Schema({
  subdomain: String,
});

module.exports = model("subdomain", GenerateSubDomain);
