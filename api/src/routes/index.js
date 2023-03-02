const { Router } = require('express');
const {getAllVideogames} = require('../middlewares/getGames')
const {searchByName} = require('../middlewares/getGamesByName')
const {searchById} = require('../middlewares/getGamesByID')
const {listGenres} = require('../controllers/db/getGenres')
const {createVg} = require('../controllers/db/postGame')
const {getAllPlatforms} = require('../controllers/api/getPlatforms')


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
// listado de los primeros 100 videojuegos + db
router.get('/videogames', async (req, res)=>{
  try {
    const results = await getAllVideogames()
    res.status(200).send(results)
  }
  catch (error){
    res.status(400).send(error)
  }
})

// listado de los primeros 15 resultados por nombre de videojueguito
router.get('/videogame', async (req, res) => {
  const {name} = req.query
  console.log(name)
  try {
    let results = await searchByName(name)
    results = results.slice(0,15)
    res.status(200).json(results)
  }
  catch (err) {
    console.log(err)
    res.status(400).json('No existen Videojuegos con ese nombre')
  }
})

// obtener datos del jueguito pero via ID
router.get('/videogames/:id', async (req, res) => {
  const {id} = req.params
  try {
    const results = await searchById(id)
    res.status(200).json(results)
  } catch (error) {
    console.log(error)
    res.status(400).json(error)
  }
})

// agregado de juegos y relacionado con generos
router.post('/videogames', async (req, res) =>{
  const { name, description, release, rating, platforms, genres, image} = req.body
  console.log(image)
  const options = {timezone: 'America/Argentina/Buenos_Aires'}
  let date = new Date(release)
  let formatedDate = date.toLocaleString('en-US', options)
  // esto lo hago para que tome la image en formate base64 y pueda ser guardada como una string en la db, sino se debe crear una carpeta aparte y updatearlo mediante un middleware como multer
  const imageData = image ? Buffer.from(image).toString('base64') : null
  try {
    const result = await createVg(name, description, formatedDate, rating, platforms, genres, imageData)
    res.status(201).json(result)
  } catch (error) {
    console.log(error)
    res.status(400).json(error)
  }
})

router.get('/genres', async (req, res) => {
  try {
    const results = await listGenres()
    res.status(200).json(results)
  }
  catch (error){
    res.status(400).json(error)
  }
})

router.get('/platforms', async(req, res) => {
  try {
    const results = await getAllPlatforms()
    res.status(200).json(results)
  } catch (error) {
    res.status(400).json(error)
  }
})



module.exports = router;
