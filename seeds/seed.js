const sequelize = require('../config/connection');
const seedStats = require('./statsData');
const seedCharacter = require('./characterData');
const seedUser = require('./userData');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await seedUser();

    await seedCharacter();

    await seedStats();
  
    process.exit(0);
  };

  seedDatabase();