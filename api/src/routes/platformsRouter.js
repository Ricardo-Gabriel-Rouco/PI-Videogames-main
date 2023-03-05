const {Router} = require('express')

const platformsRouter = Router()
const allPlat = require('../handlers/platformHandler')

platformsRouter.get('/', allPlat)

module.exports = platformsRouter