const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

const API_KEY = process.env.API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

router.get('/:language', (req, res) => {
    const language = req.params.language;
    fetch(`https://api.themoviedb.org/3/genre/movie/list?language=${language}&api_key=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
        res.json({results: data})
        console.log(data)
    })
    .catch(err => console.error(err));

    
})

  
  module.exports = router;