const mongoose = require("mongoose");

const donorSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  bloodGroup: String,
  village: String,
  mandal: String,
  district: String,
  state: String,
});

module.exports = mongoose.model("Donor", donorSchema);
