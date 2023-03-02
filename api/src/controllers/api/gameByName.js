const axios = require('axios')
require('dotenv').config();
const {API_KEY} = process.env

const getVideoGameByName = async (name) => {
  // uso let porque tengo que reasignar el array
  let dataGame = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&search=${name}`)
  return dataGame.data.results.map(g => {
    return {
      id: g.id,
      name: g.name,
      released: g.released,
      image: g.background_image,
      rating: g.rating,
      genre: g.genres.map(genre => genre),
      platforms: g.platforms.map(p => p.platform.name),
    }
  })
}

module.exports = {getVideoGameByName}