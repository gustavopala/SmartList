const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
    sequelize.define('Recipe_ingredient', {
        recipe_ingredient_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        quantity: {
            type: DataTypes.FLOAT // Utilizar DataTypes.FLOAT para cantidades fraccionales
        },
        unit: {
            type: DataTypes.STRING // Agregar un campo para la unidad de medida
        }
    });
};

