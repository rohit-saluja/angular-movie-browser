const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  year: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    trim: true,
  },
  generes: [{ type: String, trim: true }],
  audio: {
    type: String,
  },
  subtitles: [{ type: String }],
  category: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Category',
  },
  bannerImage: {
    type: String,
  },
  image: {
    type: String,
  },
  isBanner: {
    type: Boolean,
    default: false,
  },
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
