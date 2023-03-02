require('dotenv').config();
const {API_KEY} = process.env
const axios = require('axios')

const getVideoGames = async() =>{
  let games = []
  for (let i = 1; i <= 5; i++) {
    let dataFromApi = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=${i}`)
    games = games.concat(dataFromApi.data.results)
  }
  let gamesData =  games.map(g => {
    return {
      id: g.id,
      name: g.name,
      released: g.released,
      rating: g.rating,
      platforms: g.platforms.map(platform => platform.platform.name),
      image: g.background_image,
      genre: g.genres.map(genre => genre.name)
  }
})

  return gamesData
}

module.exports = {getVideoGames}