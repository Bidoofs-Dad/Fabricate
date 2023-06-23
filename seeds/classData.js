const { Class } = require('../models');

const classData = [
    {
        race: "Artificer",
        description: "Masters of invention, artificers use ingenuity and magic to unlock extraordinary capabilities in objects.",
        image: "images/icons/Artficer.png"
    },
    {
        race: "Barbarian",
        description: "Filled with range and love of battle, the Barbarian is a fighter but can also play tank if built to be.",
        image: "images/icons/Barbarian.png"
    },
];
const seedClass = () => Class.bulkCreate(classData);

module.exports = seedClass;