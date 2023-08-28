const express = require('express');
const auth = require('../../middlewares/auth');
const { movieController } = require('../../controllers');

const router = express.Router();

router.get('', auth(), movieController.getMovies);
router.post('/search', auth(), movieController.searchMovies);
router.get('/banner-image', auth(), movieController.getBanner);
router.get('/:movieId', auth(), movieController.getMovieDetail);
router.post('/search-movies', auth(), movieController.searchMoviesFromInputText);

module.exports = router;
