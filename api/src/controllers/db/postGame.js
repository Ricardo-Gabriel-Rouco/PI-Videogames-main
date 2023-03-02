const {Videogame, Genre, VideogameGenre} = require('../../db')

// realizamos la primer parte que es la creacion de los paramtros que solo van en la tabla de jueguitos
const createVg = async (name, description, release, rating, platforms, genres, image) => {
  const newGame = await Videogame.create({
    name,
    description,
    release,
    rating,
    platforms: platforms,
    image
  })

  let listGenres = await Genre.findAll();
  let genreIds = listGenres.filter((g) => Array.isArray(genres) && genres.includes(g.name)).map((g) => g.id);

  await Promise.all(
    genreIds.map(async (genreId) => {
      await VideogameGenre.create({
        videogameId: newGame.id,
        genreId: genreId
      });
    })
  );

  return newGame;
};




module.exports = {createVg}