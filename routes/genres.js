const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

const API_KEY = process.env.API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const language = "fr" // ou req.params.language;

// router.get('/get', (req, res) => {

//     console.log("include movie", req.body.types.includes("Movie"))

//     const language = "fr" // ou req.params.language;
//     fetch(`${BASE_URL}/genre/movie/list?language=${language}&api_key=${API_KEY}`)
//     .then(response => response.json())
//     .then(data => {
//         res.json({results: data})
//         console.log("Reponse fetch genres:", data)
//     })
//     .catch(err => console.error(err));

// })


// router.get('/get/', (req, res) => {

// const fetchMovieGenres = fetch(`${BASE_URL}/genre/movie/list?language=${language}&api_key=${API_KEY}`)
//     .then(response => response.json())

// const fetchTVGenres = fetch(`${BASE_URL}/genre/tv/list?language=${language}&api_key=${API_KEY}`)
//     .then(response => response.json())

// const fetchGenres = [];

// Promise.all([fetchMovieGenres, fetchTVGenres])
//     .then(([dataMovie, dataTv]) => {
//         res.json({results: [dataMovie, dataTv]})
//         console.log("Movie genres result:", dataMovie);
//         console.log("TV genres result:", dataTv);
//     })
//     .catch(error => {
//         console.error(error);
//     });
// })

router.get('/get/', (req, res) => {

    const fetchMovieGenres = fetch(`${BASE_URL}/genre/movie/list?language=${language}&api_key=${API_KEY}`)
        .then(response => response.json())
    
    const fetchTVGenres = fetch(`${BASE_URL}/genre/tv/list?language=${language}&api_key=${API_KEY}`)
        .then(response => response.json())
    
    const fetchGenres = [];
    
    Promise.all([fetchMovieGenres, fetchTVGenres])
        .then(([dataMovie, dataTv]) => {
            res.json({results: [dataMovie, dataTv]})
            console.log("Movie genres result:", dataMovie);
            console.log("TV genres result:", dataTv);
        })
        .catch(error => {
            console.error(error);
        });
    })
  

   

  module.exports = router;