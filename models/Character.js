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
        characterclass: {
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
            defaultValue: false,
        },
        strength: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        dexterity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        constitution: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        intelligence: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        wisdom: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        charisma: {
            type: DataTypes.INTEGER,
            allowNull: false,
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
