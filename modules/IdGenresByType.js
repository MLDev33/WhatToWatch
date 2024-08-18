
// Liste des genres pour les medias de type Serie (TV)
// Au format de donnée fixe 
  const tvGenresValid = 
      [
        {
          "id": 10759,
          "name": "Action & Adventure"
        },
        {
          "id": 16,
          "name": "Animation"
        },
        {
          "id": 35,
          "name": "Comedy"
        },
        {
          "id": 80,
          "name": "Crime"
        },
        {
          "id": 99,
          "name": "Documentary"
        },
        {
          "id": 18,
          "name": "Drama"
        },
        {
          "id": 10751,
          "name": "Family"
        },
        {
          "id": 10762,
          "name": "Kids"
        },
        {
          "id": 9648,
          "name": "Mystery"
        },
        {
          "id": 10763,
          "name": "News"
        },
        {
          "id": 10764,
          "name": "Reality"
        },
        {
          "id": 10765,
          "name": "Sci-Fi & Fantasy"
        },
        {
          "id": 10766,
          "name": "Soap"
        },
        {
          "id": 10767,
          "name": "Talk"
        },
        {
          "id": 10768,
          "name": "War & Politics"
        },
        {
          "id": 37,
          "name": "Western"
        }
      ]

// Liste des genres pour les medias de type Movie
// Au format de donnée fixe 
    const movieGenresValid = 
        [
          {
            "id": 28,
            "name": "Action"
          },
          {
            "id": 12,
            "name": "Adventure"
          },
          {
            "id": 16,
            "name": "Animation"
          },
          {
            "id": 35,
            "name": "Comedy"
          },
          {
            "id": 80,
            "name": "Crime"
          },
          {
            "id": 99,
            "name": "Documentary"
          },
          {
            "id": 18,
            "name": "Drama"
          },
          {
            "id": 10751,
            "name": "Family"
          },
          {
            "id": 14,
            "name": "Fantasy"
          },
          {
            "id": 36,
            "name": "History"
          },
          {
            "id": 27,
            "name": "Horror"
          },
          {
            "id": 10402,
            "name": "Music"
          },
          {
            "id": 9648,
            "name": "Mystery"
          },
          {
            "id": 10749,
            "name": "Romance"
          },
          {
            "id": 878,
            "name": "Science Fiction"
          },
          {
            "id": 10770,
            "name": "TV Movie"
          },
          {
            "id": 53,
            "name": "Thriller"
          },
          {
            "id": 10752,
            "name": "War"
          },
          {
            "id": 37,
            "name": "Western"
          }
        ]



let listAllGenres = [];

// fonction qui retourne la liste fusionnée puis triée des genres pour les movies et les series
// Parametre : "genresMedia" est un objet dont les propriétés sont des 
//              key = nom du genre et value = booléan. True si selectionné par l'utilisateur
//              exemple: {"Movie": true, "TV": true} retourné par le state de la catégorie selectionné par l'utilisateur
const getIdGenresByType = (genresMedia) => {

    console.log("getGenresTest: types =", genresMedia)

    // Ajoute les genres movie si la propriété movie est true dans l'objet type
    if(genresMedia.Movie === true || genresMedia.includes("Movie")){
        movieGenresValid.map((genreM) => {
            console.log("genreMovie", genreM);
            addElement = genreM;
            addElement.type = ["movie"];
            listAllGenres.push(addElement);
            console.log("AddMovieGenre", addElement);
        })
    }

    // Ajoute les genres tv si la propriété tv est true dans l'objet type
    if(genresMedia.TV === true || genresMedia.includes("TV")){
      const genresListSet = new Set();
      listAllGenres.map((genre) => {
          //console.log("genre", genre);
          genresListSet.add(genre.id)
      })
      //console.log(genresListSet);

      // si le genre tv n'est pas dans la liste, il est ajouté
      tvGenresValid.map((genreTv) => {
          if (!genresListSet.has(genreTv.id)) { 
              addElement = genreTv;
              addElement.type = ["tv"];
              listAllGenres.push(addElement);
          }
          else {
            // si le genre tv est dans la liste le type tv
            //console.log("doublons:", genreTv);
            let index = listAllGenres.findIndex(obj => obj.id == genreTv.id );
            listAllGenres[index].type = ["movie", "tv"];
            //console.log("view", listAllGenres[index].type );
          }
      })
    }

    listAllGenres = listAllGenres.sort((a, b) => a.name > b.name ? 1 : -1);

    console.log("result", listAllGenres)
    return listAllGenres
};

module.exports = { getGenresByType };