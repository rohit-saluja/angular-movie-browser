const movies = require('./data/movies');
const categories = require('./data/categories');
const { Movie, Category } = require('./models');
const logger = require('./configs/logger');

const inserDataOnLoad = () => {
  categories.forEach(async (category) => {
    await Category.create({ name: category });
  });
  movies.forEach(async (movie) => {
    const category = await Category.findOne({ name: { $in: movie.subtitles } });
    if (category) {
      await Movie.create({ category: category._id, ...movie });
    } else {
      await Movie.create({ ...movie });
    }
  });
  logger.info('data base entries for the movies are done');
};

const checkAndInsert = async () => {
  const moviesDoc = await Movie.find();
  if (!moviesDoc.length) {
    inserDataOnLoad();
  }
};

module.exports = checkAndInsert;
