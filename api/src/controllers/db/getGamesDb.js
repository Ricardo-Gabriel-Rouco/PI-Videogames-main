const { Videogame, Genre } = require('../../db')
const baseUrl = 'http://localhost:5000/'

const getVideoGamesFromdb = async () => {
  try {
    const result = await Videogame.findAll({
      include: {
        model: Genre,
        attributes: ['name'],
        through: {
          attributes: []
        },
      },
    });

    const formattedResult = result.map((game) => {
      return {
        id: game.id,
        name: game.name,
        released: game.release,
        rating: game.rating,
        platforms: game.platforms,
        image: game.image,
        genre: game.genres.map((genre) => genre.name),
        image: game.image
      };
    });
    return formattedResult;
  } catch (error) {
    return error;
  }
};

module.exports = { getVideoGamesFromdb };