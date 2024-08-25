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


// Route pour sauvegarder les paramètres d'une liste à sa création
router.post('/add/:token', (req, res) => {
    //    let userId = User.findOne({token: (req.params.token).toString()})
    //         .then((data) => {res.json({ObjectIdUser: data.id})})

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
                        res.json({ result: true, movieLists: newDoc})
                    })
                }
                else{
                    res.json({ result: false, error: "User not found"});
                }
                
    });
})


module.exports = router;