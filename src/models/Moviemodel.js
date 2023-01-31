const mongoose = require("mongoose");

const MovieSchema = mongoose.Schema({
  poster: { type: String },
  screenshot: { type: String },
  title: { type: String },
  year: { type: String },
  language: { type: String },
  p1: { type: String },
  p2: { type: String },
  p3: { type: String },
  p4: { type: String },
  actors: { type: String },
  link: { type: String },
});

const Movie = mongoose.model("movie", MovieSchema);

module.exports = { Movie };
