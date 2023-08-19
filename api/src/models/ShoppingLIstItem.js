
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('ShoppingListItem', {
        list_ingredient_id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        quantity: {
          type: DataTypes.FLOAT, // Puedes ajustar el tipo de dato según tus necesidades
          allowNull: false
        },
        unit: {
          type: DataTypes.STRING
        }
      });
}



