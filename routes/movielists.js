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

function isEmpty(variable) {
    return variable === null || variable === undefined || variable === "" || variable.length === 0
}

function isArray(array) {
    return Array.isArray(array) || array.length === 0
}

// Route pour voir les lists de l'utilisateur
router.get('/get/:token', (req, res) => {
    MovieLists.find({ token: req.params.token.toString() })
        .then(data => {
            console.log("lists:", data);
            res.json({ result: true, userLists: data })
        })
})

// Route pour voir les lists de l'utilisateur
router.get('/get/listMedia/:token', (req, res) => {
    MovieLists.find({ token: req.params.token.toString() })
        .then(data => {
            console.log("lists:", data);
            res.json({ result: true, userLists: data })
        })
})

async function getProviderDetails(type, id) {
    const url = `${BASE_URL}/${type}/${id}/watch/providers?api_key=${API_KEY}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        //data contient results , avec une clé langue et une clé flatrate : {FR : {link : '', flatrate : []}}
        //exemple de reponse pour friends ():
        /*
     "link": "https://www.themoviedb.org/tv/1668-friends/watch?locale=FR",
          "flatrate": [
            {
              "logo_path": "/fksCUZ9QDWZMUwL2LgMtLckROUN.jpg",
              "provider_id": 1899,
              "provider_name": "Max",
              "display_priority": 29
            }
          ]
        */
        //on recupere les plateformes de streaming sur lesquelles le contenu est disponible
        const providers = data.results?.FR?.flatrate || [];
        //on recupere le lien pour regarder le contenu
        const link = data.results?.FR?.link || '';
        return { providers, link };
    } catch (error) {
        console.error(`Error fetching provider details for ${type} with ID ${id}:`, error);
        return { providers: [], link: '' };
    }
}






// Route pour sauvegarder les paramètres d'une liste à sa création
router.post('/add/:token', async (req, res) => {

    try {
        // Vérification de l'utilisateur
        const user = await User.findOne({ token: req.params.token });
        if (!user) {
            return res.status(404).json({ success: false, message: "Utilisateur non trouvé" });
        }

        User.findOne({ token: req.params.token.toString() })
            .then(async data => {
                if (data) {
                    const movieslists = await addMedia(req.body)
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
                        movies: movieslists,
                    });
                    console.log("moviesLists", movieslists)
                    newMovieLists.save().then(newDoc => {
                        user.created_list.push(newDoc._id);
                        user.save()
                        console.log("user created_list:", user)
                        res.json({ result: true, movieLists: newDoc })
                    })
                }
                else {
                    res.json({ result: false, error: "User not found or name already exist" });
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
async function addMedia(filters) {


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
        providers
    } = filters

    type = "movie";

    let include_adult = isEmpty(isAdult) ? `&include_adult=${false}` : `&include_adult=${isAdult}`;
    let include_video = isEmpty(isVideo) ? `&include_video=${false}` : `&include_video=${isAdult}`;
    let languageChoice = isEmpty(language) ? `&language=${"fr-Fr"}` : `&language=${language}`;
    let pageSelect = isEmpty(language) ? `&page=${1}` : `&page=${Number.parseInt(page)}`;
    let release_dateGte = isEmpty(releaseDateGte) ? `` : `&release_date.gte=${releaseDateGte.toString()}`;
    let release_dateLte = isEmpty(releaseDateLte) ? `` : `&release_date.lte=${releaseDateLte.toString()}`;
    let sort_by = isEmpty(sortBy) ? `&sort_by=${"popularity.desc"}` : `&sort_by=${sortBy}`;
    let vote_averageGte = isEmpty(average) ? `` : `&vote_average.gte=${average}`;
    let with_genres = isEmpty(genres) ? `` : `&with_genres=${genres}`;
    let with_watch_providers = isEmpty(providers) ? `` : `&with_watch_providers=${providers}`;

    let totalPages;
    let totalResult;

    //console.log("req.body:", req.body)
    //console.log("types", type)

    //const urlModulable = `https://api.themoviedb.org/3/discover/${types}?include_adult=${isAdult}&include_video=${isVideo}&language=${language}&page=${Number.parseInt(page)}&release_date.gte=${releaseDateGte.toString()}&release_date.lte=${releaseDateLte.toString()}&sort_by=${sortBy}&vote_average.gte=${average}&with_genres=${genres}&with_watch_providers=${providers}&api_key=${API_KEY}`;
    const urlModulable = `https://api.themoviedb.org/3/discover/${type}?${include_adult}${include_video}${languageChoice}${pageSelect}${release_dateGte}${release_dateLte}${sort_by}${vote_averageGte}${with_genres}${with_watch_providers}&api_key=${API_KEY}`;

    console.log("url", urlModulable)

    const response = await fetch(urlModulable)
    const data = await response.json()

    const listMedia = data.results.map((item) => {
        return {
            id: item.id,

            type: type === 'movie' ? 'film' : 'série',
            titre: item.title || item.name,
            annee: releaseDateGte, // Date formatée au format YYYY-MM-DD
            description: item.overview,
            //genre: item.genre_ids ? item.genre_ids.map(id => type === 'movie' ? MOVIE_GENRE_NAMES[id] : TV_GENRE_NAMES[id]) : [],
            poster: item.poster_path,
            id: item.id,
            popularite: item.vote_average,
            vote: item.vote_count,
            // plateformes: providers.map(p => ({
            //   id: p.provider_id,
            //   nom: p.provider_name,
            //   logo: p.logo_path
            // })),
            //lien: link,
        }
    })

    return listMedia

}


module.exports = router;