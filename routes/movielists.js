const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

const API_KEY = process.env.API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

let test = ["Movie1", "Movie2"];

//Paramètres de la liste définie dans la page liste de l'application
    // 1 - Movie ou serie
    // 2 - Genre
    // 3 - Minimum rating
    // 4 - Streaming platforms
    // 5 - Release date

function getListParameters() {
    console.log("test")
    return "test"
};
    //Elements query de THDB entre guillemets ci-dessous 
    //(propriété avant le "="= variable à paramétre après le "=")
    //( pour les multichoix utiliser dans la query TMDB 
        //-> la virgule " retranscri dans la route pas -> "%2C " 
        // ou
        // le pipe " | " retranscri dans la route pas ->  "%7C "

        //ELEMENTS DE QUERY TMDB:
        // Mode de recherche (paramètres de la route)
            // -> " /discover "
            //Définie comme fixe
                //const searchWay = "discover";

        // Type de média movie ou serie
            // -> " /movie? " ou " /tv? "
            //Donnée variable définie dans le front sur la page de création d'une liste
            // au formation Array 
                //const types = ["movie", "TV"];
        
        // Inclure les media pour adults true ou false
            // -> " include_adult=false "
            //Donnée fixe
                //const isAdult = "false";

        // Inclure les vidéos true ou false
            // -> " &include_video=false "
            // Définie comme fixe
                //const isVideo = "false";

        // Lanquage demander
            // -> " &language=fr-FR "
            //Variable avec valeur par défaul fr-FR
            // Définie comme fixe (si variable à récupérer du profil de l'utilisateur)
                //const language= "fr-FR";

        // Pagination (de 1 à 100)
            // -> " &page=1 "
            //Donnée avec un minimum et un maximum de 0 à 100
            //MEMO faire un random des pages de la responses pour afficher les films de manières aléatoires
                //const page = "1";


        // Année de réalisation (???? pb lors des recherche revoir ce critére)
            // Possibilité de définir une année de début et une année de fin
            // avec le slicer de la page de création de list
            // -> " &primary_release_year=2020 "
            // ou
            // -> "&release_date.lte=2022-01-01 "
            // ou 
            // -> "&release_date.gte=2022-01-01 "
                //const releaseDateGte = "2022-01-01";

        // Region
            // -> " &region=France "
            //Variable avec valeur par défaul fr-FR
            // A récupérer du profil de l'utilisateur

        // Ordre de trie
            // -> popularité croissante " &sort_by=popularity.asc "
            // ou
            // -> titre original croissant " &sort_by=original_title.asc "
            // ou
            // -> moyenne des votes " &sort_by=vote_average.asc "
                //const sortBy = "vote_average.asc"

        // Note moyenne minimum
            // -> " &vote_average.gte=7 "
            //Donnée variable de type number
                //const average = "4";

        // Genre
            // -> " &with_genres=28 "
            // Donnée variable correspond à l'id du genre du media
            // Certains genres ne sont disponibles que pour les movie, d'autres que pour les series
            // ou pour les deux type de média
                //const genre = "28";

        // Streaming platform
            // -> " &with_watch_providers=Netflix, Amazone prime video "
            // Donnée variables accessibles selon la région
                //const provider = "Netflix, Amazone prime video";

    
       

    router.get('/add', async (req, res) => {
        //res.json({result: "test route /add/list acces ok"})
        //Liste des paramètres de la route
        const { 
            types, 
            isAdult, 
            isVideo, 
            language, 
            page,
            releaseDateGte, 
            releaseDateLte, 
            sortBy, 
            average, 
            genres,
            providers
        } = req.body
        console.log("req.params:", req.params)


        // const typesMap = types.map((element) => {
        //     //Route pour définir les url selon le type de média Movie ou Serie
        //     if(req.params.types.toLower.includes("movie")){
        //         consoel.log("route movie way ok")
        //     }
        // })






    //Query from TMDB -> `https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=fr-FR&page=1&release_date.gte=2022-01-01&sort_by=vote_average.asc&vote_average.gte=4&with_genres=28&with_watch_providers=Netflix,Amazone prime video`
        //const urlModulable = `https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=fr-FR&page=1&release_date.gte=2022-01-01&sort_by=popularity.as&vote_average.gte=4&with_genres=28&with_watch_providers=Netflix,%20Amazone%20prime%20video&api_key=${API_KEY}`
        //const urlModulable = `${BASE_URL}${searchWay}${type}${isAdult}${isVideo}${language}${page}${sortBy}${average}${genre}${provider}&api_key=${API_KEY}`
        //const urlModulable = `${BASE_URL}/discover/${types}?include_adult=${isAdult}&include_video=${isVideo}&language=${language}&page=${page}&release_date.gte=${releaseDateGte}&sort_by=${sortBy}&vote_average.gte=${average}&with_genres=${genres}&with_watch_providers=${provider}&api_key=${API_KEY}`
        //const urlModulable = `${BASE_URL}/discover/${types}?include_adult=${isAdult}&include_video=${isVideo}&language=${language}&page=${page}&release_date.gte=${releaseDateGte}&sort_by=${sortBy}&vote_average.gte=${average}&with_genres=${genres}&with_watch_providers=${providers}&api_key=${API_KEY}`
        //const {seachWay, type, isAdult, isVideo, language, page, sortBy, average, genre, provider, key} = req.params;
        //const urlModulable = `${BASE_URL}/${searchWay}/${type}&api_key=${API_KEY}`
        
        const urlModulable = `https://api.themoviedb.org/3/discover/${types}?include_adult=${isAdult}&include_video=${isVideo}&language=${language}&page=${Number.parseInt(page)}&release_date.gte=${releaseDateGte.toString()}&release_date.lte=${releaseDateLte.toString()}&sort_by=${sortBy}&vote_average.gte=${average}&with_genres=${genres}&with_watch_providers=${providers}&api_key=${API_KEY}`

        fetch(urlModulable)
            .then(response => response.json())
            .then(data => {
                res.json({result: data})
                console.log(data)
                console.log(typeof page)
            });
    });

    ///:seachWay/:type/:isAdult/:isVideo/:language/:page/:sortBy/:average/:genre/:provider/:key










// à supprimer
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
//     .catch(error => console.error(error));

module.exports = router;