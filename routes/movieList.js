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
        const searchWay = "/discover";

    // Type movie ou serie
        // -> " /movie? " ou " /tv? "
        const type = "/movie?";
    
    // Inclure les media pour adults true ou false
        // -> " include_adult=false "
        const isAdulte = "include_adult=false";

    // Inclure les vidéos true ou false
        // -> " &include_video=false "
        const isVideo = "&include_video=false";

    // Lanquage demander
        // -> " &language=fr-FR "
        const language= "&language=fr-FR";

    // Pagination (de 1 à 100)
        // -> " &page=1 "
        const page = "&page=1";

    // Année de réalisation (???? pb lors des recherche revoir ce critére)
        // -> " &primary_release_year=2020 "
        // ou
        // -> "&release_date.lte=2022-01-01 "
        // ou 
        // -> "&release_date.gte=2022-01-01 "
        const releaseDateGte = "&release_date.gte=2022-01-01 ";

    // Region
        // -> " &region=France "

    // Ordre de trie
        // -> popularité croissante " &sort_by=popularity.asc "
        // ou
        // -> titre original croissant " &sort_by=original_title.asc "
        // ou
        // -> moyenne des votes " &sort_by=vote_average.asc "
        const sortBy = "&sort_by=vote_average.asc"

    // Note moyenne minimum
        // -> " &vote_average.gte=7 "
        const average = "&vote_average.gte=4";

    // Genre
        // -> " &with_genres=28 "
        const genre = "&with_genres=28";

    // Streaming platform
        // -> " &with_watch_providers=Netflix, Amazone prime video "
        const provider = "&with_watch_providers=Netflix, Amazone prime video";

    router.get('/moviesList', (req, res) => {
    //Query from TMDB -> `https://api.themoviedb.org/3/discoverer/movie?include_adult=true&include_video=false&language=en-EN&page=2&sort_by=popularity.desc&vote_average.gte=4&with_genres=28&with_watch_providers=Netflix, Amazone prime video&year`
        const urlModulable = `${BASE_URL}${searchWay}${type}${isAdulte}${isVideo}${language}${page}${sortBy}${average}${genre}${provider}`
        fetch(urlModulable)
            .then(response => response.json())
            .then(data => {
                res.json({result: data})
                console.log(data)
            });
    });













// let movieList = [
//     {   token: "ffbfdbd",
//         listName: "Test création d'une liste", 
//         creator: "Objet avec IdUser",
//         member: "Array objet aec IdUser",
//         option:{
//             contentType: ["Movie", "TV"],
//             genre: ["horreur", "action"],
//             streamingPlatform: ["Netflix", "Amazon prime video"],
//             rataing: 3,
//             avatard: "image",
//         },
//         media: ["Object Id movie1", "Object Id movie2",]
//     }
//]


//////////////////////////////////
//Brouillon
//   fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=fr-FR&page=100&sort_by=popularity.desc&vote_average.lte=7&with_genres=Horreur&with_watch_providers=Netflix%7CAmazon%20Prime%20Video&year=2021', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));

module.exports = router;