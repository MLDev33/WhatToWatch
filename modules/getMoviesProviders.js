const getMoviesProviders = async (id, BASE_URL, API_KEY) => {
  //récupérer les infos des provider
  const urlProviders = fetch(`${BASE_URL}/movie/${id.toString()}/watch/providers&api_key=${API_KEY}`)
  const response = await fetch(urlProviders)
  const data = await response.json()
  console.log("data:", data)
  if(data){
    const listProviders = await data.results.map((plateform) => {
      return {
          id: plateform.provider_id,
          nom: plateform.provider_name,
          logo: plateform.logo_path
      }
  })
  const watchLink = data.results?.FR?.link != undefined ? data.results?.FR?.link : '';
  return { listProviders, watchLink }
  }
  else {
   const watchLink = "N/A";
    const listProviders= "N/A";
    return { listProviders, watchLink }
  }
}

  module.exports = { getMoviesProviders }