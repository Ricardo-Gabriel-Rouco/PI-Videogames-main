const { Videogame } = require('../../db')

const getGamesByNameDb = async (name) =>{
  try {
    const result = await Videogame.findAll({
      where: {
        name: name
      }
    })
    const formattedResult = result.map((game) => {
      return {
        id: game.id,
        name: game.name,
        released: game.release,
        rating: game.rating,
        platforms: game.platforms,
        image: game.image,
        genre: game.genres.map((genre) => genre.name),
      };
    });

    return formattedResult;
  } catch (error) {
    return error;
  }
};

module.exports = {getGamesByNameDb}