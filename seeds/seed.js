const sequelize = require('../config/connection');
// const seedStats = require('./statsData');
const seedCharacter = require('./characterData');
const seedUser = require('./userData');
const seedRace = require('./raceData');
const seedMonster = require('./monsterData');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await seedUser();

    await seedRace();

    await seedMonster();

    await seedCharacter();

    process.exit(0);
  };

  seedDatabase();