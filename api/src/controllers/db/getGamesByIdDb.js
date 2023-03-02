const { Videogame, Genre } = require('../../db')

const getGamesByIdDb = async (id) =>{
  try {
    const result = await Videogame.findAll({
      where: {
        id: id
      },
      include: {
        model: Genre, 
        attributes:['name'], 
        through: {
          attributes: [] 
        },
      }
    })

    const game = result[0]
    return {
      id: game.id,
      name: game.name,
      description: game.description,
      image: game.image,
      released: game.release,
      rating: game.rating,
      platforms: game.platforms,
      genres: game.genres.map(g => g.name)
    };
  } catch (error) {
    return error
  }
  
  
}

module.exports = {getGamesByIdDb}