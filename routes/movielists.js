const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const MovieLists = require('../models/movielists');
const User = require('../models/users');
const Media = require('../models/media.js');
const { getMoviesProviders } = require('../modules/getMoviesProviders.js')
const moment = require('moment');

const API_KEY = process.env.API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const VALID_MOVIE_GENRES = [28, 12, 16, 35, 80, 99, 18, 10751, 14, 36, 27, 10402, 9648, 10749, 878, 10770, 53, 10752, 37];
const VALID_TV_GENRES = [10759, 16, 35, 80, 99, 18, 10751, 10762, 9648, 10763, 10764, 10765, 10766, 10767, 10768, 37];
const MOVIE_GENRE_NAMES = { 28: 'Action', 12: 'Adventure', 16: 'Animation', 35: 'Comedy', 80: 'Crime', 99: 'Documentary', 18: 'Drama', 10751: 'Family', 14: 'Fantasy', 36: 'History', 27: 'Horror', 10402: 'Music', 9648: 'Mystery', 10749: 'Romance', 878: 'Science Fiction', 10770: 'TV Movie', 53: 'Thriller', 10752: 'War', 37: 'Western' };
const TV_GENRE_NAMES = { 10759: 'Action & Adventure', 16: 'Animation', 35: 'Comedy', 80: 'Crime', 99: 'Documentary', 18: 'Drama', 10751: 'Family', 10762: 'Kids', 9648: 'Mystery', 10763: 'News', 10764: 'Reality', 10765: 'Sci-Fi & Fantasy', 10766: 'Soap', 10767: 'Talk', 10768: 'War & Politics', 37: 'Western' };


/**
 * Fonction qui vérifie si le paramètre est vide ou pas
 * 
 * @param {(number|boolean|string|[]|{})} variable 
 * @returns true | false
 */
function isEmpty(variable) {
    return variable === null || variable === undefined || variable === "" || variable.length === 0
}


/**
 * Fonction qui vérifie si le paramètre est un array ou s'il est vide
 * 
 * @param {*} array 
 * @returns retur true | false
 */
function isArray(array) {
    return Array.isArray(array) || array.length === 0
}

/**
 * Route pour voir les lists de l'utilisateur avec son token
 * 
 * @param { string } token
 * 
 */
router.get('/get/:token', (req, res) => {
    MovieLists.find({ token: req.params.token.toString() })
        .then(data => {
            console.log("lists:", data);
            res.json({ result: true, userLists: data })
        })
})


/**
 * Route pour voir les lists de l'utilisateur avec l'id de la list
 * 
 * @param { string } _id list
 * 
 */
router.get('/get/media/:id', async (req, res) => {

    try {
        const listMedia = await MovieLists.find({ _id: req.params.id })
        if (!MovieLists) {
            return res.status(404).json({ success: false, message: "List non trouvée" });
        }

        console.log("movie result:", listMedia.movie)
        res.status(200).json({ success: true, listMedia })

    } catch (error) {
        console.error('Error occurred:', error);
        res.status(500).json({ success: false, message: error.message });
    }
})

// Route pour consulter les lists déjà existantes de l'utilisateur
router.get('/user/lists/:token', async (req, res) => {


    try {
      const user = await User.findOne({ token: req.params.token }).populate('created_list');
      console.log("user await:",user)
      if (!user) {
        return res.status(404).json({ success: false, message: "Utilisateur non trouvé" });
      }
  
      const listsMedia = user.created_list.map(list => ({
        ...list.toObject(),
      }));
  
      console.log("lists:",listsMedia)
  
      res.status(200).json({ 
        success: true, 
        listsMedia,
        totalList: listsMedia.length
      });
  
            
    } catch (error) {
        res.status(500).json({ success: false, message: "Erreur serveur", error: error.message });
    }
  })

/**
 * Route pour sauvegarder les paramètres d'une liste à sa création
 * Puis
 * 
 * @param { token }
 * 
 */
