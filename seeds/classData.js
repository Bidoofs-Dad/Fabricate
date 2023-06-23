const { Class } = require('../models');

const classData = [
    {
        class: "Artificer",
        description: "Masters of invention, artificers use ingenuity and magic to unlock extraordinary capabilities in objects.",
        image: "images/icons/Artficer.png",
    },
    {
        class: "Barbarian",
        description: "Filled with range and love of battle, the Barbarian is a fighter but can also play tank if built to be.",
        image: "images/icons/Barbarian.png",
    },
    {
        class: "Bard",
        description: "Poets and Minstrels, people in love with words and tunes, the Bard, inspiring magicians that have a charm and inspire allies.",
        image: "images/icons/Bard.png",
    },
    {
        class: "Cleric",
        description: "Healers and Priests who weild divine magic of the higher power they serve.",
        image: "images/icons/Cleric.png",
    },
    {
        class: "Druid",
        description: "People of the wilderness, Druids can shapeshift on beasts and cast magic mostly attuned to plant-life.",
        image: "images/icons/Druid.png",
    },
    {
        class: "Fighter",
        description: "Fighter is a general class the are the most versatile and can be built into any role they need to fill for a team.",
        image: "images/icons/Fighter.png",
    },
    {
        class: "Monk",
        description: "A master of martial arts, harnessing the power of the body in pursuit of physical and spiritual perfection.",
        image: "images/icons/Monk.png",
    },
    {
        class: "Paladin",
        description: "The warrior of the god/power they serve. Paladins take up a sacred oath to their prospective deity.",
        image: "images/icons/Paladin.png",
    },
    {
        class: "Ranger",
        description: "Warriors of the wilderness, rangers specialize in hunting the monsters that threaten the edges of civilization.",
        image: "images/icons/Ranger.png",
    },
    {
        class: "Rogue",
        description: "Stealthy assassins that love theivery and murder. Amazing sneaking abilites and deals more damage based on sneak attacks and teamates around.",
        image: "images/icons/Rogue.png",
    },
    {
        class: "Sorcerer",
        description: "Sorcerers are spell-casters that gain their power from their bloodline.",
        image: "images/icons/sorcerer.png",
    },
    {
        class: "Warlock",
        description: "Warlocks are spell-casters that receive their powers from making contracts with higher beings.",
        image: "images/icons/Warlock.png",
    },
    {
        class: "Wizard",
        description: "Wizards are spell-casters that have to learn thier magic from scrolls, colleges, and texts.",
        image: "images/icons/Wizard.png",
    },
    
];
const seedClass = () => Class.bulkCreate(classData);

module.exports = seedClass;