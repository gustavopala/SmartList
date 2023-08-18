const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('recipe_ingredient', {
        recipe_ingredient_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        quantity: {
            type: DataTypes.INTEGER
        }
    })
}

