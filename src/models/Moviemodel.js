const mongoose = require("mongoose");

const MovieSchema = mongoose.Schema({
  title: { type: String },
  year: { type: String },
  language: { type: String },
  p1: { type: String },
  p2: { type: String },
  p3: { type: String },
  p4: { type: String },
});

const Movie = mongoose.model("movie", MovieSchema);

module.exports = { Movie };
