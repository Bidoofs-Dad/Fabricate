const { User } = require('../models');

const userData = [
    {
        email: "poop123@gmail.com",
        password: "IlovePoo",
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