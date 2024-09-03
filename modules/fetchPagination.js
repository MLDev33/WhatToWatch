//fetchPaginatedData permet de recuperer les donnees paginees de l'API TMDB afin d'obtenir plus de resultats
async function fetchPaginatedData(url, limite) {
    let results = [];
    let page = 1;
    let totalPages = 0;
    //limite est une valeur donnée dans la requete , elle permet de limiter le nombre de resultats
    while (results.length < limite) {
      const response = await fetch(`${url}&page=${page}`);
      const data = await response.json();
  
      //on concatene les resultats de chaque page
      results = results.concat(data.results);
      totalPages = data.total_pages;
  
      //si il n'y a plus de resultats ou si on a atteint la limite ou si on a atteint le nombre total de pages , on arrete
      if (data.results.length === 0 || results.length >= limite || page >= totalPages) {
        break;
      }
      //sinon on incremente la page
      page++;
    }
  
    //on retourne le resulat avec un slice de la limite pour ne pas depasser le nombre de resultats , on retourne aussi le nombre total de pages et le nombre de
    return { results: results.slice(0, limite), totalPages, pagesFetched: page };
  }

  module.exports = { fetchPaginatedData }