router.post('/add/:type/:token', async (req, res) => {

    try {
        // Vérification de l'utilisateur
        const user = await User.findOne({ token: req.params.token }); 
        if (!user) {
            return res.status(404).json({ success: false, message: "Utilisateur non trouvé" });
        }

        // crée une movieList en sauvegardant les paramètres de la liste
        User.findOne({ token: req.params.token.toString() })
            .then(async data => {
                if (data) {
                    const movieslists = await addMedia(req.body, 1 , req.params.type)
                    const newMovieLists = new MovieLists({
                        token: data.token, // remplacer par id user
                        list_name: req.body.list_name,
                        creator: data._id,
                        options:
                        {
                            content_type: req.body.types,
                            genre: req.body.genres,
                            streaming_platform: req.body.providers,
                            // average, releaseDateGte et ReleaseDateLte à rajouter au schema initial de movielists
                            average: req.body.rating,
                            releaseDateGte: req.body.releaseDateGte,
                            // releaseDateLte: req.body.releaseDateLte,
                        },
                        avatar: req.body.avatar,
                        movies: movieslists,
                    });
                    console.log("moviesLists", movieslists)
                    newMovieLists.save().then(newDoc => {
                        user.created_list.push(newDoc._id);
                        user.save()
                        console.log("user created_list:", user)
                        console.log("type:", req.body.types)
                        console.log("movies:", movieslists)
                        res.status(200).json({ result: true, result: newDoc }) //movieLists
                    })
                }
                else {
                    res.status(400).json({ result: false, error: "User not found or name already exist" });
                }
            });

    } catch (error) {
        res.status(500).json({ success: false, message: "Erreur serveur", error: error.message });
    }
})


/**
 * Fonction qui propose des medias à l'utilisateur selon les critères selectionnés
 * en paramètres dans l'application :
 * 1 - Name
 * 2 - Type: Movie ou serie
 * 3 - Genres
 * 4 - Minimum rating
 * 5 - Streaming platforms
 * 6 - Release date Gte
 * 7 - Release date Lte
 * 
 * @param {(number|boolean|string|[]|{})} filters 
 * @returns un tableau d'objets contenant les media proposés à l'utilisateurs
 */
async function addMedia(filters, pagefilter, type) {


    let {
        //type, // variable overrride => pb d'utilisation de Promise.all([ , ])
        genres,
        isAdult,
        isVideo,
        language,
        releaseDateGte,
        releaseDateLte,
        sortBy,
        average,
        providers
    } = filters

    
    let page = pagefilter;
    genres = isEmpty(genres) ? "" : genres.map(genre => { return genre.id }).slice(",").join("|");
    providers = isEmpty(providers) ? "" : providers.lenght === 1 ? providers[0].toString() : providers.slice(",").join("|");
    average = isEmpty(average) ? "" : Number.parseInt(average);


    let include_adult = isEmpty(isAdult) ? `&include_adult=${false}` : `&include_adult=${isAdult}`;
    let include_video = isEmpty(isVideo) ? `&include_video=${false}` : `&include_video=${isAdult}`;
    let languageChoice = isEmpty(language) ? `&language=${"fr-Fr"}` : `&language=${language}`;
    let pageSelect = isEmpty(page) ? `&page=${1}` : `&page=${Number.parseInt(page)}`;
    let release_dateGte = isEmpty(releaseDateGte) ? `` : `&release_date.gte=${releaseDateGte.toString()}-01-01`;
    let release_dateLte = isEmpty(releaseDateLte) ? `` : `&release_date.lte=${releaseDateLte.toString()}`;
    let sort_by = isEmpty(sortBy) ? `&sort_by=${"popularity.desc"}` : `&sort_by=${sortBy}`;
    let vote_averageGte = isEmpty(average) ? `` : `&vote_average.gte=${average}`;
    let with_genres = isEmpty(genres) ? `` : `&with_genres=${genres}`;
    let with_watch_providers = isEmpty(providers) ? `` : `&with_watch_providers=${providers}`;

    //console.log("req.body:", req.body)
    //console.log("types", type)

    //const urlModulable = `https://api.themoviedb.org/3/discover/${types}?include_adult=${isAdult}&include_video=${isVideo}&language=${language}&page=${Number.parseInt(page)}&release_date.gte=${releaseDateGte.toString()}&release_date.lte=${releaseDateLte.toString()}&sort_by=${sortBy}&vote_average.gte=${average}&with_genres=${genres}&with_watch_providers=${providers}&api_key=${API_KEY}`;
    const urlModulable = `${BASE_URL}/discover/${type}?${include_adult}${include_video}${languageChoice}${pageSelect}${release_dateGte}${release_dateLte}${sort_by}${vote_averageGte}${with_genres}${with_watch_providers}&api_key=${API_KEY}`;

    console.log("url", urlModulable)

    const response = await fetch(urlModulable)
    const data = await response.json()

    console.log("DATA", data)

    let contenu = [];

    const listMedia = data.results.map((item) => {
        //const movieId = item.id;
        //const { listProviders, watchLink } = await getMoviesProviders(movieId, BASE_URL, API_KEY)
        const releaseDateGte = moment(item.release_date || item.first_air_date).format('YYYY-MM-DD');

        return {
            type: type === 'movie' ? 'Film' : 'Série',
            titre: item.title || item.name,
            annee: releaseDateGte,
            description: item.overview,
            genre: item.genre_ids ? item.genre_ids.map(id => type === 'movie' ? MOVIE_GENRE_NAMES[id] : TV_GENRE_NAMES[id]).join(", ") : [],
            poster: item.poster_path,
            id: item.id,
            popularite: item.vote_average,
            vote: item.vote_count,
            // plateformes: providers.map(p => ({
            //     id: p.provider_id,
            //     nom: p.provider_name,
            //     logo: p.logo_path // Utilisez directement le logo_path du fournisseur
            //   })),
            // link: watchLink,
        }
    })
    console.log("data:", data);
    return listMedia
}


