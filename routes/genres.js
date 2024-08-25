const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

const API_KEY = process.env.API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const language = "fr" // ou req.params.language;

router.get('/get/movie', (req, res) => {

    const language = "fr" // ou req.params.language;
    fetch(`${BASE_URL}/genre/movie/list?language=${language}&api_key=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
        res.json({results: data})
        console.log("Reponse fetch genres movie:", data)
    })
    .catch(err => console.error(err));

})

router.get('/get/tv', (req, res) => {

    const language = "fr" // ou req.params.language;
    fetch(`${BASE_URL}/genre/tv/list?language=${language}&api_key=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
        res.json({results: data})
        console.log("Reponse fetch genres tv:", data)
    })
    .catch(err => console.error(err));

})


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


//Route pour récupérer une liste de genre pour movie et une liste de genre pour Tv
// la mise en forme se fera dans le frontend au moment de la selection du types dans les parmetres de list
// router.get('/get', (req, res) => {

//     const fetchMovieGenres = fetch(`${BASE_URL}/genre/movie/list?language=${language}&api_key=${API_KEY}`)
//         .then(response => response.json())
    
//     const fetchTVGenres = fetch(`${BASE_URL}/genre/tv/list?language=${language}&api_key=${API_KEY}`)
//         .then(response => response.json())
    
//     const fetchGenres = [];
    
//     Promise.all([fetchMovieGenres, fetchTVGenres])
//         .then(([dataMovie, dataTv]) => {

//             console.log("Movie genres result:", dataMovie);
//             console.log("TV genres result:", dataTv);

//             res.json({movie: dataMovie, TV: dataTv})

//         })
//         .catch(error => {
//             console.error(error);
//         });
//     })
  

   

  module.exports = router;