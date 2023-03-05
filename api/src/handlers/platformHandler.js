const {getAllPlatforms} = require('../controllers/api/getPlatforms')

const allPlat = async(req, res) => {
  try {
    let results = await getAllPlatforms()
    if(results){
      res.status(200).send(results)
    }
    else {
      res.status(400).send('Algo salio mal')
    }
  } catch (error) {
    res.status(400).send(error)
  }
}

module.exports = allPlat