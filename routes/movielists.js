const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const MovieLists = require('../models/movielists');
const User = require('../models/users');
const Media = require('../models/media.js');
const { checkBody } = require('../modules/checkBody');
const { getIdGenresByType } = require('../modules/IdGenresByType.js');

const API_KEY = process.env.API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';


// Route pour voir les lists de l'utilisateur
router.get('/get/:token', (req, res) => {
    MovieLists.find({token: req.params.token.toString()})
        .then(data => {
            console.log("lists:", data);
            res.json({result: true, userLists: data})
        })
})

// Route pour sauvegarder les paramètres d'une liste à sa création
router.post('/add/:token', async (req, res) => {
    
    try {
        // Vérification de l'utilisateur
        const user = await User.findOne({ token: req.params.token });
        if (!user) {
        return res.status(404).json({ success: false, message: "Utilisateur non trouvé" });
        }

            User.findOne({token: req.params.token.toString()})
                .then(data => {
                    if(data){

                        const newMovieLists = new MovieLists({
                            token: data.token,
                            list_name: req.body.list_name,
                            creator: data._id,
                            options:
                                {
                                    content_type: req.body.types,
                                    genre: req.body.genres,
                                    streaming_platform: req.body.providers,
                                    // average, releaseDateGte et ReleaseDateLte à rajouter au schema initial de movielists
                                    // average: Number.parseInt(req.body.rating),
                                    // releaseDateGte: req.body.releaseDateGte,
                                    // releaseDateLte: req.body.releaseDateLte,
                                },
                            avatar: req.body.avatar,
                        });

                        newMovieLists.save().then(newDoc => {
                            user.created_list.push(newDoc._id);
                            user.save()
                            console.log("user created_list:", user)
                            res.json({ result: true, movieLists: newDoc})
                        })
                    }
                    else{
                        res.json({ result: false, error: "User not found or name already exist"});
                    }
            });

        } catch (error) {
            res.status(500).json({ success: false, message: "Erreur serveur", error: error.message });
        }
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
    router.post('/addMedia', (req,res) => {

        //let types = ['Movie'];
    
        let {
            types,
            genres,
            isAdult, 
            isVideo, 
            language, 
            page,
            releaseDateGte, 
            releaseDateLte, 
            sortBy, 
            average, 
            providers
        } = req.body
    
        console.log("req.body:", req.body)
        console.log("types", types)
                    
        const urlModulable = `https://api.themoviedb.org/3/discover/${types}?include_adult=${isAdult}&include_video=${isVideo}&language=${language}&page=${Number.parseInt(page)}&release_date.gte=${releaseDateGte.toString()}&release_date.lte=${releaseDateLte.toString()}&sort_by=${sortBy}&vote_average.gte=${average}&with_genres=${genres}&with_watch_providers=${providers}&api_key=${API_KEY}`;
    
        fetch(urlModulable)
            .then(response => response.json())
            .then(data => {
                res.json({result: data})
                console.log(data)
                console.log(typeof page)
            });
    })

module.exports = router;