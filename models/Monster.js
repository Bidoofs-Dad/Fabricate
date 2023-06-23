const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Monster extends Model { }


Monster.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        beastType: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        challengeRating: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        alignment: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'monster',
    }
);

module.exports = Monster;