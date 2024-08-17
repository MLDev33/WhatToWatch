const mongoose = require('mongoose');

const mediaSchema = mongoose.Schema({
    tmdbId: { type: Number, required: true, unique: true },
    mediaType: { type: String, enum: ['film', 'série'], required: true },
    title: String,
    poster: String,
    adult: Boolean,
    genre: Array,
    release_date: Date,
    description: String,
    popularity: Number,
    vote_count: Number, 
    providers: [{
        providerId: Number,
        providerName: String,
        logoPath: String
      }],
    link: String
  });


const Media = mongoose.model('medias', mediaSchema);

module.exports = Media;