const express = require('express');

const router = express.Router();
const { userController } = require('../../controllers');
const auth = require('../../middlewares/auth');

router.get('/get-users', auth('getUsers'), userController.getUsers);
module.exports = router;
