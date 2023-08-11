const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const Category = mongoose.model('Catogory', categorySchema);

module.exports = Category;
