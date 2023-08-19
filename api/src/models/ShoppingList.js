const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('ShoppingList', {
        list_id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        creation_date: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW
        },
        status: {
          type: DataTypes.ENUM('pendiente', 'completada'),
          defaultValue: 'pendiente'
        },
        list_type: {
          type: DataTypes.ENUM('semanal', 'mensual'),
          allowNull: false
        },
        description: {
          type: DataTypes.STRING
        }
      });
}



