const User = require("./User");
const Character = require("./Character");
const Race = require("./Race");
const Class = require("./Class");
// const Stats = require("./Stats");

User.hasMany(Character, {
    foreignKey: 'user_id',
});

Character.belongsTo(User, {
    foreignKey: 'user_id',
});

// Character.hasOne(Stats, {
//     foreignKey: "character_id",
// })

// Stats.belongsTo(Character, {
//     foreignKey: "character_id",
// })

module.exports = { User, Character, Race, Class };
