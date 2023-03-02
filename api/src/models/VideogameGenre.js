const {DataTypes} = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define('VideogameGenre', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    videogameId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    genreId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    timestamps: false
  });
}