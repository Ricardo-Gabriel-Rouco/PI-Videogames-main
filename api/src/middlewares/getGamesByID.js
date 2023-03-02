const {getVideoGameById} = require('../controllers/api/gameByID');
const {getGamesByIdDb} = require('../controllers/db/getGamesByIdDb')

const searchById = async (id) => {

  if(isNaN(id)){
    const gamesDb = await getGamesByIdDb(id)
    return gamesDb
  }else {
    const gamesApi = await getVideoGameById(id)
    return gamesApi
  }
}

module.exports = {searchById}