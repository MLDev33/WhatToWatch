const mongoose = require('mongoose');

const mediaSchema = mongoose.Schema({

    mediaType: String, // enum: ["movie", "series"] (requiere: true)
    title: String,
    poster: String,
    adult: Boolean,
    genre: array[String],
    year: Number,
    description: String,
    popularity: Number,
    vote_count: Number,
    streaming_platforms: {
        streaming_platform_id: ObjectId,
        streaming_platform_name: String,
    }
});

const Media = mongoose.model('medias', mediaSchema);

module.exports = Media;