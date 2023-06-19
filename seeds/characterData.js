const { Character } = require('../models');

const characterData = [
    {
        name: "Miguel",
        race: "Khajit",
        characterclass: "Bard",
        background: "Sexy",
        level: 21,
        npc: true,
        user_id: 1,
    }
];
const seedCharacter = () => Character.bulkCreate(characterData);

module.exports = seedCharacter;