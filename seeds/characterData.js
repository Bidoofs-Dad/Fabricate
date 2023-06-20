const { Character } = require('../models');

const characterData = [
    {
        name: "Miguel",
        race: "Khajit",
        characterclass: "Bard",
        background: "Sexy",
        level: 21,
        npc: false,
        strength: 16,
        dexterity: 12,
        constitution: 14,
        intelligence: 9,
        wisdom: 2,
        charisma: 20,
        character_id: 1,
        user_id: 1,
    }
];
const seedCharacter = () => Character.bulkCreate(characterData);

module.exports = seedCharacter;