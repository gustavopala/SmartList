const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id:{
      type:DataTypes.UUID,
      primaryKey:true,
      defaultValue:DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    description:{
      type:DataTypes.STRING,
      allowNull: false,
    },
    parent_platforms:{
      type:DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    background_image:{
      type:DataTypes.STRING,
      allowNull: false,
    },
    background_image_additional:{
      type:DataTypes.STRING,
      allowNull: false,
    },
    released:{
      type:DataTypes.DATEONLY,
      allowNull: false,
    },
    rating: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        max: 5,
        isDecimal: true,
        min: 0,
      }
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    }
  },
  {timestamps:false}
  );
};
