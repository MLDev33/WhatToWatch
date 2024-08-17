const mongoose = require('mongoose');

const genreSchema = mongoose.Schema({
    id: String,
    name: String,
  });


const Genre = mongoose.model('genres', genreSchema);

module.exports = Genre;