//------------------------------------Fonctions------------------------------------//
//ici type est le type de contenu (film ou serie) et id est l'identifiant du contenu
//TMDB ne permet pas de faire une recherche film et serie en meme temps , l'url est donc differente pour chaque type
//getProviderDetails permet de recuperer les plateformes de streaming sur lesquelles le contenu est disponible , pour chaque film avec l'id
async function getProviderDetails(type, id, BASE_URL, API_KEY) {
    const url = `${BASE_URL}/${type}/${id}/watch/providers?api_key=${API_KEY}`;
    try {
      console.log("in function getprovider")
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

  module.exports = { getProviderDetails}