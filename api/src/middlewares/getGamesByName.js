const {getVideoGameByName} = require('../controllers/api/gameByName');
const {getGamesByNameDb} = require('../controllers/db/getGamesByNameDb')

const searchByName = async (name) => {
  const gamesDb = await getGamesByNameDb(name)
  const gamesApi = await getVideoGameByName(name)
  const result = [...gamesDb, ...gamesApi]
  const formattedResult = result.map((game) => {
    return {
      id: game.id,
      name: game.name,
      released: game.release,
      rating: game.rating,
      platforms: game.platforms,
      image: game.image,
      genre: game.genre.map((genre) => genre.name),
    };
  });
  return formattedResult
}

module.exports = {searchByName}