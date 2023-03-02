const { Genre } = require('../../db')

const listGenres = async () =>{
  try {
    const result = await Genre.findAll()
    return result
  } catch (error) {
    return error
  }
  
  
}

module.exports = {listGenres}