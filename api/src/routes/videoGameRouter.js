const {Router} = require('express')

const videoGameRouter = Router()
const {searchGameId} = require('../handlers/videoGameHandler')

videoGameRouter.get('/:id', searchGameId)

module.exports = videoGameRouter