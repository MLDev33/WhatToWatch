

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

module.exports = { getProviderDetails };



//Brouillion liste de tous les provider
const providers = [
  {
    "display_priorities": {
      "CA": 6,
      "AE": 1,
      "AR": 3,
      "AT": 4,
      "AU": 10,
      "BE": 6,
      "BO": 6,
      "BR": 8,
      "BG": 2,
      "CH": 4,
      "CL": 3,
      "CO": 4,
      "CR": 5,
      "CZ": 3,
      "DE": 4,
      "DK": 7,
      "EC": 7,
      "EE": 3,
      "EG": 2,
      "ES": 4,
      "FI": 10,
      "FR": 5,
      "GB": 5,
      "GR": 2,
      "GT": 7,
      "HK": 5,
      "HN": 7,
      "HU": 3,
      "ID": 4,
      "IE": 4,
      "IN": 8,
      "IT": 4,
      "JP": 7,
      "LT": 3,
      "LV": 3,
      "MX": 4,
      "MY": 4,
      "NL": 8,
      "NO": 6,
      "NZ": 4,
      "PE": 3,
      "PH": 4,
      "PL": 1,
      "PT": 4,
      "PY": 7,
      "RU": 2,
      "SA": 1,
      "SE": 8,
      "SG": 5,
      "SK": 3,
      "TH": 4,
      "TR": 6,
      "TW": 7,
      "US": 4,
      "VE": 4,
      "ZA": 2,
      "SI": 31,
      "CV": 13,
      "GH": 17,
      "MU": 15,
      "MZ": 16,
      "UG": 16,
      "IL": 28
    },
    "display_priority": 2,
    "logo_path": "/peURlLlr8jggOwK53fJ5wdQl05y.jpg",
    "provider_name": "Apple TV",
    "provider_id": 2
  },
  {
    "display_priorities": {
      "CA": 8,
      "AE": 3,
      "AR": 6,
      "AT": 8,
      "AU": 14,
      "BE": 7,
      "BO": 22,
      "BR": 16,
      "CH": 5,
      "CL": 4,
      "CO": 3,
      "CR": 22,
      "CZ": 4,
      "DE": 8,
      "DK": 8,
      "EC": 11,
      "EE": 4,
      "EG": 4,
      "ES": 13,
      "FI": 11,
      "FR": 7,
      "GB": 12,
      "GR": 3,
      "GT": 22,
      "HK": 13,
      "HN": 22,
      "HR": 3,
      "HU": 4,
      "ID": 6,
      "IE": 7,
      "IN": 10,
      "IS": 4,
      "IT": 7,
      "JP": 9,
      "KR": 7,
      "LT": 4,
      "LV": 4,
      "MX": 15,
      "MY": 5,
      "NL": 11,
      "NO": 8,
      "NZ": 7,
      "PE": 5,
      "PH": 5,
      "PL": 3,
      "PT": 5,
      "PY": 22,
      "RU": 4,
      "SA": 3,
      "SE": 9,
      "SG": 6,
      "SK": 5,
      "TH": 5,
      "TR": 5,
      "TW": 3,
      "US": 14,
      "VE": 3,
      "ZA": 3,
      "TZ": 20
    },
    "display_priority": 3,
    "logo_path": "/tbEdFQDwx5LEVr8WpSeXQSIirVq.jpg",
    "provider_name": "Google Play Movies",
    "provider_id": 3
  },
  {
    "display_priorities": {
      "US": 42
    },
    "display_priority": 42,
    "logo_path": "/21dEscfO8n1tL35k4DANixhffsR.jpg",
    "provider_name": "Vudu",
    "provider_id": 7
  },
  {
    "display_priorities": {
      "CA": 0,
      "AD": 0,
      "AE": 0,
      "AG": 0,
      "AL": 0,
      "AR": 0,
      "AT": 0,
      "AU": 0,
      "BA": 0,
      "BB": 0,
      "BE": 0,
      "BH": 0,
      "BM": 0,
      "BO": 0,
      "BS": 0,
      "BR": 0,
      "BG": 0,
      "CH": 0,
      "CI": 0,
      "CL": 0,
      "CO": 0,
      "CR": 0,
      "CU": 0,
      "CV": 0,
      "CZ": 0,
      "DE": 0,
      "DK": 0,
      "DO": 0,
      "DZ": 0,
      "EC": 0,
      "EE": 0,
      "EG": 0,
      "ES": 0,
      "FI": 0,
      "FJ": 0,
      "FR": 0,
      "GB": 0,
      "GF": 0,
      "GG": 0,
      "GH": 0,
      "GI": 0,
      "GQ": 0,
      "GR": 0,
      "GT": 0,
      "HK": 1,
      "HN": 0,
      "HR": 0,
      "HU": 0,
      "ID": 0,
      "IE": 0,
      "IL": 0,
      "IN": 0,
      "IQ": 0,
      "IS": 0,
      "IT": 0,
      "JM": 0,
      "JO": 0,
      "JP": 0,
      "KE": 0,
      "KR": 0,
      "KW": 0,
      "LB": 0,
      "LC": 0,
      "LI": 0,
      "LT": 0,
      "LV": 0,
      "LY": 0,
      "MA": 0,
      "MC": 0,
      "MD": 0,
      "MK": 0,
      "MT": 0,
      "MU": 0,
      "MX": 0,
      "MY": 1,
      "MZ": 0,
      "NE": 0,
      "NG": 0,
      "NL": 0,
      "NO": 0,
      "NZ": 0,
      "OM": 0,
      "PA": 0,
      "PE": 0,
      "PF": 0,
      "PH": 0,
      "PK": 0,
      "PL": 0,
      "PS": 0,
      "PT": 0,
      "PY": 0,
      "QA": 0,
      "RO": 0,
      "RS": 0,
      "SA": 0,
      "SC": 0,
      "SE": 0,
      "SI": 0,
      "SG": 0,
      "SN": 0,
      "SK": 0,
      "SM": 0,
      "SV": 0,
      "TC": 0,
      "TH": 1,
      "TN": 0,
      "TR": 1,
      "TT": 0,
      "TW": 0,
      "TZ": 0,
      "UG": 0,
      "US": 0,
      "UY": 0,
      "VE": 0,
      "YE": 0,
      "ZA": 0,
      "ZM": 0
    },
    "display_priority": 0,
    "logo_path": "/t2yyOv40HZeVlLjYsCsPHnWLk4W.jpg",
    "provider_name": "Netflix",
    "provider_id": 8
  },
  {
    "display_priorities": {
      "AT": 1,
      "DE": 1,
      "GB": 2,
      "JP": 5,
      "US": 1
    },
    "display_priority": 1,
    "logo_path": "/emthp39XA2YScoYL1p0sdbAH2WA.jpg",
    "provider_name": "Amazon Prime Video",
    "provider_id": 9
  },
  {
    "display_priorities": {
      "CA": 58,
      "AT": 3,
      "AU": 12,
      "BR": 15,
      "DE": 7,
      "ES": 36,
      "FR": 46,
      "GB": 4,
      "IN": 49,
      "IT": 40,
      "JP": 6,
      "MX": 9,
      "NL": 40,
      "US": 13
    },
    "display_priority": 13,
    "logo_path": "/5NyLm42TmCqCMOZFvH4fcoSNKEW.jpg",
    "provider_name": "Amazon Video",
    "provider_id": 10
  },
  {
    "display_priorities": {
      "CA": 31,
      "AD": 5,
      "AE": 4,
      "AG": 4,
      "AL": 5,
      "AR": 12,
      "AT": 21,
      "AU": 24,
      "BA": 5,
      "BB": 4,
      "BE": 11,
      "BH": 4,
      "BM": 4,
      "BO": 25,
      "BS": 4,
      "BR": 13,
      "BG": 4,
      "CH": 20,
      "CI": 5,
      "CL": 12,
      "CO": 12,
      "CR": 25,
      "CU": 4,
      "CV": 4,
      "CZ": 5,
      "DE": 28,
      "DK": 11,
      "DO": 4,
      "DZ": 4,
      "EC": 12,
      "EE": 5,
      "EG": 6,
      "ES": 15,
      "FI": 13,
      "FJ": 4,
      "FR": 23,
      "GB": 11,
      "GF": 4,
      "GG": 4,
      "GH": 4,
      "GI": 4,
      "GQ": 4,
      "GR": 4,
      "GT": 25,
      "HK": 21,
      "HN": 25,
      "HR": 5,
      "HU": 5,
      "ID": 9,
      "IE": 15,
      "IL": 5,
      "IN": 11,
      "IQ": 5,
      "IS": 6,
      "IT": 12,
      "JM": 4,
      "JO": 4,
      "JP": 10,
      "KE": 4,
      "KR": 8,
      "KW": 4,
      "LB": 5,
      "LC": 4,
      "LI": 4,
      "LT": 5,
      "LV": 5,
      "LY": 4,
      "MA": 4,
      "MC": 4,
      "MD": 4,
      "MK": 5,
      "MT": 5,
      "MU": 3,
      "MX": 17,
      "MY": 7,
      "MZ": 4,
      "NE": 5,
      "NG": 5,
      "NL": 15,
      "NO": 10,
      "NZ": 11,
      "OM": 4,
      "PA": 4,
      "PE": 12,
      "PF": 4,
      "PH": 8,
      "PK": 6,
      "PL": 6,
      "PS": 5,
      "PT": 9,
      "PY": 25,
      "QA": 4,
      "RO": 2,
      "RS": 5,
      "RU": 5,
      "SA": 5,
      "SC": 4,
      "SE": 10,
      "SI": 5,
      "SG": 8,
      "SN": 4,
      "SK": 7,
      "SM": 4,
      "SV": 4,
      "TC": 4,
      "TH": 7,
      "TN": 4,
      "TR": 7,
      "TT": 4,
      "TW": 20,
      "TZ": 4,
      "UG": 4,
      "US": 78,
      "UY": 6,
      "VA": 3,
      "VE": 9,
      "YE": 4,
      "ZA": 6,
      "ZM": 4
    },
    "display_priority": 6,
    "logo_path": "/bVR4Z1LCHY7gidXAJF5pMa4QrDS.jpg",
    "provider_name": "MUBI",
    "provider_id": 11
  },
  {
    "display_priorities": {
      "US": 57
    },
    "display_priority": 57,
    "logo_path": "/7P2JHkfv4AmU2MgSPGaJ0z6nNLG.jpg",
    "provider_name": "Crackle",
    "provider_id": 12
  },
  {
    "display_priorities": {
      "DE": 25,
      "US": 70
    },
    "display_priority": 70,
    "logo_path": "/10BQc1kYmgjXFrFKb3xsRcDDn14.jpg",
    "provider_name": "realeyz",
    "provider_id": 14
  },
  {
    "display_priorities": {
      "JP": 1,
      "US": 6
    },
    "display_priority": 6,
    "logo_path": "/zxrVdFjIjLqkfnwyghnfywTn3Lh.jpg",
    "provider_name": "Hulu",
    "provider_id": 15
  },
  {
    "display_priorities": {
      "BR": 18
    },
    "display_priority": 18,
    "logo_path": "/rll0yTCjrSY6hcJqIyMatv9B2iR.jpg",
    "provider_name": "NetMovies",
    "provider_id": 19
  },
  {
    "display_priorities": {
      "AT": 16,
      "DE": 16
    },
    "display_priority": 16,
    "logo_path": "/2PTFxgrswnEuK0szl87iSd8Yszz.jpg",
    "provider_name": "maxdome Store",
    "provider_id": 20
  },
  {
    "display_priorities": {
      "AU": 9
    },
    "display_priority": 9,
    "logo_path": "/rDd7IEBnJB0gPagFvagP1kK3pDu.jpg",
    "provider_name": "Stan",
    "provider_id": 21
  },
  {
    "display_priorities": {},
    "display_priority": 10,
    "logo_path": "/lTgfdT2r558ytJN8cZp19zd6DKO.jpg",
    "provider_name": "Quickflix",
    "provider_id": 22
  },
  {
    "display_priorities": {},
    "display_priority": 11,
    "logo_path": "/6HtR4lwikdriuJi86cZa3nXjB3d.jpg",
    "provider_name": "Quickflix Store",
    "provider_id": 24
  },
  {
    "display_priorities": {
      "CA": 26,
      "US": 61
    },
    "display_priority": 61,
    "logo_path": "/eAhAUvV2ouai3cGti5y70YOtrBN.jpg",
    "provider_name": "Fandor",
    "provider_id": 25
  },
  {
    "display_priorities": {
      "AT": 12,
      "CH": 12,
      "DE": 30
    },
    "display_priority": 30,
    "logo_path": "/lMGjx9hi6Kb4nQvFLGhBfk6nHZV.jpg",
    "provider_name": "Netzkino",
    "provider_id": 28
  },
  {
    "display_priorities": {
      "AT": 9,
      "DE": 6,
      "GB": 9,
      "IE": 8,
      "IT": 8
    },
    "display_priority": 8,
    "logo_path": "/fBHHXKC34ffxAsQvDe0ZJbvmTEQ.jpg",
    "provider_name": "Sky Go",
    "provider_id": 29
  },
  {
    "display_priorities": {
      "DE": 5
    },
    "display_priority": 5,
    "logo_path": "/MiVcYLkztM6qqLeVSYWHFCUcXx.jpg",
    "provider_name": "WOW",
    "provider_id": 30
  },
  {
    "display_priorities": {
      "AT": 13,
      "CH": 15,
      "DE": 20
    },
    "display_priority": 20,
    "logo_path": "/cDwMvtLqnReORuXJAOKUCTcyc5f.jpg",
    "provider_name": "Alleskino",
    "provider_id": 33
  },
  {
    "display_priorities": {
      "US": 64
    },
    "display_priority": 64,
    "logo_path": "/6A1gRIJqLfFHOoTvbTxDAbuU2nQ.jpg",
    "provider_name": "MGM Plus",
    "provider_id": 34
  },
  {
    "display_priorities": {
      "AL": 9,
      "AT": 11,
      "BA": 9,
      "BE": 10,
      "CH": 10,
      "DE": 13,
      "DK": 18,
      "ES": 11,
      "FI": 17,
      "FR": 22,
      "GB": 29,
      "IE": 12,
      "IT": 3,
      "MK": 9,
      "MT": 9,
      "NL": 13,
      "NO": 16,
      "PT": 8,
      "RS": 9,
      "SE": 17,
      "SI": 9
    },
    "display_priority": 17,
    "logo_path": "/5GEbAhFW2S5T8zVc1MNvz00pIzM.jpg",
    "provider_name": "Rakuten TV",
    "provider_id": 35
  },
  {
    "display_priorities": {
      "US": 46
    },
    "display_priority": 46,
    "logo_path": "/4kL33LoKd99YFIaSOoOPMQOSw1A.jpg",
    "provider_name": "Showtime",
    "provider_id": 37
  },
  {
    "display_priorities": {
      "GB": 10
    },
    "display_priority": 10,
    "logo_path": "/zY5SmHyAy1CoA3AfQpf58QnShnw.jpg",
    "provider_name": "BBC iPlayer",
    "provider_id": 38
  },
  {
    "display_priorities": {
      "GB": 48,
      "IE": 11,
      "IT": 9
    },
    "display_priority": 9,
    "logo_path": "/y7mZSw1FV99yfawxOISBQTvtJxM.jpg",
    "provider_name": "Now TV",
    "provider_id": 39
  },
  {
    "display_priorities": {
      "AT": 10,
      "DE": 15,
      "GB": 15,
      "IT": 11,
      "PL": 11,
      "ES": 61
    },
    "display_priority": 11,
    "logo_path": "/cksgBjTHV3rzAVaO2zUyS1mH4Ke.jpg",
    "provider_name": "Chili",
    "provider_id": 40
  },
  {
    "display_priorities": {
      "GB": 20
    },
    "display_priority": 20,
    "logo_path": "/clC87JljoZKeAHIwdlxd1AUn6cn.jpg",
    "provider_name": "ITVX",
    "provider_id": 41
  },
  {
    "display_priorities": {
      "AR": 32,
      "BR": 44,
      "CL": 29,
      "CO": 34,
      "DE": 37,
      "ES": 36,
      "FR": 47,
      "GB": 79,
      "IE": 34,
      "IT": 40,
      "MX": 40,
      "NL": 40,
      "US": 43
    },
    "display_priority": 43,
    "logo_path": "/eWp5LdR4p4uKL0wACBBXapDV2lB.jpg",
    "provider_name": "Starz",
    "provider_id": 43
  },
  {
    "display_priorities": {
      "BR": 5
    },
    "display_priority": 5,
    "logo_path": "/mPDlxHokGsEc84OOhp9qjeynq2U.jpg",
    "provider_name": "Looke",
    "provider_id": 47
  },
  {
    "display_priorities": {
      "IE": 10
    },
    "display_priority": 10,
    "logo_path": "/cEFDMwXFueD1II3lwcTawSnmOaj.jpg",
    "provider_name": "Volta",
    "provider_id": 53
  },
  {
    "display_priorities": {
      "ZA": 5
    },
    "display_priority": 5,
    "logo_path": "/6MG0j8Z5d67Y06J7PZC8l7z58DX.jpg",
    "provider_name": "BoxOffice",
    "provider_id": 54
  },
  {
    "display_priorities": {
      "CI": 25,
      "DZ": 27,
      "GH": 11,
      "GQ": 11,
      "KE": 10,
      "LY": 27,
      "MU": 8,
      "MZ": 10,
      "NE": 25,
      "NG": 27,
      "SC": 9,
      "SN": 11,
      "TZ": 9,
      "UG": 10,
      "ZA": 4,
      "ZM": 10
    },
    "display_priority": 4,
    "logo_path": "/okiQZMXnqwv0aD3QDYmu5DBNLce.jpg",
    "provider_name": "ShowMax",
    "provider_id": 55
  },
  {
    "display_priorities": {
      "FR": 4
    },
    "display_priority": 4,
    "logo_path": "/riPZYc1ILIbubFaxYSdVfc7K6bm.jpg",
    "provider_name": "OCS Go",
    "provider_id": 56
  },
  {
    "display_priorities": {
      "FR": 18
    },
    "display_priority": 18,
    "logo_path": "/knpqBvBQjyHnFrYPJ9bbtUCv6uo.jpg",
    "provider_name": "Canal VOD",
    "provider_id": 58
  },
  {
    "display_priorities": {
      "FR": 20
    },
    "display_priority": 20,
    "logo_path": "/ulTa4e9ysKwMwNpg7EfhYnvAj8q.jpg",
    "provider_name": "Bbox VOD",
    "provider_id": 59
  },
  {
    "display_priorities": {
      "FR": 10
    },
    "display_priority": 10,
    "logo_path": "/ddWcbe8fYAfcQMjighzWGLjjyip.jpg",
    "provider_name": "Orange VOD",
    "provider_id": 61
  },
  {
    "display_priorities": {
      "ES": 12
    },
    "display_priority": 12,
    "logo_path": "/9dielJNGTSKO7Lp6NKAuNOLw2jP.jpg",
    "provider_name": "Atres Player",
    "provider_id": 62
  },
  {
    "display_priorities": {
      "ES": 7,
      "PT": 25
    },
    "display_priority": 25,
    "logo_path": "/gqdajHmtr6qtutL7kkmEgleGfV9.jpg",
    "provider_name": "Filmin",
    "provider_id": 63
  },
  {
    "display_priorities": {
      "ES": 8,
      "PT": 26
    },
    "display_priority": 26,
    "logo_path": "/4k49M5oMFewREZLfCw6jNAn0dOo.jpg",
    "provider_name": "Filmin Plus",
    "provider_id": 64
  },
  {
    "display_priorities": {
      "MX": 13
    },
    "display_priority": 13,
    "logo_path": "/xVsZYrrmmqFJh3MkH98aFjMHnSf.jpg",
    "provider_name": "Filmin Latino",
    "provider_id": 66
  },
  {
    "display_priorities": {
      "AR": 11,
      "BO": 23,
      "CL": 11,
      "CO": 10,
      "CR": 23,
      "EC": 9,
      "GT": 23,
      "HN": 23,
      "MX": 16,
      "PE": 11,
      "PY": 23
    },
    "display_priority": 23,
    "logo_path": "/egNBibGpNroklenRFE0EiRYZqaf.jpg",
    "provider_name": "Blim",
    "provider_id": 67
  },
  {
    "display_priorities": {
      "CA": 16,
      "AT": 14,
      "AU": 18,
      "BR": 17,
      "CH": 6,
      "DE": 34,
      "DK": 10,
      "ES": 14,
      "FI": 12,
      "FR": 14,
      "GB": 16,
      "IE": 14,
      "IT": 22,
      "JP": 8,
      "MX": 14,
      "NL": 12,
      "NO": 9,
      "NZ": 10,
      "SE": 7,
      "US": 53
    },
    "display_priority": 53,
    "logo_path": "/shq88b09gTBYC4hA7K7MUL8Q4zP.jpg",
    "provider_name": "Microsoft Store",
    "provider_id": 68
  },
  {
    "display_priorities": {
      "NL": 7
    },
    "display_priority": 7,
    "logo_path": "/llmnYOyknekZsXtkCaazKjhTLvG.jpg",
    "provider_name": "Pathé Thuis",
    "provider_id": 71
  },
  {
    "display_priorities": {
      "NL": 6
    },
    "display_priority": 6,
    "logo_path": "/klcjoULUsj7MBZJW8vMSgQgAcvM.jpg",
    "provider_name": "Videoland",
    "provider_id": 72
  },
  {
    "display_priorities": {
      "CA": 14,
      "AU": 26,
      "IN": 16,
      "MX": 18,
      "US": 50
    },
    "display_priority": 50,
    "logo_path": "/w2TDH9TRI7pltf5LjN3vXzs7QbN.jpg",
    "provider_name": "Tubi TV",
    "provider_id": 73
  },
  {
    "display_priorities": {
      "DK": 6,
      "EE": 2,
      "FI": 5,
      "IS": 29,
      "LT": 2,
      "LV": 2,
      "NL": 4,
      "NO": 4,
      "PL": 25,
      "SE": 6,
      "GB": 107,
      "US": 236,
      "CA": 128
    },
    "display_priority": 236,
    "logo_path": "/cvl65OJnz14LUlC3yGK1KHj8UYs.jpg",
    "provider_name": "Viaplay",
    "provider_id": 76
  },
  {
    "display_priorities": {
      "DK": 5,
      "FI": 8,
      "NO": 6,
      "SE": 5
    },
    "display_priority": 5,
    "logo_path": "/pCIkSBek0aZfPQzOn9gfazuYaLV.jpg",
    "provider_name": "C More",
    "provider_id": 77
  },
  {
    "display_priorities": {
      "CA": 42
    },
    "display_priority": 42,
    "logo_path": "/2BPU00vSfCZ4XI2CnQCBv8rZk2f.jpg",
    "provider_name": "CBS",
    "provider_id": 78
  },
  {
    "display_priorities": {
      "AU": 23
    },
    "display_priority": 23,
    "logo_path": "/n0A2DUp7BPrz5mBoTN9cYV8oGhG.jpg",
    "provider_name": "tenplay",
    "provider_id": 82
  },
  {
    "display_priorities": {
      "US": 40
    },
    "display_priority": 40,
    "logo_path": "/6Y6w3F5mYoRHCcNAG0ZD2AndLJ2.jpg",
    "provider_name": "The CW",
    "provider_id": 83
  },
  {
    "display_priorities": {
      "JP": 4
    },
    "display_priority": 4,
    "logo_path": "/npg1OiBidQSndMsBZwgEPOYU6Jq.jpg",
    "provider_name": "U-NEXT",
    "provider_id": 84
  },
  {
    "display_priorities": {
      "JP": 2
    },
    "display_priority": 2,
    "logo_path": "/g8jqHtXJsMlc8B1Gb0Rt8AvUJMn.jpg",
    "provider_name": "dTV",
    "provider_id": 85
  },
  {
    "display_priorities": {
      "CA": 27,
      "AU": 28,
      "DK": 16,
      "GB": 58,
      "NL": 17,
      "NO": 14,
      "NZ": 15,
      "SE": 14,
      "US": 73,
      "ZA": 9
    },
    "display_priority": 73,
    "logo_path": "/5P99DkK1jVs95KcE8bYG9MBtGQ.jpg",
    "provider_name": "Acorn TV",
    "provider_id": 87
  },
  {
    "display_priorities": {
      "AT": 20,
      "CH": 17,
      "DE": 31
    },
    "display_priority": 31,
    "logo_path": "/gGTgmDv9fa8uSd2sEybDOzfYfHK.jpg",
    "provider_name": "Kividoo",
    "provider_id": 89
  },
  {
    "display_priorities": {
      "KR": 6
    },
    "display_priority": 6,
    "logo_path": "/a4ciTQc27FsgdUp7PCrToHPygcw.jpg",
    "provider_name": "Naver Store",
    "provider_id": 96
  },
  {
    "display_priorities": {
      "KR": 4
    },
    "display_priority": 4,
    "logo_path": "/vXXZx0aWQtDv2klvObNugm4dQMN.jpg",
    "provider_name": "Watcha",
    "provider_id": 97
  },
  {
    "display_priorities": {
      "CA": 29,
      "AT": 24,
      "AU": 36,
      "DE": 35,
      "GB": 23,
      "IE": 13,
      "NZ": 18,
      "US": 71
    },
    "display_priority": 71,
    "logo_path": "/pheENW1BxlexXX1CKJ4GyWudyMA.jpg",
    "provider_name": "Shudder",
    "provider_id": 99
  },
  {
    "display_priorities": {
      "CA": 33,
      "AT": 22,
      "AU": 27,
      "BO": 13,
      "BG": 10,
      "CH": 13,
      "CR": 10,
      "DE": 33,
      "DK": 13,
      "EE": 6,
      "ES": 16,
      "FI": 15,
      "GB": 30,
      "GT": 10,
      "HK": 30,
      "HN": 10,
      "HR": 7,
      "ID": 8,
      "IE": 16,
      "IN": 14,
      "IT": 19,
      "KR": 9,
      "LT": 6,
      "LV": 6,
      "MX": 19,
      "MY": 6,
      "NL": 16,
      "NO": 11,
      "NZ": 14,
      "PH": 7,
      "PL": 14,
      "PY": 10,
      "RU": 6,
      "SE": 11,
      "SG": 7,
      "SK": 9,
      "TH": 6,
      "TW": 29,
      "US": 76,
      "ZA": 7,
      "TZ": 15
    },
    "display_priority": 7,
    "logo_path": "/iX0pvJ2GFATbVIH5IHMwG0ffIdV.jpg",
    "provider_name": "GuideDoc",
    "provider_id": 100
  },
  {
    "display_priorities": {
      "GB": 8,
      "IE": 18
    },
    "display_priority": 18,
    "logo_path": "/kJ9GcmYk5zJ9nJtVX8XjDo9geIM.jpg",
    "provider_name": "All 4",
    "provider_id": 103
  },
  {
    "display_priorities": {
      "IT": 13
    },
    "display_priority": 13,
    "logo_path": "/ftxHS1anAWTYgtDtIDv8VLXoepH.jpg",
    "provider_name": "Timvision",
    "provider_id": 109
  },
  {
    "display_priorities": {
      "IT": 14
    },
    "display_priority": 14,
    "logo_path": "/lYAFW2CjeOOxCGQo69zKzlhbK0U.jpg",
    "provider_name": "Infinity+",
    "provider_id": 110
  },
  {
    "display_priorities": {
      "HK": 3,
      "HR": 2,
      "IS": 3,
      "SK": 2,
      "TW": 5
    },
    "display_priority": 5,
    "logo_path": "/o9ExgOSLF3OTwR6T3DJOuwOKJgq.jpg",
    "provider_name": "Ivi",
    "provider_id": 113
  },
  {
    "display_priorities": {
      "RU": 0
    },
    "display_priority": 0,
    "logo_path": "/w1T8s7FqakcfucR8cgOvbe6UeXN.jpg",
    "provider_name": "Okko",
    "provider_id": 115
  },
  {
    "display_priorities": {
      "RU": 1
    },
    "display_priority": 1,
    "logo_path": "/nlgoXBQCMSnGZrhAnyIZ7vSQ3vs.jpg",
    "provider_name": "Amediateka",
    "provider_id": 116
  },
  {
    "display_priorities": {
      "RU": 24
    },
    "display_priority": 24,
    "logo_path": "/1KAux0lBEHpLnQcvaf1Qf1uKcIP.jpg",
    "provider_name": "Kinopoisk",
    "provider_id": 117
  },
  {
    "display_priorities": {},
    "display_priority": 36,
    "logo_path": "/fWqVPYArdFwBc6vYqoyQB6XUl85.jpg",
    "provider_name": "HBO",
    "provider_id": 118
  },
  {
    "display_priorities": {
      "CA": 2,
      "AD": 1,
      "AE": 12,
      "AG": 1,
      "AL": 1,
      "AR": 2,
      "AU": 1,
      "BA": 1,
      "BB": 1,
      "BE": 2,
      "BH": 1,
      "BM": 1,
      "BO": 1,
      "BS": 1,
      "BR": 2,
      "BG": 1,
      "CH": 1,
      "CI": 1,
      "CL": 2,
      "CO": 2,
      "CR": 1,
      "CU": 1,
      "CV": 1,
      "CZ": 1,
      "DK": 2,
      "DO": 1,
      "DZ": 1,
      "EC": 2,
      "EE": 1,
      "EG": 1,
      "ES": 1,
      "FI": 2,
      "FJ": 1,
      "FR": 1,
      "GF": 1,
      "GG": 1,
      "GH": 1,
      "GI": 1,
      "GQ": 1,
      "GR": 1,
      "GT": 1,
      "HK": 7,
      "HN": 1,
      "HR": 1,
      "HU": 2,
      "ID": 7,
      "IE": 1,
      "IL": 1,
      "IN": 1,
      "IQ": 1,
      "IS": 2,
      "IT": 1,
      "JM": 1,
      "JO": 1,
      "KE": 1,
      "KR": 1,
      "KW": 1,
      "LB": 1,
      "LC": 1,
      "LI": 1,
      "LT": 1,
      "LV": 1,
      "LY": 1,
      "MA": 1,
      "MC": 1,
      "MD": 1,
      "MK": 1,
      "MT": 1,
      "MX": 1,
      "MY": 9,
      "MZ": 1,
      "NE": 1,
      "NG": 1,
      "NL": 2,
      "NO": 2,
      "NZ": 1,
      "OM": 1,
      "PA": 1,
      "PE": 2,
      "PF": 1,
      "PH": 1,
      "PK": 1,
      "PL": 4,
      "PS": 1,
      "PT": 2,
      "PY": 1,
      "QA": 1,
      "RO": 1,
      "RS": 1,
      "SA": 28,
      "SC": 1,
      "SE": 2,
      "SI": 1,
      "SG": 1,
      "SN": 1,
      "SK": 1,
      "SM": 1,
      "SV": 1,
      "TC": 1,
      "TH": 3,
      "TN": 1,
      "TR": 4,
      "TT": 1,
      "TW": 1,
      "TZ": 1,
      "UG": 1,
      "UY": 1,
      "VA": 0,
      "VE": 2,
      "YE": 1,
      "ZA": 1,
      "ZM": 1
    },
    "display_priority": 1,
    "logo_path": "/emthp39XA2YScoYL1p0sdbAH2WA.jpg",
    "provider_name": "Amazon Prime Video",
    "provider_id": 119
  },
  {
    "display_priorities": {
      "IN": 3
    },
    "display_priority": 3,
    "logo_path": "/2u1uElmpm4lProS7C9RYcaYLYt1.jpg",
    "provider_name": "Voot",
    "provider_id": 121
  },
  {
    "display_priorities": {
      "GB": 45,
      "ID": 3,
      "IN": 2,
      "MY": 0,
      "TH": 0
    },
    "display_priority": 0,
    "logo_path": "/7Fl8ylPDclt3ZYgNbW2t7rbZE9I.jpg",
    "provider_name": "Hotstar",
    "provider_id": 122
  },
  {
    "display_priorities": {
      "US": 48
    },
    "display_priority": 48,
    "logo_path": "/twV9iQPYeaoBzwsfRFGMGoMIUg8.jpg",
    "provider_name": "FXNow",
    "provider_id": 123
  },
  {
    "display_priorities": {},
    "display_priority": 17,
    "logo_path": "/uOooYc5OsAq68QcrCZnRhY1rrXo.jpg",
    "provider_name": "Bookmyshow",
    "provider_id": 124
  },
  {
    "display_priorities": {
      "AT": 24,
      "CH": 19,
      "DE": 11,
      "GB": 14,
      "IE": 9
    },
    "display_priority": 9,
    "logo_path": "/2pCbao1J9s0DMak2KKnEzmzHni8.jpg",
    "provider_name": "Sky Store",
    "provider_id": 130
  },
  {
    "display_priorities": {
      "AU": 21
    },
    "display_priority": 21,
    "logo_path": "/yv10kiDftxh4LPuGhfH9H8LUXFr.jpg",
    "provider_name": "SBS On Demand",
    "provider_id": 132
  },
  {
    "display_priorities": {
      "AT": 17,
      "CH": 9,
      "DE": 17
    },
    "display_priority": 17,
    "logo_path": "/goKrzBxDNYxKgeeT2yoHtLXuIol.jpg",
    "provider_name": "Videobuster",
    "provider_id": 133
  },
  {
    "display_priorities": {
      "AU": 7
    },
    "display_priority": 7,
    "logo_path": "/3WZ89RECN5CVhbfYATBNuQCOZVH.jpg",
    "provider_name": "Foxtel Now",
    "provider_id": 134
  },
  {
    "display_priorities": {
      "AU": 20
    },
    "display_priority": 20,
    "logo_path": "/vFjk9B5bZ1ranNLnjE6Z4RY3VxM.jpg",
    "provider_name": "ABC iview",
    "provider_id": 135
  },
  {
    "display_priorities": {
      "FR": 17
    },
    "display_priority": 17,
    "logo_path": "/b6hJjWPa7h8VCpaCVJCSu8EPlqT.jpg",
    "provider_name": "FILMO",
    "provider_id": 138
  },
  {
    "display_priorities": {
      "CA": 13
    },
    "display_priority": 13,
    "logo_path": "/yNr05VQlKK4dI0Ncwf9InIVGKs9.jpg",
    "provider_name": "Cineplex",
    "provider_id": 140
  },
  {
    "display_priorities": {
      "CA": 28,
      "US": 74
    },
    "display_priority": 74,
    "logo_path": "/pZ9TSk3wlRYwiwwRxTsQJ7t2but.jpg",
    "provider_name": "Sundance Now",
    "provider_id": 143
  },
  {
    "display_priorities": {
      "CA": 12
    },
    "display_priority": 12,
    "logo_path": "/366UvWIQMqvKI6SyinCmvQx2B2j.jpg",
    "provider_name": "iciTouTV",
    "provider_id": 146
  },
  {
    "display_priorities": {
      "FR": 9
    },
    "display_priority": 9,
    "logo_path": "/ppycrWdkR3pefMYYK79e481PULm.jpg",
    "provider_name": "Sixplay",
    "provider_id": 147
  },
  {
    "display_priorities": {
      "US": 56
    },
    "display_priority": 56,
    "logo_path": "/l9BRdAgQ3MkooOalsuu3yFQv2XP.jpg",
    "provider_name": "ABC",
    "provider_id": 148
  },
  {
    "display_priorities": {
      "ES": 10
    },
    "display_priority": 10,
    "logo_path": "/4ywRQTLYJk8CjroNX4FbCBDQZTr.jpg",
    "provider_name": "Movistar Plus",
    "provider_id": 149
  },
  {
    "display_priorities": {
      "CH": 3
    },
    "display_priority": 3,
    "logo_path": "/rVOOhp6V8FheEAKtFAJMLMbnaMZ.jpg",
    "provider_name": "blue TV",
    "provider_id": 150
  },
  {
    "display_priorities": {
      "CA": 36,
      "AU": 8,
      "DK": 38,
      "FI": 39,
      "NO": 38,
      "SE": 40,
      "US": 77,
      "ZA": 22
    },
    "display_priority": 22,
    "logo_path": "/aGIS8maihUm60A3moKYD9gfYHYT.jpg",
    "provider_name": "BritBox",
    "provider_id": 151
  },
  {
    "display_priorities": {
      "US": 69
    },
    "display_priority": 69,
    "logo_path": "/3wJNOOCbvqi7fJAdgf1QpL7Wwe2.jpg",
    "provider_name": "Lifetime",
    "provider_id": 157
  },
  {
    "display_priorities": {
      "HK": 10,
      "ID": 2,
      "MY": 3,
      "PH": 6,
      "TH": 23
    },
    "display_priority": 23,
    "logo_path": "/kIbbhgfOWTHNp0xpcFC5uJUAwHj.jpg",
    "provider_name": "Viu",
    "provider_id": 158
  },
  {
    "display_priorities": {
      "HK": 17,
      "ID": 5,
      "SG": 4,
      "TW": 16
    },
    "display_priority": 16,
    "logo_path": "/45eTLxznKGY9xq50NBWjN4adVng.jpg",
    "provider_name": "Catchplay",
    "provider_id": 159
  },
  {
    "display_priorities": {
      "ID": 1,
      "MY": 2,
      "PH": 3,
      "TH": 2
    },
    "display_priority": 2,
    "logo_path": "/fyZObCfyY6mNVZOaBqgm7UMlHt.jpg",
    "provider_name": "iflix",
    "provider_id": 160
  },
  {
    "display_priorities": {},
    "display_priority": 8,
    "logo_path": "/jmyYN1124dDIzqMysLekixy3AzF.jpg",
    "provider_name": "Hollystar",
    "provider_id": 164
  },
  {
    "display_priorities": {
      "AR": 10,
      "BR": 4,
      "CL": 10,
      "CO": 11,
      "EC": 10,
      "MX": 8,
      "PE": 10
    },
    "display_priority": 10,
    "logo_path": "/lJT7r1nprk1Z8t1ywiIa8h9d3rc.jpg",
    "provider_name": "Claro video",
    "provider_id": 167
  },
  {
    "display_priorities": {
      "AT": 19,
      "CH": 16
    },
    "display_priority": 16,
    "logo_path": "/dqlwg963xlz7jLN5Akdg6gbJ5To.jpg",
    "provider_name": "Watchbox",
    "provider_id": 171
  },
  {
    "display_priorities": {
      "CA": 34,
      "AT": 18,
      "AU": 25,
      "CH": 22,
      "DE": 32,
      "DK": 14,
      "EE": 7,
      "GB": 32,
      "ID": 10,
      "IE": 17,
      "IN": 15,
      "LT": 7,
      "LV": 7,
      "MY": 8,
      "NL": 14,
      "NO": 12,
      "NZ": 12,
      "PH": 9,
      "SE": 12,
      "SG": 9,
      "TH": 8,
      "US": 79,
      "ZA": 8
    },
    "display_priority": 8,
    "logo_path": "/j2OLGxyy0gKbPVI0DYFI2hJxP6y.jpg",
    "provider_name": "Netflix Kids",
    "provider_id": 175
  },
  {
    "display_priorities": {
      "CA": 43,
      "AT": 27,
      "AU": 30,
      "CH": 11,
      "DE": 35,
      "FR": 21,
      "GB": 21,
      "US": 49
    },
    "display_priority": 49,
    "logo_path": "/2tAjxjo1n3H7fsXqMsxWFMeFUWp.jpg",
    "provider_name": "Pantaflix",
    "provider_id": 177
  },
  {
    "display_priorities": {
      "DE": 24,
      "AT": 7
    },
    "display_priority": 24,
    "logo_path": "/uULoezj2skPc6amfwru72UPjYXV.jpg",
    "provider_name": "MagentaTV",
    "provider_id": 178
  },
  {
    "display_priorities": {
      "CA": 24
    },
    "display_priority": 24,
    "logo_path": "/8jzbtiXz0eZ6aPjxdmGW3ceqjon.jpg",
    "provider_name": "Hollywood Suite",
    "provider_id": 182
  },
  {
    "display_priorities": {
      "FR": 86
    },
    "display_priority": 86,
    "logo_path": "/bSYqkSyDkMbHLLb9UxvAPYUKiUN.jpg",
    "provider_name": "Universal Pictures",
    "provider_id": 184
  },
  {
    "display_priorities": {
      "US": 72
    },
    "display_priority": 72,
    "logo_path": "/c2Ey5Q3uUjZgfWWQQIdVIjVfxE4.jpg",
    "provider_name": "Screambox",
    "provider_id": 185
  },
  {
    "display_priorities": {
      "CA": 32,
      "AT": 15,
      "AU": 15,
      "BE": 8,
      "CH": 23,
      "DE": 18,
      "DK": 15,
      "ES": 17,
      "FI": 9,
      "FR": 16,
      "GB": 33,
      "HK": 32,
      "HU": 6,
      "IE": 20,
      "IT": 21,
      "MX": 10,
      "NO": 13,
      "NZ": 8,
      "PT": 6,
      "RU": 8,
      "SE": 13,
      "TR": 0,
      "TW": 31,
      "US": 37
    },
    "display_priority": 37,
    "logo_path": "/6IPjvnYl6WWkIwN158qBFXCr2Ne.jpg",
    "provider_name": "YouTube Premium",
    "provider_id": 188
  },
  {
    "display_priorities": {
      "GB": 18
    },
    "display_priority": 18,
    "logo_path": "/qvQB1zbVVjvf7nYBKyiINbN5ctn.jpg",
    "provider_name": "Curzon Home Cinema",
    "provider_id": 189
  },
  {
    "display_priorities": {
      "CA": 51,
      "AD": 9,
      "AL": 10,
      "AR": 14,
      "AT": 28,
      "AU": 39,
      "BA": 10,
      "BB": 6,
      "BE": 12,
      "BH": 6,
      "BM": 6,
      "BO": 15,
      "BS": 6,
      "BR": 19,
      "BG": 5,
      "CH": 26,
      "CI": 8,
      "CL": 14,
      "CO": 13,
      "CR": 8,
      "CZ": 7,
      "DE": 51,
      "DK": 22,
      "DO": 6,
      "DZ": 6,
      "EC": 13,
      "EE": 10,
      "EG": 9,
      "ES": 19,
      "FI": 20,
      "FR": 28,
      "GB": 43,
      "GF": 6,
      "GI": 6,
      "GR": 6,
      "GT": 8,
      "HK": 15,
      "HN": 6,
      "HR": 9,
      "HU": 8,
      "ID": 17,
      "IE": 21,
      "IL": 8,
      "IN": 22,
      "IQ": 8,
      "IS": 9,
      "IT": 26,
      "JM": 6,
      "JO": 6,
      "JP": 12,
      "KR": 12,
      "KW": 6,
      "LB": 8,
      "LI": 6,
      "LT": 10,
      "LV": 10,
      "LY": 6,
      "MA": 6,
      "MC": 6,
      "MD": 6,
      "MK": 10,
      "MT": 10,
      "MX": 22,
      "MY": 15,
      "NE": 8,
      "NG": 8,
      "NL": 22,
      "NO": 21,
      "NZ": 21,
      "OM": 6,
      "PA": 6,
      "PE": 13,
      "PH": 13,
      "PL": 9,
      "PS": 8,
      "PT": 11,
      "PY": 8,
      "QA": 6,
      "RO": 3,
      "RS": 10,
      "RU": 10,
      "SA": 8,
      "SE": 21,
      "SI": 10,
      "SG": 14,
      "SK": 12,
      "SM": 6,
      "SV": 6,
      "TH": 13,
      "TN": 6,
      "TR": 8,
      "TW": 14,
      "US": 62,
      "UY": 8,
      "VE": 10,
      "YE": 6,
      "ZA": 11,
      "TZ": 22
    },
    "display_priority": 11,
    "logo_path": "/67Ee4E6qOkQGHeUTArdJ1qRxzR2.jpg",
    "provider_name": "Curiosity Stream",
    "provider_id": 190
  },
  {
    "display_priorities": {
      "US": 51
    },
    "display_priority": 51,
    "logo_path": "/wbCleYwRFpUtWcNi7BLP3E1f6VI.jpg",
    "provider_name": "Kanopy",
    "provider_id": 191
  },
  {
    "display_priorities": {
      "CA": 30,
      "AU": 22,
      "DE": 10,
      "FR": 15,
      "GB": 22,
      "IN": 13,
      "PL": 8,
      "PT": 7,
      "US": 15
    },
    "display_priority": 15,
    "logo_path": "/oIkQkEkwfmcG7IGpRR1NB8frZZM.jpg",
    "provider_name": "YouTube",
    "provider_id": 192
  },
  {
    "display_priorities": {
      "CA": 67,
      "BR": 32,
      "DE": 36,
      "ES": 25,
      "FR": 32,
      "GB": 28,
      "IT": 30,
      "JP": 15,
      "MX": 28,
      "NL": 29,
      "US": 22,
      "AU": 56,
      "AT": 58
    },
    "display_priority": 22,
    "logo_path": "/x36C6aseF5l4uX99Kpse9dbPwBo.jpg",
    "provider_name": "Starz Play Amazon Channel",
    "provider_id": 194
  },
  {
    "display_priorities": {
      "DE": 42
    },
    "display_priority": 42,
    "logo_path": "/9TteoCidgcwT28Zs9yeAX7HdkwO.jpg",
    "provider_name": "Animax Plus Amazon Channel",
    "provider_id": 195
  },
  {
    "display_priorities": {
      "CA": 21,
      "ES": 43,
      "GB": 59,
      "IN": 53,
      "MX": 44,
      "US": 125,
      "AU": 29
    },
    "display_priority": 125,
    "logo_path": "/8WWD7t5Irwq9kAH4rufQ4Pe1Dog.jpg",
    "provider_name": "AcornTV Amazon Channel",
    "provider_id": 196
  },
  {
    "display_priorities": {
      "CA": 20,
      "GB": 39,
      "US": 124
    },
    "display_priority": 124,
    "logo_path": "/xTfyFZqWv8c8sxlFooUzemi6WRM.jpg",
    "provider_name": "BritBox Amazon Channel",
    "provider_id": 197
  },
  {
    "display_priorities": {
      "GB": 69,
      "US": 126
    },
    "display_priority": 126,
    "logo_path": "/8vBJZkwkrUDYMSfmw5R0ZENd7yw.jpg",
    "provider_name": "Fandor Amazon Channel",
    "provider_id": 199
  },
  {
    "display_priorities": {
      "DE": 39,
      "ES": 41,
      "FR": 52,
      "GB": 40,
      "IT": 53,
      "US": 123
    },
    "display_priority": 123,
    "logo_path": "/aJUiN18NZFbpSkHZQV1C1cTpz8H.jpg",
    "provider_name": "MUBI Amazon Channel",
    "provider_id": 201
  },
  {
    "display_priorities": {
      "US": 127
    },
    "display_priority": 127,
    "logo_path": "/naqM14qSfg2q0S2zDylM5zQQ3jn.jpg",
    "provider_name": "Screambox Amazon Channel",
    "provider_id": 202
  },
  {
    "display_priorities": {
      "US": 26
    },
    "display_priority": 26,
    "logo_path": "/zoL69abPHiVC1Qzd4kM6hwLSo0j.jpg",
    "provider_name": "Showtime Amazon Channel",
    "provider_id": 203
  },
  {
    "display_priorities": {
      "CA": 22,
      "DE": 40,
      "GB": 75,
      "US": 122,
      "AU": 37
    },
    "display_priority": 122,
    "logo_path": "/sc5pTTCFbx7GQyOst5SG4U7nkPH.jpg",
    "provider_name": "Shudder Amazon Channel",
    "provider_id": 204
  },
  {
    "display_priorities": {
      "CA": 18,
      "GB": 95,
      "US": 128
    },
    "display_priority": 128,
    "logo_path": "/xImSZRKRYzIMPr4COgJNsEHdd2T.jpg",
    "provider_name": "Sundance Now Amazon Channel",
    "provider_id": 205
  },
  {
    "display_priorities": {
      "US": 29
    },
    "display_priority": 29,
    "logo_path": "/z0h7mBHwm5KfMB2MKeoQDD2ngEZ.jpg",
    "provider_name": "The Roku Channel",
    "provider_id": 207
  },
  {
    "display_priorities": {
      "US": 47
    },
    "display_priority": 47,
    "logo_path": "/bbxgdl6B5T75wJE713BiTCIBXyS.jpg",
    "provider_name": "PBS",
    "provider_id": 209
  },
  {
    "display_priorities": {
      "CH": 7
    },
    "display_priority": 7,
    "logo_path": "/sHP8XLo4Ac4WMbziRyAdRQdb76q.jpg",
    "provider_name": "Sky",
    "provider_id": 210
  },
  {
    "display_priorities": {
      "US": 65
    },
    "display_priority": 65,
    "logo_path": "/rgpmwMkXqFYch9cway9qWMw0uXu.jpg",
    "provider_name": "Freeform",
    "provider_id": 211
  },
  {
    "display_priorities": {
      "CA": 9,
      "US": 39
    },
    "display_priority": 39,
    "logo_path": "/aJ0b9BLU1Cvv5hIz9fEhKKc1x1D.jpg",
    "provider_name": "Hoopla",
    "provider_id": 212
  },
  {
    "display_priorities": {
      "US": 68
    },
    "display_priority": 68,
    "logo_path": "/f7iqKjWYdVoYVIvKP3nboULcrM2.jpg",
    "provider_name": "Syfy",
    "provider_id": 215
  },
  {
    "display_priorities": {
      "IN": 9,
      "US": 85
    },
    "display_priority": 85,
    "logo_path": "/4XYI2rzRm34skcvamytegQx7Dmu.jpg",
    "provider_name": "Eros Now",
    "provider_id": 218
  },
  {
    "display_priorities": {
      "DE": 26
    },
    "display_priority": 26,
    "logo_path": "/lDaVaiNwOU8JHCcZ6fANzugVvtT.jpg",
    "provider_name": "Das Erste Mediathek",
    "provider_id": 219
  },
  {
    "display_priorities": {
      "IN": 4
    },
    "display_priority": 4,
    "logo_path": "/jRpQbuHbGR0MzSIBxJjxZxpXhqC.jpg",
    "provider_name": "Jio Cinema",
    "provider_id": 220
  },
  {
    "display_priorities": {
      "IT": 17
    },
    "display_priority": 17,
    "logo_path": "/s1QWuiBbZhLGSFzYOglPTVye7td.jpg",
    "provider_name": "Rai Play",
    "provider_id": 222
  },
  {
    "display_priorities": {
      "GB": 13
    },
    "display_priority": 13,
    "logo_path": "/32Pe7XfsubjbmvnZveBH5HfBQOm.jpg",
    "provider_name": "BFI Player",
    "provider_id": 224
  },
  {
    "display_priorities": {},
    "display_priority": 10,
    "logo_path": "/5jdN9E9Ftxxbg711crjOyCagTy8.jpg",
    "provider_name": "Telecine Play",
    "provider_id": 227
  },
  {
    "display_priorities": {
      "CA": 4
    },
    "display_priority": 4,
    "logo_path": "/gJ3yVMWouaVj6iHd59TISJ1TlM5.jpg",
    "provider_name": "Crave",
    "provider_id": 230
  },
  {
    "display_priorities": {
      "AD": 3,
      "AE": 5,
      "AG": 2,
      "AL": 3,
      "BA": 3,
      "BB": 3,
      "BH": 3,
      "BM": 3,
      "BO": 20,
      "BS": 3,
      "CI": 3,
      "CR": 20,
      "CU": 2,
      "CV": 2,
      "DO": 3,
      "DZ": 3,
      "EG": 7,
      "FJ": 2,
      "GF": 3,
      "GG": 2,
      "GH": 2,
      "GI": 3,
      "GQ": 2,
      "GT": 20,
      "HK": 2,
      "HN": 20,
      "HR": 6,
      "IL": 3,
      "IN": 5,
      "IQ": 3,
      "IS": 7,
      "JM": 3,
      "JO": 3,
      "KE": 2,
      "KW": 3,
      "LB": 3,
      "LC": 2,
      "LI": 3,
      "LY": 3,
      "MA": 3,
      "MC": 3,
      "MD": 3,
      "MK": 3,
      "MT": 3,
      "MU": 1,
      "MY": 25,
      "MZ": 2,
      "NE": 3,
      "NG": 3,
      "OM": 3,
      "PA": 3,
      "PF": 2,
      "PK": 2,
      "PS": 3,
      "PY": 20,
      "QA": 3,
      "RS": 3,
      "SA": 6,
      "SC": 2,
      "SI": 3,
      "SG": 25,
      "SN": 2,
      "SK": 8,
      "SM": 3,
      "SV": 3,
      "TC": 2,
      "TN": 3,
      "TT": 2,
      "TW": 4,
      "TZ": 2,
      "UG": 2,
      "UY": 5,
      "VA": 1,
      "YE": 3,
      "ZM": 2
    },
    "display_priority": 2,
    "logo_path": "/ajbCmwvZ8HiePHZaOVEgm9MzyuA.jpg",
    "provider_name": "Zee5",
    "provider_id": 232
  },
  {
    "display_priorities": {
      "DE": 21,
      "FR": 12
    },
    "display_priority": 12,
    "logo_path": "/8T2jS3TdKCAsCrH0Kvl2NCwQ0ym.jpg",
    "provider_name": "Arte",
    "provider_id": 234
  },
  {
    "display_priorities": {
      "US": 38
    },
    "display_priority": 38,
    "logo_path": "/4SCmZgf7AeJLKKRPcbf5VFkGpBj.jpg",
    "provider_name": "YouTube Free",
    "provider_id": 235
  },
  {
    "display_priorities": {
      "FR": 11
    },
    "display_priority": 11,
    "logo_path": "/3L9ReVOwpiWgKyBw9ApkrDUWepy.jpg",
    "provider_name": "France TV",
    "provider_id": 236
  },
  {
    "display_priorities": {
      "IN": 12
    },
    "display_priority": 12,
    "logo_path": "/odTur9CmVtzsRUAZ9910tPM4XwL.jpg",
    "provider_name": "Sony Liv",
    "provider_id": 237
  },
  {
    "display_priorities": {
      "FR": 41
    },
    "display_priority": 41,
    "logo_path": "/lwefE4yPpCQGhH2LotPuhGA8gCV.jpg",
    "provider_name": "Universcine",
    "provider_id": 239
  },
  {
    "display_priorities": {
      "US": 75
    },
    "display_priority": 75,
    "logo_path": "/olvOut34aWUFf1YoOqiqtjidiTK.jpg",
    "provider_name": "Popcornflix",
    "provider_id": 241
  },
  {
    "display_priorities": {
      "PT": 3
    },
    "display_priority": 3,
    "logo_path": "/dUeHhim2WUZz8S7EWjv0Ws6anRP.jpg",
    "provider_name": "Meo",
    "provider_id": 242
  },
  {
    "display_priorities": {
      "US": 52
    },
    "display_priority": 52,
    "logo_path": "/gmU9aPV3XUFusVs4kK1rcICUKqL.jpg",
    "provider_name": "Comedy Central",
    "provider_id": 243
  },
  {
    "display_priorities": {},
    "display_priority": 5,
    "logo_path": "/zaKgoMUFQe1osHxZqyO4OWJnZiA.jpg",
    "provider_name": "HBO Poland",
    "provider_id": 244
  },
  {
    "display_priorities": {
      "PL": 5
    },
    "display_priority": 5,
    "logo_path": "/kplaFNfZXsdyqsz4TAK8xaKU9Qa.jpg",
    "provider_name": "VOD Poland",
    "provider_id": 245
  },
  {
    "display_priorities": {
      "AU": 19
    },
    "display_priority": 19,
    "logo_path": "/dSAEkpy0IhZpTLixrMq9z24oEPC.jpg",
    "provider_name": "7plus",
    "provider_id": 246
  },
  {
    "display_priorities": {
      "US": 80
    },
    "display_priority": 80,
    "logo_path": "/94IdHexespnJs96kmGiJlflfiwU.jpg",
    "provider_name": "Pantaya",
    "provider_id": 247
  },
  {
    "display_priorities": {
      "US": 81
    },
    "display_priority": 81,
    "logo_path": "/oRXiHzPl2HJMXXFR4eebsb8F5Oc.jpg",
    "provider_name": "Boomerang",
    "provider_id": 248
  },
  {
    "display_priorities": {
      "HU": 1,
      "PL": 7
    },
    "display_priority": 7,
    "logo_path": "/l5Wxbsgral716BOtZsGyPVNn8GC.jpg",
    "provider_name": "Horizon",
    "provider_id": 250
  },
  {
    "display_priorities": {
      "US": 82
    },
    "display_priority": 82,
    "logo_path": "/5uTsmZnDQmIOjZPEv8TNTy7GRJB.jpg",
    "provider_name": "Urban Movie Channel",
    "provider_id": 251
  },
  {
    "display_priorities": {
      "CA": 37,
      "US": 83
    },
    "display_priority": 83,
    "logo_path": "/cBCzPOX6ir5L8hCoJlfIWycxauh.jpg",
    "provider_name": "Dove Channel",
    "provider_id": 254
  },
  {
    "display_priorities": {
      "GB": 87,
      "IN": 17,
      "US": 86
    },
    "display_priority": 86,
    "logo_path": "/8qNJcPBHZ4qewHrDJ7C7s2DBQ3V.jpg",
    "provider_name": "Yupp TV",
    "provider_id": 255
  },
  {
    "display_priorities": {
      "ES": 3,
      "US": 5,
      "CA": 108
    },
    "display_priority": 5,
    "logo_path": "/jPXksae158ukMLFhhlNvzsvaEyt.jpg",
    "provider_name": "fuboTV",
    "provider_id": 257
  },
  {
    "display_priorities": {
      "CA": 15,
      "US": 45
    },
    "display_priority": 45,
    "logo_path": "/4TJTNWd2TT1kYj6ocUEsQc8WRgr.jpg",
    "provider_name": "Criterion Channel",
    "provider_id": 258
  },
  {
    "display_priorities": {
      "US": 88
    },
    "display_priority": 88,
    "logo_path": "/foT1TtL67MgEOWR6Cib8dKyCvJI.jpg",
    "provider_name": "Magnolia Selects",
    "provider_id": 259
  },
  {
    "display_priorities": {
      "US": 89
    },
    "display_priority": 89,
    "logo_path": "/rDYZ9v3Y09fuFyan51tHKE1mFId.jpg",
    "provider_name": "WWE Network",
    "provider_id": 260
  },
  {
    "display_priorities": {
      "US": 84
    },
    "display_priority": 84,
    "logo_path": "/oMwjMgYiT2jcR7ELqCH3TPzpgTX.jpg",
    "provider_name": "Nickhits Amazon Channel",
    "provider_id": 261
  },
  {
    "display_priorities": {
      "BR": 51,
      "ES": 44,
      "FR": 51,
      "MX": 46,
      "US": 90
    },
    "display_priority": 90,
    "logo_path": "/yxBUPUBFzHE72uFXvFr1l0fnMJA.jpg",
    "provider_name": "Noggin Amazon Channel",
    "provider_id": 262
  },
  {
    "display_priorities": {
      "US": 84
    },
    "display_priority": 84,
    "logo_path": "/3bm7P1O8WRqK6CYqfffJv4fba2p.jpg",
    "provider_name": "History Vault",
    "provider_id": 268
  },
  {
    "display_priorities": {
      "AU": 13,
      "BR": 12,
      "CL": 32,
      "CO": 32,
      "GB": 19,
      "IE": 37,
      "MX": 12,
      "NZ": 6,
      "PE": 32,
      "US": 28
    },
    "display_priority": 28,
    "logo_path": "/fWq61Fy4onav0wZJTA3c2fs0G66.jpg",
    "provider_name": "Funimation Now",
    "provider_id": 269
  },
  {
    "display_priorities": {
      "NZ": 2
    },
    "display_priority": 2,
    "logo_path": "/od4YNSSLgOP3p8EtQTnEYfrPa77.jpg",
    "provider_name": "Neon TV",
    "provider_id": 273
  },
  {
    "display_priorities": {
      "AR": 13,
      "CL": 13
    },
    "display_priority": 13,
    "logo_path": "/iM0P8o5S1hDahB41kIY5voQWXtU.jpg",
    "provider_name": "QubitTV",
    "provider_id": 274
  },
  {
    "display_priorities": {
      "US": 93
    },
    "display_priority": 93,
    "logo_path": "/w4GTJ1EDrgJku49XKSnRag9kKCT.jpg",
    "provider_name": "Laugh Out Loud",
    "provider_id": 275
  },
  {
    "display_priorities": {
      "US": 91
    },
    "display_priority": 91,
    "logo_path": "/UAZ2lJBWszijybQD4frqw2jxRO.jpg",
    "provider_name": "Smithsonian Channel",
    "provider_id": 276
  },
  {
    "display_priorities": {
      "US": 95
    },
    "display_priority": 95,
    "logo_path": "/orsVBNvPWxJNOVSEHMOk2h8R1wA.jpg",
    "provider_name": "Pure Flix",
    "provider_id": 278
  },
  {
    "display_priorities": {
      "US": 54
    },
    "display_priority": 54,
    "logo_path": "/gbyLHzl4eYP0oP9oJZ2oKbpkhND.jpg",
    "provider_name": "Redbox",
    "provider_id": 279
  },
  {
    "display_priorities": {
      "US": 94
    },
    "display_priority": 94,
    "logo_path": "/llEJ6av9kAniTQUR9hF9mhVbzlB.jpg",
    "provider_name": "Hallmark Movies",
    "provider_id": 281
  },
  {
    "display_priorities": {
      "CA": 130,
      "AE": 29,
      "AR": 53,
      "AT": 65,
      "AU": 62,
      "BB": 31,
      "BE": 41,
      "BH": 42,
      "BM": 31,
      "BO": 35,
      "BS": 31,
      "BR": 11,
      "BG": 23,
      "CH": 52,
      "CI": 30,
      "CL": 38,
      "CO": 38,
      "CR": 35,
      "CZ": 29,
      "DE": 136,
      "DK": 44,
      "DO": 35,
      "DZ": 33,
      "EC": 36,
      "EE": 28,
      "EG": 46,
      "ES": 79,
      "FI": 44,
      "FR": 98,
      "GB": 120,
      "GF": 33,
      "GI": 30,
      "GR": 23,
      "GT": 35,
      "HK": 43,
      "HN": 35,
      "HR": 41,
      "HU": 29,
      "ID": 36,
      "IE": 42,
      "IN": 57,
      "IS": 35,
      "IT": 81,
      "JM": 30,
      "JO": 42,
      "JP": 31,
      "KR": 31,
      "KW": 42,
      "LI": 32,
      "LT": 29,
      "LV": 28,
      "LY": 33,
      "MA": 32,
      "MC": 29,
      "MD": 30,
      "MX": 7,
      "MY": 31,
      "NE": 30,
      "NG": 33,
      "NL": 75,
      "NO": 46,
      "NZ": 37,
      "OM": 42,
      "PA": 36,
      "PE": 38,
      "PH": 32,
      "PL": 35,
      "PT": 42,
      "PY": 34,
      "QA": 42,
      "RO": 24,
      "RU": 31,
      "SA": 7,
      "SE": 46,
      "SG": 31,
      "SK": 43,
      "SM": 32,
      "SV": 35,
      "TH": 30,
      "TN": 32,
      "TR": 44,
      "TW": 43,
      "US": 10,
      "UY": 37,
      "VE": 33,
      "YE": 32,
      "ZA": 30,
      "AG": 12,
      "AL": 31,
      "AD": 28,
      "BA": 31,
      "CV": 14,
      "FJ": 12,
      "GH": 18,
      "GG": 12,
      "GQ": 16,
      "IL": 30,
      "IQ": 39,
      "KE": 16,
      "LB": 31,
      "LC": 13,
      "MK": 31,
      "MU": 16,
      "MT": 27,
      "MZ": 17,
      "PF": 12,
      "PS": 30,
      "SC": 15,
      "RS": 33,
      "SN": 16,
      "SI": 34,
      "TC": 12,
      "TT": 14,
      "UG": 17,
      "XK": 7,
      "ZM": 15
    },
    "display_priority": 30,
    "logo_path": "/8Gt1iClBlzTeQs8WQm8UrCoIxnQ.jpg",
    "provider_name": "Crunchyroll",
    "provider_id": 283
  },
  {
    "display_priorities": {
      "US": 98
    },
    "display_priority": 98,
    "logo_path": "/p1v0UKH13xQsMjumRgCGmCdlgKm.jpg",
    "provider_name": "Lifetime Movie Club",
    "provider_id": 284
  },
  {
    "display_priorities": {
      "DE": 38
    },
    "display_priority": 38,
    "logo_path": "/wUe8sI0PyRNNaWTSIDUoRADytvR.jpg",
    "provider_name": "BBC Player Amazon Channel",
    "provider_id": 285
  },
  {
    "display_priorities": {
      "DE": 37
    },
    "display_priority": 37,
    "logo_path": "/7cXdK4ExORmhkJl9wX1q3Yqs8lV.jpg",
    "provider_name": "ZDF Herzkino Amazon Channel",
    "provider_id": 286
  },
  {
    "display_priorities": {
      "GB": 34
    },
    "display_priority": 34,
    "logo_path": "/i8tj86LAQ2MdCvZgTSRbD3E5ySg.jpg",
    "provider_name": "BFI Player Amazon Channel",
    "provider_id": 287
  },
  {
    "display_priorities": {
      "US": 96
    },
    "display_priority": 96,
    "logo_path": "/1zfRJQc14uEzZThdwNvxtxeWJw6.jpg",
    "provider_name": "Boomerang Amazon Channel",
    "provider_id": 288
  },
  {
    "display_priorities": {
      "US": 99
    },
    "display_priority": 99,
    "logo_path": "/kEnyHRflZPNWEOIXroZPhfdGi46.jpg",
    "provider_name": "Cinemax Amazon Channel",
    "provider_id": 289
  },
  {
    "display_priorities": {
      "US": 101
    },
    "display_priority": 101,
    "logo_path": "/6L2wLiZz3IG2X4MRbdRlGLgftMK.jpg",
    "provider_name": "Hallmark Movies Now Amazon Channel",
    "provider_id": 290
  },
  {
    "display_priorities": {
      "US": 103
    },
    "display_priority": 103,
    "logo_path": "/72tiOIjZQPqm7MGhqoqyjyTJzSv.jpg",
    "provider_name": "MZ Choice Amazon Channel",
    "provider_id": 291
  },
  {
    "display_priorities": {
      "US": 97
    },
    "display_priority": 97,
    "logo_path": "/tU4tamrqRjbg3Lbmkryp3EiLPQJ.jpg",
    "provider_name": "PBS Kids Amazon Channel",
    "provider_id": 293
  },
  {
    "display_priorities": {
      "CA": 17,
      "US": 102
    },
    "display_priority": 102,
    "logo_path": "/mMALQK52OFGoYUKOSCZILZkfGWs.jpg",
    "provider_name": "PBS Masterpiece Amazon Channel",
    "provider_id": 294
  },
  {
    "display_priorities": {
      "US": 104
    },
    "display_priority": 104,
    "logo_path": "/mlH42JbZMrapSF6zc8iTYURcZlH.jpg",
    "provider_name": "Viewster Amazon Channel",
    "provider_id": 295
  },
  {
    "display_priorities": {
      "NL": 5
    },
    "display_priority": 5,
    "logo_path": "/8ARqfv7c3eD48NxHfjdNdoop1b0.jpg",
    "provider_name": "Ziggo TV",
    "provider_id": 297
  },
  {
    "display_priorities": {
      "DE": 14,
      "AT": 61
    },
    "display_priority": 14,
    "logo_path": "/3hI22hp7YDZXyrmXVqDGnVivNTI.jpg",
    "provider_name": "RTL+",
    "provider_id": 298
  },
  {
    "display_priorities": {
      "US": 105
    },
    "display_priority": 105,
    "logo_path": "/tZ4xzOtCRHjAw7tYJphivEfDr1L.jpg",
    "provider_name": "Sling TV Orange and Blue",
    "provider_id": 299
  },
  {
    "display_priorities": {
      "AR": 33,
      "AT": 44,
      "BO": 26,
      "BR": 47,
      "CH": 41,
      "CL": 28,
      "CO": 28,
      "CR": 26,
      "CZ": 19,
      "DE": 75,
      "DK": 39,
      "DO": 23,
      "EC": 27,
      "ES": 37,
      "FR": 47,
      "GB": 81,
      "GT": 26,
      "HN": 26,
      "IT": 41,
      "MX": 41,
      "NO": 39,
      "PA": 24,
      "PE": 28,
      "PY": 26,
      "SE": 41,
      "SV": 23,
      "US": 107,
      "UY": 27,
      "VE": 24,
      "CA": 125
    },
    "display_priority": 24,
    "logo_path": "/t6N57S17sdXRXmZDAkaGP0NHNG0.jpg",
    "provider_name": "Pluto TV",
    "provider_id": 300
  },
  {
    "display_priorities": {
      "DE": 12
    },
    "display_priority": 12,
    "logo_path": "/kTpJjBn08IBluCPpFQekU9qdwRt.jpg",
    "provider_name": "Joyn",
    "provider_id": 304
  },
  {
    "display_priorities": {
      "CA": 5
    },
    "display_priority": 5,
    "logo_path": "/sB5vHrmYmliwUvBwZe8HpXo9r8m.jpg",
    "provider_name": "Crave Starz",
    "provider_id": 305
  },
  {
    "display_priorities": {
      "BR": 10
    },
    "display_priority": 10,
    "logo_path": "/oBoWstXQFHAlPApyxIQ31CIbNQk.jpg",
    "provider_name": "Globoplay",
    "provider_id": 307
  },
  {
    "display_priorities": {
      "CZ": 2
    },
    "display_priority": 2,
    "logo_path": "/wTF37o4jOkQfjnWe41gmeuASYZA.jpg",
    "provider_name": "O2 TV",
    "provider_id": 308
  },
  {
    "display_priorities": {
      "CA": 44,
      "AD": 4,
      "AE": 6,
      "AG": 3,
      "AL": 4,
      "AU": 31,
      "BA": 4,
      "BB": 5,
      "BH": 5,
      "BM": 5,
      "BS": 5,
      "CI": 4,
      "CU": 3,
      "CV": 3,
      "DO": 5,
      "DZ": 5,
      "EG": 10,
      "FJ": 3,
      "GF": 5,
      "GG": 3,
      "GH": 3,
      "GI": 5,
      "GQ": 3,
      "HK": 12,
      "HR": 10,
      "IL": 4,
      "IN": 18,
      "IQ": 4,
      "IS": 11,
      "JM": 5,
      "JO": 5,
      "KE": 3,
      "KW": 5,
      "LB": 4,
      "LC": 3,
      "LI": 5,
      "LY": 5,
      "MA": 5,
      "MC": 5,
      "MD": 5,
      "MK": 4,
      "MT": 4,
      "MU": 2,
      "MY": 12,
      "MZ": 3,
      "NE": 4,
      "NG": 4,
      "NZ": 16,
      "OM": 5,
      "PA": 5,
      "PF": 3,
      "PK": 3,
      "PS": 4,
      "QA": 5,
      "RS": 4,
      "SA": 9,
      "SC": 3,
      "SI": 4,
      "SG": 12,
      "SN": 3,
      "SK": 13,
      "SM": 5,
      "SV": 5,
      "TC": 3,
      "TN": 5,
      "TT": 3,
      "TW": 11,
      "TZ": 3,
      "UG": 3,
      "US": 55,
      "UY": 7,
      "XK": 0,
      "VA": 2,
      "YE": 5,
      "ZA": 10,
      "ZM": 3,
      "AR": 38,
      "AT": 56,
      "BE": 32,
      "BO": 32,
      "BG": 20,
      "BR": 57,
      "CH": 49,
      "CR": 31,
      "CL": 34,
      "CO": 34,
      "CZ": 26,
      "DK": 42,
      "DE": 112,
      "EE": 26,
      "EC": 32,
      "FI": 42,
      "ES": 65,
      "FR": 77,
      "GB": 106,
      "GT": 31,
      "GR": 21,
      "HN": 31,
      "HU": 26,
      "ID": 34,
      "IE": 39,
      "JP": 28,
      "KR": 28,
      "IT": 66,
      "LT": 27,
      "LV": 26,
      "MX": 52,
      "NL": 52,
      "NO": 42,
      "PE": 34,
      "PH": 29,
      "PT": 33,
      "PL": 32,
      "PY": 30,
      "RU": 29,
      "RO": 21,
      "SE": 44,
      "TH": 28,
      "TR": 26,
      "VE": 29
    },
    "display_priority": 10,
    "logo_path": "/uW4dPCcbXaaFTyfL5HwhuDt5akK.jpg",
    "provider_name": "Sun Nxt",
    "provider_id": 309
  },
  {
    "display_priorities": {
      "AT": 32,
      "BE": 17,
      "DE": 59,
      "FR": 24
    },
    "display_priority": 24,
    "logo_path": "/s90cXW0NE709rLYRQ8YzMYjMmU3.jpg",
    "provider_name": "LaCinetek",
    "provider_id": 310
  },
  {
    "display_priorities": {
      "BE": 4
    },
    "display_priority": 4,
    "logo_path": "/pq8p1umEnJjdFAP1nFvNArTR61X.jpg",
    "provider_name": "Be TV Go",
    "provider_id": 311
  },
  {
    "display_priorities": {
      "BE": 5
    },
    "display_priority": 5,
    "logo_path": "/5HnddgKqiSLyEBriPB7T1BpdFaC.jpg",
    "provider_name": "VRT MAX",
    "provider_id": 312
  },
  {
    "display_priorities": {
      "BE": 12
    },
    "display_priority": 12,
    "logo_path": "/vjsvYNPgq6BpUoubXR1wNkokoBb.jpg",
    "provider_name": "Yelo Play",
    "provider_id": 313
  },
  {
    "display_priorities": {
      "CA": 38
    },
    "display_priority": 38,
    "logo_path": "/nVly1ywNU2hMYLaieL6ixhEFTWh.jpg",
    "provider_name": "CBC Gem",
    "provider_id": 314
  },
  {
    "display_priorities": {
      "CA": 73,
      "AD": 22,
      "AL": 24,
      "AR": 32,
      "AT": 43,
      "AU": 49,
      "BA": 23,
      "BB": 19,
      "BE": 26,
      "BH": 20,
      "BM": 21,
      "BO": 19,
      "BS": 20,
      "BR": 46,
      "CH": 39,
      "CI": 20,
      "CL": 27,
      "CO": 27,
      "CR": 19,
      "CZ": 18,
      "DE": 74,
      "DK": 32,
      "DO": 19,
      "DZ": 19,
      "EC": 26,
      "EE": 20,
      "EG": 20,
      "ES": 35,
      "FI": 33,
      "FR": 45,
      "GB": 63,
      "GF": 21,
      "GI": 20,
      "GR": 16,
      "GT": 19,
      "HK": 20,
      "HN": 19,
      "HR": 23,
      "HU": 19,
      "ID": 29,
      "IE": 32,
      "IL": 22,
      "IN": 19,
      "IQ": 23,
      "IS": 24,
      "IT": 39,
      "JM": 19,
      "JO": 20,
      "JP": 23,
      "KR": 23,
      "KW": 21,
      "LB": 24,
      "LI": 21,
      "LT": 21,
      "LV": 20,
      "LY": 19,
      "MA": 19,
      "MC": 19,
      "MD": 19,
      "MK": 22,
      "MT": 22,
      "MX": 39,
      "MY": 24,
      "NE": 20,
      "NG": 21,
      "NL": 39,
      "NO": 33,
      "NZ": 30,
      "OM": 20,
      "PA": 20,
      "PE": 27,
      "PH": 24,
      "PL": 24,
      "PS": 23,
      "PT": 23,
      "PY": 19,
      "QA": 20,
      "RO": 14,
      "RS": 24,
      "RU": 23,
      "SA": 20,
      "SE": 35,
      "SI": 24,
      "SG": 24,
      "SK": 26,
      "SM": 21,
      "SV": 19,
      "TH": 22,
      "TN": 19,
      "TR": 19,
      "TW": 19,
      "US": 194,
      "UY": 23,
      "VE": 23,
      "YE": 21,
      "ZA": 21,
      "TZ": 32
    },
    "display_priority": 21,
    "logo_path": "/d4vHcXY9rwnr763wQns2XJThclt.jpg",
    "provider_name": "Hoichoi",
    "provider_id": 315
  },
  {
    "display_priorities": {
      "IN": 20
    },
    "display_priority": 20,
    "logo_path": "/xiqTOBxOnlMy1nvppZcFhCDsP0f.jpg",
    "provider_name": "Alt Balaji",
    "provider_id": 319
  },
  {
    "display_priorities": {
      "AT": 23
    },
    "display_priority": 23,
    "logo_path": "/y0kyIFElN5sJAsmW8Txj69wzrD2.jpg",
    "provider_name": "Sky X",
    "provider_id": 321
  },
  {
    "display_priorities": {
      "US": 131
    },
    "display_priority": 131,
    "logo_path": "/ldU2RCgdvkcSEBWWbttCpVO450z.jpg",
    "provider_name": "USA Network",
    "provider_id": 322
  },
  {
    "display_priorities": {
      "FI": 6
    },
    "display_priority": 6,
    "logo_path": "/jH5dm7aqU9DxS4yPfprz6e3jmHU.jpg",
    "provider_name": "Yle Areena",
    "provider_id": 323
  },
  {
    "display_priorities": {
      "FR": 25
    },
    "display_priority": 25,
    "logo_path": "/3BxFGDZ1q8CxbUv5tSvMT28AC0X.jpg",
    "provider_name": "Cinemas a la Demande",
    "provider_id": 324
  },
  {
    "display_priorities": {
      "CA": 39
    },
    "display_priority": 39,
    "logo_path": "/hNO6rEpZ9l2LQEkjacrpeoocKbX.jpg",
    "provider_name": "CTV",
    "provider_id": 326
  },
  {
    "display_priorities": {
      "CA": 25,
      "US": 134
    },
    "display_priority": 134,
    "logo_path": "/4U02VrbgLfUKJAUCHKzxWFtnPx4.jpg",
    "provider_name": "FlixFling",
    "provider_id": 331
  },
  {
    "display_priorities": {
      "US": 44
    },
    "display_priority": 44,
    "logo_path": "/xzfVRl1CgJPYa9dOoyVI3TDSQo2.jpg",
    "provider_name": "VUDU Free",
    "provider_id": 332
  },
  {
    "display_priorities": {
      "GB": 36
    },
    "display_priority": 36,
    "logo_path": "/xM2A6jTb4895MIuqPa6W6ooEcJS.jpg",
    "provider_name": "My5",
    "provider_id": 333
  },
  {
    "display_priorities": {
      "DE": 43
    },
    "display_priority": 43,
    "logo_path": "/gmXeSpaYVJcb49SAzYcVHgQKQWM.jpg",
    "provider_name": "Filmtastic Amazon Channel",
    "provider_id": 334
  },
  {
    "display_priorities": {
      "CA": 1,
      "AD": 7,
      "AL": 7,
      "AR": 1,
      "AT": 2,
      "AU": 2,
      "BA": 7,
      "BE": 1,
      "BO": 2,
      "BR": 1,
      "BG": 18,
      "CH": 2,
      "CL": 1,
      "CO": 1,
      "CR": 2,
      "CZ": 9,
      "DE": 2,
      "DK": 1,
      "DO": 30,
      "EC": 1,
      "EE": 24,
      "ES": 2,
      "FI": 1,
      "FR": 2,
      "GB": 1,
      "GR": 20,
      "GT": 2,
      "HK": 37,
      "HN": 2,
      "HR": 38,
      "HU": 11,
      "IE": 2,
      "IS": 1,
      "IT": 2,
      "JP": 3,
      "KR": 2,
      "LI": 30,
      "LT": 25,
      "LV": 24,
      "MK": 7,
      "MT": 7,
      "MX": 2,
      "NL": 1,
      "NO": 1,
      "NZ": 3,
      "PE": 1,
      "PL": 10,
      "PT": 1,
      "PY": 2,
      "RO": 10,
      "RS": 7,
      "SE": 1,
      "SI": 7,
      "SG": 2,
      "SK": 10,
      "SM": 30,
      "TR": 9,
      "TW": 2,
      "US": 2,
      "UY": 33,
      "VE": 1,
      "ZA": 28,
      "PH": 31,
      "SV": 33,
      "PA": 33
    },
    "display_priority": 1,
    "logo_path": "/7rwgEs15tFwyR9NPQ5vpzxTj19Q.jpg",
    "provider_name": "Disney Plus",
    "provider_id": 337
  },
  {
    "display_priorities": {
      "FI": 7
    },
    "display_priority": 7,
    "logo_path": "/cZkT6PrmJs5mfVscQf2PNF7xrF.jpg",
    "provider_name": "Ruutu",
    "provider_id": 338
  },
  {
    "display_priorities": {
      "AR": 9,
      "CL": 9,
      "CO": 9,
      "EC": 4,
      "MX": 21,
      "PE": 9
    },
    "display_priority": 9,
    "logo_path": "/cDzkhgvozSr4GW2aRdV22uDuFpw.jpg",
    "provider_name": "Movistar Play",
    "provider_id": 339
  },
  {
    "display_priorities": {
      "DE": 46,
      "TR": 2
    },
    "display_priority": 2,
    "logo_path": "/z3XAGCCbDD3KTZFvc96Ytr3XR56.jpg",
    "provider_name": "blutv",
    "provider_id": 341
  },
  {
    "display_priorities": {
      "TR": 3
    },
    "display_priority": 3,
    "logo_path": "/3namPdisFuyTbB8BX2PxT3OdVCG.jpg",
    "provider_name": "puhutv",
    "provider_id": 342
  },
  {
    "display_priorities": {
      "US": 133
    },
    "display_priority": 133,
    "logo_path": "/obBJU4ak4XvAOUM5iVmSUxDvqC3.jpg",
    "provider_name": "Bet+ Amazon Channel",
    "provider_id": 343
  },
  {
    "display_priorities": {
      "CA": 98,
      "AD": 21,
      "AL": 23,
      "BA": 22,
      "BB": 22,
      "BH": 23,
      "BM": 24,
      "BS": 23,
      "CI": 19,
      "DE": 48,
      "DO": 22,
      "DZ": 22,
      "EG": 23,
      "GF": 24,
      "GI": 23,
      "HK": 8,
      "HR": 25,
      "IL": 21,
      "IQ": 22,
      "IS": 25,
      "JM": 22,
      "JO": 23,
      "KW": 24,
      "LB": 23,
      "LI": 24,
      "LY": 22,
      "MA": 22,
      "MC": 22,
      "MD": 22,
      "MK": 21,
      "MT": 21,
      "NE": 19,
      "NG": 20,
      "OM": 23,
      "PA": 23,
      "PS": 22,
      "QA": 23,
      "RS": 23,
      "SA": 22,
      "SI": 23,
      "SK": 28,
      "SM": 24,
      "SV": 22,
      "TN": 22,
      "TW": 9,
      "US": 135,
      "UY": 26,
      "YE": 24,
      "TZ": 16
    },
    "display_priority": 24,
    "logo_path": "/qjtOUIUnk4kRpcZmaddjqDHM0dR.jpg",
    "provider_name": "Rakuten Viki",
    "provider_id": 344
  },
  {
    "display_priorities": {
      "CH": 25,
      "DE": 47
    },
    "display_priority": 47,
    "logo_path": "/sXixZNwjBjMoBR97alHOKVerKf4.jpg",
    "provider_name": "Kino on Demand",
    "provider_id": 349
  },
  {
    "display_priorities": {
      "CA": 7,
      "AE": 2,
      "AR": 7,
      "AT": 5,
      "AU": 11,
      "BE": 9,
      "BO": 5,
      "BR": 9,
      "BG": 3,
      "CH": 21,
      "CL": 5,
      "CO": 5,
      "CR": 3,
      "CZ": 6,
      "DE": 3,
      "DK": 12,
      "EC": 8,
      "EE": 8,
      "EG": 3,
      "ES": 5,
      "FI": 14,
      "FR": 6,
      "GB": 6,
      "GR": 5,
      "GT": 3,
      "HK": 19,
      "HN": 3,
      "HU": 7,
      "ID": 12,
      "IE": 5,
      "IN": 7,
      "IT": 5,
      "JP": 11,
      "KR": 5,
      "LT": 8,
      "LV": 8,
      "MX": 5,
      "MY": 11,
      "NL": 9,
      "NO": 7,
      "NZ": 5,
      "PA": 31,
      "PE": 7,
      "PH": 11,
      "PL": 2,
      "PT": 10,
      "PY": 6,
      "RU": 3,
      "SA": 2,
      "SE": 16,
      "SG": 11,
      "SK": 4,
      "TH": 10,
      "TW": 18,
      "US": 3,
      "VE": 5,
      "ZA": 9,
      "SI": 30,
      "CV": 12,
      "GH": 16,
      "MU": 14,
      "MZ": 15,
      "UG": 15,
      "IL": 29
    },
    "display_priority": 9,
    "logo_path": "/6uhKBfmtzFqOcLousHwZuzcrScK.jpg",
    "provider_name": "Apple TV Plus",
    "provider_id": 350
  },
  {
    "display_priorities": {
      "US": 137
    },
    "display_priority": 137,
    "logo_path": "/kJlVJLgbNPvKDYC0YMp3yA2OKq2.jpg",
    "provider_name": "AMC on Demand",
    "provider_id": 352
  },
  {
    "display_priorities": {
      "DE": 44,
      "DK": 17,
      "FI": 16,
      "FR": 26,
      "IS": 10,
      "NO": 15,
      "RU": 9,
      "SE": 15
    },
    "display_priority": 15,
    "logo_path": "/52MBOsXXqm0wuLHxKR1FHymef66.jpg",
    "provider_name": "WAKANIM",
    "provider_id": 354
  },
  {
    "display_priorities": {
      "CA": 41,
      "US": 136
    },
    "display_priority": 136,
    "logo_path": "/x4AFz5koB2R8BRn8WNh6EqXUGHc.jpg",
    "provider_name": "Darkmatter TV",
    "provider_id": 355
  },
  {
    "display_priorities": {
      "KR": 3
    },
    "display_priority": 3,
    "logo_path": "/2ioan5BX5L9tz4fIGU93blTeFhv.jpg",
    "provider_name": "wavve",
    "provider_id": 356
  },
  {
    "display_priorities": {
      "AU": 17,
      "NZ": 9
    },
    "display_priority": 9,
    "logo_path": "/jNdDSUCyzk2wOwct9vXAaoX4Ypx.jpg",
    "provider_name": "DocPlay",
    "provider_id": 357
  },
  {
    "display_priorities": {
      "US": 58
    },
    "display_priority": 58,
    "logo_path": "/xL9SUR63qrEjFZAhtsipskeAMR7.jpg",
    "provider_name": "DIRECTV",
    "provider_id": 358
  },
  {
    "display_priorities": {
      "IT": 10
    },
    "display_priority": 10,
    "logo_path": "/momeaLkz4UT49Z7hUs8dppzn6rP.jpg",
    "provider_name": "Mediaset Infinity",
    "provider_id": 359
  },
  {
    "display_priorities": {
      "NL": 19
    },
    "display_priority": 19,
    "logo_path": "/73igBrpTdAhEGwuYxhmnhTK5Srs.jpg",
    "provider_name": "NPO Start",
    "provider_id": 360
  },
  {
    "display_priorities": {
      "US": 138
    },
    "display_priority": 138,
    "logo_path": "/8TbsXATKVD4Humjzi6a8SVaSY7o.jpg",
    "provider_name": "TCM",
    "provider_id": 361
  },
  {
    "display_priorities": {
      "US": 140
    },
    "display_priority": 140,
    "logo_path": "/gJnQ40Z6T7HyY6fbmmI6qKE0zmK.jpg",
    "provider_name": "TNT",
    "provider_id": 363
  },
  {
    "display_priorities": {
      "US": 143
    },
    "display_priority": 143,
    "logo_path": "/2NRn6OApVKfDTKLuHDRN8UadLRw.jpg",
    "provider_name": "IndieFlix",
    "provider_id": 368
  },
  {
    "display_priorities": {
      "AT": 25
    },
    "display_priority": 25,
    "logo_path": "/1OUHXH3R6waN0ojQWX9LcrO1mNY.jpg",
    "provider_name": "VOD Club",
    "provider_id": 370
  },
  {
    "display_priorities": {
      "EE": 9,
      "LT": 9,
      "LV": 9
    },
    "display_priority": 9,
    "logo_path": "/jgD3gxzW39UhJ7wZsxst75bN8Ck.jpg",
    "provider_name": "Go3",
    "provider_id": 373
  },
  {
    "display_priorities": {},
    "display_priority": 25,
    "logo_path": "/dpm29atq9clfBL38NgGxsj2CCe3.jpg",
    "provider_name": "Hotstar Disney+",
    "provider_id": 377
  },
  {
    "display_priorities": {
      "GB": 38
    },
    "display_priority": 38,
    "logo_path": "/dtU2zKZvtdKgSKjyKekp8t0Ryd1.jpg",
    "provider_name": "BritBox",
    "provider_id": 380
  },
  {
    "display_priorities": {
      "CH": 45,
      "FR": 3
    },
    "display_priority": 3,
    "logo_path": "/hGvUo8KZTRLDZWcfFJS3gA8aenB.jpg",
    "provider_name": "Canal+",
    "provider_id": 381
  },
  {
    "display_priorities": {
      "DK": 9
    },
    "display_priority": 9,
    "logo_path": "/yBrCoCGMIiHPHuoyh1mg82Pwlhx.jpg",
    "provider_name": "TV 2",
    "provider_id": 383
  },
  {
    "display_priorities": {
      "AR": 5,
      "BA": 28,
      "BB": 28,
      "BO": 3,
      "BS": 28,
      "BR": 7,
      "BG": 15,
      "CL": 7,
      "CO": 6,
      "CR": 4,
      "CZ": 22,
      "DK": 3,
      "DO": 28,
      "EC": 5,
      "ES": 9,
      "FI": 4,
      "GF": 30,
      "GT": 4,
      "HN": 4,
      "HR": 34,
      "HU": 22,
      "JM": 27,
      "MD": 26,
      "MX": 11,
      "NL": 47,
      "NO": 5,
      "PA": 27,
      "PE": 8,
      "PL": 28,
      "PT": 28,
      "PY": 3,
      "RO": 17,
      "SE": 4,
      "SK": 37,
      "SV": 25,
      "TT": 11,
      "US": 7,
      "UY": 30,
      "VE": 8,
      "SI": 29,
      "RS": 32,
      "MK": 29
    },
    "display_priority": 8,
    "logo_path": "/Ajqyt5aNxNGjmF9uOfxArGrdf3X.jpg",
    "provider_name": "HBO Max",
    "provider_id": 384
  },
  {
    "display_priorities": {
      "AU": 3
    },
    "display_priority": 3,
    "logo_path": "/d3ixI1no0EpTj2i7u0Sd2DBXVlG.jpg",
    "provider_name": "BINGE",
    "provider_id": 385
  },
  {
    "display_priorities": {
      "US": 11
    },
    "display_priority": 11,
    "logo_path": "/8VCV78prwd9QzZnEm0ReO6bERDa.jpg",
    "provider_name": "Peacock",
    "provider_id": 386
  },
  {
    "display_priorities": {
      "US": 12
    },
    "display_priority": 12,
    "logo_path": "/xTHltMrZPAJFLQ6qyCBjAnXSmZt.jpg",
    "provider_name": "Peacock Premium",
    "provider_id": 387
  },
  {
    "display_priorities": {
      "BE": 16,
      "CH": 18,
      "DE": 27,
      "NL": 10
    },
    "display_priority": 10,
    "logo_path": "/zEG5OsS8ZJHJ6RTuAtLUyCSb6De.jpg",
    "provider_name": "Sooner",
    "provider_id": 389
  },
  {
    "display_priorities": {},
    "display_priority": 13,
    "logo_path": "/7rwgEs15tFwyR9NPQ5vpzxTj19Q.jpg",
    "provider_name": "Disney Plus",
    "provider_id": 390
  },
  {
    "display_priorities": {
      "AT": 26,
      "CH": 24,
      "DE": 45
    },
    "display_priority": 45,
    "logo_path": "/stlPdMKeVA4xb4eQGab3bIN2Qib.jpg",
    "provider_name": "wedotv",
    "provider_id": 392
  },
  {
    "display_priorities": {
      "AD": 2,
      "AL": 2,
      "BA": 2,
      "BB": 2,
      "BH": 2,
      "BM": 2,
      "BS": 2,
      "CI": 2,
      "DO": 2,
      "DZ": 2,
      "EG": 5,
      "ES": 18,
      "GF": 2,
      "GI": 2,
      "HR": 4,
      "IL": 2,
      "IQ": 2,
      "IS": 5,
      "JM": 2,
      "JO": 2,
      "KW": 2,
      "LB": 2,
      "LI": 2,
      "LY": 2,
      "MA": 2,
      "MC": 2,
      "MD": 2,
      "MK": 2,
      "MT": 2,
      "NE": 2,
      "NG": 2,
      "OM": 2,
      "PA": 2,
      "PS": 2,
      "QA": 2,
      "RS": 2,
      "SA": 4,
      "SI": 2,
      "SK": 6,
      "SM": 2,
      "SV": 2,
      "TN": 2,
      "TW": 12,
      "UY": 4,
      "YE": 2,
      "TZ": 21
    },
    "display_priority": 2,
    "logo_path": "/9mmdMwWkDh12sIeSbEvsFWzmDX2.jpg",
    "provider_name": "FlixOlé",
    "provider_id": 393
  },
  {
    "display_priorities": {
      "NZ": 13
    },
    "display_priority": 13,
    "logo_path": "/eCRNttY7Zd75L5syA52AF8rCEuq.jpg",
    "provider_name": "TVNZ",
    "provider_id": 395
  },
  {
    "display_priorities": {
      "NL": 18
    },
    "display_priority": 18,
    "logo_path": "/5kffg7iSNcJKyQdi9TEn463cK3T.jpg",
    "provider_name": "Film1",
    "provider_id": 396
  },
  {
    "display_priorities": {
      "US": 142
    },
    "display_priority": 142,
    "logo_path": "/ukSXbR5qFjO2qCHpc6ZhcGPSjTJ.jpg",
    "provider_name": "BBC America",
    "provider_id": 397
  },
  {
    "display_priorities": {
      "IT": 25
    },
    "display_priority": 25,
    "logo_path": "/rpwa6Tjghh1DF4iNfP5g4Rn6MGQ.jpg",
    "provider_name": "VVVVID",
    "provider_id": 414
  },
  {
    "display_priorities": {
      "FR": 27
    },
    "display_priority": 27,
    "logo_path": "/x8m1Cv6iy4n0Fi9tBa9TAXEuoO4.jpg",
    "provider_name": "Anime Digital Networks",
    "provider_id": 415
  },
  {
    "display_priorities": {
      "US": 158
    },
    "display_priority": 158,
    "logo_path": "/sa10pK4Jwr5aA7rvafFP2zyLFjh.jpg",
    "provider_name": "Here TV",
    "provider_id": 417
  },
  {
    "display_priorities": {
      "DE": 49
    },
    "display_priority": 49,
    "logo_path": "/2joD3S2goOB6lmepX35A8dmaqgM.jpg",
    "provider_name": "Joyn Plus",
    "provider_id": 421
  },
  {
    "display_priorities": {
      "DK": 20,
      "FI": 18,
      "NO": 18,
      "SE": 18
    },
    "display_priority": 18,
    "logo_path": "/3QsJbibv5dFW2IYuXbTjxDmGGRZ.jpg",
    "provider_name": "Blockbuster",
    "provider_id": 423
  },
  {
    "display_priorities": {
      "HK": 40,
      "ID": 14,
      "MY": 14,
      "PH": 12,
      "SG": 13,
      "TH": 12,
      "TW": 40
    },
    "display_priority": 40,
    "logo_path": "/bxdNcDbk1ohVeOMmM3eusAAiTLw.jpg",
    "provider_name": "HBO Go",
    "provider_id": 425
  },
  {
    "display_priorities": {
      "DK": 21,
      "FI": 19,
      "NO": 19,
      "SE": 19
    },
    "display_priority": 19,
    "logo_path": "/dNcz2AZHPEgt4BIKJe56r4visuK.jpg",
    "provider_name": "SF Anytime",
    "provider_id": 426
  },
  {
    "display_priorities": {
      "AD": 8,
      "AL": 8,
      "BA": 8,
      "BB": 8,
      "BH": 8,
      "BM": 8,
      "BS": 8,
      "CI": 7,
      "DE": 50,
      "DO": 8,
      "DZ": 8,
      "EG": 13,
      "GF": 8,
      "GI": 8,
      "HK": 16,
      "HR": 14,
      "IL": 7,
      "IQ": 7,
      "IS": 14,
      "JM": 8,
      "JO": 8,
      "KW": 8,
      "LB": 7,
      "LI": 8,
      "LY": 8,
      "MA": 8,
      "MC": 8,
      "MD": 8,
      "MK": 8,
      "MT": 8,
      "NE": 7,
      "NG": 7,
      "NL": 21,
      "OM": 8,
      "PA": 8,
      "PS": 7,
      "QA": 8,
      "RS": 8,
      "SA": 12,
      "SI": 8,
      "SK": 17,
      "SM": 8,
      "SV": 8,
      "TN": 8,
      "TW": 15,
      "UY": 11,
      "YE": 8,
      "TZ": 33
    },
    "display_priority": 8,
    "logo_path": "/m6p38R4AlEo1ub7QnZtirXDIUF5.jpg",
    "provider_name": "CONtv",
    "provider_id": 428
  },
  {
    "display_priorities": {
      "AU": 32
    },
    "display_priority": 32,
    "logo_path": "/zXDDsD9M5vO7lqoqlBQCOcZtKBS.jpg",
    "provider_name": "Telstra TV",
    "provider_id": 429
  },
  {
    "display_priorities": {
      "CA": 89,
      "US": 108
    },
    "display_priority": 108,
    "logo_path": "/9baY98ZKyDaNArp1H9fAWqiR3Zi.jpg",
    "provider_name": "HiDive",
    "provider_id": 430
  },
  {
    "display_priorities": {
      "NO": 20
    },
    "display_priority": 20,
    "logo_path": "/5nECaP8nhtrzZfx7oG0yoFMfqiA.jpg",
    "provider_name": "TV 2 Play",
    "provider_id": 431
  },
  {
    "display_priorities": {
      "GB": 44,
      "US": 163
    },
    "display_priority": 163,
    "logo_path": "/6fX0J6x7zXsUCvPFczgOW4oD34D.jpg",
    "provider_name": "Flix Premiere",
    "provider_id": 432
  },
  {
    "display_priorities": {
      "CA": 48,
      "US": 118
    },
    "display_priority": 118,
    "logo_path": "/nXi2nRDPMNivJyFOifEa2t15Xuu.jpg",
    "provider_name": "OVID",
    "provider_id": 433
  },
  {
    "display_priorities": {
      "AU": 33
    },
    "display_priority": 33,
    "logo_path": "/z4vfN7KoOn6zruoCDRITnDZTdAx.jpg",
    "provider_name": "OzFlix",
    "provider_id": 434
  },
  {
    "display_priorities": {
      "SE": 20
    },
    "display_priority": 20,
    "logo_path": "/1EVaN5FaXnheqQSVB5kn4zDJKZa.jpg",
    "provider_name": "Draken Films",
    "provider_id": 435
  },
  {
    "display_priorities": {
      "AU": 34,
      "HK": 0
    },
    "display_priority": 0,
    "logo_path": "/bKy2YjC0QxViRnd8ayd2pv2ugJZ.jpg",
    "provider_name": "Fetch TV",
    "provider_id": 436
  },
  {
    "display_priorities": {
      "IN": 21
    },
    "display_priority": 21,
    "logo_path": "/4QEQsvCBnORNIg9EDnrRSiEw61D.jpg",
    "provider_name": "Hungama Play",
    "provider_id": 437
  },
  {
    "display_priorities": {
      "US": 117
    },
    "display_priority": 117,
    "logo_path": "/3tCqvc5hPm5nl8Hm8o2koDRZlPo.jpg",
    "provider_name": "Chai Flicks",
    "provider_id": 438
  },
  {
    "display_priorities": {
      "US": 116
    },
    "display_priority": 116,
    "logo_path": "/ju3T8MFGNIoPiYpwHFpNlrYNyG7.jpg",
    "provider_name": "Shout! Factory TV",
    "provider_id": 439
  },
  {
    "display_priorities": {
      "NZ": 20
    },
    "display_priority": 20,
    "logo_path": "/zJKmYhZ5jn8nfQ36Dtk6MgQnoy6.jpg",
    "provider_name": "ThreeNow",
    "provider_id": 440
  },
  {
    "display_priorities": {
      "CA": 49
    },
    "display_priority": 49,
    "logo_path": "/yXAjdxUTdehG4YUUEevvaeRhZl7.jpg",
    "provider_name": "NFB",
    "provider_id": 441
  },
  {
    "display_priorities": {
      "NO": 17
    },
    "display_priority": 17,
    "logo_path": "/y1PDXoEMqReA1uX1aF8rnVgSYBS.jpg",
    "provider_name": "NRK TV",
    "provider_id": 442
  },
  {
    "display_priorities": {
      "DK": 19
    },
    "display_priority": 19,
    "logo_path": "/vqybB1exnaQ3UOlKaw4t6OgzFIu.jpg",
    "provider_name": "Filmstriben",
    "provider_id": 443
  },
  {
    "display_priorities": {
      "CA": 68,
      "AD": 18,
      "AL": 20,
      "AR": 28,
      "AT": 39,
      "AU": 45,
      "BA": 19,
      "BB": 15,
      "BE": 22,
      "BH": 16,
      "BM": 17,
      "BO": 11,
      "BS": 16,
      "BR": 39,
      "BG": 8,
      "CH": 36,
      "CI": 14,
      "CL": 23,
      "CO": 23,
      "CR": 12,
      "CZ": 15,
      "DE": 70,
      "DK": 29,
      "DO": 15,
      "DZ": 16,
      "EC": 22,
      "EE": 17,
      "ES": 32,
      "FI": 30,
      "FR": 39,
      "GB": 60,
      "GF": 17,
      "GI": 16,
      "GR": 13,
      "GT": 12,
      "HK": 24,
      "HN": 12,
      "HR": 18,
      "HU": 16,
      "ID": 25,
      "IE": 29,
      "IL": 18,
      "IN": 43,
      "IQ": 19,
      "IS": 19,
      "IT": 36,
      "JM": 15,
      "JO": 16,
      "JP": 20,
      "KR": 20,
      "KW": 17,
      "LB": 20,
      "LI": 17,
      "LT": 18,
      "LV": 17,
      "LY": 16,
      "MA": 16,
      "MC": 15,
      "MD": 15,
      "MK": 18,
      "MT": 18,
      "MX": 34,
      "MY": 21,
      "NE": 14,
      "NG": 15,
      "NL": 36,
      "NO": 29,
      "NZ": 27,
      "OM": 16,
      "PA": 16,
      "PE": 23,
      "PH": 21,
      "PL": 21,
      "PS": 19,
      "PT": 20,
      "PY": 12,
      "QA": 16,
      "RO": 11,
      "RS": 20,
      "RU": 18,
      "SE": 32,
      "SI": 20,
      "SG": 21,
      "SK": 21,
      "SM": 17,
      "SV": 15,
      "TH": 19,
      "TN": 16,
      "TR": 16,
      "TW": 23,
      "US": 115,
      "UY": 19,
      "VE": 19,
      "YE": 17,
      "ZA": 18,
      "TZ": 23
    },
    "display_priority": 18,
    "logo_path": "/u2H29LCxRzjZVUoZUQAHKm5P8Zc.jpg",
    "provider_name": "Dekkoo",
    "provider_id": 444
  },
  {
    "display_priorities": {
      "AD": 10,
      "AE": 9,
      "AG": 5,
      "AL": 12,
      "BA": 11,
      "BB": 20,
      "BH": 21,
      "BM": 22,
      "BS": 21,
      "CI": 15,
      "CU": 5,
      "CV": 5,
      "DO": 20,
      "DZ": 20,
      "EG": 25,
      "FJ": 5,
      "GB": 97,
      "GF": 22,
      "GG": 5,
      "GH": 6,
      "GI": 21,
      "GQ": 6,
      "HK": 25,
      "HR": 27,
      "IL": 10,
      "IQ": 9,
      "IS": 27,
      "JM": 20,
      "JO": 21,
      "KE": 5,
      "KW": 22,
      "LB": 10,
      "LC": 6,
      "LI": 22,
      "LY": 20,
      "MA": 20,
      "MC": 20,
      "MD": 20,
      "MK": 11,
      "MT": 11,
      "MU": 4,
      "MZ": 5,
      "NE": 15,
      "NG": 16,
      "OM": 21,
      "PA": 21,
      "PF": 5,
      "PS": 9,
      "QA": 21,
      "RS": 12,
      "SA": 24,
      "SC": 5,
      "SI": 12,
      "SN": 6,
      "SK": 30,
      "SM": 22,
      "SV": 20,
      "TC": 5,
      "TN": 20,
      "TT": 5,
      "TW": 25,
      "TZ": 5,
      "UG": 5,
      "US": 114,
      "UY": 24,
      "XK": 2,
      "VA": 4,
      "YE": 22,
      "ZM": 5,
      "AR": 40,
      "AU": 55,
      "AT": 57,
      "BE": 33,
      "BO": 33,
      "BG": 21,
      "BR": 59,
      "CA": 113,
      "CH": 50,
      "CR": 33,
      "CL": 36,
      "CO": 36,
      "CZ": 27,
      "DK": 43,
      "DE": 113,
      "EE": 27,
      "EC": 34,
      "FI": 43,
      "ES": 66,
      "FR": 78,
      "GT": 33,
      "GR": 22,
      "HN": 33,
      "HU": 27,
      "ID": 35,
      "IE": 40,
      "IN": 55,
      "JP": 29,
      "KR": 29,
      "IT": 67,
      "LT": 28,
      "LV": 27,
      "MY": 30,
      "MX": 54,
      "NL": 53,
      "NO": 44,
      "NZ": 35,
      "PE": 36,
      "PH": 30,
      "PT": 34,
      "PL": 33,
      "PY": 32,
      "RU": 30,
      "RO": 22,
      "SG": 30,
      "SE": 45,
      "TH": 29,
      "TR": 27,
      "VE": 31,
      "ZA": 29
    },
    "display_priority": 29,
    "logo_path": "/iaMw6nOyxUzXSacrLQ0Au6CfZkc.jpg",
    "provider_name": "Classix",
    "provider_id": 445
  },
  {
    "display_priorities": {
      "CA": 50,
      "US": 113
    },
    "display_priority": 113,
    "logo_path": "/9ONs8SMAXtkiyaEIKATTpbwckx8.jpg",
    "provider_name": "Retrocrush",
    "provider_id": 446
  },
  {
    "display_priorities": {
      "BR": 20
    },
    "display_priority": 20,
    "logo_path": "/fy4svqyray3cnkuEqGIXL3i2WQw.jpg",
    "provider_name": "Belas Artes à La Carte",
    "provider_id": 447
  },
  {
    "display_priorities": {
      "AU": 35,
      "NZ": 19
    },
    "display_priority": 19,
    "logo_path": "/66vV4PIX6aiDvmprUYli7vnBEEA.jpg",
    "provider_name": "Beamafilm",
    "provider_id": 448
  },
  {
    "display_priorities": {
      "CA": 46
    },
    "display_priority": 46,
    "logo_path": "/awgDmkHSfGEcoIVpeQKwaE2OgLM.jpg",
    "provider_name": "Global TV",
    "provider_id": 449
  },
  {
    "display_priorities": {},
    "display_priority": 15,
    "logo_path": "/dBRq5BYYhK1ZXIgP68z5PYekPD3.jpg",
    "provider_name": "Vodacom Video Play",
    "provider_id": 450
  },
  {
    "display_priorities": {
      "NL": 20
    },
    "display_priority": 20,
    "logo_path": "/yHXKdLK7kfHo907L2W8fTalXltQ.jpg",
    "provider_name": "Picl",
    "provider_id": 451
  },
  {
    "display_priorities": {
      "PT": 12
    },
    "display_priority": 12,
    "logo_path": "/oSJqnUUeoHfUj86Wsu2oq6VXLXE.jpg",
    "provider_name": "RTPplay",
    "provider_id": 452
  },
  {
    "display_priorities": {
      "CA": 47,
      "US": 110
    },
    "display_priority": 110,
    "logo_path": "/ubWucXFn34TrVlJBaJFgPaC4tOP.jpg",
    "provider_name": "Topic",
    "provider_id": 454
  },
  {
    "display_priorities": {
      "US": 111
    },
    "display_priority": 111,
    "logo_path": "/ba8l0e5CkpVnrdFgzBySP7ckZnZ.jpg",
    "provider_name": "Night Flight Plus",
    "provider_id": 455
  },
  {
    "display_priorities": {
      "ES": 20
    },
    "display_priority": 20,
    "logo_path": "/47iDHK3CykgXuZ20FN6QRAEcFBY.jpg",
    "provider_name": "Mitele ",
    "provider_id": 456
  },
  {
    "display_priorities": {
      "CA": 52,
      "AR": 15,
      "BB": 10,
      "BH": 11,
      "BM": 11,
      "BO": 24,
      "BS": 11,
      "BR": 23,
      "CH": 27,
      "CI": 10,
      "CO": 14,
      "CR": 24,
      "DO": 11,
      "DZ": 11,
      "EC": 14,
      "EG": 12,
      "ES": 21,
      "GF": 11,
      "GI": 11,
      "GT": 24,
      "HK": 6,
      "HN": 24,
      "HR": 13,
      "IS": 14,
      "JM": 10,
      "JO": 11,
      "KW": 11,
      "LI": 11,
      "LY": 11,
      "MA": 11,
      "MC": 11,
      "MD": 11,
      "MX": 23,
      "NE": 10,
      "NG": 10,
      "OM": 11,
      "PA": 11,
      "PE": 14,
      "PT": 13,
      "PY": 24,
      "QA": 11,
      "SA": 11,
      "SK": 16,
      "SM": 11,
      "SV": 11,
      "TN": 11,
      "TW": 8,
      "US": 109,
      "UY": 14,
      "VE": 11,
      "YE": 11
    },
    "display_priority": 11,
    "logo_path": "/58aUMVWJRolhWpi4aJCkGHwfKdg.jpg",
    "provider_name": "VIX ",
    "provider_id": 457
  },
  {
    "display_priorities": {
      "NL": 23
    },
    "display_priority": 23,
    "logo_path": "/h5R7lrSpyuejhjqd1L1a9uCSIB4.jpg",
    "provider_name": "Horrify",
    "provider_id": 460
  },
  {
    "display_priorities": {
      "BE": 14
    },
    "display_priority": 14,
    "logo_path": "/qw1BwnbWKs7AXLVR05eRpi3YdD9.jpg",
    "provider_name": "RTBF",
    "provider_id": 461
  },
  {
    "display_priorities": {
      "FI": 21
    },
    "display_priority": 21,
    "logo_path": "/mMb0rksAc7Cmom5pEYaLNDkbitE.jpg",
    "provider_name": "Kirjastokino",
    "provider_id": 463
  },
  {
    "display_priorities": {
      "CA": 23,
      "AR": 17,
      "BR": 14,
      "CL": 15,
      "CO": 16,
      "EC": 15,
      "MX": 20,
      "PE": 16,
      "US": 36,
      "VE": 13
    },
    "display_priority": 13,
    "logo_path": "/xfAAOAERZCnPB5jW5lhboAcXk8L.jpg",
    "provider_name": "Kocowa",
    "provider_id": 464
  },
  {
    "display_priorities": {
      "BR": 22
    },
    "display_priority": 22,
    "logo_path": "/dFnG5G2YxrYjv9YiVu9Bq7Wj5Ds.jpg",
    "provider_name": "Believe",
    "provider_id": 465
  },
  {
    "display_priorities": {
      "ID": 15
    },
    "display_priority": 15,
    "logo_path": "/9KiRtQNFyMaYau9bLHZgqlnUTCA.jpg",
    "provider_name": "Bioskop Online",
    "provider_id": 466
  },
  {
    "display_priorities": {
      "AR": 18,
      "CL": 16,
      "CO": 15,
      "MX": 24,
      "PE": 15,
      "UY": 9
    },
    "display_priority": 9,
    "logo_path": "/kV8XFGI5OLJKl72dI8DtnKplfFr.jpg",
    "provider_name": "DIRECTV GO",
    "provider_id": 467
  },
  {
    "display_priorities": {
      "ID": 16
    },
    "display_priority": 16,
    "logo_path": "/9xKAZFyhkZVewWxJJhR41AJO0D3.jpg",
    "provider_name": "genflix",
    "provider_id": 468
  },
  {
    "display_priorities": {
      "CA": 53
    },
    "display_priority": 53,
    "logo_path": "/6FWwq6rayak6g6rvzVVP1NnX9gf.jpg",
    "provider_name": "Club Illico",
    "provider_id": 469
  },
  {
    "display_priorities": {
      "US": 120
    },
    "display_priority": 120,
    "logo_path": "/rOwEnT8oDSTZ5rDKmyaa3O4gUnc.jpg",
    "provider_name": "The Film Detective",
    "provider_id": 470
  },
  {
    "display_priorities": {
      "IN": 31,
      "US": 166
    },
    "display_priority": 166,
    "logo_path": "/mEiBVz62M9j3TCebmOspMfqkIn.jpg",
    "provider_name": "FILMRISE",
    "provider_id": 471
  },
  {
    "display_priorities": {
      "NL": 24
    },
    "display_priority": 24,
    "logo_path": "/m8wib2YFVWHaY0SvnExvXZFusz9.jpg",
    "provider_name": "NLZIET",
    "provider_id": 472
  },
  {
    "display_priorities": {
      "BR": 26,
      "GB": 46,
      "MX": 25,
      "US": 167
    },
    "display_priority": 167,
    "logo_path": "/r1UgUKmt83FSDOIHBdRWKooZPNx.jpg",
    "provider_name": "Revry",
    "provider_id": 473
  },
  {
    "display_priorities": {
      "IN": 24
    },
    "display_priority": 24,
    "logo_path": "/vIhSFgmp0HXZbUHDscuhpU6S2Z6.jpg",
    "provider_name": "ShemarooMe",
    "provider_id": 474
  },
  {
    "display_priorities": {
      "CA": 54,
      "AR": 22,
      "AT": 30,
      "AU": 38,
      "BE": 15,
      "BH": 10,
      "BM": 10,
      "BO": 10,
      "BS": 10,
      "BR": 25,
      "BG": 7,
      "CH": 28,
      "CL": 17,
      "CO": 17,
      "CR": 13,
      "CZ": 10,
      "DE": 52,
      "DK": 23,
      "DO": 10,
      "DZ": 10,
      "EC": 16,
      "EE": 12,
      "ES": 22,
      "FI": 22,
      "FR": 30,
      "GB": 47,
      "GF": 10,
      "GI": 10,
      "GR": 8,
      "GT": 13,
      "HN": 13,
      "HR": 12,
      "HU": 10,
      "ID": 20,
      "IE": 23,
      "IN": 25,
      "IS": 13,
      "IT": 27,
      "JO": 10,
      "JP": 14,
      "KR": 14,
      "KW": 10,
      "LI": 10,
      "LT": 12,
      "LV": 12,
      "LY": 10,
      "MA": 10,
      "MC": 10,
      "MD": 10,
      "MX": 26,
      "MY": 16,
      "NL": 25,
      "NO": 22,
      "NZ": 22,
      "OM": 10,
      "PA": 10,
      "PE": 17,
      "PH": 16,
      "PL": 12,
      "PT": 14,
      "PY": 13,
      "QA": 10,
      "RO": 5,
      "RU": 12,
      "SE": 23,
      "SG": 16,
      "SK": 15,
      "SM": 10,
      "SV": 10,
      "TH": 14,
      "TN": 10,
      "TR": 11,
      "TW": 32,
      "US": 169,
      "UY": 13,
      "VE": 14,
      "YE": 10,
      "ZA": 13,
      "TZ": 24
    },
    "display_priority": 13,
    "logo_path": "/bvcdVO7SDHKEa6D40g1jntXKNj.jpg",
    "provider_name": "DOCSVILLE",
    "provider_id": 475
  },
  {
    "display_priorities": {
      "IN": 23
    },
    "display_priority": 23,
    "logo_path": "/q03pok7xSxYJaENuYs547qa6upY.jpg",
    "provider_name": "EPIC ON",
    "provider_id": 476
  },
  {
    "display_priorities": {
      "BR": 28
    },
    "display_priority": 28,
    "logo_path": "/plbVK1EXpz7PpyddpI0U1cZIYYK.jpg",
    "provider_name": "GOSPEL PLAY",
    "provider_id": 477
  },
  {
    "display_priorities": {
      "AR": 20,
      "BR": 30
    },
    "display_priority": 30,
    "logo_path": "/73ms51HSpkD0OOXwj2EeiZeSqSt.jpg",
    "provider_name": "History Play",
    "provider_id": 478
  },
  {
    "display_priorities": {
      "DE": 53
    },
    "display_priority": 53,
    "logo_path": "/3xIBSZdL2pZCJR2saHwDPhKW2aZ.jpg",
    "provider_name": "Home of Horror",
    "provider_id": 479
  },
  {
    "display_priorities": {
      "DE": 54
    },
    "display_priority": 54,
    "logo_path": "/u04LR9vGEhc8B1ml4HSj1RCbqTG.jpg",
    "provider_name": "Filmtastic",
    "provider_id": 480
  },
  {
    "display_priorities": {
      "DE": 55
    },
    "display_priority": 55,
    "logo_path": "/xtfU2pO6YjnU0qrPaDi30IjaQGR.jpg",
    "provider_name": "ArthouseCNMA",
    "provider_id": 481
  },
  {
    "display_priorities": {
      "IN": 29
    },
    "display_priority": 29,
    "logo_path": "/iRv3wbUEPuwYYPSKwUxPaMPKGM4.jpg",
    "provider_name": "ManoramaMax",
    "provider_id": 482
  },
  {
    "display_priorities": {
      "ID": 19
    },
    "display_priority": 19,
    "logo_path": "/eDFIGvn1PImm9kmZ83ugaqdWapy.jpg",
    "provider_name": "MAX Stream",
    "provider_id": 483
  },
  {
    "display_priorities": {
      "BR": 29
    },
    "display_priority": 29,
    "logo_path": "/cQQYtdaCg7vDo28JPru4v8Ypi8x.jpg",
    "provider_name": "NOW",
    "provider_id": 484
  },
  {
    "display_priorities": {
      "US": 171
    },
    "display_priority": 171,
    "logo_path": "/79mRAYq40lcYiXkQm6N7YErSSHd.jpg",
    "provider_name": "Spectrum On Demand",
    "provider_id": 486
  },
  {
    "display_priorities": {
      "CA": 55
    },
    "display_priority": 55,
    "logo_path": "/dCO5ge3nDm4LdnWSPe6jHPciE7U.jpg",
    "provider_name": "tvo",
    "provider_id": 488
  },
  {
    "display_priorities": {
      "ID": 18
    },
    "display_priority": 18,
    "logo_path": "/6IdiH2yMRYCtB7XoIQ36wZig9gZ.jpg",
    "provider_name": "Vidio",
    "provider_id": 489
  },
  {
    "display_priorities": {
      "AR": 21
    },
    "display_priority": 21,
    "logo_path": "/9nyK6XeCSe1fmK9B9H2xHgOYDlj.jpg",
    "provider_name": "CINE",
    "provider_id": 491
  },
  {
    "display_priorities": {
      "SE": 22
    },
    "display_priority": 22,
    "logo_path": "/jblaJCpe4cDnaFNZg90qGF1UkZF.jpg",
    "provider_name": "SVT",
    "provider_id": 493
  },
  {
    "display_priorities": {
      "SE": 26
    },
    "display_priority": 26,
    "logo_path": "/thucdaw2gnOE0g478AHVZw5UeYm.jpg",
    "provider_name": "Cineasterna",
    "provider_id": 496
  },
  {
    "display_priorities": {
      "SE": 24
    },
    "display_priority": 24,
    "logo_path": "/vuAxCPW4tlZ7Dg9EshAdPoHZFBo.jpg",
    "provider_name": "Tele2 Play",
    "provider_id": 497
  },
  {
    "display_priorities": {
      "BR": 31
    },
    "display_priority": 31,
    "logo_path": "/1bbExrGyEuUFAEWMBSN76bwacQ0.jpg",
    "provider_name": "Oldflix",
    "provider_id": 499
  },
  {
    "display_priorities": {
      "IN": 26
    },
    "display_priority": 26,
    "logo_path": "/8ugSQ1g7E8fXFnKFT5G8XOMcmS0.jpg",
    "provider_name": "TVF Play",
    "provider_id": 500
  },
  {
    "display_priorities": {},
    "display_priority": 12,
    "logo_path": "/zLM7f1w2L8TU2Fspzns72m6h3yY.jpg",
    "provider_name": "Wink",
    "provider_id": 501
  },
  {
    "display_priorities": {
      "IN": 27
    },
    "display_priority": 27,
    "logo_path": "/qLR6qzB1IcANZUqMEkLf6Sh8Y8s.jpg",
    "provider_name": "Tata Play",
    "provider_id": 502
  },
  {
    "display_priorities": {
      "US": 173
    },
    "display_priority": 173,
    "logo_path": "/mB2eDIncwSAlyl8WAtfV24qEIkk.jpg",
    "provider_name": "Hi-YAH",
    "provider_id": 503
  },
  {
    "display_priorities": {
      "US": 172
    },
    "display_priority": 172,
    "logo_path": "/rtTqPKRrVVXxvPV0T9OmSXhwXnY.jpg",
    "provider_name": "VRV",
    "provider_id": 504
  },
  {
    "display_priorities": {
      "PL": 13
    },
    "display_priority": 13,
    "logo_path": "/uXc2fJqhtXfuNq6ha8tTLL9VnXj.jpg",
    "provider_name": "Player",
    "provider_id": 505
  },
  {
    "display_priorities": {
      "US": 164
    },
    "display_priority": 164,
    "logo_path": "/rcebVnRvZvPXauK4353Jgiu4DWI.jpg",
    "provider_name": "TBS",
    "provider_id": 506
  },
  {
    "display_priorities": {
      "US": 174
    },
    "display_priority": 174,
    "logo_path": "/pg4bIFyUsSIhFChqOz5Up1BxuIU.jpg",
    "provider_name": "tru TV",
    "provider_id": 507
  },
  {
    "display_priorities": {
      "IN": 28
    },
    "display_priority": 28,
    "logo_path": "/wYRiUqIgWcfUvO6OPcXuUNd4tc2.jpg",
    "provider_name": "Discovery Plus",
    "provider_id": 510
  },
  {
    "display_priorities": {
      "BO": 21,
      "CR": 21,
      "EG": 8,
      "GT": 21,
      "HK": 9,
      "HN": 21,
      "HR": 8,
      "IS": 8,
      "PH": 15,
      "PY": 21,
      "SA": 7,
      "SK": 11,
      "TW": 10,
      "TZ": 25
    },
    "display_priority": 25,
    "logo_path": "/zEuYa2328KQlbpOr4W0tVNpCGtZ.jpg",
    "provider_name": "iWantTFC",
    "provider_id": 511
  },
  {
    "display_priorities": {
      "BR": 27
    },
    "display_priority": 27,
    "logo_path": "/dUokaRky9vs1u2PFRzFDV4iIx6A.jpg",
    "provider_name": "TNTGo",
    "provider_id": 512
  },
  {
    "display_priorities": {
      "FR": 31
    },
    "display_priority": 31,
    "logo_path": "/pICdAIrQp0JRR4polBXhlVg8bO.jpg",
    "provider_name": "Shadowz",
    "provider_id": 513
  },
  {
    "display_priorities": {
      "CA": 57,
      "US": 165
    },
    "display_priority": 165,
    "logo_path": "/3VxDqUk25KU5860XxHKwV9cy3L8.jpg",
    "provider_name": "AsianCrush",
    "provider_id": 514
  },
  {
    "display_priorities": {
      "IN": 32
    },
    "display_priority": 32,
    "logo_path": "/dH4BZucVyb5lW97TEbZ7RTAugjg.jpg",
    "provider_name": "MX Player",
    "provider_id": 515
  },
  {
    "display_priorities": {
      "CA": 59
    },
    "display_priority": 59,
    "logo_path": "/3ISpW4LBSKAaCyIZI3cxHiox8dI.jpg",
    "provider_name": "Noovo",
    "provider_id": 516
  },
  {
    "display_priorities": {
      "SE": 25
    },
    "display_priority": 25,
    "logo_path": "/yqdmrKY4D0WuB9Q06EQvBoOOgKP.jpg",
    "provider_name": "TriArt Play",
    "provider_id": 517
  },
  {
    "display_priorities": {},
    "display_priority": 33,
    "logo_path": "/l0SGkSW80SFWshxT2tvafv9dzkp.jpg",
    "provider_name": "La Toile",
    "provider_id": 518
  },
  {
    "display_priorities": {
      "US": 177
    },
    "display_priority": 177,
    "logo_path": "/wYRiUqIgWcfUvO6OPcXuUNd4tc2.jpg",
    "provider_name": "Discovery Plus",
    "provider_id": 520
  },
  {
    "display_priorities": {
      "CA": 60,
      "AD": 11,
      "AL": 13,
      "AR": 16,
      "AT": 31,
      "AU": 40,
      "BA": 12,
      "BB": 9,
      "BE": 13,
      "BH": 9,
      "BM": 9,
      "BO": 17,
      "BS": 9,
      "BR": 21,
      "CH": 30,
      "CI": 11,
      "CL": 18,
      "CO": 18,
      "CR": 17,
      "CZ": 8,
      "DE": 58,
      "DK": 24,
      "DO": 9,
      "DZ": 9,
      "EC": 17,
      "EE": 11,
      "EG": 11,
      "ES": 23,
      "FI": 23,
      "FR": 29,
      "GB": 49,
      "GF": 9,
      "GI": 9,
      "GR": 7,
      "GT": 17,
      "HK": 31,
      "HN": 17,
      "HR": 11,
      "HU": 9,
      "ID": 13,
      "IE": 22,
      "IL": 11,
      "IN": 33,
      "IQ": 10,
      "IS": 12,
      "IT": 28,
      "JM": 9,
      "JO": 9,
      "JP": 13,
      "KR": 13,
      "KW": 9,
      "LB": 11,
      "LI": 9,
      "LT": 11,
      "LV": 11,
      "LY": 9,
      "MA": 9,
      "MC": 9,
      "MD": 9,
      "MK": 12,
      "MT": 12,
      "MX": 27,
      "MY": 13,
      "NE": 11,
      "NG": 11,
      "NL": 27,
      "NO": 23,
      "NZ": 17,
      "OM": 9,
      "PA": 9,
      "PE": 18,
      "PH": 14,
      "PL": 15,
      "PS": 10,
      "PT": 15,
      "PY": 17,
      "QA": 9,
      "RO": 4,
      "RS": 13,
      "RU": 11,
      "SA": 10,
      "SE": 27,
      "SI": 13,
      "SG": 15,
      "SK": 14,
      "SM": 9,
      "SV": 9,
      "TH": 11,
      "TN": 9,
      "TR": 10,
      "TW": 30,
      "US": 106,
      "UY": 12,
      "VE": 12,
      "YE": 9,
      "ZA": 12,
      "TZ": 26
    },
    "display_priority": 12,
    "logo_path": "/xN97FFkFAdY1JvHhS4zyPD4URgD.jpg",
    "provider_name": "Spamflix",
    "provider_id": 521
  },
  {
    "display_priorities": {
      "AT": 29,
      "CH": 29,
      "DE": 56
    },
    "display_priority": 56,
    "logo_path": "/sTwowAulL7eZpgJORBKPKepIbxw.jpg",
    "provider_name": "Popcorntimes",
    "provider_id": 522
  },
  {
    "display_priorities": {
      "ES": 38,
      "FI": 35,
      "GB": 82,
      "IT": 23,
      "NL": 42,
      "NO": 34,
      "SE": 36,
      "AT": 63,
      "DE": 126,
      "IE": 41
    },
    "display_priority": 36,
    "logo_path": "/mAehaBHcatpbaYgZ0G6Z1czkXax.jpg",
    "provider_name": "Discovery Plus",
    "provider_id": 524
  },
  {
    "display_priorities": {
      "CA": 56
    },
    "display_priority": 56,
    "logo_path": "/iPK2kpaKnGYvSdEcRerIbkqWVPh.jpg",
    "provider_name": "Knowledge Network",
    "provider_id": 525
  },
  {
    "display_priorities": {
      "CA": 95,
      "US": 34,
      "AU": 58,
      "NZ": 36
    },
    "display_priority": 34,
    "logo_path": "/xlonQMSmhtA2HHwK3JKF9ghx7M8.jpg",
    "provider_name": "AMC+",
    "provider_id": 526
  },
  {
    "display_priorities": {
      "CA": 94,
      "IN": 52,
      "US": 27,
      "AU": 59,
      "ES": 80
    },
    "display_priority": 27,
    "logo_path": "/9edKQczyuMmQM1yS520hgmJbcaC.jpg",
    "provider_name": "AMC+ Amazon Channel",
    "provider_id": 528
  },
  {
    "display_priorities": {
      "CA": 61,
      "GB": 24,
      "US": 179
    },
    "display_priority": 179,
    "logo_path": "/4UfmxLzph9Aso9pr9bXohp0V3sr.jpg",
    "provider_name": "ARROW",
    "provider_id": 529
  },
  {
    "display_priorities": {},
    "display_priority": 36,
    "logo_path": "/rWYJ9mMvxs0p57Nd1BKEtKtpRvD.jpg",
    "provider_name": "Supo Mungam Plus",
    "provider_id": 530
  },
  {
    "display_priorities": {
      "CA": 10,
      "AR": 8,
      "AU": 5,
      "BO": 7,
      "BR": 6,
      "CL": 6,
      "CO": 8,
      "CR": 7,
      "DK": 9,
      "DO": 32,
      "EC": 3,
      "FI": 7,
      "GB": 7,
      "GT": 6,
      "HN": 8,
      "IE": 6,
      "MX": 6,
      "NO": 12,
      "PE": 6,
      "PY": 4,
      "SE": 11,
      "US": 16,
      "UY": 3,
      "VE": 7,
      "IT": 60,
      "AT": 59,
      "CH": 51,
      "DE": 121,
      "FR": 84,
      "SV": 31
    },
    "display_priority": 7,
    "logo_path": "/xbhHHa1YgtpwhC8lb1NQ3ACVcLd.jpg",
    "provider_name": "Paramount Plus",
    "provider_id": 531
  },
  {
    "display_priorities": {
      "CA": 97,
      "AD": 14,
      "AL": 16,
      "BA": 15,
      "BB": 11,
      "BH": 12,
      "BM": 12,
      "BS": 12,
      "CI": 9,
      "DO": 12,
      "DZ": 12,
      "EG": 17,
      "GF": 12,
      "GI": 12,
      "HK": 26,
      "HR": 19,
      "IN": 34,
      "IQ": 15,
      "IS": 20,
      "JM": 11,
      "JO": 12,
      "KW": 12,
      "LB": 16,
      "LI": 12,
      "LY": 12,
      "MA": 12,
      "MC": 12,
      "MD": 12,
      "NE": 9,
      "NG": 9,
      "OM": 12,
      "PA": 12,
      "PS": 15,
      "QA": 12,
      "RS": 16,
      "SA": 16,
      "SI": 16,
      "SK": 22,
      "SM": 12,
      "SV": 12,
      "TN": 12,
      "TW": 24,
      "US": 203,
      "UY": 15,
      "YE": 12,
      "TZ": 34
    },
    "display_priority": 12,
    "logo_path": "/m3NWxxR23l1w1e156fyTuw931gx.jpg",
    "provider_name": "aha",
    "provider_id": 532
  },
  {
    "display_priorities": {
      "AT": 33,
      "DE": 60
    },
    "display_priority": 60,
    "logo_path": "/1h8etYGesCuldkQGoUDyDJr92EB.jpg",
    "provider_name": "Amazon Arthaus Channel",
    "provider_id": 533
  },
  {
    "display_priorities": {
      "AD": 6,
      "AL": 6,
      "BA": 6,
      "BB": 7,
      "BH": 7,
      "BM": 7,
      "BS": 7,
      "CI": 6,
      "DO": 7,
      "DZ": 7,
      "EG": 14,
      "GF": 7,
      "GI": 7,
      "HK": 27,
      "HR": 15,
      "IL": 6,
      "IQ": 6,
      "IS": 16,
      "JM": 7,
      "JO": 7,
      "KW": 7,
      "LB": 6,
      "LI": 7,
      "LY": 7,
      "MA": 7,
      "MC": 7,
      "MD": 7,
      "MK": 6,
      "MT": 6,
      "NE": 6,
      "NG": 6,
      "OM": 7,
      "PA": 7,
      "PS": 6,
      "QA": 7,
      "RS": 6,
      "SA": 13,
      "SI": 6,
      "SK": 18,
      "SM": 7,
      "SV": 7,
      "TN": 7,
      "TW": 26,
      "UY": 10,
      "YE": 7,
      "TZ": 31
    },
    "display_priority": 7,
    "logo_path": "/tgKw3lckZULebs3cMLAbMRqir7G.jpg",
    "provider_name": "Argo",
    "provider_id": 534
  },
  {
    "display_priorities": {},
    "display_priority": 67,
    "logo_path": "/3Jz6S84ovoY8oohXrxrD3DtaBMD.jpg",
    "provider_name": "digital TIFF Bell Lightbox",
    "provider_id": 535
  },
  {
    "display_priorities": {
      "CA": 69,
      "AU": 46,
      "DE": 71,
      "FR": 42,
      "GB": 51,
      "US": 187
    },
    "display_priority": 187,
    "logo_path": "/9sk88OAxDZSdMOzg8VuqtGpgWQ3.jpg",
    "provider_name": "Dogwoof On Demand",
    "provider_id": 536
  },
  {
    "display_priorities": {
      "AT": 34,
      "CH": 31,
      "DE": 62
    },
    "display_priority": 62,
    "logo_path": "/dKH9TB94EIbnaWnjO6vX0snaNVP.jpg",
    "provider_name": "ZDF",
    "provider_id": 537
  },
  {
    "display_priorities": {
      "CA": 90,
      "AU": 50,
      "DE": 63,
      "ES": 27,
      "FR": 33,
      "GB": 52,
      "IN": 36,
      "IT": 31,
      "KR": 15,
      "US": 180
    },
    "display_priority": 180,
    "logo_path": "/wDWvnupneMbY6RhBTHQC9zU0SCX.jpg",
    "provider_name": "Plex",
    "provider_id": 538
  },
  {
    "display_priorities": {
      "FI": 24
    },
    "display_priority": 24,
    "logo_path": "/ooeXdXICZNnDFHAq596xQwN4A15.jpg",
    "provider_name": "Viddla",
    "provider_id": 539
  },
  {
    "display_priorities": {
      "FI": 25
    },
    "display_priority": 25,
    "logo_path": "/ihE8Z4jZcGsmQsGRj6q06oxD2Wd.jpg",
    "provider_name": "Elisa Viihde",
    "provider_id": 540
  },
  {
    "display_priorities": {
      "ES": 26
    },
    "display_priority": 26,
    "logo_path": "/f3RCRmZWiUzg2CjxUqWJ881WmcS.jpg",
    "provider_name": "rtve",
    "provider_id": 541
  },
  {
    "display_priorities": {
      "DE": 65
    },
    "display_priority": 65,
    "logo_path": "/q6hCkmhpK5cDUURb4i6yWXNfpZz.jpg",
    "provider_name": "filmfriend",
    "provider_id": 542
  },
  {
    "display_priorities": {
      "AR": 23
    },
    "display_priority": 23,
    "logo_path": "/xKUlNQjy7dpfI8Nj8BjgSTdYnqH.jpg",
    "provider_name": "CONTAR",
    "provider_id": 543
  },
  {
    "display_priorities": {
      "BR": 33
    },
    "display_priority": 33,
    "logo_path": "/n3BIqc0mojP85bJSKjsIwZUOVya.jpg",
    "provider_name": "Libreflix",
    "provider_id": 544
  },
  {
    "display_priorities": {
      "AE": 7,
      "AL": 11,
      "BB": 12,
      "BH": 13,
      "BM": 14,
      "BS": 13,
      "DZ": 13,
      "EG": 21,
      "GF": 14,
      "GH": 5,
      "GQ": 5,
      "HK": 33,
      "HR": 24,
      "IL": 9,
      "IN": 35,
      "JM": 12,
      "JO": 13,
      "KW": 14,
      "LB": 9,
      "LC": 5,
      "LI": 14,
      "LY": 13,
      "MA": 13,
      "OM": 13,
      "PA": 13,
      "PK": 5,
      "QA": 13,
      "RS": 11,
      "SA": 21,
      "SI": 11,
      "SN": 5,
      "SK": 27,
      "SM": 14,
      "TW": 35,
      "UY": 16,
      "XK": 1,
      "YE": 14,
      "TZ": 27
    },
    "display_priority": 14,
    "logo_path": "/iJGVfWTDddgipZ7mJCCEYzmRYrP.jpg",
    "provider_name": "Spuul",
    "provider_id": 545
  },
  {
    "display_priorities": {
      "CA": 62,
      "AD": 17,
      "AL": 19,
      "AR": 25,
      "AT": 35,
      "AU": 41,
      "BA": 18,
      "BE": 18,
      "BM": 13,
      "BO": 8,
      "BR": 34,
      "CH": 32,
      "CI": 13,
      "CL": 19,
      "CO": 19,
      "CR": 15,
      "CZ": 11,
      "DE": 64,
      "DK": 25,
      "EC": 18,
      "EE": 13,
      "ES": 28,
      "FI": 26,
      "FR": 34,
      "GB": 53,
      "GF": 13,
      "GI": 13,
      "GR": 9,
      "GT": 15,
      "HN": 15,
      "HU": 12,
      "ID": 21,
      "IE": 24,
      "IL": 17,
      "IN": 37,
      "IQ": 18,
      "IS": 15,
      "IT": 32,
      "JP": 16,
      "KR": 16,
      "KW": 13,
      "LB": 19,
      "LI": 13,
      "LT": 13,
      "LV": 13,
      "MK": 17,
      "MT": 17,
      "MX": 29,
      "MY": 17,
      "NE": 13,
      "NG": 14,
      "NL": 30,
      "NO": 24,
      "NZ": 23,
      "PE": 19,
      "PH": 17,
      "PL": 16,
      "PS": 18,
      "PT": 16,
      "PY": 15,
      "RO": 6,
      "RS": 19,
      "RU": 13,
      "SE": 28,
      "SI": 19,
      "SG": 17,
      "SM": 13,
      "TH": 15,
      "TN": 13,
      "TR": 12,
      "US": 181,
      "VE": 15,
      "YE": 13,
      "ZA": 14
    },
    "display_priority": 14,
    "logo_path": "/mgD0T960hnYU4gBxbPPBrcDfgWg.jpg",
    "provider_name": "WOW Presents Plus",
    "provider_id": 546
  },
  {
    "display_priorities": {
      "US": 182
    },
    "display_priority": 182,
    "logo_path": "/1UP7ysjKolfD0rmp2fLmvyRHkdn.jpg",
    "provider_name": "Alamo on Demand",
    "provider_id": 547
  },
  {
    "display_priorities": {
      "NL": 31
    },
    "display_priority": 31,
    "logo_path": "/60PpYTEeU4F1r5ndl1VbdYq5r7F.jpg",
    "provider_name": "IFFR Unleashed",
    "provider_id": 548
  },
  {
    "display_priorities": {
      "PL": 17
    },
    "display_priority": 17,
    "logo_path": "/bZNXgd8fwVTD68aAGlElkpAtu7b.jpg",
    "provider_name": "IPLA",
    "provider_id": 549
  },
  {
    "display_priorities": {
      "CA": 63,
      "FR": 35
    },
    "display_priority": 35,
    "logo_path": "/9nYphuoVD2doYP1Fc0Xij1j3Qdm.jpg",
    "provider_name": "Tenk",
    "provider_id": 550
  },
  {
    "display_priorities": {
      "CA": 64,
      "AD": 15,
      "AL": 17,
      "AR": 24,
      "AT": 36,
      "AU": 42,
      "BA": 16,
      "BB": 13,
      "BE": 19,
      "BH": 14,
      "BM": 15,
      "BO": 16,
      "BS": 14,
      "BR": 35,
      "CH": 33,
      "CL": 20,
      "CO": 20,
      "CR": 16,
      "CZ": 12,
      "DE": 66,
      "DK": 26,
      "DO": 13,
      "DZ": 14,
      "EC": 19,
      "EE": 14,
      "EG": 15,
      "ES": 29,
      "FI": 27,
      "FR": 36,
      "GB": 54,
      "GF": 15,
      "GI": 14,
      "GR": 10,
      "GT": 16,
      "HK": 23,
      "HN": 16,
      "HR": 16,
      "HU": 13,
      "ID": 22,
      "IE": 25,
      "IL": 15,
      "IN": 38,
      "IQ": 16,
      "IS": 17,
      "IT": 33,
      "JM": 13,
      "JO": 14,
      "JP": 17,
      "KR": 17,
      "KW": 15,
      "LB": 17,
      "LI": 15,
      "LT": 14,
      "LV": 14,
      "LY": 14,
      "MA": 14,
      "MC": 13,
      "MD": 13,
      "MK": 15,
      "MT": 15,
      "MX": 30,
      "MY": 18,
      "NG": 12,
      "NL": 32,
      "NO": 25,
      "NZ": 24,
      "OM": 14,
      "PA": 14,
      "PE": 20,
      "PH": 18,
      "PL": 18,
      "PS": 16,
      "PT": 17,
      "PY": 16,
      "QA": 14,
      "RO": 7,
      "RS": 17,
      "RU": 14,
      "SA": 14,
      "SE": 29,
      "SI": 17,
      "SG": 18,
      "SK": 19,
      "SM": 15,
      "SV": 13,
      "TH": 16,
      "TN": 14,
      "TR": 13,
      "TW": 22,
      "US": 183,
      "UY": 17,
      "VE": 16,
      "YE": 15,
      "ZA": 15,
      "TZ": 29
    },
    "display_priority": 15,
    "logo_path": "/gekkP93StjYdiMAInViVmrnldNY.jpg",
    "provider_name": "Magellan TV",
    "provider_id": 551
  },
  {
    "display_priorities": {
      "IE": 26
    },
    "display_priority": 26,
    "logo_path": "/jiGIvlZafckhqy0Ya9zGp60eWS8.jpg",
    "provider_name": "QFT Player",
    "provider_id": 552
  },
  {
    "display_priorities": {
      "FI": 34,
      "LT": 15
    },
    "display_priority": 15,
    "logo_path": "/xTVM8uXT9QocigQ07LE7Irc65W2.jpg",
    "provider_name": "Telia Play",
    "provider_id": 553
  },
  {
    "display_priorities": {
      "CA": 65,
      "AD": 16,
      "AL": 18,
      "AR": 26,
      "AT": 37,
      "AU": 43,
      "BA": 17,
      "BB": 14,
      "BE": 20,
      "BH": 15,
      "BM": 16,
      "BO": 9,
      "BS": 15,
      "BR": 36,
      "BG": 6,
      "CH": 34,
      "CI": 12,
      "CL": 22,
      "CO": 21,
      "CR": 14,
      "CZ": 13,
      "DE": 67,
      "DK": 27,
      "DO": 14,
      "DZ": 15,
      "EC": 20,
      "EE": 15,
      "EG": 16,
      "ES": 30,
      "FI": 28,
      "FR": 37,
      "GB": 55,
      "GF": 16,
      "GI": 15,
      "GR": 11,
      "GT": 14,
      "HK": 28,
      "HN": 14,
      "HR": 17,
      "HU": 14,
      "ID": 23,
      "IE": 27,
      "IL": 16,
      "IN": 39,
      "IQ": 17,
      "IS": 18,
      "IT": 34,
      "JM": 14,
      "JO": 15,
      "JP": 18,
      "KR": 18,
      "KW": 16,
      "LB": 18,
      "LI": 16,
      "LT": 16,
      "LV": 15,
      "LY": 15,
      "MA": 15,
      "MC": 14,
      "MD": 14,
      "MK": 16,
      "MT": 16,
      "MX": 31,
      "MY": 19,
      "NE": 12,
      "NG": 13,
      "NL": 33,
      "NO": 26,
      "NZ": 25,
      "OM": 15,
      "PA": 15,
      "PE": 21,
      "PH": 19,
      "PL": 19,
      "PS": 17,
      "PT": 18,
      "PY": 14,
      "QA": 15,
      "RO": 8,
      "RS": 18,
      "RU": 15,
      "SA": 15,
      "SE": 30,
      "SI": 18,
      "SG": 19,
      "SK": 20,
      "SM": 16,
      "SV": 14,
      "TH": 17,
      "TN": 15,
      "TR": 14,
      "TW": 27,
      "US": 184,
      "UY": 18,
      "VE": 17,
      "YE": 16,
      "ZA": 16,
      "TZ": 30
    },
    "display_priority": 16,
    "logo_path": "/xLu1rkZNOKuNnRNr70wySosfTBf.jpg",
    "provider_name": "BroadwayHD",
    "provider_id": 554
  },
  {
    "display_priorities": {
      "RU": 16
    },
    "display_priority": 16,
    "logo_path": "/krABGbxTRmPtUA10fkwhwUdCd4I.jpg",
    "provider_name": "tvzavr",
    "provider_id": 556
  },
  {
    "display_priorities": {
      "RU": 17
    },
    "display_priority": 17,
    "logo_path": "/Aduyz3yAGMXTmd2N6NiIOYCmWF3.jpg",
    "provider_name": "More TV",
    "provider_id": 557
  },
  {
    "display_priorities": {
      "MX": 32
    },
    "display_priority": 32,
    "logo_path": "/qJxuBkjkXWYmuTKk7hxvbmqvrNc.jpg",
    "provider_name": "Cinépolis KLIC",
    "provider_id": 558
  },
  {
    "display_priorities": {
      "CA": 66,
      "AD": 19,
      "AL": 21,
      "AR": 27,
      "AT": 38,
      "AU": 44,
      "BA": 20,
      "BB": 16,
      "BE": 21,
      "BH": 17,
      "BM": 18,
      "BO": 18,
      "BS": 17,
      "BR": 37,
      "CH": 35,
      "CI": 16,
      "CL": 21,
      "CO": 22,
      "CR": 18,
      "CZ": 14,
      "DE": 68,
      "DK": 28,
      "DO": 16,
      "DZ": 17,
      "EC": 21,
      "EE": 16,
      "EG": 18,
      "ES": 31,
      "FI": 29,
      "FR": 38,
      "GB": 56,
      "GF": 18,
      "GI": 17,
      "GR": 12,
      "GT": 18,
      "HK": 22,
      "HN": 18,
      "HR": 20,
      "HU": 15,
      "ID": 24,
      "IE": 28,
      "IL": 19,
      "IN": 40,
      "IQ": 20,
      "IS": 21,
      "IT": 35,
      "JM": 16,
      "JO": 17,
      "JP": 19,
      "KR": 19,
      "KW": 18,
      "LB": 21,
      "LI": 18,
      "LT": 17,
      "LV": 16,
      "LY": 17,
      "MA": 17,
      "MC": 16,
      "MD": 16,
      "MK": 19,
      "MT": 19,
      "MX": 33,
      "MY": 20,
      "NE": 16,
      "NG": 17,
      "NL": 34,
      "NO": 27,
      "NZ": 26,
      "OM": 17,
      "PA": 17,
      "PE": 22,
      "PH": 20,
      "PL": 20,
      "PS": 20,
      "PT": 19,
      "PY": 18,
      "QA": 17,
      "RO": 9,
      "RS": 21,
      "SA": 17,
      "SE": 31,
      "SI": 21,
      "SG": 20,
      "SK": 23,
      "SM": 18,
      "SV": 16,
      "TH": 18,
      "TN": 17,
      "TR": 15,
      "TW": 21,
      "US": 185,
      "UY": 20,
      "VE": 18,
      "YE": 18,
      "ZA": 17,
      "TZ": 28
    },
    "display_priority": 17,
    "logo_path": "/olmH7t5tEng8Yuq33KmvpvaaVIg.jpg",
    "provider_name": "Filmzie",
    "provider_id": 559
  },
  {
    "display_priorities": {
      "NO": 28
    },
    "display_priority": 28,
    "logo_path": "/aTUaeAdFmNfjcm7FRWaM49Ds7Gj.jpg",
    "provider_name": "Filmoteket",
    "provider_id": 560
  },
  {
    "display_priorities": {
      "IN": 41
    },
    "display_priority": 41,
    "logo_path": "/vrFpju3t7kplDbFsN5GLJpG0obj.jpg",
    "provider_name": "Lionsgate Play",
    "provider_id": 561
  },
  {
    "display_priorities": {
      "BR": 38,
      "DE": 69,
      "GB": 57,
      "IN": 42,
      "US": 188
    },
    "display_priority": 188,
    "logo_path": "/fdWE8jpmQqkZrwg2ZMuCLz6ms5P.jpg",
    "provider_name": "MovieSaints",
    "provider_id": 562
  },
  {
    "display_priorities": {
      "NL": 35
    },
    "display_priority": 35,
    "logo_path": "/bVClgB5bpaTRM3sVPlboaxkFD0U.jpg",
    "provider_name": "KPN",
    "provider_id": 563
  },
  {
    "display_priorities": {
      "BR": 40
    },
    "display_priority": 40,
    "logo_path": "/qEFO4pJhL6IyHbKUqaefsOA0kWJ.jpg",
    "provider_name": "Filme Filme",
    "provider_id": 566
  },
  {
    "display_priorities": {
      "CA": 70,
      "AD": 20,
      "AL": 22,
      "AR": 29,
      "AT": 42,
      "AU": 47,
      "BA": 21,
      "BB": 17,
      "BE": 23,
      "BH": 18,
      "BM": 19,
      "BO": 14,
      "BS": 18,
      "BR": 41,
      "BG": 11,
      "CH": 37,
      "CI": 18,
      "CL": 24,
      "CO": 24,
      "CR": 9,
      "CZ": 16,
      "DE": 72,
      "DK": 30,
      "DO": 17,
      "DZ": 18,
      "EC": 23,
      "EE": 18,
      "EG": 19,
      "ES": 33,
      "FI": 31,
      "FR": 43,
      "GB": 61,
      "GF": 19,
      "GI": 18,
      "GR": 14,
      "GT": 9,
      "HK": 29,
      "HN": 9,
      "HR": 21,
      "HU": 17,
      "ID": 26,
      "IE": 30,
      "IL": 20,
      "IN": 44,
      "IQ": 21,
      "IS": 22,
      "IT": 37,
      "JM": 17,
      "JO": 18,
      "JP": 21,
      "KR": 21,
      "KW": 19,
      "LB": 22,
      "LI": 19,
      "LT": 19,
      "LV": 18,
      "LY": 18,
      "MA": 18,
      "MC": 17,
      "MD": 17,
      "MK": 20,
      "MT": 20,
      "MX": 36,
      "MY": 22,
      "NE": 18,
      "NG": 19,
      "NL": 37,
      "NO": 30,
      "NZ": 28,
      "OM": 18,
      "PA": 18,
      "PE": 24,
      "PH": 22,
      "PL": 22,
      "PS": 21,
      "PT": 21,
      "PY": 9,
      "QA": 18,
      "RO": 12,
      "RS": 22,
      "RU": 19,
      "SA": 18,
      "SE": 33,
      "SI": 22,
      "SG": 22,
      "SK": 24,
      "SM": 19,
      "SV": 17,
      "TH": 20,
      "TN": 18,
      "TR": 17,
      "TW": 28,
      "US": 189,
      "UY": 21,
      "VE": 20,
      "YE": 19,
      "ZA": 19,
      "TZ": 14
    },
    "display_priority": 19,
    "logo_path": "/osREemsc9uUB2J8VTkQeAVk2fu9.jpg",
    "provider_name": "True Story",
    "provider_id": 567
  },
  {
    "display_priorities": {
      "CA": 71,
      "AR": 30,
      "AT": 40,
      "AU": 48,
      "BB": 18,
      "BE": 24,
      "BH": 19,
      "BM": 20,
      "BO": 12,
      "BS": 19,
      "BR": 42,
      "BG": 9,
      "CH": 38,
      "CL": 25,
      "CO": 25,
      "CR": 11,
      "CZ": 17,
      "DE": 73,
      "DK": 31,
      "DO": 18,
      "EC": 24,
      "EE": 19,
      "ES": 34,
      "FI": 32,
      "FR": 44,
      "GB": 62,
      "GF": 20,
      "GI": 19,
      "GR": 15,
      "GT": 11,
      "HK": 14,
      "HN": 11,
      "HR": 22,
      "HU": 18,
      "ID": 27,
      "IE": 31,
      "IN": 45,
      "IS": 23,
      "IT": 38,
      "JM": 18,
      "JO": 19,
      "JP": 22,
      "KR": 22,
      "KW": 20,
      "LI": 20,
      "LT": 20,
      "LV": 19,
      "MC": 18,
      "MD": 18,
      "MX": 37,
      "MY": 23,
      "NL": 38,
      "NO": 31,
      "NZ": 29,
      "OM": 19,
      "PA": 19,
      "PE": 25,
      "PH": 23,
      "PL": 23,
      "PT": 22,
      "PY": 11,
      "QA": 19,
      "RO": 13,
      "RU": 20,
      "SA": 19,
      "SE": 34,
      "SG": 23,
      "SK": 25,
      "SM": 20,
      "SV": 18,
      "TH": 21,
      "TR": 18,
      "TW": 13,
      "US": 191,
      "UY": 22,
      "VE": 21,
      "YE": 20,
      "ZA": 20
    },
    "display_priority": 20,
    "logo_path": "/aQ1ritN00jXc7RAFfUoQKGAAfp7.jpg",
    "provider_name": "DocAlliance Films",
    "provider_id": 569
  },
  {
    "display_priorities": {
      "RU": 21
    },
    "display_priority": 21,
    "logo_path": "/dUGPd8eg651seqculYtaM3AE9O9.jpg",
    "provider_name": "Premier",
    "provider_id": 570
  },
  {
    "display_priorities": {
      "BE": 25,
      "HR": 30
    },
    "display_priority": 30,
    "logo_path": "/xrHrIraInfRXnrz1zHhY1tXJowg.jpg",
    "provider_name": "RTL Play",
    "provider_id": 572
  },
  {
    "display_priorities": {
      "BR": 43
    },
    "display_priority": 43,
    "logo_path": "/gzHzhgt6cVSn4yy6UnJvLGbOSwL.jpg",
    "provider_name": "KinoPop",
    "provider_id": 573
  },
  {
    "display_priorities": {
      "BR": 44
    },
    "display_priority": 44,
    "logo_path": "/xbdgLcQ6kRrcVe1uJAG9lzlkSbY.jpg",
    "provider_name": "Oi Play",
    "provider_id": 574
  },
  {
    "display_priorities": {
      "CA": 72,
      "AR": 31,
      "BR": 45,
      "CL": 26,
      "CO": 26,
      "EC": 25,
      "MX": 38,
      "PE": 26,
      "US": 192,
      "VE": 22
    },
    "display_priority": 22,
    "logo_path": "/uHv6Y4YSsr4cj7q4cBbAg7WXKEI.jpg",
    "provider_name": "KoreaOnDemand",
    "provider_id": 575
  },
  {
    "display_priorities": {
      "ID": 28
    },
    "display_priority": 28,
    "logo_path": "/96JqcynVUOkkIfpyffjczff5NZb.jpg",
    "provider_name": "Klik Film",
    "provider_id": 576
  },
  {
    "display_priorities": {
      "RU": 22
    },
    "display_priority": 22,
    "logo_path": "/3jJtMOIwtvcrCyeRMUvv4wsfhJk.jpg",
    "provider_name": "TvIgle",
    "provider_id": 577
  },
  {
    "display_priorities": {
      "NO": 32
    },
    "display_priority": 32,
    "logo_path": "/gKno1uvHwHyhQTKMflDvEqj5oGJ.jpg",
    "provider_name": "Strim",
    "provider_id": 578
  },
  {
    "display_priorities": {
      "CA": 74,
      "US": 195
    },
    "display_priority": 195,
    "logo_path": "/tKJdVrC0fjEtQtYYjlVwX9rmqrj.jpg",
    "provider_name": "Film Movement Plus",
    "provider_id": 579
  },
  {
    "display_priorities": {
      "BG": 12
    },
    "display_priority": 12,
    "logo_path": "/ApALy1g1c9piZkivc9yrb30BGfn.jpg",
    "provider_name": "Nova Play",
    "provider_id": 580
  },
  {
    "display_priorities": {
      "CA": 76,
      "AD": 25,
      "AL": 27,
      "BA": 26,
      "BB": 23,
      "BH": 24,
      "BM": 25,
      "BS": 24,
      "CI": 21,
      "DO": 24,
      "DZ": 23,
      "EG": 28,
      "GF": 25,
      "GI": 24,
      "HK": 18,
      "HR": 28,
      "IL": 25,
      "IQ": 26,
      "IS": 28,
      "JM": 23,
      "JO": 24,
      "KW": 25,
      "LB": 27,
      "LI": 25,
      "LY": 23,
      "MA": 23,
      "MC": 23,
      "MD": 23,
      "MK": 25,
      "MT": 25,
      "NE": 21,
      "NG": 22,
      "OM": 24,
      "PA": 25,
      "PS": 26,
      "QA": 24,
      "RS": 27,
      "SA": 27,
      "SI": 27,
      "SK": 33,
      "SM": 25,
      "SV": 24,
      "TN": 23,
      "TW": 17,
      "US": 196,
      "UY": 28,
      "YE": 25,
      "TZ": 17
    },
    "display_priority": 25,
    "logo_path": "/8MXYXzZGoPAEQU13GWk1GVvKNUS.jpg",
    "provider_name": "iQIYI",
    "provider_id": 581
  },
  {
    "display_priorities": {
      "CA": 11,
      "AU": 6,
      "BR": 50,
      "GB": 89,
      "MX": 47,
      "US": 23,
      "IT": 61,
      "AT": 60,
      "DE": 122,
      "FR": 85
    },
    "display_priority": 23,
    "logo_path": "/3E0RkIEQrrGYazs63NMsn3XONT6.jpg",
    "provider_name": "Paramount+ Amazon Channel",
    "provider_id": 582
  },
  {
    "display_priorities": {
      "US": 24
    },
    "display_priority": 24,
    "logo_path": "/hoqk74y8HTJTMWcVes1ZVwohCue.jpg",
    "provider_name": "MGM Plus Amazon Channel",
    "provider_id": 583
  },
  {
    "display_priorities": {
      "GB": 67,
      "IT": 24,
      "US": 25,
      "DE": 119
    },
    "display_priority": 25,
    "logo_path": "/a2OcajC4bM5ItniQdjyOV7tgthW.jpg",
    "provider_name": "Discovery Plus Amazon Channel",
    "provider_id": 584
  },
  {
    "display_priorities": {
      "US": 197
    },
    "display_priority": 197,
    "logo_path": "/8PmpsrVDLJ3m8I37W6UNFEymhm7.jpg",
    "provider_name": "Metrograph",
    "provider_id": 585
  },
  {
    "display_priorities": {
      "CA": 77
    },
    "display_priority": 77,
    "logo_path": "/kvn50K9EIdwJhpLwnFFE1D2rOIZ.jpg",
    "provider_name": "IFC Amazon Channel",
    "provider_id": 587
  },
  {
    "display_priorities": {
      "CA": 79,
      "BR": 52,
      "DE": 94,
      "ES": 45,
      "FR": 50,
      "GB": 72,
      "IT": 54,
      "MX": 45
    },
    "display_priority": 45,
    "logo_path": "/fUUgfrOfvvPKx9vhFBd6IMdkfLy.jpg",
    "provider_name": "MGM Amazon Channel",
    "provider_id": 588
  },
  {
    "display_priorities": {
      "CA": 78
    },
    "display_priority": 78,
    "logo_path": "/3zOyRHCQuesGyoc7ZuzUMSCZh7k.jpg",
    "provider_name": "TELETOON+ Amazon Channel",
    "provider_id": 589
  },
  {
    "display_priorities": {
      "GB": 64
    },
    "display_priority": 64,
    "logo_path": "/nqGY5wuSv14vbY7NYOs8stJ6ZBF.jpg",
    "provider_name": "Now TV Cinema",
    "provider_id": 591
  },
  {
    "display_priorities": {
      "GB": 42
    },
    "display_priority": 42,
    "logo_path": "/v3PhM1pr6omrcffUoBBZkiVeApH.jpg",
    "provider_name": "STV Player",
    "provider_id": 593
  },
  {
    "display_priorities": {
      "GB": 66
    },
    "display_priority": 66,
    "logo_path": "/o6li3XZrBKXSqyNRS39UQEfPTCH.jpg",
    "provider_name": "Virgin TV Go",
    "provider_id": 594
  },
  {
    "display_priorities": {
      "GB": 76
    },
    "display_priority": 76,
    "logo_path": "/1K9ZUrerCHALa0dyZ1OxidsJ28u.jpg",
    "provider_name": "Eros Now Amazon Channel",
    "provider_id": 595
  },
  {
    "display_priorities": {
      "GB": 25
    },
    "display_priority": 25,
    "logo_path": "/4iegia9VpdceQpbUNqZ5ZP9jdgh.jpg",
    "provider_name": "Arrow Video Amazon Channel",
    "provider_id": 596
  },
  {
    "display_priorities": {
      "GB": 70
    },
    "display_priority": 70,
    "logo_path": "/shdbLP97nPOXYVUmw7yfxXcbWFT.jpg",
    "provider_name": "Full Moon Amazon Channel",
    "provider_id": 597
  },
  {
    "display_priorities": {
      "GB": 73
    },
    "display_priority": 73,
    "logo_path": "/itokSbqrAKttZajeuUQlwDOy3zS.jpg",
    "provider_name": "Pokémon Amazon Channel",
    "provider_id": 599
  },
  {
    "display_priorities": {
      "GB": 74
    },
    "display_priority": 74,
    "logo_path": "/6qlN4ra7T69JynYVbs9SXVUlkLk.jpg",
    "provider_name": "Shout! Factory Amazon Channel",
    "provider_id": 600
  },
  {
    "display_priorities": {
      "GB": 78
    },
    "display_priority": 78,
    "logo_path": "/ihCOKHIsNdqzhftgiJld6YVwr1G.jpg",
    "provider_name": "MotorTrend Amazon Channel",
    "provider_id": 601
  },
  {
    "display_priorities": {
      "GB": 77
    },
    "display_priority": 77,
    "logo_path": "/kgyeCy524FHBpL0oWWKnjGArt9h.jpg",
    "provider_name": "FilmBox Live Amazon Channel",
    "provider_id": 602
  },
  {
    "display_priorities": {
      "GB": 65
    },
    "display_priority": 65,
    "logo_path": "/aNvHP7E7X4hEGW7aT5tyo1xfnFN.jpg",
    "provider_name": "CuriosityStream Amazon Channel",
    "provider_id": 603
  },
  {
    "display_priorities": {
      "GB": 66
    },
    "display_priority": 66,
    "logo_path": "/jdQu3zBkbZCKnVUZwm63jBxAATk.jpg",
    "provider_name": "DocuBay Amazon Channel",
    "provider_id": 604
  },
  {
    "display_priorities": {
      "CA": 81
    },
    "display_priority": 81,
    "logo_path": "/jqByg3hw9LsuKTxgpAQPbO9b1ZQ.jpg",
    "provider_name": "Super Channel Amazon Channel",
    "provider_id": 605
  },
  {
    "display_priorities": {
      "CA": 82
    },
    "display_priority": 82,
    "logo_path": "/h8sud4kBfHnTni7G7pTnOGcArco.jpg",
    "provider_name": "StackTV Amazon Channel",
    "provider_id": 606
  },
  {
    "display_priorities": {
      "CA": 83,
      "ES": 42,
      "DE": 137,
      "GB": 122
    },
    "display_priority": 122,
    "logo_path": "/bCQVIO5iEjfstObco3fuhFB7sbs.jpg",
    "provider_name": "OUTtv Amazon Channel",
    "provider_id": 607
  },
  {
    "display_priorities": {
      "CA": 84,
      "BR": 53,
      "MX": 43,
      "ES": 81
    },
    "display_priority": 43,
    "logo_path": "/tQL30UKe7OykrtkYQCmYEFrdIMC.jpg",
    "provider_name": "Love Nature Amazon Channel",
    "provider_id": 608
  },
  {
    "display_priorities": {
      "CA": 85
    },
    "display_priority": 85,
    "logo_path": "/rZALpU2NvloNDBuUWX7BVBPFLDG.jpg",
    "provider_name": "Smithsonian Channel Amazon Channel",
    "provider_id": 609
  },
  {
    "display_priorities": {
      "CA": 86
    },
    "display_priority": 86,
    "logo_path": "/xGUwoyO5LlHKEQGGYSMoLxo7c6D.jpg",
    "provider_name": "BBC Earth Amazon Channel",
    "provider_id": 610
  },
  {
    "display_priorities": {
      "CA": 88
    },
    "display_priority": 88,
    "logo_path": "/e07gcWq5OWhJ8MxZncJrDuoJAp2.jpg",
    "provider_name": "UMC Amazon Channel",
    "provider_id": 612
  },
  {
    "display_priorities": {
      "DE": 102,
      "GB": 17,
      "US": 198
    },
    "display_priority": 198,
    "logo_path": "/uBE4RMH15mrkuz6vXzuJc7ZLXp1.jpg",
    "provider_name": "Freevee",
    "provider_id": 613
  },
  {
    "display_priorities": {
      "IN": 46
    },
    "display_priority": 46,
    "logo_path": "/h1PNHFp50cceDZ8jXUMnuVVMIw2.jpg",
    "provider_name": "VI movies and tv",
    "provider_id": 614
  },
  {
    "display_priorities": {
      "GB": 79
    },
    "display_priority": 79,
    "logo_path": "/hTXE4J8fB7KDYkhY6KbwJIfHMtM.jpg",
    "provider_name": "W4free",
    "provider_id": 615
  },
  {
    "display_priorities": {
      "BB": 27,
      "BO": 29,
      "BS": 27,
      "BG": 16,
      "CZ": 23,
      "DO": 27,
      "GF": 29,
      "HR": 35,
      "HU": 23,
      "JM": 26,
      "MD": 27,
      "NL": 46,
      "PA": 26,
      "PL": 29,
      "PT": 29,
      "RO": 18,
      "SK": 38,
      "SV": 26,
      "TT": 12,
      "US": 8,
      "UY": 29,
      "SI": 28,
      "AR": 39,
      "BR": 58,
      "CR": 32,
      "CL": 35,
      "CO": 35,
      "EC": 33,
      "GT": 32,
      "HN": 32,
      "MX": 53,
      "NO": 43,
      "PE": 35,
      "PY": 31,
      "VE": 30,
      "MK": 30
    },
    "display_priority": 30,
    "logo_path": "/rIvQ4zuxvVirsNNVarYmOTunBD2.jpg",
    "provider_name": "HBO Max Free",
    "provider_id": 616
  },
  {
    "display_priorities": {
      "GB": 80
    },
    "display_priority": 80,
    "logo_path": "/chOSZtRhgwzrMyMa5Hx8QG0Vwx7.jpg",
    "provider_name": "Paus",
    "provider_id": 618
  },
  {
    "display_priorities": {
      "AR": 4,
      "BO": 4,
      "BR": 3,
      "CL": 8,
      "CO": 7,
      "CR": 6,
      "DO": 31,
      "EC": 6,
      "GT": 5,
      "HN": 5,
      "MX": 3,
      "PE": 4,
      "PY": 5,
      "UY": 2,
      "VE": 6,
      "SV": 32,
      "PA": 34
    },
    "display_priority": 6,
    "logo_path": "/hR9vWd8hWEVQKD6eOnBneKRFEW3.jpg",
    "provider_name": "Star Plus",
    "provider_id": 619
  },
  {
    "display_priorities": {
      "DK": 34
    },
    "display_priority": 34,
    "logo_path": "/dpqap8iY6bsSqQf4xrkAG2j43gS.jpg",
    "provider_name": "DRTV",
    "provider_id": 620
  },
  {
    "display_priorities": {
      "DK": 33
    },
    "display_priority": 33,
    "logo_path": "/cInE5cdEs1yOKVbNaqlGbeZeAnN.jpg",
    "provider_name": "Dansk Filmskat",
    "provider_id": 621
  },
  {
    "display_priorities": {
      "AT": 44,
      "CH": 40
    },
    "display_priority": 40,
    "logo_path": "/5OtaT8STJ8ZMkKt994C5XxrEAaP.jpg",
    "provider_name": "UPC TV",
    "provider_id": 622
  },
  {
    "display_priorities": {
      "HK": 34,
      "TW": 34
    },
    "display_priority": 34,
    "logo_path": "/fDZtWPwSiKjVbbuZOVtlZAiH0rE.jpg",
    "provider_name": "WeTV",
    "provider_id": 623
  },
  {
    "display_priorities": {
      "HK": 35,
      "TW": 36
    },
    "display_priority": 36,
    "logo_path": "/iGDZ6zPbVcngc0BQEsZX13Z7I07.jpg",
    "provider_name": "KKTV",
    "provider_id": 624
  },
  {
    "display_priorities": {
      "HK": 36,
      "TW": 37
    },
    "display_priority": 37,
    "logo_path": "/wLZCjEAlCKjEkQQM75bITfqL7D0.jpg",
    "provider_name": "LINE TV",
    "provider_id": 625
  },
  {
    "display_priorities": {
      "SK": 31
    },
    "display_priority": 31,
    "logo_path": "/9CHdbyMXYgFk9oM7H4t1FlrULHs.jpg",
    "provider_name": "Otta",
    "provider_id": 626
  },
  {
    "display_priorities": {
      "SK": 34
    },
    "display_priority": 34,
    "logo_path": "/ujkJsUqk59ZdN6fCslGV3dZDSHr.jpg",
    "provider_name": "Voyo",
    "provider_id": 627
  },
  {
    "display_priorities": {
      "SK": 32
    },
    "display_priority": 32,
    "logo_path": "/3OYkWKdWFgmRNiAp2kPgRN9wWd3.jpg",
    "provider_name": "Edisonline",
    "provider_id": 628
  },
  {
    "display_priorities": {
      "AE": 11,
      "EG": 27,
      "IL": 13,
      "IQ": 12,
      "LB": 13,
      "PS": 12,
      "SA": 25
    },
    "display_priority": 25,
    "logo_path": "/xEPXbwbfABzPrUTWbgtDFH1NOa.jpg",
    "provider_name": "OSN",
    "provider_id": 629
  },
  {
    "display_priorities": {
      "AE": 10,
      "EG": 26,
      "SA": 26,
      "BH": 32,
      "IQ": 31,
      "KW": 33,
      "JO": 32,
      "OM": 32,
      "QA": 32
    },
    "display_priority": 26,
    "logo_path": "/uOTEObCZtolNGDA7A4Wrb47cxNn.jpg",
    "provider_name": "STARZPLAY",
    "provider_id": 630
  },
  {
    "display_priorities": {
      "HR": 29
    },
    "display_priority": 29,
    "logo_path": "/h9vCGR4GF42HjXNvGQoBcuiZAvG.jpg",
    "provider_name": "HRTi",
    "provider_id": 631
  },
  {
    "display_priorities": {
      "US": 30
    },
    "display_priority": 30,
    "logo_path": "/qMf2zirM2w0sO0mdAIIoP5XnQn8.jpg",
    "provider_name": "Showtime Roku Premium Channel",
    "provider_id": 632
  },
  {
    "display_priorities": {
      "US": 31
    },
    "display_priority": 31,
    "logo_path": "/qlVSrZgfXlFw0Jj6hsYq2zi70JD.jpg",
    "provider_name": "Paramount+ Roku Premium Channel",
    "provider_id": 633
  },
  {
    "display_priorities": {
      "US": 32
    },
    "display_priority": 32,
    "logo_path": "/5OAb2w7D9C2VHa0k5PaoAYeFYFE.jpg",
    "provider_name": "Starz Roku Premium Channel",
    "provider_id": 634
  },
  {
    "display_priorities": {
      "US": 33
    },
    "display_priority": 33,
    "logo_path": "/ni2NgPmIqqJRXeiA8Zdj4UhBZnU.jpg",
    "provider_name": "AMC+ Roku Premium Channel",
    "provider_id": 635
  },
  {
    "display_priorities": {
      "US": 35
    },
    "display_priority": 35,
    "logo_path": "/3sE2JNYZJRD9Le1P8B6oVEqarad.jpg",
    "provider_name": "MGM Plus Roku Premium Channel",
    "provider_id": 636
  },
  {
    "display_priorities": {
      "HR": 31
    },
    "display_priority": 31,
    "logo_path": "/kHx8k4ixfSZdj45FAYP2P9r4FUO.jpg",
    "provider_name": "Pickbox NOW",
    "provider_id": 637
  },
  {
    "display_priorities": {
      "AD": 13,
      "AE": 16,
      "AG": 7,
      "AL": 15,
      "BA": 14,
      "BB": 24,
      "BH": 25,
      "BM": 26,
      "BS": 25,
      "CI": 22,
      "CU": 7,
      "CV": 7,
      "DZ": 24,
      "EG": 33,
      "FJ": 7,
      "GF": 26,
      "GG": 7,
      "GH": 8,
      "GI": 25,
      "GQ": 8,
      "HR": 37,
      "IL": 14,
      "IQ": 14,
      "IS": 33,
      "JO": 25,
      "KE": 7,
      "KW": 26,
      "LB": 15,
      "LC": 8,
      "LI": 26,
      "LY": 24,
      "MA": 24,
      "MC": 24,
      "MK": 14,
      "MT": 14,
      "MU": 6,
      "MZ": 7,
      "NE": 22,
      "NG": 23,
      "OM": 25,
      "PF": 7,
      "PK": 7,
      "PS": 14,
      "QA": 25,
      "RS": 15,
      "SA": 32,
      "SC": 7,
      "SI": 15,
      "SN": 8,
      "SK": 40,
      "SM": 26,
      "TC": 7,
      "TN": 24,
      "TT": 7,
      "TZ": 7,
      "UG": 7,
      "US": 199,
      "XK": 4,
      "VA": 6,
      "YE": 26,
      "ZM": 7
    },
    "display_priority": 7,
    "logo_path": "/liEIj6CkvojVDiMWeexGvflSPZT.jpg",
    "provider_name": "Public Domain Movies",
    "provider_id": 638
  },
  {
    "display_priorities": {
      "BE": 27,
      "NL": 41
    },
    "display_priority": 41,
    "logo_path": "/hRqG400ljOAbbQkoos4W4gq2uPN.jpg",
    "provider_name": "CineMember",
    "provider_id": 639
  },
  {
    "display_priorities": {
      "US": 200
    },
    "display_priority": 200,
    "logo_path": "/ttxbDVmHMuNTKcSLOyIHFs7TdRh.jpg",
    "provider_name": "Kino Now",
    "provider_id": 640
  },
  {
    "display_priorities": {
      "IT": 20
    },
    "display_priority": 20,
    "logo_path": "/98gXEOnALxMcSTuAkzrx8OKKErx.jpg",
    "provider_name": "Nexo Plus",
    "provider_id": 641
  },
  {
    "display_priorities": {
      "GB": 41
    },
    "display_priority": 41,
    "logo_path": "/75mU4aWHPnMxSl95VT5O4lCR64U.jpg",
    "provider_name": "STUDIOCANAL PRESENTS Apple TV Channel",
    "provider_id": 642
  },
  {
    "display_priorities": {
      "US": 19
    },
    "display_priority": 19,
    "logo_path": "/xVN3LKkOtCrlFT9mavhkx8SzMwV.jpg",
    "provider_name": "Showtime Apple TV Channel",
    "provider_id": 675
  },
  {
    "display_priorities": {
      "CA": 91,
      "AD": 23,
      "AE": 13,
      "AG": 8,
      "AL": 25,
      "AR": 34,
      "AT": 45,
      "AU": 51,
      "BA": 24,
      "BB": 25,
      "BE": 28,
      "BH": 26,
      "BM": 27,
      "BO": 27,
      "BR": 48,
      "BG": 13,
      "CH": 42,
      "CI": 23,
      "CL": 29,
      "CO": 29,
      "CR": 27,
      "CU": 8,
      "CV": 8,
      "CZ": 20,
      "DE": 77,
      "DK": 35,
      "DO": 25,
      "DZ": 25,
      "EC": 28,
      "EE": 21,
      "EG": 29,
      "ES": 39,
      "FI": 36,
      "FJ": 8,
      "FR": 48,
      "GB": 83,
      "GF": 27,
      "GG": 8,
      "GH": 9,
      "GI": 26,
      "GQ": 9,
      "GR": 17,
      "GT": 27,
      "HK": 38,
      "HN": 27,
      "HR": 32,
      "HU": 20,
      "ID": 30,
      "IE": 34,
      "IL": 23,
      "IN": 47,
      "IQ": 24,
      "IS": 30,
      "IT": 42,
      "JM": 24,
      "JO": 26,
      "JP": 24,
      "KE": 8,
      "KR": 24,
      "KW": 27,
      "LB": 25,
      "LC": 9,
      "LI": 27,
      "LT": 22,
      "LV": 21,
      "LY": 25,
      "MA": 25,
      "MC": 25,
      "MD": 24,
      "MK": 23,
      "MT": 23,
      "MU": 7,
      "MX": 42,
      "MY": 26,
      "MZ": 8,
      "NE": 23,
      "NG": 24,
      "NL": 43,
      "NO": 35,
      "NZ": 31,
      "OM": 26,
      "PA": 28,
      "PE": 29,
      "PF": 8,
      "PH": 25,
      "PL": 26,
      "PS": 24,
      "PT": 24,
      "PY": 27,
      "QA": 26,
      "RO": 15,
      "RS": 25,
      "RU": 25,
      "SA": 29,
      "SC": 8,
      "SE": 37,
      "SI": 25,
      "SG": 26,
      "SN": 9,
      "SK": 35,
      "SM": 27,
      "SV": 27,
      "TC": 8,
      "TH": 24,
      "TN": 25,
      "TR": 20,
      "TT": 8,
      "TW": 38,
      "TZ": 8,
      "UG": 8,
      "US": 202,
      "UY": 31,
      "VA": 7,
      "VE": 25,
      "YE": 27,
      "ZA": 23,
      "ZM": 8
    },
    "display_priority": 23,
    "logo_path": "/fadQYOyKL0tqfyj012nYJxm3N2I.jpg",
    "provider_name": "Eventive",
    "provider_id": 677
  },
  {
    "display_priorities": {
      "DE": 78
    },
    "display_priority": 78,
    "logo_path": "/wblLDecRE2PG2c2rdSkGtkqhgHr.jpg",
    "provider_name": "Filmlegenden Amazon Channel",
    "provider_id": 678
  },
  {
    "display_priorities": {
      "DE": 79
    },
    "display_priority": 79,
    "logo_path": "/u0x5jHjdhvlNtFrfb63XDJvFwFu.jpg",
    "provider_name": "Cinema of Hearts Amazon Channel",
    "provider_id": 679
  },
  {
    "display_priorities": {
      "DE": 81
    },
    "display_priority": 81,
    "logo_path": "/97AOkkJyYajWLHgKGpK5NZOQ22O.jpg",
    "provider_name": "Bloody Movies Amazon Channel",
    "provider_id": 680
  },
  {
    "display_priorities": {
      "DE": 82
    },
    "display_priority": 82,
    "logo_path": "/4Q3nrYFVeOaSB76JlH2Ep08AQxA.jpg",
    "provider_name": "Film Total Amazon Channel",
    "provider_id": 681
  },
  {
    "display_priorities": {
      "BR": 49
    },
    "display_priority": 49,
    "logo_path": "/3gTVbIj15Amgz5Qqg5dPDpgMW9V.jpg",
    "provider_name": "Looke Amazon Channel",
    "provider_id": 683
  },
  {
    "display_priorities": {
      "ES": 46
    },
    "display_priority": 46,
    "logo_path": "/yJflQpWbgaiqYEVsFrE18lIEbaG.jpg",
    "provider_name": "FlixOlé Amazon Channel",
    "provider_id": 684
  },
  {
    "display_priorities": {
      "FR": 49
    },
    "display_priority": 49,
    "logo_path": "/42Cj5KNEteBRpfWnGWQbTJpJDGV.jpg",
    "provider_name": "OCS Amazon Channel ",
    "provider_id": 685
  },
  {
    "display_priorities": {
      "DE": 80
    },
    "display_priority": 80,
    "logo_path": "/jTvkFUHvHsUoOzZRZ8WpmkiZD1v.jpg",
    "provider_name": "Home of Horror Amazon Channel",
    "provider_id": 686
  },
  {
    "display_priorities": {
      "DE": 61
    },
    "display_priority": 61,
    "logo_path": "/3OoJykZgg9frZwIta01EJAocKjY.jpg",
    "provider_name": "Arthouse CNMA Amazon Channel",
    "provider_id": 687
  },
  {
    "display_priorities": {
      "GB": 84,
      "IN": 48,
      "IT": 43,
      "NL": 44,
      "US": 205
    },
    "display_priority": 205,
    "logo_path": "/m0mvKlSjn38S9w7WVNV7a7XyPIe.jpg",
    "provider_name": "ShortsTV Amazon Channel",
    "provider_id": 688
  },
  {
    "display_priorities": {
      "ES": 47
    },
    "display_priority": 47,
    "logo_path": "/yELuKENa93S31x4Mlkk4jp5PThi.jpg",
    "provider_name": "TVCortos Amazon Channel",
    "provider_id": 689
  },
  {
    "display_priorities": {
      "MX": 48
    },
    "display_priority": 48,
    "logo_path": "/l6boVLijqAZLYXlZpkzzeNC4mvg.jpg",
    "provider_name": "Pongalo Amazon Channel  ",
    "provider_id": 690
  },
  {
    "display_priorities": {
      "CH": 14
    },
    "display_priority": 14,
    "logo_path": "/wKAPdeGjoejE3pPZp3RdElIbfl7.jpg",
    "provider_name": "Play Suisse",
    "provider_id": 691
  },
  {
    "display_priorities": {
      "CA": 92,
      "AD": 24,
      "AE": 14,
      "AG": 10,
      "AL": 26,
      "AR": 35,
      "AT": 47,
      "AU": 52,
      "BA": 25,
      "BB": 26,
      "BE": 29,
      "BH": 27,
      "BM": 28,
      "BO": 28,
      "BS": 26,
      "BR": 54,
      "BG": 14,
      "CH": 43,
      "CI": 24,
      "CL": 30,
      "CO": 30,
      "CR": 28,
      "CU": 10,
      "CV": 10,
      "CZ": 21,
      "DE": 84,
      "DK": 36,
      "DO": 26,
      "DZ": 26,
      "EC": 29,
      "EE": 22,
      "EG": 30,
      "ES": 48,
      "FI": 37,
      "FJ": 10,
      "FR": 54,
      "GB": 85,
      "GF": 28,
      "GH": 10,
      "GI": 27,
      "GQ": 10,
      "GR": 18,
      "GT": 28,
      "HK": 39,
      "HN": 28,
      "HR": 33,
      "HU": 21,
      "ID": 31,
      "IE": 35,
      "IL": 24,
      "IN": 50,
      "IQ": 25,
      "IS": 31,
      "IT": 44,
      "JM": 25,
      "JO": 27,
      "JP": 25,
      "KE": 9,
      "KR": 25,
      "KW": 28,
      "LB": 26,
      "LC": 11,
      "LI": 28,
      "LT": 23,
      "LV": 22,
      "LY": 26,
      "MA": 26,
      "MC": 26,
      "MD": 25,
      "MK": 24,
      "MT": 24,
      "MU": 11,
      "MX": 49,
      "MY": 27,
      "MZ": 9,
      "NE": 24,
      "NG": 26,
      "NL": 45,
      "NO": 36,
      "NZ": 32,
      "OM": 27,
      "PA": 29,
      "PE": 30,
      "PF": 10,
      "PH": 26,
      "PK": 8,
      "PL": 27,
      "PS": 25,
      "PT": 27,
      "PY": 28,
      "QA": 27,
      "RO": 16,
      "RS": 26,
      "RU": 26,
      "SA": 30,
      "SC": 12,
      "SE": 38,
      "SI": 26,
      "SG": 27,
      "SN": 10,
      "SK": 36,
      "SM": 28,
      "SV": 28,
      "TC": 10,
      "TH": 25,
      "TN": 26,
      "TR": 21,
      "TT": 10,
      "TW": 39,
      "TZ": 11,
      "UG": 9,
      "US": 201,
      "UY": 32,
      "XK": 5,
      "VA": 8,
      "VE": 26,
      "YE": 28,
      "ZA": 24,
      "ZM": 9,
      "GG": 11
    },
    "display_priority": 24,
    "logo_path": "/59azlQKUgFdYq6QI5QEAxIeecyL.jpg",
    "provider_name": "Cultpix",
    "provider_id": 692
  },
  {
    "display_priorities": {
      "AT": 46,
      "DE": 83
    },
    "display_priority": 83,
    "logo_path": "/7BVWcGgkBBVpqg7RdoxlhIgb3s4.jpg",
    "provider_name": "Turk On Video Amazon Channel",
    "provider_id": 693
  },
  {
    "display_priorities": {
      "NL": 48
    },
    "display_priority": 48,
    "logo_path": "/jWKX6kO7JqQbqVnu9QtEO6FC85n.jpg",
    "provider_name": "meJane",
    "provider_id": 697
  },
  {
    "display_priorities": {
      "CA": 93,
      "AE": 15,
      "AG": 9,
      "AL": 28,
      "AR": 36,
      "AT": 48,
      "AU": 53,
      "BB": 29,
      "BE": 30,
      "BH": 28,
      "BM": 29,
      "BO": 30,
      "BS": 29,
      "BR": 55,
      "BG": 17,
      "CH": 44,
      "CI": 26,
      "CL": 31,
      "CO": 31,
      "CR": 29,
      "CU": 9,
      "CV": 9,
      "CZ": 24,
      "DE": 85,
      "DK": 37,
      "DO": 29,
      "DZ": 28,
      "EC": 30,
      "EE": 23,
      "EG": 31,
      "ES": 49,
      "FI": 38,
      "FJ": 9,
      "FR": 56,
      "GB": 86,
      "GF": 31,
      "GG": 9,
      "GH": 12,
      "GI": 28,
      "GQ": 12,
      "GR": 19,
      "GT": 29,
      "HK": 41,
      "HN": 29,
      "HR": 36,
      "HU": 24,
      "ID": 32,
      "IE": 36,
      "IN": 51,
      "IQ": 27,
      "IS": 32,
      "IT": 46,
      "JM": 28,
      "JO": 28,
      "JP": 26,
      "KE": 12,
      "KR": 26,
      "KW": 29,
      "LB": 28,
      "LC": 10,
      "LI": 29,
      "LT": 24,
      "LV": 23,
      "LY": 28,
      "MA": 27,
      "MC": 27,
      "MD": 28,
      "MK": 26,
      "MU": 9,
      "MX": 50,
      "MY": 28,
      "MZ": 11,
      "NE": 26,
      "NG": 29,
      "NL": 49,
      "NO": 37,
      "NZ": 33,
      "OM": 28,
      "PA": 30,
      "PE": 31,
      "PF": 9,
      "PH": 27,
      "PK": 9,
      "PL": 30,
      "PS": 27,
      "PT": 30,
      "PY": 29,
      "QA": 28,
      "RO": 19,
      "RS": 29,
      "RU": 27,
      "SA": 31,
      "SC": 10,
      "SE": 39,
      "SG": 28,
      "SN": 12,
      "SK": 39,
      "SM": 29,
      "SV": 29,
      "TC": 9,
      "TH": 26,
      "TN": 27,
      "TR": 22,
      "TT": 9,
      "TW": 41,
      "UG": 11,
      "US": 204,
      "UY": 34,
      "VE": 27,
      "YE": 29,
      "ZA": 25,
      "ZM": 11,
      "TZ": 19
    },
    "display_priority": 25,
    "logo_path": "/4FqTBYsUSZgS9z9UGKgxSDBbtc8.jpg",
    "provider_name": "FilmBox+",
    "provider_id": 701
  },
  {
    "display_priorities": {
      "KE": 11,
      "NG": 28,
      "TZ": 18
    },
    "display_priority": 18,
    "logo_path": "/yiU8I1FrrXJkq4bVpjmoVqBXDuc.jpg",
    "provider_name": "iBAKATV",
    "provider_id": 702
  },
  {
    "display_priorities": {
      "CI": 27,
      "DZ": 29,
      "EG": 32,
      "GH": 13,
      "GQ": 13,
      "KE": 13,
      "LY": 29,
      "MA": 28,
      "MU": 10,
      "MZ": 12,
      "NE": 27,
      "NG": 30,
      "SC": 11,
      "SN": 13,
      "TN": 28,
      "TZ": 10,
      "UG": 12,
      "ZA": 26,
      "ZM": 12
    },
    "display_priority": 26,
    "logo_path": "/r4q36I2Xts1SqhLWd6XsnbSAQJ4.jpg",
    "provider_name": "IROKOTV",
    "provider_id": 704
  },
  {
    "display_priorities": {
      "CA": 96
    },
    "display_priority": 96,
    "logo_path": "/fTc12wQdF3tOgKE16Eai4vjOFPg.jpg",
    "provider_name": "Hollywood Suite Amazon Channel",
    "provider_id": 705
  },
  {
    "display_priorities": {
      "AT": 50
    },
    "display_priority": 50,
    "logo_path": "/iB415dMHBjdTZOOZA06FA1sxDWN.jpg",
    "provider_name": "Moviedome Plus Amazon Channel",
    "provider_id": 706
  },
  {
    "display_priorities": {
      "AT": 51
    },
    "display_priority": 51,
    "logo_path": "/xB6NQNF0vlRlRh4KNPFE1Vlqn1Q.jpg",
    "provider_name": "Aniverse Amazon Channel",
    "provider_id": 707
  },
  {
    "display_priorities": {
      "AT": 52
    },
    "display_priority": 52,
    "logo_path": "/pHJhFw6XXRCTnIKK06MT0m1Vll4.jpg",
    "provider_name": "Superfresh Amazon Channel",
    "provider_id": 708
  },
  {
    "display_priorities": {
      "DE": 91
    },
    "display_priority": 91,
    "logo_path": "/v6JyYgqVCb9rXvyTDQ091WaFtCD.jpg",
    "provider_name": "Comedy Central Plus Amazon Channel",
    "provider_id": 1706
  },
  {
    "display_priorities": {
      "DE": 90
    },
    "display_priority": 90,
    "logo_path": "/1zYseT9ZlMt5sepAAYzRArMme1D.jpg",
    "provider_name": "BluTV Amazon Channel",
    "provider_id": 1707
  },
  {
    "display_priorities": {
      "DE": 93
    },
    "display_priority": 93,
    "logo_path": "/n8jt2T4IUa7lQE7k6xtLV5oQUa9.jpg",
    "provider_name": "GRJNGO Amazon Channel",
    "provider_id": 1709
  },
  {
    "display_priorities": {
      "DE": 95
    },
    "display_priority": 95,
    "logo_path": "/4YpUbpRqJELtahMRXZAYphl0o9S.jpg",
    "provider_name": "MTV Plus Amazon Channel",
    "provider_id": 1711
  },
  {
    "display_priorities": {
      "DE": 98
    },
    "display_priority": 98,
    "logo_path": "/oGFzJgHj9IEc87l8aTRIa6OJMWk.jpg",
    "provider_name": "RTL Passion Amazon Channel",
    "provider_id": 1712
  },
  {
    "display_priorities": {
      "DE": 96
    },
    "display_priority": 96,
    "logo_path": "/u17KW7aRwqTowOSdATZYoG21zZt.jpg",
    "provider_name": "Silverline Amazon Channel",
    "provider_id": 1713
  },
  {
    "display_priorities": {
      "DE": 97
    },
    "display_priority": 97,
    "logo_path": "/tr1ZL0LyNQjYBxQgAC0w8zW2GOC.jpg",
    "provider_name": "Sony AXN Amazon Channel",
    "provider_id": 1714
  },
  {
    "display_priorities": {
      "AE": 17,
      "CI": 28,
      "DZ": 30,
      "EG": 34,
      "GH": 14,
      "GQ": 14,
      "IL": 13,
      "IQ": 13,
      "KE": 14,
      "LB": 14,
      "LY": 30,
      "MA": 29,
      "MU": 12,
      "MZ": 13,
      "NE": 28,
      "NG": 31,
      "PS": 13,
      "SA": 33,
      "SC": 13,
      "SN": 14,
      "TN": 29,
      "TZ": 12,
      "UG": 13,
      "ZA": 27,
      "ZM": 13,
      "BH": 33,
      "JO": 33,
      "KW": 34,
      "OM": 33,
      "QA": 33
    },
    "display_priority": 27,
    "logo_path": "/uurfHKuprPDeKfIs7FYd5lQzw0L.jpg",
    "provider_name": "Shahid VIP",
    "provider_id": 1715
  },
  {
    "display_priorities": {
      "ES": 50
    },
    "display_priority": 50,
    "logo_path": "/wdbbz8SsamximWXn0AR5f5U3fOw.jpg",
    "provider_name": "Acontra Plus",
    "provider_id": 1717
  },
  {
    "display_priorities": {
      "DE": 87
    },
    "display_priority": 87,
    "logo_path": "/xaaR4xSFoLYZPdwGitzySbG3DBe.jpg",
    "provider_name": "AVA VOBB",
    "provider_id": 1722
  },
  {
    "display_priorities": {
      "DE": 88
    },
    "display_priority": 88,
    "logo_path": "/lZ0oqNoDepVrrXtkPncWBuShkJV.jpg",
    "provider_name": "AVA HBZ",
    "provider_id": 1723
  },
  {
    "display_priorities": {
      "CH": 46
    },
    "display_priority": 46,
    "logo_path": "/cfblicwKbhxf5oW75sG4c8nsenh.jpg",
    "provider_name": "AVA CSAL",
    "provider_id": 1724
  },
  {
    "display_priorities": {
      "RS": 28
    },
    "display_priority": 28,
    "logo_path": "/s2xiuAFth0RZAuTasKpxQMFsRQc.jpg",
    "provider_name": "AVA BGB",
    "provider_id": 1725
  },
  {
    "display_priorities": {
      "IT": 48
    },
    "display_priority": 48,
    "logo_path": "/tdJqKoJVBtYSQUe4zIADZOgqsH7.jpg",
    "provider_name": "Infinity Selection Amazon Channel",
    "provider_id": 1726
  },
  {
    "display_priorities": {
      "IT": 49
    },
    "display_priority": 49,
    "logo_path": "/qheMcicpi3qUrA9dNEKqCi4WjOp.jpg",
    "provider_name": "CG Collection Amazon channel",
    "provider_id": 1727
  },
  {
    "display_priorities": {
      "IT": 50
    },
    "display_priority": 50,
    "logo_path": "/7rqYm9lEFgdK6UXCmUAQqmHOLow.jpg",
    "provider_name": "iWonder Full Amazon channel",
    "provider_id": 1728
  },
  {
    "display_priorities": {
      "IT": 51
    },
    "display_priority": 51,
    "logo_path": "/8Dc9zjan5cNnNvbVdMY3CRjtdD6.jpg",
    "provider_name": "Full Action Amazon Channel",
    "provider_id": 1729
  },
  {
    "display_priorities": {
      "IT": 52
    },
    "display_priority": 52,
    "logo_path": "/i7Z8X0N38GRHo2SpaCw7vUdRWej.jpg",
    "provider_name": "Cine Comico Amazon Channel",
    "provider_id": 1730
  },
  {
    "display_priorities": {
      "FR": 60
    },
    "display_priority": 60,
    "logo_path": "/yUjwJAMDmkTmPrQAlR3Kw0jlnVm.jpg",
    "provider_name": "Universcine Amazon Channel",
    "provider_id": 1732
  },
  {
    "display_priorities": {
      "FR": 61
    },
    "display_priority": 61,
    "logo_path": "/9FH7tewU23chp628XZcY66UOovi.jpg",
    "provider_name": "Action Max Amazon Channel",
    "provider_id": 1733
  },
  {
    "display_priorities": {
      "FR": 62
    },
    "display_priority": 62,
    "logo_path": "/xO3KmmiYYol5jNsRZNJ7Sow7eUy.jpg",
    "provider_name": "Filmo Amazon Channel",
    "provider_id": 1734
  },
  {
    "display_priorities": {
      "FR": 63
    },
    "display_priority": 63,
    "logo_path": "/ptn8fYXxAQrlMQAoESOo1dJ2TPV.jpg",
    "provider_name": "Insomnia Amazon Channel",
    "provider_id": 1735
  },
  {
    "display_priorities": {
      "FR": 64
    },
    "display_priority": 64,
    "logo_path": "/k8RBvbxANThdziMeuAH22Z26NPX.jpg",
    "provider_name": "Shadowz Amazon Channel",
    "provider_id": 1736
  },
  {
    "display_priorities": {
      "FR": 65
    },
    "display_priority": 65,
    "logo_path": "/3QaRTn9zLUT3vVLTIomvk3XBFaP.jpg",
    "provider_name": "INA  madelen Amazon Channel",
    "provider_id": 1737
  },
  {
    "display_priorities": {
      "FR": 66
    },
    "display_priority": 66,
    "logo_path": "/bO7nSuzaFq3qRTHHQfvNuDCSOCc.jpg",
    "provider_name": "Benshi Amazon Channel",
    "provider_id": 1738
  },
  {
    "display_priorities": {
      "ES": 55
    },
    "display_priority": 55,
    "logo_path": "/suchZNPjJggZlzSDEMHGGQQU0hc.jpg",
    "provider_name": "Planet Horror Amazon Channel",
    "provider_id": 1740
  },
  {
    "display_priorities": {
      "ES": 56
    },
    "display_priority": 56,
    "logo_path": "/7xyx4YMqN34LLpjzlDJVj2IuNNl.jpg",
    "provider_name": "Dizi Amazon Channel",
    "provider_id": 1741
  },
  {
    "display_priorities": {
      "ES": 57
    },
    "display_priority": 57,
    "logo_path": "/9Z8yJfc0peWhzeC9qQtrNGMBANE.jpg",
    "provider_name": "Acontra Plus Amazon Channel",
    "provider_id": 1742
  },
  {
    "display_priorities": {
      "ES": 58
    },
    "display_priority": 58,
    "logo_path": "/taCDYXG8HUn7UHuBkU11O1yvIXd.jpg",
    "provider_name": "Historia y Actualidad Amazon Channel",
    "provider_id": 1743
  },
  {
    "display_priorities": {
      "GB": 91
    },
    "display_priority": 91,
    "logo_path": "/oiqAiGXWCdURPbkUphljiikGbCc.jpg",
    "provider_name": "Icon Film Amazon Channel",
    "provider_id": 1744
  },
  {
    "display_priorities": {
      "GB": 92
    },
    "display_priority": 92,
    "logo_path": "/qy7Xb74ewuL2QRfdaA97yfyz3Lr.jpg",
    "provider_name": "Curzon Amazon Channel",
    "provider_id": 1745
  },
  {
    "display_priorities": {
      "GB": 93
    },
    "display_priority": 93,
    "logo_path": "/3jKNxpK1q6ogtoCcw0ud8fgwtym.jpg",
    "provider_name": "Hallmark TV Amazon Channel",
    "provider_id": 1746
  },
  {
    "display_priorities": {
      "GB": 94
    },
    "display_priority": 94,
    "logo_path": "/1gQQZ1J88vksp0QxoFQ6PLnCHic.jpg",
    "provider_name": "Studiocanal Presents Amazon Channel",
    "provider_id": 1747
  },
  {
    "display_priorities": {
      "AE": 18,
      "BH": 29,
      "DZ": 31,
      "EG": 35,
      "IQ": 28,
      "JO": 29,
      "KW": 30,
      "LB": 29,
      "LY": 31,
      "MA": 30,
      "OM": 29,
      "PS": 28,
      "QA": 29,
      "SA": 34,
      "TN": 30,
      "YE": 30,
      "TR": 35
    },
    "display_priority": 30,
    "logo_path": "/eXxCDzaz4F7bkkgkZ8p6AbNQ8Dk.jpg",
    "provider_name": "TOD",
    "provider_id": 1750
  },
  {
    "display_priorities": {
      "CH": 47,
      "AT": 62,
      "DE": 124
    },
    "display_priority": 124,
    "logo_path": "/vbqsW89lc8h7nrd5jswf8LjPUtO.jpg",
    "provider_name": "filmingo",
    "provider_id": 1756
  },
  {
    "display_priorities": {
      "AT": 53,
      "DE": 103,
      "GB": 98
    },
    "display_priority": 98,
    "logo_path": "/cyZ2scye65pYTHCG0azRpAlj2X.jpg",
    "provider_name": "Realeyz Amazon Channel",
    "provider_id": 1757
  },
  {
    "display_priorities": {
      "US": 208
    },
    "display_priority": 208,
    "logo_path": "/eZVDDqlBHpuk8GELhQchRIkA6th.jpg",
    "provider_name": "Bet+",
    "provider_id": 1759
  },
  {
    "display_priorities": {
      "DE": 107
    },
    "display_priority": 107,
    "logo_path": "/qlUBOb1hWjNQVTcL99bznrYZEfA.jpg",
    "provider_name": "Yorck on Demand",
    "provider_id": 1764
  },
  {
    "display_priorities": {
      "US": 214
    },
    "display_priority": 214,
    "logo_path": "/iJBj5b4HYbjEPiwKJWQfcRr3nP2.jpg",
    "provider_name": "ESPN Plus",
    "provider_id": 1768
  },
  {
    "display_priorities": {
      "US": 216
    },
    "display_priority": 216,
    "logo_path": "/vfUoancVnPRAxj8iBqhllanF0Eq.jpg",
    "provider_name": "Paramount+ Showtime",
    "provider_id": 1770
  },
  {
    "display_priorities": {
      "DE": 108,
      "GB": 101,
      "US": 217,
      "AE": 19,
      "AD": 26,
      "AL": 29,
      "AR": 37,
      "AG": 11,
      "BB": 30,
      "BE": 31,
      "AT": 54,
      "BA": 29,
      "AU": 54,
      "BH": 30,
      "BR": 56,
      "BS": 30,
      "BM": 30,
      "BO": 31,
      "CH": 48,
      "CI": 29,
      "CA": 110,
      "BG": 19,
      "CL": 33,
      "CR": 30,
      "CV": 11,
      "CO": 33,
      "CZ": 25,
      "DK": 41,
      "DO": 33,
      "EE": 25,
      "ES": 63,
      "EC": 31,
      "DZ": 32,
      "EG": 36,
      "FJ": 11,
      "FI": 41,
      "GF": 32,
      "FR": 74,
      "GG": 10,
      "GH": 15,
      "GQ": 15,
      "GI": 29,
      "GT": 30,
      "ID": 33,
      "HR": 39,
      "HU": 25,
      "HN": 30,
      "HK": 42,
      "IL": 27,
      "IS": 34,
      "IE": 38,
      "IN": 54,
      "IQ": 29,
      "JM": 29,
      "IT": 63,
      "JP": 27,
      "KE": 15,
      "JO": 30,
      "LC": 12,
      "KR": 27,
      "LB": 30,
      "KW": 31,
      "LI": 31,
      "MA": 31,
      "LT": 26,
      "LY": 32,
      "MC": 28,
      "LV": 25,
      "MU": 13,
      "MK": 27,
      "MT": 26,
      "MD": 29,
      "MX": 51,
      "MZ": 14,
      "MY": 29,
      "NG": 32,
      "NE": 29,
      "NL": 50,
      "NO": 41,
      "PA": 32,
      "OM": 30,
      "PE": 33,
      "NZ": 34,
      "PF": 11,
      "PS": 29,
      "PL": 31,
      "PH": 28,
      "QA": 30,
      "RO": 20,
      "PT": 31,
      "RS": 30,
      "SC": 14,
      "RU": 28,
      "SA": 35,
      "SE": 43,
      "SI": 32,
      "SN": 15,
      "SG": 29,
      "SV": 30,
      "SM": 31,
      "SK": 41,
      "TC": 11,
      "TT": 13,
      "TR": 23,
      "TH": 27,
      "TN": 31,
      "TZ": 13,
      "UG": 14,
      "UY": 35,
      "TW": 42,
      "ZA": 28,
      "YE": 31,
      "VE": 28,
      "ZM": 14
    },
    "display_priority": 28,
    "logo_path": "/cnIHBy3uLWhHRR7VeWQhK3ZsYP0.jpg",
    "provider_name": "Takflix",
    "provider_id": 1771
  },
  {
    "display_priorities": {
      "DK": 40,
      "FI": 40,
      "NO": 40,
      "SE": 42,
      "NL": 51,
      "PT": 32,
      "BA": 30,
      "BG": 22,
      "HR": 40,
      "RS": 31,
      "SI": 33,
      "AL": 30,
      "CZ": 28,
      "HU": 28,
      "MK": 28,
      "PL": 34,
      "RO": 23,
      "SK": 42,
      "XK": 6,
      "AD": 27,
      "ES": 74
    },
    "display_priority": 6,
    "logo_path": "/iieEQVJIEOSfDj477zG8sSTtr25.jpg",
    "provider_name": "SkyShowtime",
    "provider_id": 1773
  },
  {
    "display_priorities": {
      "AT": 55,
      "DE": 111
    },
    "display_priority": 111,
    "logo_path": "/m6uJSUKWFuZRgRmnqPlJZ08BbGp.jpg",
    "provider_name": "Love and Passion Amazon Channel",
    "provider_id": 1788
  },
  {
    "display_priorities": {
      "AR": 54,
      "BR": 78,
      "CL": 39,
      "CO": 39,
      "DE": 112,
      "EC": 37,
      "DK": 42,
      "FI": 42,
      "ES": 65,
      "GB": 121,
      "FR": 77,
      "IE": 43,
      "IT": 66,
      "MX": 75,
      "NL": 51,
      "PE": 39,
      "NO": 42,
      "SC": 15
    },
    "display_priority": 39,
    "logo_path": "/ytSbyHt45x7igOgC8GVzR7RLJVo.jpg",
    "provider_name": "Lionsgate Plus",
    "provider_id": 1790
  },
  {
    "display_priorities": {
      "GB": 105,
      "US": 223
    },
    "display_priority": 223,
    "logo_path": "/fXGdolQR7QlHgdx2hPCxoVQG8eP.jpg",
    "provider_name": "Klassiki",
    "provider_id": 1793
  },
  {
    "display_priorities": {
      "CA": 112,
      "US": 224
    },
    "display_priority": 224,
    "logo_path": "/x36C6aseF5l4uX99Kpse9dbPwBo.jpg",
    "provider_name": "Starz Amazon Channel",
    "provider_id": 1794
  },
  {
    "display_priorities": {
      "AU": 57,
      "CA": 115,
      "DE": 115,
      "ES": 67,
      "FR": 79,
      "GB": 109,
      "JP": 30,
      "IT": 68,
      "KR": 30,
      "MX": 55,
      "US": 225,
      "BR": 60
    },
    "display_priority": 225,
    "logo_path": "/mShqQVDhHoK7VUbfYG3Un6xE8Mv.jpg",
    "provider_name": "Netflix basic with Ads",
    "provider_id": 1796
  },
  {
    "display_priorities": {
      "DE": 117
    },
    "display_priority": 117,
    "logo_path": "/uSsVDJNPxQHVA1wrn0ecHmrBI9k.jpg",
    "provider_name": "Studiocanal Presents MOVIECULT Amazon Channel",
    "provider_id": 1805
  },
  {
    "display_priorities": {
      "DE": 118
    },
    "display_priority": 118,
    "logo_path": "/SUjtDqbuBONrkI0SQYW7jC0JQa.jpg",
    "provider_name": "Studiocanal Presents ALLSTARS Amazon Channel",
    "provider_id": 1806
  },
  {
    "display_priorities": {
      "US": 230
    },
    "display_priority": 230,
    "logo_path": "/jV7sSPzUYYHHmoATkD9PhFoEZXb.jpg",
    "provider_name": "Cohen Media Amazon Channel",
    "provider_id": 1811
  },
  {
    "display_priorities": {
      "US": 9
    },
    "display_priority": 9,
    "logo_path": "/qNVZUR6koKFlOFdycB0D9cewBEm.jpg",
    "provider_name": "HBO Max Amazon Channel",
    "provider_id": 1825
  },
  {
    "display_priorities": {
      "DE": 123
    },
    "display_priority": 123,
    "logo_path": "/bsDojPyGwNvMTGgCAQAl0LoAKzJ.jpg",
    "provider_name": "Behind the Tree",
    "provider_id": 1829
  },
  {
    "display_priorities": {
      "US": 233
    },
    "display_priority": 233,
    "logo_path": "/wbKHI2d5417yAAY7QestC3qnXyo.jpg",
    "provider_name": "Popflick",
    "provider_id": 1832
  },
  {
    "display_priorities": {
      "ES": 73
    },
    "display_priority": 73,
    "logo_path": "/1xXtux5qcjEcAgrLqvr62bJ2kea.jpg",
    "provider_name": "Tivify",
    "provider_id": 1838
  },
  {
    "display_priorities": {
      "US": 21,
      "CA": 122,
      "NO": 45
    },
    "display_priority": 21,
    "logo_path": "/cN85Wjk0FIFr3z6rbiimz10uWVo.jpg",
    "provider_name": "Britbox Apple TV Channel ",
    "provider_id": 1852
  },
  {
    "display_priorities": {
      "US": 17,
      "AT": 64,
      "AU": 60,
      "BR": 69,
      "CA": 121,
      "DE": 131,
      "FR": 91,
      "GB": 115,
      "IT": 76,
      "MX": 69
    },
    "display_priority": 17,
    "logo_path": "/9pdeflA0P1b8qlkeDA1oLfyvR06.jpg",
    "provider_name": "Paramount Plus Apple TV Channel ",
    "provider_id": 1853
  },
  {
    "display_priorities": {
      "US": 20,
      "AU": 61,
      "CA": 123,
      "IN": 56
    },
    "display_priority": 20,
    "logo_path": "/yFgm7vxwKZ4jfXIlPizlgoba2yi.jpg",
    "provider_name": "AMC Plus Apple TV Channel ",
    "provider_id": 1854
  },
  {
    "display_priorities": {
      "US": 18
    },
    "display_priority": 18,
    "logo_path": "/hB24bAA8Y2ei6pbEGuCNdKUOjxI.jpg",
    "provider_name": "Starz Apple TV Channel",
    "provider_id": 1855
  },
  {
    "display_priorities": {
      "AT": 6
    },
    "display_priority": 6,
    "logo_path": "/3WN3S7D5f41d3RhI2jtVbTehlf2.jpg",
    "provider_name": "Magenta TV",
    "provider_id": 1856
  },
  {
    "display_priorities": {
      "BE": 34
    },
    "display_priority": 34,
    "logo_path": "/dfkvd9l1xYWUMP5t4okULq5QbJt.jpg",
    "provider_name": "Telenet",
    "provider_id": 1857
  },
  {
    "display_priorities": {
      "BR": 73
    },
    "display_priority": 73,
    "logo_path": "/esfuWSTkFr39ETpD9xvb0sduZt7.jpg",
    "provider_name": "Univer Video",
    "provider_id": 1860
  },
  {
    "display_priorities": {
      "BR": 77
    },
    "display_priority": 77,
    "logo_path": "/9ZrEjtXyZfcK1Lfvt3Jr2nrygM4.jpg",
    "provider_name": "Filmow",
    "provider_id": 1861
  },
  {
    "display_priorities": {
      "IT": 77
    },
    "display_priority": 77,
    "logo_path": "/fvBFkNC2tdYC22uFVojzwC9le63.jpg",
    "provider_name": "UAM TV",
    "provider_id": 1862
  },
  {
    "display_priorities": {
      "FR": 95
    },
    "display_priority": 95,
    "logo_path": "/loOaayvNiLnD0zKl70TO2L5vlAL.jpg",
    "provider_name": "Pass Warner Amazon Channel",
    "provider_id": 1870
  },
  {
    "display_priorities": {
      "AR": 52,
      "BO": 34,
      "BR": 76,
      "CL": 37,
      "CA": 129,
      "CO": 37,
      "CR": 34,
      "DO": 34,
      "EC": 35,
      "ES": 78,
      "FR": 96,
      "GB": 118,
      "GT": 34,
      "HN": 34,
      "MX": 74,
      "PE": 37,
      "PA": 35,
      "PY": 33,
      "SV": 34,
      "UY": 36,
      "US": 242,
      "VE": 32
    },
    "display_priority": 32,
    "logo_path": "/nvCfpn94VKJN4ZpkDgoupJWlXqq.jpg",
    "provider_name": "Runtime",
    "provider_id": 1875
  },
  {
    "display_priorities": {
      "FR": 99
    },
    "display_priority": 99,
    "logo_path": "/fFXwNCPKBwX8hi5EwnPBQKsJtBc.jpg",
    "provider_name": "BrutX Amazon Channel",
    "provider_id": 1887
  },
  {
    "display_priorities": {
      "FR": 100
    },
    "display_priority": 100,
    "logo_path": "/3WYKTSwdEPMZKRmJ49Oqx6mxpa2.jpg",
    "provider_name": "Animation Digital Network Amazon Channel",
    "provider_id": 1888
  },
  {
    "display_priorities": {
      "FR": 101
    },
    "display_priority": 101,
    "logo_path": "/hCfry9LLjkiP1psMmUPnk3oGDG.jpg",
    "provider_name": "Universal+ Amazon Channel",
    "provider_id": 1889
  },
  {
    "display_priorities": {
      "DE": 138
    },
    "display_priority": 138,
    "logo_path": "/sdW7y7Q6O46dmq3kHyBcnjNwbR7.jpg",
    "provider_name": "alleskino Amazon Channel",
    "provider_id": 1891
  },
  {
    "display_priorities": {
      "DE": 139
    },
    "display_priority": 139,
    "logo_path": "/puSs8j2SGEcG5PYkViwLpQahV2z.jpg",
    "provider_name": "RTL Crime Amazon Channel",
    "provider_id": 1892
  },
  {
    "display_priorities": {
      "IT": 83
    },
    "display_priority": 83,
    "logo_path": "/rfGuJ8wa86vi3XhhjNkA04QTR2E.jpg",
    "provider_name": "CineAutore Amazon Channel",
    "provider_id": 1894
  },
  {
    "display_priorities": {
      "IT": 84
    },
    "display_priority": 84,
    "logo_path": "/4RG2VVVUHyTAXbz67QJaHnmsEvb.jpg",
    "provider_name": "Anime Generation Amazon Channel",
    "provider_id": 1895
  },
  {
    "display_priorities": {
      "IT": 85
    },
    "display_priority": 85,
    "logo_path": "/e5h5gWdP50rNxHn8K6LQujuuME5.jpg",
    "provider_name": "Raro Video Amazon Channel",
    "provider_id": 1896
  },
  {
    "display_priorities": {
      "IT": 86
    },
    "display_priority": 86,
    "logo_path": "/oiK6bFbaFY5lZtMziTJ5UBE9UNO.jpg",
    "provider_name": "MIDNIGHT FACTORY Amazon Channel",
    "provider_id": 1897
  },
  {
    "display_priorities": {
      "IN": 58
    },
    "display_priority": 58,
    "logo_path": "/tcRSEeMnRxtKHqg7kqF8z5SvUpF.jpg",
    "provider_name": "Amazon miniTV",
    "provider_id": 1898
  },
  {
    "display_priorities": {
      "DE": 140
    },
    "display_priority": 140,
    "logo_path": "/mUowTOqPrVCBnXmVcjKmbFaUdJn.jpg",
    "provider_name": "ARD Plus",
    "provider_id": 1902
  }
]

const list = []
const mapProvider = providers.map((element) => {
    list.push({name: element.provider_name, id: element.provider_id})
return list
})

console.log(list)