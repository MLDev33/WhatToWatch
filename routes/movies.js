
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
// pour obtenir la liste de tout les providrs
/*
const url = `https://api.themoviedb.org/3/watch/providers/movie?api_key=${API_KEY}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    const providers = data.results;
    console.log('Providers:', providers);

    const providerMap = {};
    providers.forEach(p => {
      providerMap[p.provider_name] = p.provider_id;
    });
    console.log('Provider Map:', providerMap);
  })
  .catch(error => {
    console.error('Une erreur est survenue:', error);
  });
*/
//liste des provider et des genres valides pour les films et les series
const PROVIDER_IDS = { "Apple TV": 2, "Google Play Movies": 3, "Fandango At Home": 7, Netflix: 8, "Amazon Prime Video": 119, "Amazon Video": 10, MUBI: 11, Crackle: 12, Hulu: 15, NetMovies: 19, "maxdome Store": 20, Stan: 21, Fandor: 25, Netzkino: 28, "Sky Go": 29, WOW: 30, Alleskino: 33, "MGM Plus": 34, "Rakuten TV": 35, "BBC iPlayer": 38, "Now TV": 39, ITVX: 41, Starz: 43, Looke: 47, Volta: 53, BoxOffice: 54, ShowMax: 55, "OCS Go": 56, "Canal VOD": 58, "Bbox VOD": 59, "Orange VOD": 61, "Atres Player": 62, Filmin: 63, "Filmin Plus": 64, "Filmin Latino": 66, "Microsoft Store": 68, "Pathé Thuis": 71, Videoland: 72, "Tubi TV": 73, Viaplay: 76,
   AMC: 80, tenplay: 82, "U-NEXT": 84, "Acorn TV": 87, "Naver Store": 96, Watcha: 97, Shudder: 99, GuideDoc: 100, "Channel 4": 103, Timvision: 109, "Infinity+": 110, Ivi: 113, Okko: 115, Amediateka: 116, Kinopoisk: 117, Hotstar: 122, FXNow: 123, Bookmyshow: 124, "Sky Store": 130, "SBS On Demand": 132, Videobuster: 133, "Foxtel Now": 134, "ABC iview": 135, FILMO: 138, Cineplex: 140, "Sundance Now": 143, iciTouTV: 146, "M6+": 147, ABC: 148, "Movistar Plus": 149, "blue TV": 150, BritBox: 151, History: 155, Lifetime: 157, Viu: 158, Catchplay: 159, iflix: 160, "Claro video": 167, Watchbox: 171, "Netflix Kids": 175, MagentaTV: 178, "Hollywood Suite": 182, "Universal Pictures": 184, Screambox: 185, "YouTube Premium": 188, "Curzon Home Cinema": 189,
   "Curiosity Stream": 190, Kanopy: 191, YouTube: 192, "AcornTV Amazon Channel": 196, "BritBox Amazon Channel": 197, "Fandor Amazon Channel": 199, "MUBI Amazon Channel": 201, 
  "Screambox Amazon Channel": 202, "Shudder Amazon Channel": 204,
   "Sundance Now Amazon Channel": 205, "The Roku Channel": 207, PBS: 209, Sky: 210, Freeform: 211, 
  Hoopla: 212, "ARD Mediathek": 219, "Jio Cinema": 220, "Rai Play": 222, "BFI Player": 224, Crave: 230,
   Zee5: 232, Arte: 234, "YouTube Free": 235, "France TV": 236, "Sony Liv": 237, Universcine: 239, Popcornflix: 241, Meo: 242, "VOD Poland": 245, "7plus": 246, Boomerang: 248, ALLBLK: 251, "Yupp TV": 255, fuboTV: 257, "Criterion Channel": 258, "WWE Network": 260, "History Vault": 268, "Neon TV": 273, QubitTV: 274, "Laugh Out Loud": 275, "Smithsonian Channel": 276, "Pure Flix": 278, Crunchyroll: 283, "Lifetime Movie Club": 284, "BBC Player Amazon Channel": 285, "ZDF Herzkino Amazon Channel": 286, "BFI Player Amazon Channel": 287, "Boomerang Amazon Channel": 288, "Cinemax Amazon Channel": 289, "Hallmark Movies Now Amazon Channel": 290, "MZ Choice Amazon Channel": 291, "PBS Kids Amazon Channel": 293, "PBS Masterpiece Amazon Channel": 294, "Viewster Amazon Channel": 295, "Ziggo TV": 297, "RTL+": 298, "Pluto TV": 300, Joyn: 304, "Crave Starz": 305, Globoplay: 307, "O2 TV": 308, "Sun Nxt": 309, LaCinetek: 310, "Be TV Go": 311, "VRT MAX": 312, "CBC Gem": 314, Hoichoi: 315, "Alt Balaji": 319, "Sky X": 321, "USA Network": 322, "Yle Areena": 323, "Cinemas a la Demande": 324, CTV: 326, FlixFling: 331, "VUDU Free": 332, My5: 333,
   "Filmtastic Amazon Channel": 334, "Disney Plus": 337, Ruutu: 338, MovistarTV: 339, blutv: 341, puhutv: 342, "Bet+ Amazon Channel": 343, "Rakuten Viki": 344, "Kino on Demand": 349, "Apple TV Plus": 350, "AMC on Demand": 352, wavve: 356, DocPlay: 357, "Mediaset Infinity": 359, "NPO Start": 360, TCM: 361, TNT: 363, IndieFlix: 368, "VOD Club": 370, Go3: 373, "Canal+": 381, "TV 2": 383, "HBO Max": 384, BINGE: 385, "Peacock Premium": 386, "Peacock Premium Plus": 387, Sooner: 389, wedotv: 392, FlixOlé: 393, TVNZ: 395, Film1: 396, "BBC America": 397, VVVVID: 414, "Animation Digital Network": 415, "Here TV": 417, "Joyn Plus": 421, Blockbuster: 423, "HBO Go": 425, "SF Anytime": 426, CONtv: 428, HiDive: 430, "TV 2 Play": 431, "Flix Premiere": 432, OVID: 433, OzFlix: 434,
   "Draken Films": 435, "Fetch TV": 436, "Hungama Play": 437, "Chai Flicks": 438, "Shout! Factory TV": 439, ThreeNow: 440, NFB: 441, "NRK TV": 442, Filmstriben: 443, Dekkoo: 444, Classix: 445, Retrocrush: 446, "Belas Artes à La Carte": 447, Beamafilm: 448, "Global TV": 449, Picl: 451, RTPplay: 452, "Night Flight Plus": 455, "Mitele ": 456, "VIX ": 457, "RTBF Auvio": 461, Kirjastokino: 463, Kocowa: 464, Believe: 465, "Bioskop Online": 466, "DIRECTV GO": 467, genflix: 468, "Club Illico": 469, NLZIET: 472, Revry: 473, ShemarooMe: 474, DOCSVILLE: 475, "EPIC ON": 476, "GOSPEL PLAY": 477, "History Play": 478, "Home of Horror": 479, Filmtastic: 480, ArthouseCNMA: 481, ManoramaMax: 482, "MAX Stream": 483, "Claro tv+": 484, "Spectrum On Demand": 486, tvo: 488, Vidio: 489, CINE: 491, SVT: 493, Cineasterna: 496, "Tele2 Play": 497, Oldflix: 499, "Tata Play": 502, "Hi-YAH": 503, Player: 505, TBS: 506, "tru TV": 507, DisneyNOW: 508, "Discovery+": 524, iWantTFC: 511, TNTGo: 512, Shadowz: 513, AsianCrush: 514, "MX Player": 515, Noovo: 516, "TriArt Play": 517, Spamflix: 521, Popcorntimes: 522, "Knowledge Network": 525, "AMC+": 526, "AMC+ Amazon Channel": 528, ARROW: 529, "Paramount Plus": 531, aha: 532, "Amazon Arthaus Channel": 533, Argo: 534, "Dogwoof On Demand": 536, ZDF: 537, Plex: 538, Viddla: 539, "Elisa Viihde": 540, rtve: 541, filmfriend: 542, CONTAR: 543, Libreflix: 544, Spuul: 545, "WOW Presents Plus": 546, "IFFR Unleashed": 548, IPLA: 549, Tenk: 550, "Magellan TV": 551, "QFT Player": 552, "Telia Play": 553, BroadwayHD: 554, tvzavr: 556, "More TV": 557, Filmzie: 559, Filmoteket: 560, "Lionsgate Play": 561, MovieSaints: 562, KPN: 563, "Filme Filme": 566, "True Story": 567, "DocAlliance Films": 569, Premier: 570, "RTL Play": 572, KinoPop: 573, KoreaOnDemand: 575, "Klik Film": 576, TvIgle: 577, Strim: 578, "Film Movement Plus": 579, "Nova Play": 580, iQIYI: 581, "Paramount+ Amazon Channel": 582, "Epix Amazon Channel": 583, "Discovery+ Amazon Channel": 584, Metrograph: 585, "IFC Amazon Channel": 587, "MGM Amazon Channel": 588, "TELETOON+ Amazon Channel": 589, "Now TV Cinema": 591, "STV Player": 593, "Eros Now Amazon Channel": 595, "Arrow Video Amazon Channel": 596, "Full Moon Amazon Channel": 597, "Pokémon Amazon Channel": 599, "Shout! Factory Amazon Channel": 600, "FilmBox Live Amazon Channel": 602, "CuriosityStream Amazon Channel": 603, "DocuBay Amazon Channel": 604, "Super Channel Amazon Channel": 605, "StackTV Amazon Channel": 606, "OUTtv Amazon Channel": 607, 
   "Love Nature Amazon Channel": 608, "Smithsonian Channel Amazon Channel": 609, "BBC Earth Amazon Channel": 610, "ALLWAYSBLK Amazon Channel": 612, Freevee: 613, "VI movies and tv": 614, W4free: 615, Paus: 618, DRTV: 620, "Dansk Filmskat": 621, "UPC TV": 622, WeTV: 623, KKTV: 624, "LINE TV": 625, Otta: 626, Voyo: 627, Edisonline: 628, OSN: 629, STARZPLAY: 630, HRTi: 631, "Paramount+ Roku Premium Channel": 633, "Starz Roku Premium Channel": 634, "AMC+ Roku Premium Channel": 635, "MGM Plus Roku Premium Channel": 636, "Pickbox NOW": 637, "Public Domain Movies": 638, CineMember: 639, "Nexo Plus": 641, "STUDIOCANAL PRESENTS Apple TV Channel": 642, "Showtime Apple TV Channel": 675, Eventive: 677, "Filmlegenden Amazon Channel": 678, "Cinema of Hearts Amazon Channel": 679, "Bloody Movies Amazon Channel": 680, "Film Total Amazon Channel": 681, "Looke Amazon Channel": 683, "FlixOlé Amazon Channel": 684, "OCS Amazon Channel ": 685, "Home of Horror Amazon Channel": 686, "Arthouse CNMA Amazon Channel": 687, "ShortsTV Amazon Channel": 688, "TVCortos Amazon Channel": 689, "Pongalo Amazon Channel ": 690, "Play Suisse": 691, Cultpix: 692, "Turk On Video Amazon Channel": 693, Serially: 696, meJane: 697, "FilmBox+": 701, iBAKATV: 702, IROKOTV: 704, "Hollywood Suite Amazon Channel": 705, "Moviedome Plus Amazon Channel": 706, "Aniverse Amazon Channel": 707, "Superfresh Amazon Channel": 708, "Comedy Central Plus Amazon Channel": 1706, "BluTV Amazon Channel": 1707, "GRJNGO Amazon Channel": 1709, "MTV Plus Amazon Channel": 1711, "RTL Passion Amazon Channel": 1712, "Silverline Amazon Channel": 1713, "Shahid VIP": 1715, "Acontra Plus": 1717, "AVA VOBB": 1722, "AVA HBZ": 1723, "AVA CSAL": 1724, "AVA BGB": 1725, "Infinity Selection Amazon Channel": 1726, "CG Collection Amazon channel": 1727, "iWonder Full Amazon channel": 1728, "Full Action Amazon Channel": 1729, "Cine Comico Amazon Channel": 1730, "Universcine Amazon Channel": 1732, "Action Max Amazon Channel": 1733, "Filmo Amazon Channel": 1734, "Insomnia Amazon Channel": 1735, "Shadowz Amazon Channel": 1736, "INA madelen Amazon Channel": 1737, "Benshi Amazon Channel": 1738, "Planet Horror Amazon Channel": 1740, "Dizi Amazon Channel": 1741, "Acontra Plus Amazon Channel": 1742, "Historia y Actualidad Amazon Channel": 1743, "Icon Film Amazon Channel": 1744, "Curzon Amazon Channel": 1745, "Hallmark TV Amazon Channel": 1746, "Studiocanal Presents Amazon Channel": 1747, TOD: 1750, 
   "TF1+": 1754, filmingo: 1756, "Sooner Amazon Channel": 1757, "Bet+": 1759, "Yorck on Demand": 1764, "Paramount+ with Showtime": 1770, Takflix: 1771, SkyShowtime: 1773, "Love and Passion Amazon Channel": 1788, Klassiki: 1793, "Starz Amazon Channel": 1794, "Netflix basic with Ads": 1796, "Studiocanal Presents MOVIECULT Amazon Channel": 1805, "Studiocanal Presents ALLSTARS Amazon Channel": 1806, "Cohen Media Amazon Channel": 1811, "Max Amazon Channel": 1825, "TOD TV": 1826, "Behind the Tree": 1829, Popflick: 1832, Tivify: 1838, "Britbox Apple TV Channel ": 1852, "Paramount Plus Apple TV Channel ": 1853, "AMC Plus Apple TV Channel ": 1854, "Starz Apple TV Channel": 1855, "Magenta TV": 1856, Telenet: 1857, "Univer Video": 1860, Filmow: 1861, "UAM TV": 1862, 
   "ViX Premium Amazon Channel": 1866, Runtime: 1875, "BrutX Amazon Channel": 1887, "Animation Digital Network Amazon Channel": 1888, "Universal+ Amazon Channel": 1889, "alleskino Amazon Channel": 1891, "RTL Crime Amazon Channel": 1892, "CineAutore Amazon Channel": 1894, "Anime Generation Amazon Channel": 1895, "Raro Video Amazon Channel": 1896, "MIDNIGHT FACTORY Amazon Channel": 1897, "Amazon miniTV": 1898, Max: 1899, "ARD Plus": 1902, "TV+": 1904, 
  Apollo: 1912, "Reserva Imovision": 1920, Kinobox: 1927, "Prima Plus": 1928, "Filmtastic bei Canal+": 1929, "Lepsi TV": 1939, "TV4 Play": 1944, Reveel: 1948, "Angel Studios": 1956, Cineverse: 1957, "AD tv": 1958, "Midnight Pulp": 1960, Allente: 1961, "Xumo Play": 1963, "National Geographic": 1964, "Molotov TV": 1967, "Crunchyroll Amazon Channel": 1968, DistroTV: 1971, myfilmfriend: 1972, Filmicca: 1973, "Outside Watch": 1976, "NPO Plus": 1986, Brollie: 1988, "ZDF Select Amazon Channel ": 1989, GlewedTV: 1990, Videoload: 1993, "TELE 5": 1994, "MTV Katsomo": 2029, "A&E Crime Central Apple TV Channel": 2033, "Acorn TV Apple TV": 2034, "ALLBLK Apple TV channel": 2036, "ARD Plus Apple TV channel": 2037, "Arthaus+ Apple TV channel": 2038, "BET+ Apple TV channel": 2040, "BFI Player Apple TV Channel": 2041, "Carnegie Hall+ Apple TV Channel": 2042, "OUTtv Apple TV Channel": 2044, "UP Faith & Family Apple TV Channel": 2045, "Topic Apple TV Channel": 2046, "Sundance Now Apple TV Channel": 2048, "Shudder Apple TV Channel": 2049, "ScreenPix Apple TV Channel": 2050, "Love Nature Apple TV Channel": 2052, 
  "Lionsgate Play Apple TV Channel": 2053, "Lifetime Play Apple TV Channel": 2054, "Lifetime Movie Club Apple TV Channel": 2055, "IFC Films Unlimited Apple TV Channel": 2056, "HISTORY Vault Apple TV Channel": 2057, "Hallmark Movies Now Apple TV Channel": 2058, "Eros Now Select Apple TV Channel": 2059, "CuriosityStream Apple TV Channel": 2060, "Cinemax Apple TV Channel": 2061, "ALLBLK Amazon channel ": 2064, "Carnegie Hall+ Amazon Channel": 2071, "HISTORY Vault Amazon Channel": 2073, "Lionsgate Play Amazon Channel": 2074, "Lifetime Play Amazon Channel": 2075, "Wedo TV": 2076, "Plex Channel": 2077, "Troma NOW": 2078, KiKA: 2081, "Lifetime Movie Club Amazon Channel": 2089, "Amazon Prime Video with Ads": 2100, "Canal+ Premium": 2101, "Premiery Canal+": 2102, "Adrenalina Pura Amazon channel": 2106, "Adrenalina Pura Apple TV channel": 2107, "Far East Amazon Channel ": 2108, Cinu: 2115, BYUtv: 2129, "AXN Black Amazon Channel": 2134, "Kino Film Collection": 2135, "Arthaus+": 2137, "MGM Plus Amazon Channel": 2141, "MGM+ Apple TV Channel": 2142, "CG tv": 2149, "ORF ON": 2151, "ORF KIDS": 2152, "Telecine Amazon Channel": 2156, "Reserva Imovision Amazon Channel": 2157, "Stingray Amazon Channel": 2158, "CurtaOn Amazon Channel": 2159, "Sony One Amazon Channel": 2161, "Atresplayer Amazon Channel": 2162, "Vix Gratis Amazon Channel": 2163, "Gaia Amazon Channel": 2164, "Cindie Amazon Channel": 2167, "DocPlay Amazon Channel": 2168, "Iwonder Amazon Channel": 2169, "Rialto Amazon Channel": 2170, "Anime Digital Network Amazon Channel": 2173, "Strand Releasing Amazon Channel": 2174, "Hoichoi Amazon Channel": 2176, "ManoramaMAX Amazon Channel": 2177, "Chaupal Amazon Channel": 2178, "BBC Kids Amazon Channel": 2179, "Sony Pictures Amazon Channel": 2180, "Vrott Amazon Channel": 2181, "Anime Times Amazon Channel": 2182, "MyZen TV Amazon Channel": 2183, "Museum Tv Amazon Channel": 2184, "NammaFlix Amazon Channel": 2185, Toggo: 2201, Kixi: 2206, Verleihshop: 2207, "Freenet meinVOD": 2209, "3sat": 2211, };

