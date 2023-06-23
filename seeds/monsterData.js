const { Monster } = require('../models');

const monsterData = [
    {
        name: "Zane",
        beastType: "Humanoid",
        size: "Tiny",
        challengeRating: "1/2",
        alignment: "Chaotic Neutral"
    },
];
const seedMonster = () => Monster.bulkCreate(monsterData);

module.exports = seedMonster;