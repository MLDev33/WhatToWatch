const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

const API_KEY = process.env.API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const language = "fr-FR" // ou req.params.language;

/**
 * Route pou récupérer les providers des media de type movie
 */
router.get('/get/movie', async (req, res) => {

    const listProviders = []
    const language = "fr-FR" // ou req.params.language;
    fetch(`${BASE_URL}/watch/providers/movie?language=${language}&watch_region=FR&api_key=${API_KEY}`)
    .then(response => response.json())
    .then(async data => {
        console.log("DATA PROVIDER:", data, "length:", data.results.length)
        data.results.map((item) => {
            listProviders.push({
                provider_id: item.provider_id,
                provider_name: item.provider_name,
                provider_logo: item.logo_path,
            })
        })

        // Ajout du fetch des providers pour meia de type TV
        // NOTA : ajout de la fonction à corriger 
        const allProviders = await getTvProviders(listProviders);

        // trie des providers par ordre alphabétique
        allProviders.sort((a, b) => b.provider_name - a.provider_name);

        res.json({results: allProviders, totalProvider: allProviders.length})
        //console.log("Reponse fetch providers movie:", data)
    })
    .catch(err => console.error(err));

})

async function getTvProviders(list) {

    const url = `${BASE_URL}/watch/providers/tv?language=fr-FR&watch_region=FR&api_key=${API_KEY}`;

    console.log("url", url)

    const response = await fetch(url)
    const data = await response.json()

    console.log("DATA TV", data, "lengt tv:", data.results.length)

    const idProvidersSet = new Set();
    
    //récupérer les id de la list des providers des media de type movie
    list.map((item) => {
        idProvidersSet.add(item.provider_id)
    })
    console.log("id list:", idProvidersSet)

    const listTvProviders = data.results.map((item) => {

        if(idProvidersSet.has(item.provider_id)){
            console.log("doublons", item.provider_name)
        }
        else{
            list.push({
                provider_id: item.provider_id,
                provider_name: item.provider_name,
                provider_logo: item.logo_path,
                type: ["tv",]
            })
        }


        // list.push({
        //     provider_id: item.provider_id,
        //     provider_name: item.provider_name,
        //     provider_logo: item.logo_path,
        // })
    })
    
    console.log("lengt tv:", list.length, "DATA ALL", list)
    //return list



    const listProviders = []
    const language = "fr-FR" // ou req.params.language;
    fetch(`${BASE_URL}/watch/providers/tv?language=${language}&watch_region=FR&api_key=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
        console.log("DATA PROVIDER:", data)
        data.results.map((item) => {
            list.push({
                provider_id: item.provider_id,
                provider_name: item.provider_name,
                provider_logo: item.logo_path,
            })
        })

        // trie des providers par ordre alphabétique
        listProviders.sort((a, b) => b.provider_name - a.provider_name);

        console.log("Reponse fetch providers tv:",  listProviders)
        return({results: listProviders, totalProvider: listProviders.length})
       
    })
    .catch(err => console.error(err));

}

module.exports = router;