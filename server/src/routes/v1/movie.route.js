const express = require('express');
const auth = require('../../middlewares/auth');
const { movieController } = require('../../controllers');

const router = express.Router();

router.get('', auth(), movieController.getMovies);
router.post('/search', auth(), movieController.searchMovies);

module.exports = router;
