const { Race } = require('../models');

const RaceData = [
    {
    }
];
const seedRace = () => Race.bulkCreate(RaceData);

module.exports = seedRace;