const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    token: String,
    username: String,
    email: String,
    password: String,
    avatar: String,
    created_list: { type: mongoose.Schema.Types.ObjectId, ref: 'MovieList' },
    invited_list: { type: mongoose.Schema.Types.ObjectId, ref: 'MovieList' },
    liked_movies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Media' }],
    watched_movies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Media' }],
    watchlist: [{
        movie_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Media' },
        scheduled_time: Date
    }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;