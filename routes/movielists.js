const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const Movielists = require('../models/movielists')
const User = require('../models/users')
const { checkBody } = require('../modules/checkBody');
const { getIdGenresByType } = require('../modules/IdGenresByType.js')

const API_KEY = process.env.API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

// Route pour consulter les lists déjà existante de l'utilisateur
router.get('/get/:token', (req, res) => {
    Movielists.find({ token: req.params.token }).then(data => {
        if (data) {
          res.json({ result: true, data: data});
        } else {
          res.json({ result: false, error: 'Medialists not found' });
        }
    });
  })

// Route qui propose des media à l'utilisateur selon les critères de sa liste
//Paramètres de la liste définie dans la page liste de l'application
    // 1 - Name
    // 2 - Type: Movie ou serie
    // 3 - Genres
    // 4 - Minimum rating
    // 5 - Streaming platforms
    // 6 - Release date Gte
    // 7 - Release date Lte
router.post('/add/:token', (req,res) => {

    let {
        type,
        genres,
        isAdult, 
        isVideo, 
        language, 
        page,
        releaseDateGte, 
        releaseDateLte, 
        sortBy, 
        average, 
        providers,
        list_name,
    } = req.body

    console.log("req.body:", req.body)
    console.log("type", type)

    if(!checkBody(req.body, ['list_name', 'type'])) {
        res.json({ result: false, error: 'Missing or empty fields' });
        return;
    }
                
    const urlModulable = `https://api.themoviedb.org/3/discover/${type}?include_adult=${isAdult}&include_video=${isVideo}&language=${language}&page=${Number.parseInt(page)}&release_date.gte=${releaseDateGte.toString()}&release_date.lte=${releaseDateLte.toString()}&sort_by=${sortBy}&vote_average.gte=${average}&with_genres=${genres}&with_watch_providers=${providers}&api_key=${API_KEY}`;
    //const urlModulable = `https://api.themoviedb.org/3/discover/${type}?include_adult=false&include_video=false&language=fr-FR&page=1&sort_by=popularity.asc&vote_average.gte=${Number.parseInt(average)}&with_genres=35&with_watch_providers=Netflix&api_key=${API_KEY}`;


    fetch(urlModulable)
        .then(response => response.json())
        .then(data => {
            res.json({result: data})
            console.log(data)
            console.log(typeof page)
        });
})


  //router.post('/add/:token', (req, res) => {
        //console.log(req.body.friends)
    // if (!checkBody(req.body, ['list_name', 'types'])) {
    //     res.json({ result: false, error: 'Missing or empty fields' });
    //     return;
    //   }


      //cherhcher l'iD de l'utilisateur
    //   let userId = User.findOne({token: (req.params.token).toString()})
    //     .then((data) => {res.json({ObjectIdUser: data.id})})

    // let friends = req.body.friends
    //     (friends).then((data) => {res.json({friends: data})}, console.log(data))

    //   let friendId = (req.body.friends).map((friend) => {
    //     User.findOne({token : (req.body.friends).toString()})
    //         .then((data) => {res.json({members: data})},
    //         console.log("data:", data))
     // }) // rajouter condition si vide
    
      // Vérifie que le nom de liste n'existe pas déjà
//   Movielists.findOne({ list_name: req.body.name }).then(data => {
//     if (data === null) {

//       const newMovieList = new MovieList({
//         token: req.params.token,
//         username: req.body.username,
//         email: req.body.email,
//         list_name: req.body.list_name,
//         creator: { ref: userId }, // Vérifier si c'est la bonne méthode pour ajouter
//         members: friendId,
//         options: [
//             {
//                 content_type: req.body.types,
//                 genre: req.body.genres,
//                 streaming_platform: req.body.providers,
//             }
//         ],
//         movies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Media' }], // Mettre le résulta du fectch de la list selon les critères.
//         movie_liked: [{
//             movie_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Media' },
//             liked_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
//             liked_by_all: Boolean,
//             watched_by: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
//             scheduled_time: Date,
//             notification_sent: Boolean,
//         }],
//         avatar: req.body.avatar,
//       });

//       newUser.save().then(newDoc => {
        //res.json({ result: true, test: userId });
    //   });
    // } else {
    //   // User already exists in database
    //   res.json({ result: false, error: 'User already exists' });
    // }
//   });
 // })



















































////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
//////////// ELEMENTS DE BROUILLON CI-DESSOUS A SUPPRIMER A LA FIN /////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

