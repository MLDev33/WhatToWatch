const mongoose = require('mongoose');

const mediaSchema = mongoose.Schema({
    mediaType: String,
    title: String,
    poster: String,
    adult: Boolean,
    genre: Array,
    release_date: Date,
    description: String,
    popularity: Number,
    vote_count: Number,
    streaming_platform: Array,
});

const Media = mongoose.model('Media', mediaSchema);

module.exports = Media;