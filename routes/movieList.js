const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

const API_KEY = process.env.API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

//Paramètres de la liste définie dans la page liste de l'application
    // 1 - Movie ou serie
    // 2 - Genre
    // 3 - Minimum rating
    // 4 - Streaming platforms
    // 5 - Release date

//Elements query de THDB entre guillemets ci-dessous 
//(propriété avant le "="= variable à paramétre après le "=")
//( pour les multichoix utiliser dans la query TMDB 
    //-> la virgule " ," = " %2C " 
    // ou
    // le pipe " | " %7C ")

    //ELEMENTS DE QUERY TMDB:
    // Mode de recherche 
        // -> " /discover "

    // Type movie ou serie
        // -> " /movie? " ou " /tv? "
    
    // Inclure les media pour adults true ou false
        // -> " include_adult=false "

    // Inclure les vidéos true ou false
        // -> " &include_video=false "

    // Lanquage demander
        // -> " &language=fr-FR "

    // Pagination
        // -> " &page=1 "

    // Année de réalisation 
        // -> " &primary_release_year=2020 "

    // Region
        // -> " &region=France "

    // Ordre de trie
        // -> popularité croissante " &sort_by=popularity.asc "
        // ou
        // -> titre original croissant " &sort_by=original_title.asc "
        // ou
        // -> moyenne des votes " &sort_by=vote_average.asc "

    // Note moyenne minimum
        // -> " &vote_average.lte=7 "

    // Genre
        // -> " &with_genres=horreur "

    

/* GET movie list. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

//////////////////////////////////
//Brouillon
//   fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=fr-FR&page=100&sort_by=popularity.desc&vote_average.lte=7&with_genres=Horreur&with_watch_providers=Netflix%7CAmazon%20Prime%20Video&year=2021', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));

module.exports = router;