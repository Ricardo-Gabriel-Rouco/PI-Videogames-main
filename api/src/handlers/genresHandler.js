const {listGenres} = require('../controllers/db/getGenres')

const getAllGenres = async(req, res ) =>{
  try {
    let genres = await listGenres()
    if(!genres.length){
      throw new Error('Not Found')
    } else {
      res.status(200).send(genres)
    }
  } catch (error) {
    res.status(400).send(error)
  }
}

module.exports = {
  getAllGenres
}