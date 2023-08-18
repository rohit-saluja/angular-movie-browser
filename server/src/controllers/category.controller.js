const { Category } = require('../models');

const getCategories = async (req, res) => {
  let categories = await Category.find();
  categories = categories.map((c) => c.name);
  res.send(categories);
};

module.exports = {
  getCategories,
};
