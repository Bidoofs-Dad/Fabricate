const { Stats } = require('../models');

const statData = [
    {
        strength: 16,
        dexterity: 12,
        constitution: 14,
        intelligence: 9,
        wisdom: 2,
        charisma: 20,
        character_id: 1,
    }
];
const seedStats = () => Stats.bulkCreate(statData);

module.exports = seedStats;
