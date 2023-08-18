const { DataTypes } = require('sequelize')

module.exports = (Sequelize) => {
  Sequelize.define('ingredient',{
    ingredient_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      nutrition_info: {
        type: DataTypes.JSONB // Puedes usar JSONB para estructura de objetos
      },
      category: {
        type: DataTypes.STRING
      }
  })

}