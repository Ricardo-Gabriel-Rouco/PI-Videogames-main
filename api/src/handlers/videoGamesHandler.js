const {getAllVideogames} = require('../middlewares/getGames')
const {searchByName} = require('../middlewares/getGamesByName')

const getAllVideoGamesHandler =  async(req, res) =>{
  const name = req.body.name

  if(name) {
    try {
      let results = await searchByName(name)
        if(!results.length){
          throw new Error('Not found')
        } else {
          res.status(200).send(results)
        }
    } catch (error) {
      res.status(400).send(error)
    }
  }

  else {
    try {
      let results = await getAllVideogames()
      if(!results.length){
        throw new Error ('Not Found')
      } else {
        res.status(200).send(results)
      }
    } catch (error) {
      res.status(400).send(error)
    }
  }
}

const createVideogamesHandler = async (req, res)=>{
  const {name, description, release, rating, platforms, genres, image} = req.body;
  
  const newVg = await createVideogame(name, description, release, rating, platforms, genres, image || 'https://thumbs.gfycat.com/DescriptiveFluidFrogmouth-size_restricted.gif');
  
  res.status(200).send(newVg)
  
  }

module.exports = {
  getAllVideoGamesHandler, createVideogamesHandler
}