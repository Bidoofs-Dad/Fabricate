const sequelize = require('../config/connection');
// const seedStats = require('./statsData');
const seedCharacter = require('./characterData');
const seedUser = require('./userData');
const seedRace = require('./raceData');
const seedMonster = require('./monsterData');
const seedMonster2 = require('./monsterData2');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await seedUser();

    await seedRace();

    await seedMonster();

    await seedMonster2();

    await seedCharacter();

    process.exit(0);
  };

  seedDatabase();