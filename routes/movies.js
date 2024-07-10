// Importation du module express pour la création du serveur et des routes
var express = require('express');
// Création d'un routeur express pour gérer les routes spécifiques à ce module
var router = express.Router();

// Clé API pour accéder aux données de The Movie Database (TMDB), stockée dans les variables d'environnement
const API_KEY = process.env.API_KEY;
// URL de base pour accéder à l'API TMDB
const BASE_URL = 'https://api.themoviedb.org/3';

// Mapping des noms des plateformes de streaming vers leurs IDs spécifiques utilisés par TMDB
const PROVIDER_IDS = {
  'Netflix': 8, // ID de Netflix
  'Netflix basic with Ads' : 1796, // ID de Netflix avec publicités
  'Amazon Prime Video': 119, // ID d'Amazon Prime Video
  'Disney+': 337, // ID de Disney+
  'Hulu': 15, // ID de Hulu
  'Canal+': 381, // ID de Canal+
  'Max': 1899, // ID de Max
  'Crunchyroll': 283, // ID de Crunchyroll
};
// Fonction pour obtenir les détails des fournisseurs de streaming pour un film ou une série

function getProviderDetails(type, id) {
  const url = `${BASE_URL}/${type}/${id}/watch/providers?api_key=${API_KEY}`;
  return fetch(url)
    .then(response => response.json())
    .then(data => data.results?.FR?.flatrate || []);
}
// Fonction principale pour rechercher des films et séries sur différentes plateformes
function rechercheContenuParPlateforme(plateformes, region = 'FR', page = 1) {
  // Convertit les noms des plateformes en IDs en utilisant le mapping PROVIDER_IDS
  const plateformesIds = plateformes
    .map(p => (typeof p === 'string' ? PROVIDER_IDS[p] : p)) // Convertit le nom en ID si c'est une chaîne de caractères
    .filter(id => id !== undefined); // Filtre les IDs non définis

  // Vérifie si des plateformes valides ont été sélectionnées
  if (plateformesIds.length === 0) {
    return Promise.resolve("Aucune plateforme valide sélectionnée.");
  }

  // Concatène les IDs des plateformes en une chaîne de caractères séparée par des '|'
  const providerIdString = plateformesIds.join('|');

  // Prépare les URLs de découverte pour les films et les séries
  const discoverUrls = ['movie', 'tv'].map(type => 
    `${BASE_URL}/discover/${type}?api_key=${API_KEY}&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_providers=${providerIdString}&watch_region=${region}`
  );

  // Crée une liste de promesses pour récupérer les données des URLs de découverte
  const fetchPromises = discoverUrls.map(url => fetch(url).then(res => res.json()));

  // Traite les promesses une fois que toutes les requêtes sont complétées
  return Promise.all(fetchPromises)
    .then(contentData => {
      // Traiter et formater les résultats
      const contenuPromises = contentData.flatMap((data, index) =>
        //flatMap car nous avons un array pour film et un array pour serie et on veut les combiner
        data.results.map(item => {
          const type = index === 0 ? 'movie' : 'tv'; // Détermine si l'élément est un film ou une série
          return getProviderDetails(type, item.id)
            .then(providers => ({
              type: index === 0 ? 'film' : 'série', // Type de contenu
              titre: item.title || item.name, // Titre du contenu
              annee: new Date(item.release_date || item.first_air_date).getFullYear(), // Année de sortie
              description: item.overview, // Description
              popularite: item.vote_average, // Note de popularité
              plateformes: providers.map(p => ({ // Plateformes de streaming disponibles
                id: p.provider_id,
                nom: p.provider_name
              }))
            }));
        })
      );

      return Promise.all(contenuPromises)
        .then(contenu => {
          // Trier par popularité
          contenu.sort((a, b) => b.popularite - a.popularite);
          
          return {
            contenu: contenu, // Contenu trié
            totalPages: Math.max(...contentData.map(data => data.total_pages)), // Nombre total de pages
            currentPage: page // Page actuelle
          };
        });
    })
    .catch(error => {
      console.error('Une erreur est survenue:', error);
      return "Une erreur est survenue lors de la recherche.";
    });
}

// Exemple d'utilisation de la fonction principale
rechercheContenuParPlateforme(['Netflix', 119], 'FR', 1)
  .then(resultat => console.log(JSON.stringify(resultat, null, 2))) // Affiche le résultat formaté en JSON
  .catch(error => console.error(error)); // Gère les erreurs

// Exporte le routeur pour être utilisé dans d'autres parties de l'application
module.exports = router;