const VALID_MOVIE_GENRES = [28, 12, 16, 35, 80, 99, 18, 10751, 14, 36, 27, 10402, 9648, 10749, 878, 10770, 53, 10752, 37];
const VALID_TV_GENRES = [10759, 16, 35, 80, 99, 18, 10751, 10762, 9648, 10763, 10764, 10765, 10766, 10767, 10768, 37];
const MOVIE_GENRE_NAMES = { 28: 'Action', 12: 'Adventure', 16: 'Animation', 35: 'Comedy', 80: 'Crime', 99: 'Documentary', 18: 'Drama', 10751: 'Family', 14: 'Fantasy', 36: 'History', 27: 'Horror', 10402: 'Music', 9648: 'Mystery', 10749: 'Romance', 878: 'Science Fiction', 10770: 'TV Movie', 53: 'Thriller', 10752: 'War', 37: 'Western' }; 
const TV_GENRE_NAMES = { 10759: 'Action & Adventure', 16: 'Animation', 35: 'Comedy', 80: 'Crime', 99: 'Documentary', 18: 'Drama', 10751: 'Family', 10762: 'Kids', 9648: 'Mystery', 10763: 'News', 10764: 'Reality', 10765: 'Sci-Fi & Fantasy', 10766: 'Soap', 10767: 'Talk', 10768: 'War & Politics', 37: 'Western' };


