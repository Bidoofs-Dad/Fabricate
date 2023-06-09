const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Character extends Model { }


Character.init(
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
        race: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        class: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        background: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        level: {
            type: DataTypes.INTEGER,
            defaultValue: 1
        },
        npc: {
            type: DataTypes.BOOLEAN,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'character',
    }
);

module.exports = Character;
