const { DataTypes } = require('sequelize')

module.exports = (Sequelize) => {
  Sequelize.define('Recipe', {
    recipe_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
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
    country: {
      type: DataTypes.STRING
    },
    main_ingredient: {
      type: DataTypes.STRING
    },
    restrictions: {
      type: DataTypes.STRING
    },
    occasion: {
      type: DataTypes.STRING
    },
    cooking_method:{
      type: DataTypes.STRING
    },
    preparation_time: {
      type: DataTypes.INTEGER

    },
    side_dish: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    difficulty_level: {
      type: DataTypes.ENUM('Easy', 'Medium', 'Hard')
    },
    servings: {
      type: DataTypes.INTEGER
    },
    estimated_nutrition: {
      type: DataTypes.JSONB // Puedes usar JSONB para estructura de objetos
    }
  })

}
