const {getVideoGameByName} = require('../controllers/api/gameByName');
const {getGamesByNameDb} = require('../controllers/db/getGamesByNameDb')

const searchByName = async (name) => {
  const gamesDb = await getGamesByNameDb(name)
  const gamesApi = await getVideoGameByName(name)
  return [...gamesDb, ...gamesApi]
}

module.exports = {searchByName}