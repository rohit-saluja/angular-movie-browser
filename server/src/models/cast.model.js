const mongoose = require('mongoose');

const castSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  profession: {
    type: String,
    required: true,
    trim: true,
  },
});

const Cast = castSchema.Model('Cast', castSchema);
module.exports = Cast;
