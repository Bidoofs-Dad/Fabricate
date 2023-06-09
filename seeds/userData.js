const { User } = require('../models');

const userData = [
    {
        email: "poop123@gmail.com",
        password: "IlovePoo",
    }
];
const User = () => User.bulkCreate(userData);

module.exports = User;