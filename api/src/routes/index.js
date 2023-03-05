const { Router } = require('express');
const videoGameRouter = require('./videoGameRouter')
const videoGamesRouter = require('./videoGamesRouter')
const genresRouter = require('./genreRouter')
const platformsRouter = require('./platformsRouter')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/videogame', videoGameRouter)
router.use('/videogames', videoGamesRouter)
router.use('/genres', genresRouter)
router.use('/platforms', platformsRouter)

module.exports = router
