require('dotenv').config();
const {API_KEY} = process.env
const axios = require('axios')

const getAllPlatforms = async() =>{
  const platformsFromApi = await axios.get(`https://api.rawg.io/api/platforms?key=${API_KEY}`)
  return platformsFromApi.data.results.map(p =>{
    return {
      id: p.id,
      name: p.name
    }
  })
}

module.exports = {getAllPlatforms}