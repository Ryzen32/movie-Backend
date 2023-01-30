const express = require("express");

const movieRoute = express.Router();

movieRoute.get("/", async (req, res) => {
  try {
    let movies = await movie.find();
    res.send({ msg: "send data", movies });
  } catch (err) {
    res.status(500).send({ msg: "failed !" });
  }
});

module.exports = { movieRoute };
