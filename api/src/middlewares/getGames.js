const {getVideoGames} = require('../controllers/api/games')
const {getVideoGamesFromdb} = require('../controllers/db/getGamesDb')


const getAllVideogames = async () => {
  const fromApi = await getVideoGames()
  const fromDb = await getVideoGamesFromdb()
  return [...fromApi,...fromDb]
}

module.exports = {getAllVideogames}