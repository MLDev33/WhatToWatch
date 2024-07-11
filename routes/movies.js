// Importation du module express pour la création du serveur et des routes
var express = require('express');
// Création d'un routeur express pour gérer les routes spécifiques à ce module
var router = express.Router();
// Importation du module node-fetch pour effectuer des requêtes HTTP
const fetch = require('node-fetch');

const API_KEY = process.env.API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

// cette liste contient les identifiants des plateformes de streaming pour lesquelles on peut rechercher du contenu
// cette liste n'est pas exhaustive
const PROVIDER_IDS = {
  'Netflix': 8,
  'Netflix basic with Ads': 1796,
  'Amazon Prime Video': 119,
  'Disney+': 337,
  'Hulu': 15,
  'Canal+': 381,
  'Max': 1899,
  'Crunchyroll': 283,
};
//------------------------------------Fonctions------------------------------------//
//ici type est le type de contenu (film ou serie) et id est l'identifiant du contenu
//TMDB ne permet pas de faire une recherche film et serie en meme temps , l'url est donc differente pour chaque type
async function getProviderDetails(type, id) {
  const url = `${BASE_URL}/${type}/${id}/watch/providers?api_key=${API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.results?.FR?.flatrate || [];
}
//exemple console log contiendra un tableau  d objet avec logopath providerId ProviderName et un display priority
//meme si on a un memo de provider il en existe enormemnt et cette fonction permet d'obtenir dans les resultats toute les plateformes
//Si le film est disponible sur amazon et HBO on aura pas d'erreur pour HBO mais au contraire son nom et son ID
//flatrate est un tableau contenant les plateformes de streaming sur lesquelles le contenu est disponible
//TMDB differencie avec des methodes comme l'achat de film ou la location 
//On essaye d'obtenir la propriété flatrate de l'objet fr (pour la france) , si elle n'existe pas on retourne un tableau vide 
//ce qui evite les erreurs de type type error et ne bloquera pas les logiques de map , filter ... 
// Fonction pour rechercher du contenu (film et serie) par plateforme de streaming , region (langue !== region)et limite d'items
async function rechercheContenuParPlateforme(plateformes, region = 'FR',  limite = 10) {
  try {
    const plateformesIds = plateformes
      .map(p => (typeof p === 'string' ? PROVIDER_IDS[p] : p))
      .filter(id => id !== undefined);

    if (plateformesIds.length === 0) {
      return "Aucune plateforme valide sélectionnée.";
    }
    //TMDB permet de chainer les plateformes de streaming avec un pipe pour OR et une virgule pour AND
    // le but n'étant pas de trouver un film disponible sur l'ensemble des plateformes , mais l'ensemble des films
    // disponibles sur les plateformes selectionnées
    const providerIdString = plateformesIds.join('|');

    const discoverUrls = ['movie', 'tv'].map(type => 
      `${BASE_URL}/discover/${type}?api_key=${API_KEY}&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&with_watch_providers=${providerIdString}&watch_region=${region}`
    );
    //on fait une requete pour chaque type de contenu (film et serie) , on trie par popularité et on inclut les plateformes de streaming
    const contentData = await Promise.all(
      discoverUrls.map(url => fetch(url).then(res => res.json()))
    );
    //une fois que l'on a confirmé les ID des plateforme de streaming, on peut les utiliser pour faire une recherche de contenu
    
    let contenu = [];
    //contenu est un tableau vide sur lequel nous ajouteront film/serie et qui nous permettra de limiter le nombre de contenu fetcher
    for (let i = 0; i < contentData.length; i++) {
      //on boucle sur le tableau de contenu pour chaque type de contenu (film et serie) 
      const type = i === 0 ? 'movie' : 'tv';
      //si i est 0 on est sur un film , sinon une serie , c'est necessaire pour  chercher film ou serie avec TMDB
      //'https://api.themoviedb.org/3/discover/tv?' ou 'https://api.themoviedb.org/3/discover/movie?'
      for (const item of contentData[i].results) {
        if (contenu.length >= limite) break;

        const providers = await getProviderDetails(type, item.id);
        //on recupere les plateformes de streaming sur lesquelles le contenu est disponible pour l'ajouter plus bas dans plateformes
        contenu.push({
          type: i === 0 ? 'film' : 'série',
          //maintenant on specifie juste le type pour notre objet
          titre: item.title || item.name,
          //souvent une serie a un name et un movie un title , dans tout les cas il y'a soit l'un soit l'autre
          annee: new Date(item.release_date || item.first_air_date).getFullYear(),
          //pareil date de sortie pour les films ou air date pour les series
          description: item.overview,
          popularite: item.vote_average,
          plateformes: providers.map(p => ({
            id: p.provider_id,
            nom: p.provider_name
            //et c'est la avec getProviderDetails que l'on obtient le nom et l'id de toute les plateformes disposant de ce film/serie
          }))
        });
      }
      if (contenu.length >= limite) break;
    }

    contenu.sort((a, b) => b.popularite - a.popularite);
    //a ce stade notre tableau contenu est bien rempli, on le trie juste en terme de popularité
    //le resultat de b.popularite - a.popularite , si il est negatif , b est place avant a , si il est positif a est place avant b
    //si il est nul , l'ordre reste le meme
    //exemple the boys a 8.5 de popularite et flash 7.7 , le resultat est -0,8 donc the boys sera place avant flash
    return {
      contenu: contenu,
      totalItems: contenu.length,
      itemsPerPage: limite,
      //contenu : ce qui est retourné par les promesses
      //totalItems : le nombre total de contenu
      //itemsperpage : limite fixé dans le fetch
    };

  } catch (error) {
    console.error('Une erreur est survenue:', error);
    return "Une erreur est survenue lors de la recherche.";
  }
}
//------------------------------------EXPERIMENTAL------------------------------------//
//essai de faire une route entierement modulable selon les options donnes en params depuis le front
/*TMDB permet de choisir
- le type de contenu (MOVIE ou TV)
- la langue du film / serie (language) en-US , fr-FR , es-ES ... 
- Adulte = selon TMDB , film 18+ , hardcore erotique, film contenant deux scenes hardcore , film court contenant une scene hardcore  Boolean
- popularité
[ LES DEUX DOIVENT ETRE UTILISES ENSEMBLE
  - la region(disponibilité du film) (watch_region)
  - plateforme de streaming
LES DEUX DOIVENT ETRE UTILISES ENSEMBLE ] 
- genre with_genres ou without_genres can be a comma (AND) or pipe (OR) separated query
- date de sortie ( first_air_date pour serie  et release_date pour film)
*/
//movie et tv n'ont pas les memes genres sinon cela serai trop simple
//voici les genres pour les films ( les noms sont ici en anglais mais l'id est universelle)
// action : 28 , adventure 12 , animation 16 , comedy 35 , crime 80 , documentary 99 , drama 18 , family 10751 , fantasy 14 , history 36 , horror 27 , music 10402 , mystery 9648 , romance 10749 , science fiction 878 , tv movie 10770 , thriller 53 , war 10752 , western 37
//voici les genres pour les series
// action & adventure 10759 , animation 16 , comedy 35 , crime 80 , documentary 99 , drama 18 , family 10751 , kids 10762 , mystery 9648 , news 10763 , reality 10764 , scifi & fantasy 10765 , soap 10766 , talk 10767 , war & politics 10768 , western 37
const VALID_MOVIE_GENRES = [28, 12, 16, 35, 80, 99, 18, 10751, 14, 36, 27, 10402, 9648, 10749, 878, 10770, 53, 10752, 37];
const VALID_TV_GENRES = [10759, 16, 35, 80, 99, 18, 10751, 10762, 9648, 10763, 10764, 10765, 10766, 10767, 10768, 37];


function getProviderDetailsWithRegion(type, id, region) {
  const url = `${BASE_URL}/${type}/${id}/watch/providers?api_key=${API_KEY}`;
  return fetch(url)
    .then(response => response.json())
    .then(data => data.results[region]?.flatrate || []);
}

function rechercheContenu(req, res) {
  const {
    types = 'movie,tv', // Types de contenu : 'movie', 'tv' ou les deux
    language = 'fr-FR',
    include_adult = false,
    sort_by = 'popularity.desc',
    genre,
    release_date_gte,
    release_date_lte,
    region = 'FR',
    plateformes = '',
    page = 1
  } = req.query;

  const typeArray = types.split(','); // Convertit les types en tableau
  const providerIds = plateformes
    .split(',')
    .map(p => (typeof p === 'string' ? PROVIDER_IDS[p] : p))
    .filter(id => id !== undefined)
    .join('|');

  const queryParams = new URLSearchParams({
    api_key: API_KEY,
    language,
    include_adult,
    sort_by,
    page,
    with_watch_providers: providerIds,
    watch_region: region
  });
  //queryParams crée une URLSearchParams qui permet de creer une URL avec des params
  if (release_date_gte) queryParams.append('release_date.gte', release_date_gte);
  if (release_date_lte) queryParams.append('release_date.lte', release_date_lte);

  const discoverUrls = typeArray.map(type => {
    const url = new URL(`${BASE_URL}/discover/${type}`);
    url.search = queryParams.toString();

    // Ajouter le genre uniquement s'il est valide pour le type de contenu
    if (genre) {
      const genreList = genre.split(',');
      const validGenres = type === 'movie' ? VALID_MOVIE_GENRES : VALID_TV_GENRES;
      const validGenreString = genreList.filter(g => validGenres.includes(parseInt(g))).join(',');
      if (validGenreString) {
        url.searchParams.append('with_genres', validGenreString);
      }
    }

    return url.toString();
  });
  console.log("URLs générées:", discoverUrls);

  const fetchPromises = discoverUrls.map(url => fetch(url).then(res => res.json()));

  Promise.all(fetchPromises)
    .then(contentDataArray => {
      const contenuPromises = contentDataArray.flatMap((data, index) => {
        const type = typeArray[index]; // Détermine le type de contenu (movie ou tv)
        const typeName = type === 'movie' ? 'film' : 'série'; // Type de contenu pour l'affichage

        return data.results.map(item => {
          return getProviderDetailsWithRegion(type, item.id, region)
            .then(providers => ({
              type: typeName,
              titre: item.title || item.name,
              annee: new Date(item.release_date || item.first_air_date).getFullYear(),
              description: item.overview,
              popularite: item.vote_average,
              plateformes: providers.map(p => ({
                id: p.provider_id,
                nom: p.provider_name
              }))
            }));
        });
      });

      return Promise.all(contenuPromises)
        .then(contenu => {
          contenu.sort((a, b) => b.popularite - a.popularite);
          const totalPages = Math.max(...contentDataArray.map(data => data.total_pages));
          
          res.json({
            contenu,
            totalPages,
            currentPage: page
          });
        });
    })
    .catch(error => {
      console.error('Une erreur est survenue:', error);
      res.status(500).send("Une erreur est survenue lors de la recherche.");
    });
}

// Route pour la recherche de contenu
router.get('/search', rechercheContenu);

//------------------------------------Exemples------------------------------------//

// Exemple d'utilisation avec Netflix et Amazon Prime Video
/*rechercheContenuParPlateforme(['Netflix', 119], 'FR',  30)
  .then(resultat => console.log(JSON.stringify(resultat, null, 2))) //affiche le resultat, null permet de formater le json, 2 est le nombre d'espaces
  .catch(error => console.error(error));
*/
//------------------------------------Routes------------------------------------//

// route pour rechercher du contenu, film et serie par plateforme de streaming, region, et limite
//exemple : GET /recherche?plateformes=Netflix,Amazon Prime Video&region=FR&limite=20
router.get('/recherche/:plateformes/:region/:limite', (req, res) => {
  const { plateformes, region, limite } = req.params;
  rechercheContenuParPlateforme(plateformes, region, limite)
    .then(resultat => res.status(200).json({result : true , resultat}))
    .catch(error => res.status(500).json({ message: error }));
});




















// Exporte le routeur pour être utilisé dans d'autres parties de l'application
module.exports = router;