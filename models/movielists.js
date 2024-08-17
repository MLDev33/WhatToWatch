const mongoose = require('mongoose');

const movieListSchema = mongoose.Schema({
    token: String,
    list_name: String,
    creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    options: [
        {
            content_type: String,
            genre: Array,
            streaming_platform: Array,
        }
    ],
    movies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Media' }],
    movie_liked: [{
        movie_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Media' },
        liked_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        liked_by_all: Boolean,
        watched_by: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
        scheduled_time: Date,
        notification_sent: Boolean,
    }],
    avatar: String,
});

const MovieList = mongoose.model('MovieList', movieListSchema);

module.exports = MovieList;