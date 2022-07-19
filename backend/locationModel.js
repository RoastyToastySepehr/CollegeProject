const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const LocationSchema = new Schema({
  title: String,
  latitude: String,
  longitude: String,
  description: String,
  thumbnail: String,
  alibaba: String,
  wikipedia: String,
});

const Location = mongoose.model("Location", LocationSchema);

module.exports = Location;
