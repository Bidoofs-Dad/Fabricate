const { User } = require('../models');

const userData = [
    {
        email: "poop123@gmail.com",
        password: "IlovePoo",
    }
];
const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;