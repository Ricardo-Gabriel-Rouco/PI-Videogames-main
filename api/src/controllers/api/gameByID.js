const axios = require('axios')
require('dotenv').config();
const {API_KEY} = process.env

const getVideoGameById = async (id) => {
  const game = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
  return {  
    id: game.data.id,
    name: game.data.name,
    image: game.data.background_image,
    description: game.data.description,
    release: game.data.release,
    rating: game.data.rating,
    platforms: game.data.platforms.map(p => p.platform.name),
    genres: game.data.genres.map(g => g.name)
  }
}

module.exports = {getVideoGameById}