const express = require("express");
const { Movie } = require("../models/Moviemodel");
const movieRoute = express.Router();

movieRoute.get("/", async (req, res) => {
  try {
    let movies = await Movie.find();
    res.send({ msg: "send data", movies });
  } catch (err) {
    res.status(500).send({ msg: "failed !" });
  }
});

module.exports = { movieRoute };
