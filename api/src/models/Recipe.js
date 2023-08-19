const { DataTypes } = require('sequelize')

module.exports = (Sequelize) => {
  Sequelize.define('Recipe',{
    recipe_id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name:{
      type: DataTypes.STRING,
      allowNull: false
    },
    instructions: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    category: {
      type: DataTypes.STRING
    },
    preparation_time: {
      type: DataTypes.INTEGER
      
    },
    difficulty_level: {
      type: DataTypes.ENUM('Fácil', 'Moderado', 'Difícil')
    },
    servings: {
      type: DataTypes.INTEGER
    },
    estimated_nutrition: {
      type: DataTypes.JSONB // Puedes usar JSONB para estructura de objetos
    }
  })

}
