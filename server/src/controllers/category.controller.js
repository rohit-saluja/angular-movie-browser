const { Category } = require('../models');

const getCategories = async (req, res) => {
  const categories = await Category.find();
  res.send(categories);
};

module.exports = {
  getCategories,
};
