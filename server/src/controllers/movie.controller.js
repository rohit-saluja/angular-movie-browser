const httpStatus = require('http-status');
const { Movie, Category } = require('../models');

const getMovies = async (req, res) => {
  const movies = await Movie.find({ isBanner: false });
  return res.send(movies);
};

const searchMovies = async (req, res) => {
  const { categories } = req.body;
  if (!categories.length) {
    const movies = await Movie.find({ isBanner: false });
    res.send(movies);
    return;
  }
  const categoriesDoc = await Category.find({ name: { $in: categories } });
  const categoriesIds = categoriesDoc.map((c) => c._id);
  const movies = await Movie.find({ category: { $in: categoriesIds }, isBanner: false });
  res.send(movies);
};

const getMovieDetail = async (req, res) => {
  const { movieId } = req.params;
  const movie = await Movie.findOne({ _id: movieId });
  if (!movie) {
    res.status(httpStatus.NOT_FOUND).sent();
  }
  const { generes } = movie;
  const relatedMovies = await Movie.find({ generes: { $in: generes }, isBanner: false });
  res.send({ movie, relatedMovies });
};

const getBanner = async (req, res) => {
  const movie = await Movie.findOne({ isBanner: true });
  res.send(movie);
};

// const searchMoviesFromInputText = async(req,res)=>{
//   const {searchText} = req.body;

// }
module.exports = { getMovies, searchMovies, getMovieDetail, getBanner };
