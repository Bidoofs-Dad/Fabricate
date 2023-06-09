const sequelize = require('../config/connection');
const seedStats = require('./statsData');
const seedCharacter = require('./characterData');
const seedUser = require('./userData');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
  
    await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });

    await seedStats();

    await seedCharacter();

    await seedUser();
  
    process.exit(0);
  };

  seedDatabase();