router.put('/moremedia/:id', async (req, res) => {
    try {
        const listMedia = await MovieLists.findById(req.params.id)
        if (!MovieLists) {
            return res.status(404).json({ success: false, message: "List non trouvée" });
        }

        const moreMedia = await addMediaMovies(req.body, page++)
        

        MovieLists.updateOne(
            {movies: listMedia.movies},
            {movie: [...listMedia.movies, moreMedia]}


        ).then(() => {
            MovieLists.find().then(data => {
                console.log(data);
            });
        });

        console.log("movie result:", listMedia.movie)
        res.status(200).json({ success: true, listMedia })

    } catch (error) {
        console.error('Error occurred:', error);
        res.status(500).json({ success: false, message: error.message });
    }

})










router.delete("/delete/:id/:token", async (req, res) => {

    try {
        // Vérification de l'utilisateur
        const user = await User.findOne({ token: req.params.token });
        if (!user) {
            return res.status(404).json({ success: false, message: "Utilisateur non trouvé" });
        }

        MovieLists.findOne({ _id: req.params.id }).then((data) => {
            if (data) {
                MovieLists.deleteOne({
                    _id: req.params.id,
                }).then((deletedDoc) => {
                    if (deletedDoc.deletedCount > 0) {
                       // console.log(user.created_list.filter(e => e.toString() === req.params.id))
                        user.created_list = user.created_list.filter(e => e.toString() != req.params.id)
                        user.save()
                        MovieLists.find().then((data) => {
                            res.status(200).json({ result: true, token: data.id });
                        })
                    } else {
                        res.status(400).json({ result: false, error: "MovieList not found" });
                    }
                }
                )
            } else {
                res.status(500).json({ success: false, message: "Erreur serveur", error: error.message });
            }
        });
    } catch (error) {
        res.status(500).json({ success: false, message: "Erreur serveur", error: error.message });
    }


});

router.get('/get/:token/:id', async (req, res) => {

    try {
        MovieLists.findById(req.params.id)
            .then(data => {
                if (data) {

                    console.log(" result show:", data.creator)
                    res.status(200).json({ success: true, result: data })
                }
                else {
                    return res.status(404).json({ result: false, error: "List non trouvée pour cet utilisateur" });
                }
            })

    } catch (error) {
        console.error('Error occurred:', error);
        res.status(500).json({ success: false, message: error.message });
    }



})

module.exports = router;