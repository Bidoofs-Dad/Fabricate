const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Spell extends Model { }


Spell.init(
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
        school: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        level: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        damageType: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        castingTime: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        duration: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        range: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        components: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        attackSave: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'spell',
    }
);

module.exports = Spell;