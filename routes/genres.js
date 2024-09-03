const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

const API_KEY = process.env.API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const language = "fr" // ou req.params.language;
let genreMovie = [];
let genreTV = [];

router.get('/get/movie', (req, res) => {

    const language = "fr" // ou req.params.language;
    fetch(`${BASE_URL}/genre/movie/list?language=${language}&api_key=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
        res.json({results: data})
        console.log("Reponse fetch genres movie:", data)
        genreMovie = data.genres;
        console.log("genreMovie:", genreMovie)
    })
    .catch(err => console.error(err));

})

router.get('/get/tv', (req, res) => {

    const language = "fr" // ou req.params.language;
    fetch(`${BASE_URL}/genre/tv/list?language=${language}&api_key=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
        //data.map((genre) => { genreTV.push(genre)})
       
        res.json({results: data})
        genreTV = data.genres;
        console.log("Reponse fetch genres tv:", data)
        console.log("genreTV:", genreTV)
    })
    .catch(err => console.error(err));

})


  module.exports = router;