//------------------------------------Fonctions------------------------------------//
//ici type est le type de contenu (film ou serie) et id est l'identifiant du contenu
//TMDB ne permet pas de faire une recherche film et serie en meme temps , l'url est donc differente pour chaque type
//getProviderDetails permet de recuperer les plateformes de streaming sur lesquelles le contenu est disponible , pour chaque film avec l'id
async function getProviderDetails(type, id) {
  const url = `${BASE_URL}/${type}/${id}/watch/providers?api_key=${API_KEY}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    const providers = data.results?.FR?.flatrate || [];
    const link = data.results?.FR?.link || '';
    return { providers, link };
  } catch (error) {
    console.error(`Error fetching provider details for ${type} with ID ${id}:`, error);
    return { providers: [], link: '' };
  }
}
//flatrate est juste le nom d'une propriete de l'objet data.results.FR qui contient les plateformes de streaming sur lesquelles le contenu est disponible
//fetchPaginatedData permet de recuperer les donnees paginees de l'API TMDB afin d'obtenir plus de resultats
async function fetchPaginatedData(url, limite) {
  let results = [];
  let page = 1;
  let totalPages = 0;

  while (results.length < limite) {
    const response = await fetch(`${url}&page=${page}`);
    const data = await response.json();
    
    results = results.concat(data.results);
    totalPages = data.total_pages;

    if (data.results.length === 0 || results.length >= limite || page >= totalPages) {
      break;
    }

    page++;
  }

  return { results: results.slice(0, limite), totalPages, pagesFetched: page };
}

//rechercheContenuParPlateforme permet de rechercher du contenu en fonction des plateformes de streaming selectionnees
//plateformes est un TABLEAU de plateformes de streaming
//platformName est mis en minuscule pour eviter les erreurs de casse
//id est l'identifiant de la plateforme de streaming 
async function rechercheContenuParPlateforme(plateformes, region = 'FR', limite = 100) {
  console.log('Received plateformes in function:', plateformes);
  console.log('PROVIDER_IDS:', PROVIDER_IDS);

  if (!plateformes || (Array.isArray(plateformes) && plateformes.length === 0)) {
    return { error: "Aucune plateforme sélectionnée", plateformes: plateformes };
  }

  try {
    const plateformesIds = plateformes
      .map(p => {
        const platformName = typeof p === 'string' ? p.toLowerCase() : p;
        const id = Object.entries(PROVIDER_IDS).find(([key, value]) => key.toLowerCase() === platformName)?.[1];
        console.log(`Converting platform ${p} to ID: ${id}`);
        return id;
      })
      .filter(id => id !== undefined);

    if (plateformesIds.length === 0) {
      return "Aucune plateforme valide sélectionnée.";
    }

    const providerIdString = plateformesIds.join('|');
    const discoverUrls = ['movie', 'tv'].map(type =>
      `${BASE_URL}/discover/${type}?api_key=${API_KEY}&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&with_watch_providers=${providerIdString}&watch_region=${region}`
    );

    const contentDataPromises = discoverUrls.map(url => fetchPaginatedData(url, limite / 2));
    const contentData = await Promise.all(contentDataPromises);
    // fetchPaginatedData renvoie un objet avec les resultats, le nombre total de pages et le nombre de pages fetchées , limite est divise par 2 car on a deux types de contenu (film et serie)
    const contenu = [];
    const idsSet = new Set(); // Ensemble pour stocker les IDs des éléments ajoutés
    //le role de idsSet est de verifier si un element a deja ete ajoute au contenu car on a des doublons defois
    let totalPagesFetched = 0;
    let totalPages = 0;

    for (let i = 0; i < contentData.length; i++) {
      const type = i === 0 ? 'movie' : 'tv';
      const { results, totalPages: tp, pagesFetched } = contentData[i];
      
      totalPagesFetched += pagesFetched;
      totalPages += tp;

      const providerPromises = results.map(item => getProviderDetails(type, item.id));
      const providerResults = await Promise.all(providerPromises);

      for (let j = 0; j < results.length; j++) {
        const item = results[j];
        const { providers, link } = providerResults[j];
        if (!idsSet.has(item.id)) { // Vérifier si l'ID est déjà dans l'ensemble
          idsSet.add(item.id); // Ajouter l'ID à l'ensemble
          //si l'ID n'est pas dans l'ensemble , on ajoute l'element au contenu  , si il est deja present on ne l'ajoute pas
          //cette gestion des doublons elimine des resultats de recherche sur les 100 de la route , on peut avoir 94 resultats par exemple
          contenu.push({
            type: i === 0 ? 'movie' : 'série',
            titre: item.title || item.name,
            annee: new Date(item.release_date || item.first_air_date).getFullYear(),
            description: item.overview,
            genre : item.genre_ids.map(id => type  === 'movie' ? MOVIE_GENRE_NAMES[id] : TV_GENRE_NAMES[id]),
            poster: item.poster_path,
            popularite: item.vote_average,
            vote: item.vote_count,
            id : item.id, // selon TMDB il faudra faire une recherche avec l'id pour obtenir l'URL
            plateformes: providers.map(p => ({
              id: p.provider_id,
              nom: p.provider_name
            })),
            lien: link
          });
        }
      }
    }

    contenu.sort((a, b) => b.popularite - a.popularite);

    return {
      contenu: contenu.slice(0, limite),
      totalItems: contenu.length,
      itemsPerPage: limite,
      plateformesUtilisees: plateformesIds,
      plateformesUtiliseesNoms: plateformes.map(p => typeof p === 'string' ? p : Object.keys(PROVIDER_IDS).find(key => PROVIDER_IDS[key] === p)),
      totalPagesFetched,
      totalPages
       
    };

  } catch (error) {
    console.error('Une erreur est survenue:', error);
    return "Une erreur est survenue lors de la recherche.";
  }
}


/*
 
en resume , cette fonction permet de rechercher du contenu en fonction des plateformes de streaming selectionnees
en utilisant provider ids , on peut rechercher du contenu disponible sur des plateformes specifiques
on utilise fetchPaginatedData pour obtenir plus de resultats
on utilise getProviderDetails pour obtenir les plateformes de streaming sur lesquelles le contenu est disponible
on trie le contenu par popularite et on le retourne

ces trois fonctions permettant de recuperer du contenu de façon asynchrone sur plusieurs URL et attend que toute les promesses 
soient termines avant de continuer 

// la fonction getproviderdetails et fetchpaginateddata seront utilises pour les autre recherches

*/


//route pour fetch des media  au lancement de Home

router.get('/trendings', async (req, res) => {
  console.log('raw platformes:', req.query.plateformes);
  try {
    const { plateformes, region = 'FR', limite = 100 } = req.query;
    console.log('Received query params:', { plateformes, region, limite });

    // Vérifiez si 'plateformes' est défini
    if (!plateformes) {
      throw new Error("Le paramètre 'plateformes' est requis");
    }

    let plateformeArray;
    try {
      plateformeArray = JSON.parse(plateformes);
      console.log('Parsed plateformeArray:', plateformeArray);
    } catch (error) {
      throw new Error("Erreur de parsing JSON pour 'plateformes'");
    }

    // Vérifiez que plateformeArray est bien un tableau
    if (!Array.isArray(plateformeArray)) {
      throw new Error("'plateformes' doit être un tableau");
    }

    const result = await rechercheContenuParPlateforme(plateformeArray, region, parseInt(limite));
    res.status(200).json({ success: true, result });
    console.log('Result:', result);
  } catch (error) {
    console.error('Error occurred:', error);
    res.status(500).json({ success: false, message: error.message });
  }
});

// route permettant de faire une recherche de film / serie 
// https://api.themoviedb.org/3/search/multi?query=Matrix&include_adult=false&language=fr-FR&page=1';

router.get('/search', async (req, res) => {
  const { query, include_adult = false, language = 'fr-FR', page = 1 } = req.query;
  const url = `${BASE_URL}/search/multi?api_key=${API_KEY}&query=${query}&include_adult=${include_adult}&language=${language}&page=${page}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    const results = await Promise.all(data.results.map(async item => {
      const type = item.media_type === 'movie' ? 'movie' : 'tv';
      const { providers, link } = await getProviderDetails(type, item.id);

      return {
        type: type === 'movie' ? 'film' : 'série',
        titre: item.title || item.name,
        annee: new Date(item.release_date || item.first_air_date).getFullYear(),
        description: item.overview,
        genre: item.genre_ids ? item.genre_ids.map(id => type === 'movie' ? MOVIE_GENRE_NAMES[id] : TV_GENRE_NAMES[id]) : [],
        poster: item.poster_path,
        id: item.id,
        popularite: item.vote_average,
        vote: item.vote_count,
        plateformes: providers.map(p => ({
          id: p.provider_id,
          nom: p.provider_name
        })),
        lien: link
      };
    }));
    console.log('Search results:', results);
    res.status(200).json({ success: true, results });
  } catch (error) {
    console.error('Error occurred:', error);
    res.status(500).json({ success: false, message: error.message });
  }
});




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


