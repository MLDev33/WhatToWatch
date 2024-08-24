const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

const API_KEY = process.env.API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const language = "fr-FR" // ou req.params.language;

router.get('/get/movie', (req, res) => {

    const language = "fr-FR" // ou req.params.language;
    fetch(`${BASE_URL}/watch/providers/movie?language=${language}&api_key=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
        res.json({results: data})
        console.log("Reponse fetch providers movie:", data)
    })
    .catch(err => console.error(err));

})

router.get('/get/tv', (req, res) => {

    const language = "fr-FR" // ou req.params.language;
    fetch(`${BASE_URL}/watch/providers/tv?language=${language}&api_key=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
        let newData = data.results.map((provider) => {
            console.log(provider.provider_name)
        })

        res.json({results: data})
        console.log("Reponse fetch providers tv:", data)
    })
    .catch(err => console.error(err));

})

module.exports = router;