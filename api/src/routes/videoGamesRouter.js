const {Router} = require('express')

const router = Router()
const {getAllVideoGamesHandler, createVideogamesHandler} = require('../handlers/videoGamesHandler')

router.get('/', getAllVideoGamesHandler)

router.get('/:name', getAllVideoGamesHandler)

router.post('/', createVideogamesHandler)


module.exports = router