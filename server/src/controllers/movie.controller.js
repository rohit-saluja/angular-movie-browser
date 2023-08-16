const { Movie } = require('../models');

const getMovies = async (req, res) => {
  const movies = await Movie.find();
  return res.send(movies);
};

module.exports = { getMovies };
