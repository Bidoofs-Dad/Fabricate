const { Background } = require('../models');

const bgData = [
    {
        background: "Acolyte",
        description: "Add 2 Language(s) | Add Prof: Insight, Religion | Add Tool Prof: None",
    },
    {
        background: "Anthropologist",
        description: "Add 2 Language(s) | Add Prof: Insight, Religion | Add Tool Prof: None", 
    },
    {
        background: "Archaeologist",
        description: "Add 1 Language(s) | Add Prof: Hirtory, Survival | Add Tool Prof: Choose 1: Cartogropher's Tools or Navigator's Tools",
    },
    {
        background: "Adopted",
        description: "Add 2 Language(s) | Add Prof: Persuasion, Deception, Stealth | Add Tool Prof: None", 
    },
    {
        background: "Caravan Specialist",
        description: "Add 1 Language(s) | Add Prof: Animal Handling, Survival | Add Tool Prof: Land Vehicles",
    },
    {
        background: "Charlatan",
        description: "Add 0 Language(s) | Add Prof: Deception, Sleight of Hand | Add Tool Prof: Disguise Kit, Forgery Kit", 
    },
    {
        background: "City Watch",
        description: "Add 2 Language(s) | Add Prof: Athletics, Insight | Add Tool Prof: None",
    },
    {
        background: "Clan Crafter",
        description: "Add 1 Language(s) | Add Prof: History, Insight | Add Tool Prof: Artisan's Tools", 
    },
    {
        background: "Courtier",
        description: "Add 2 Language(s) | Add Prof: Persuasion, Insight | Add Tool Prof: None",
    },
    {
        background: "Criminal",
        description: "Add 0 Language(s) | Add Prof: Deception, Stealth | Add Tool Prof: Gaming Set, Theives' Tools", 
    },
    {
        background: "Entertainer",
        description: "Add 0 Language(s) | Add Prof: Acrobatics, Performance | Add Tool Prof: Disguise Kit, 1x Musical Instrument",
    },
    {
        background: "Faction Agent",
        description: "Add 2 Language(s) | Add Prof: Insight and 1x Any Other | Add Tool Prof: None", 
    },
    {
        background: "Far Traveler",
        description: "Add 1 Language(s) | Add Prof: Insight, Perception | Add Tool Prof: Gaming Set, 1x Musical Instrument",
    },
    {
        background: "Folk Hero",
        description: "Add 0 Language(s) | Add Prof: Animal Handling, Survival | Add Tool Prof: 1x Any Tool, Land Vehicels", 
    },
    {
        background: "Gladiator",
        description: "Add 0 Language(s) | Add Prof: Acrobatics, Performance | Add Tool Prof: Disguise Kit, 1x Unusual Weapon",
    },
    {
        background: "Guild Artisan",
        description: "Add 1 Language(s) | Add Prof: Insight, Persuasion | Add Tool Prof: 1x Any Tool", 
    },
    {
        background: "Guild Merchant",
        description: "Add 1 Language(s) | Add Prof: Insight, Persuasion | Add Tool Prof: Navigator's Tools",
    },
    {
        background: "Harborfolk",
        description: "Add 0 Language(s) | Add Prof: Athletics, Sleight of Hand | Add Tool Prof: Gaming Set, Water Vehicles", 
    },
    {
        background: "Haunted One",
        description: "Add 1 Exotic Language(s) | Add Prof: Choose 2x: Arcana, Investigation, Religion, Survival | Add Tool Prof: None",
    },
    {
        background: "Hermit",
        description: "Add 1 Language(s) | Add Prof: Medicine, Religion | Add Tool Prof: Herbalism Kit", 
    },
    {
        background: "Inheritor",
        description: "Add 0 Language(s) | Add Prof: Survival, Choose 1x: Arcana, Histor, Religion | Add Tool Prof: Gaming Set, 1x Musical Instrument",
    },
    {
        background: "Inquisitor",
        description: "Add 0 Language(s) | Add Prof: Athletics, Intimadation | Add Tool Prof: 1x Any Tool, Theives' Tools", 
    },
    {
        background: "Investigator",
        description: "Add 2 Language(s) | Add Prof: Investigation, Insight | Add Tool Prof: None",
    },
    {
        background: "Knight",
        description: "Add 1 Language(s) | Add Prof: History, Persuasion | Add Tool Prof: Gaming Set", 
    },
    {
        background: "Mercenary Veteran",
        description: "Add 0 Language(s) | Add Prof: Athletics, Persuasion | Add Tool Prof: Gaming Set, Land Vehicles",
    },
    {
        background: "Noble",
        description: "Add 1 Language(s) | Add Prof: History, Persuasion | Add Tool Prof: Gaming Set", 
    },
    {
        background: "Outlander",
        description: "Add 1 Language(s) | Add Prof: Athletics, Survival | Add Tool Prof: 1x Musical Instrument",
    },
    {
        background: "Pirate",
        description: "Add 0 Language(s) | Add Prof: Athletics, Perception | Add Tool Prof: Navigators Tools, Water Vehicles", 
    },
    {
        background: "Sage",
        description: "Add 2 Language(s) | Add Prof: Arcana, History | Add Tool Prof: None",
    },
    {
        background: "Sailor",
        description: "Add 0 Language(s) | Add Prof: Athletics, Perception | Add Tool Prof: Navigators Tools, Water Vehicles", 
    },
    {
        background: "Soldier",
        description: "Add 0 Language(s) | Add Prof: Athletics, Intimadation | Add Tool Prof: Gaming Set, Land Vehicles",
    },
    {
        background: "Spy",
        description: "Add 0 Language(s) | Add Prof: Deception, Stealth | Add Tool Prof: Gaming Set, Theives Tools", 
    },
    {
        background: "Urban Bounty Hunter",
        description: "Add 0 Language(s) | Add Prof: Choose 2x: Deception, Insight, Persuasion, Stealth | Add Tool Prof: Gaming Set, 1x Musical Instrument, Theives Tools",
    },
    {
        background: "Urchin",
        description: "Add 0 Language(s) | Add Prof: Sleight of Hand, Stealth | Add Tool Prof: Disguise Kit, Theives Tools", 
    },
];
const seedBackground = () => Background.bulkCreate(bgData);

module.exports = seedBackground;