function getProviderDetailsWithRegion(type, id, region) {
  const url = `${BASE_URL}/${type}/${id}/watch/providers?api_key=${API_KEY}`;
  return fetch(url)
    .then(response => response.json())
    .then(data => data.results[region]?.flatrate || []);
}
/*
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

  const fetchPromises = discoverUrls.map(url => fetch(url).then(res => res.json()));

  Promise.all(fetchPromises)
    .then(contentDataArray => {
      const contenuPromises = contentDataArray.flatMap((data, index) => {
        const type = typeArray[index]; // Détermine le type de contenu (movie ou tv)
        const typeName = type === 'movie' ? 'film' : 'série'; // Type de contenu pour l'affichage

        return data.results.map(item => {
          return getProviderDetailsWithRegion(type, item.id, region)
            .then(providers => (
            {
              type: typeName,
              id : item.id,
              titre: item.title || item.name,
              poster: item.poster_path,
              adult : item.adult,
              genre : item.genre_ids.map(id => type === 'movie' ? MOVIE_GENRE_NAMES[id] : TV_GENRE_NAMES[id]),
              annee: new Date(item.release_date || item.first_air_date).getFullYear(),
              description: item.overview,
              popularite: item.vote_average,
              vote_count: item.vote_count,
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




//------------------------------------Exemples------------------------------------//

// Exemple d'utilisation avec Netflix et Amazon Prime Video
/*
rechercheContenuParPlateforme(['Netflix', 119], 'FR',  30)
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
//route test pour thunder client, decocher m// Simule une requête HTTP avec les paramètres nécessaires http://localhost:3000/movies/search?types=tv&language=fr-FR&include_adult=false&sort_by=popularity.desc&genre=16,10765&release_date_gte=2020-01-01&release_date_lte=2023-12-31&region=FR&plateformes=Netflix,Amazon Prime Video&page=1



/*
*/
// Exporte le routeur pour être utilisé dans d'autres parties de l'application
module.exports = router;
