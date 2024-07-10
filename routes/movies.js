// Importation du module express pour la création du serveur et des routes
var express = require('express');
// Création d'un routeur express pour gérer les routes spécifiques à ce module
var router = express.Router();

const API_KEY = process.env.API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

// cette liste contient les identifiants des plateformes de streaming pour lesquelles on peut rechercher du contenu
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
//ici type est le type de contenu (film ou serie) et id est l'identifiant du contenu
//TMDB ne permet pas de faire une recherche film et serie en meme temps , l'url est donc differente pour chaque type
async function getProviderDetails(type, id) {
  const url = `${BASE_URL}/${type}/${id}/watch/providers?api_key=${API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.results?.FR?.flatrate || [];
}
// Fonction pour rechercher du contenu (film et serie) par plateforme de streaming , region et limite d'items
async function rechercheContenuParPlateforme(plateformes, region = 'FR',  limite = 10) {
  try {
    const plateformesIds = plateformes
      .map(p => (typeof p === 'string' ? PROVIDER_IDS[p] : p))
      .filter(id => id !== undefined);

    if (plateformesIds.length === 0) {
      return "Aucune plateforme valide sélectionnée.";
    }

    const providerIdString = plateformesIds.join('|');

    const discoverUrls = ['movie', 'tv'].map(type => 
      `${BASE_URL}/discover/${type}?api_key=${API_KEY}&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&with_watch_providers=${providerIdString}&watch_region=${region}`
    );

    const contentData = await Promise.all(
      discoverUrls.map(url => fetch(url).then(res => res.json()))
    );

    let contenu = [];
    for (let i = 0; i < contentData.length; i++) {
      const type = i === 0 ? 'movie' : 'tv';
      for (const item of contentData[i].results) {
        if (contenu.length >= limite) break;
        const providers = await getProviderDetails(type, item.id);
        contenu.push({
          type: i === 0 ? 'film' : 'série',
          titre: item.title || item.name,
          annee: new Date(item.release_date || item.first_air_date).getFullYear(),
          description: item.overview,
          popularite: item.vote_average,
          plateformes: providers.map(p => ({
            id: p.provider_id,
            nom: p.provider_name
          }))
        });
      }
      if (contenu.length >= limite) break;
    }

    contenu.sort((a, b) => b.popularite - a.popularite);

    return {
      contenu: contenu,
      totalItems: contenu.length,
      itemsPerPage: limite,
    };

  } catch (error) {
    console.error('Une erreur est survenue:', error);
    return "Une erreur est survenue lors de la recherche.";
  }
}

// Exemple d'utilisation avec Netflix et Amazon Prime Video
rechercheContenuParPlateforme(['Netflix', 119], 'FR',  30)
  .then(resultat => console.log(JSON.stringify(resultat, null, 2))) //affiche le resultat, null permet de formater le json, 2 est le nombre d'espaces
  .catch(error => console.error(error));

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