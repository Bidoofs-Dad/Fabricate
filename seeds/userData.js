const { User } = require('../models');

const userData = [
    {
        email: "test@test.com",
        password: "password",
    }
];
const seedUser = () => User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedUser;

// await User.bulkCreate(userData, {
//     individualHooks: true,
//     returning: true,
//   });