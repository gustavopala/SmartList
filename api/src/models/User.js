const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('User', {
        user_id : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
            
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
            
        },
        password_hash:{
            type: DataTypes.STRING,
            allowNull: false
        }
    },
        { timestamps: false }
    )
}

