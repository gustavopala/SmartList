const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('UserSelection', {
        selection_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          number_of_people: {
            type: DataTypes.INTEGER,
            defaultValue: 1
          },
          rating: {
            type: DataTypes.INTEGER // Puedes ajustar el tipo de dato según tus necesidades
          },
          comments: {
            type: DataTypes.STRING // Puedes ajustar el tipo de dato según tus necesidades
          }
    }
    )
}