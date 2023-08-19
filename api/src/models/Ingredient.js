const { DataTypes } = require('sequelize')

module.exports = (Sequelize) => {
  Sequelize.define('Ingredient',{
    ingredient_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      ingredient_description: {
        type: DataTypes.TEXT
      },
      category: {
        type: DataTypes.STRING
      }
  })

}