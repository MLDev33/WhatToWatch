const mongoose = require('mongoose');

const movieListSchema = mongoose.Schema({
    token: String,
    list_name: String,
    creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    options: [
        {
            content_type: Array, // Modification String en Array par rapport du schema initial 
            genre: Array,
            streaming_platform: Array,
            average: String, // Ajout au schema initial
            releaseDateGte: String // Ajout au schema initial
        }
    ],
    movies: Array, //[{ type: mongoose.Schema.Types.ObjectId, ref: 'Media' }],
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