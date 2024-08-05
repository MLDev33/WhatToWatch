const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    token: String,
    username: String,
    email: String,
    password: String,
    avatar: String,
    created_list: { type: mongoose.Schema.Types.ObjectId, ref: 'movielists'},
    invited_list: { type: mongoose.Schema.Types.ObjectId, ref: 'movielists'},
    liked_movies: { type: mongoose.Schema.Types.ObjectId, ref: 'media'},
    watched_movies: { type: mongoose.Schema.Types.ObjectId, ref: 'media'},
    watchlist: {
        movie_id: {type: mongoose.Schema.Types.ObjectId, ref: 'media'},
        scheduled_time: Date
    }
});

const User = mongoose.model('users', userSchema);

module.exports = User;