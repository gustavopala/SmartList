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
    selection_name: {
      type: DataTypes.STRING, // Agregamos un campo para el nombre de la selección
      allowNull: false
    },
    recipes: {
      type: DataTypes.JSON, // Utilizamos JSON para almacenar los IDs de las recetas
      allowNull: false
    }
  }
  )
}