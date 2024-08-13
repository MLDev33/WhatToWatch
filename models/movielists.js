const mongoose = require('mongoose');

const movieListSchema = mongoose.Schema({
    token: String,
    list_name: String (required: true),
    creator: { type: mongoose.Schema.Types.ObjectId, ref: "User", (required: true)},
    members: [{ type: mongoose.Schema.Types.ObjectId ref: "User"}],
    options: {
        content_type: String,
        genre: String,
        streaming_plateforms: String,
    },
    media: [{type: mongoose.Schema.Types.ObjectId, ref: "Media"}]
});

const MovieList = mongoose.model('movieLists', movieListSchema);

module.exports = MovieList;