const { Monster } = require('../models');

const monsterData = [
    {
        name: "Zane",
        beastType: "Humanoid",
        challengeRating: "1/2",
        alignment: "Chaotic Neutral"
    },
];
const seedMonster = () => Monster.bulkCreate(monsterData);

module.exports = seedMonster;