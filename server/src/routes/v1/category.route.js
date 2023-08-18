const express = require('express');

const router = express.Router();
const { categoryController } = require('../../controllers');
const auth = require('../../middlewares/auth');

router.get('', auth(), categoryController.getCategories);

module.exports = router;
