const { User } = require('../models');

const getUsers = async (req, res) => {
  const users = await User.find({ role: 'user' });

  res.send(users);
};

module.exports = {
  getUsers,
};
