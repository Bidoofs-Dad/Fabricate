// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');

// class Stats extends Model { }


// Stats.init(
//     {
//         id: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//             primaryKey: true,
//             autoIncrement: true,
//         },
//         strength: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//         },
//         dexterity: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//         },
//         constitution: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//         },
//         intelligence: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//         },
//         wisdom: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//         },
//         charisma: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//         },
//         character_id: {
//             type: DataTypes.INTEGER,
//             references: {
//                 model: 'character',
//                 key: 'id',
//             },
//         },
//     },
//     {
//         sequelize,
//         timestamps: false,
//         freezeTableName: true,
//         underscored: true,
//         modelName: 'stats',
//     }
// );

// module.exports = Stats;