// let test = ["Movie1", "Movie2"];

//Paramètres de la liste définie dans la page liste de l'application
    // 1 - Name
    // 2 - Type: Movie ou serie
    // 3 - Genre
    // 4 - Minimum rating
    // 5 - Streaming platforms
    // 6 - Release date

// function getListParameters() {
//     console.log("test")
//     return "test"
// };

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

    
       

    // router.get('/add', async (req, res) => {
    //     //res.json({result: "test route /add/list acces ok"})
    //     //Liste des paramètres de la route
    //     //let types = ["Movie"];

    //     let {
    //         types,
    //         genres,
    //         isAdult, 
    //         isVideo, 
    //         language, 
    //         page,
    //         releaseDateGte, 
    //         releaseDateLte, 
    //         sortBy, 
    //         average, 
    //         providers
    //     } = req.body

    //     console.log("req.body:", req.body)
    //     console.log("types", types)

        // const idGenresMap = types.map((element) => {
        //     //Extraire les id de la list des genres
        //     const genreMovieSet = new Set();
        //     genres.map((dataGenre) => {
        //         genreMovieSet.add(dataGenre.id)
        //     })
        //     console.log("genreMovieSet view:", genreMovieSet )

        //     //Route pour définir les url selon le type de média Movie ou Serie
        //     if(element.toLowerCase() === "movie"){
        //         let type = element;
        //         console.log("route movie way ok");
        //         const urlMovie = `https://api.themoviedb.org/3/discover/${types}?include_adult=${isAdult}&include_video=${isVideo}&language=${language}&page=${Number.parseInt(page)}&release_date.gte=${releaseDateGte.toString()}&release_date.lte=${releaseDateLte.toString()}&sort_by=${sortBy}&vote_average.gte=${average}&with_genres=${getGenresByType(types)}&with_watch_providers=${providers}&api_key=${API_KEY}`;
                
        //         fetch(urlMovie)
        //         .then(response => response.json())
        //         .then(data => {
        //             res.json({result: data});
        //             console.log(data);
        //             console.log(typeof page);
        //             responseMovie = data;
        //         });
        //     }

        //     console.log("response", reponseMovie)
        // })






        //Query from TMDB -> `https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=fr-FR&page=1&release_date.gte=2022-01-01&sort_by=vote_average.asc&vote_average.gte=4&with_genres=28&with_watch_providers=Netflix,Amazone prime video`
            //const urlModulable = `https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=fr-FR&page=1&release_date.gte=2022-01-01&sort_by=popularity.as&vote_average.gte=4&with_genres=28&with_watch_providers=Netflix,%20Amazone%20prime%20video&api_key=${API_KEY}`
            //const urlModulable = `${BASE_URL}${searchWay}${type}${isAdult}${isVideo}${language}${page}${sortBy}${average}${genre}${provider}&api_key=${API_KEY}`
            //const urlModulable = `${BASE_URL}/discover/${types}?include_adult=${isAdult}&include_video=${isVideo}&language=${language}&page=${page}&release_date.gte=${releaseDateGte}&sort_by=${sortBy}&vote_average.gte=${average}&with_genres=${genres}&with_watch_providers=${provider}&api_key=${API_KEY}`
            //const urlModulable = `${BASE_URL}/discover/${types}?include_adult=${isAdult}&include_video=${isVideo}&language=${language}&page=${page}&release_date.gte=${releaseDateGte}&sort_by=${sortBy}&vote_average.gte=${average}&with_genres=${genres}&with_watch_providers=${providers}&api_key=${API_KEY}`
            //const {seachWay, type, isAdult, isVideo, language, page, sortBy, average, genre, provider, key} = req.params;
            //const urlModulable = `${BASE_URL}/${searchWay}/${type}&api_key=${API_KEY}`
            
    //         const urlModulable = `https://api.themoviedb.org/3/discover/${types}?include_adult=${isAdult}&include_video=${isVideo}&language=${language}&page=${Number.parseInt(page)}&release_date.gte=${releaseDateGte.toString()}&release_date.lte=${releaseDateLte.toString()}&sort_by=${sortBy}&vote_average.gte=${average}&with_genres=${getIdGenresByTypes(types)}&with_watch_providers=${providers}&api_key=${API_KEY}`

    //         fetch(urlModulable)
    //             .then(response => response.json())
    //             .then(data => {
    //                 res.json({result: data})
    //                 console.log(data)
    //                 console.log(typeof page)
    //             });
    // });

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