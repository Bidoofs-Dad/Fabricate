const sequelize = require('../config/connection');
// const seedStats = require('./statsData');
const seedCharacter = require('./characterData');
const seedUser = require('./userData');
const seedRace = require('./raceData');
const seedClass = require('./classData');
const seedBackground = require('./backgroundData');
const seedMonster = require('./monsterData');
const seedMonster2 = require('./monsterData2');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await seedUser();

    await seedRace();

    await seedClass();

    await seedBackground();

    await seedMonster();

    await seedMonster2();

    await seedCharacter();

    process.exit(0);
  };

  seedDatabase();