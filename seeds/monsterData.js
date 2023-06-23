const { Monster } = require('../models');

const monsterData = [

    {
        name: "Aarakocra",
        beastType: "Humanoid",
        size: "Medium",
        challengeRating: "1/4",
        alignment: "Chaotic Good"
    },
    {
        name: "Abjurer Wizard",
        beastType: "Humanoid",
        size: "Medium",
        challengeRating: "9",
        alignment: "Any"
    },
    {
        name: "Aboleth",
        beastType: "Aberration",
        size: "Large",
        challengeRating: "10",
        alignment: "Lawful Evil"
    },
    {
        name: "Aboleth Spawn",
        beastType: "Aberration",
        size: "Medium",
        challengeRating: "5",
        alignment: "Lawful Evil"
    },
    {
        name: "Abominable Yeti",
        beastType: "Monstrosity",
        size: "Huge",
        challengeRating: "9",
        alignment: "Chaotic Evil"
    },
    {
        name: "Abyssal Chicken",
        beastType: "Fiend",
        size: "Tiny",
        challengeRating: "1/4",
        alignment: "Chaotic Evil"
    },
    {
        name: "Abyssal Wretch",
        beastType: "Fiend",
        size: "Medium",
        challengeRating: "1/4",
        alignment: "Chaotic Evil"
    },
    {
        name: "Acererak",
        beastType: "Undead",
        size: "Medium",
        challengeRating: "23",
        alignment: "Neutral Evil"
    },
    {
        name: "Acolyte",
        beastType: "Humanoid",
        size: "Medium",
        challengeRating: "1/4",
        alignment: "Any"
    },
    {
        name: "Adult Amethyst Dragon",
        beastType: "Dragon",
        size: "Huge",
        challengeRating: "16",
        alignment: "Neutral"
    },
    {
        name: "Adult Black Dragon",
        beastType: "Dragon",
        size: "Huge",
        challengeRating: "14",
        alignment: "Chaotic Evil"
    },
    {
        name: "Adult Blue Dracolich",
        beastType: "Undead",
        size: "Huge",
        challengeRating: "17",
        alignment: "Lawful Evil"
    },
    {
        name: "Adult Blue Dragon",
        beastType: "Dragon",
        size: "Huge",
        challengeRating: "16",
        alignment: "Lawful Evil"
    },
    {
        name: "Adult Brass Dragon",
        beastType: "Dragon",
        size: "Huge",
        challengeRating: "13",
        alignment: "Chaotic Good"
    },
    {
        name: "Adult Bronze Dragon",
        beastType: "Dragon",
        size: "Huge",
        challengeRating: "15",
        alignment: "Lawful Good"
    },
    {
        name: "Adult Copper Dragon",
        beastType: "Dragon",
        size: "Huge",
        challengeRating: "14",
        alignment: "Chaotic Good"
    },
    {
        name: "Adult Crystal Dragon",
        beastType: "Dragon",
        size: "Huge",
        challengeRating: "12",
        alignment: "Chaotic Neutral"
    },
    {
        name: "Adult Deep Dragon",
        beastType: "Dragon",
        size: "Huge",
        challengeRating: "11",
        alignment: "Neutral Evil"
    },
    {
        name: "Adult Emerald Dragon",
        beastType: "Dragon",
        size: "Huge",
        challengeRating: "14",
        alignment: "Lawful Neutral"
    },
    {
        name: "Adult Gold Dragon",
        beastType: "Dragon",
        size: "Huge",
        challengeRating: "17",
        alignment: "Lawful Good"
    },
    {
        name: "Adult Green Dragon",
        beastType: "Dragon",
        size: "Huge",
        challengeRating: "15",
        alignment: "Lawful Evil"
    },
    {
        name: "Adult Kruthik",
        beastType: "Monstrosity",
        size: "Medium",
        challengeRating: "2",
        alignment: "Unaligned"
    },
    {
        name: "Adult Lunar Dragon",
        beastType: "Dragon",
        size: "Huge",
        challengeRating: "13",
        alignment: "Neutral Evil"
    },
    {
        name: "Adult Moonstone Dragon",
        beastType: "Dragon",
        size: "Huge",
        challengeRating: "15",
        alignment: "Neutral"
    },
    {
        name: "Adult Oblex",
        beastType: "Ooze",
        size: "Medium",
        challengeRating: "5",
        alignment: "Lawful Evil"
    },
    {
        name: "Adult Red Dracolich",
        beastType: "Undead",
        size: "Huge",
        challengeRating: "17",
        alignment: "Chaotic Evil"
    },
    {
        name: "Adult Red Dragon",
        beastType: "Dragon",
        size: "Huge",
        challengeRating: "17",
        alignment: "Chaotic Evil"
    },
    {
        name: "Adult Sapphire Dragon",
        beastType: "Dragon",
        size: "Huge",
        challengeRating: "15",
        alignment: "Lawful Neutral"
    },
    {
        name: "Adult Silver Dragon",
        beastType: "Dragon",
        size: "Huge",
        challengeRating: "16",
        alignment: "Lawful Good"
    },
    {
        name: "Adult Solar Dragon",
        beastType: "Dragon",
        size: "Huge",
        challengeRating: "14",
        alignment: "Neutral"
    },
    {
        name: "Adult Topaz Dragon",
        beastType: "Dragon",
        size: "Huge",
        challengeRating: "13",
        alignment: "Chaotic Neutral"
    },
    {
        name: "Adult White Dragon",
        beastType: "Dragon",
        size: "Huge",
        challengeRating: "13",
        alignment: "Chaotic Evil"
    },
    {
        name: "Aeorian Absorber",
        beastType: "Monstrosity",
        size: "Large",
        challengeRating: "10",
        alignment: "Neutral Evil"
    },
    {
        name: "Aeorian Nullifier",
        beastType: "Monstrosity",
        size: "Large",
        challengeRating: "12",
        alignment: "Neutral Evil"
    },
    {
        name: "Aeorian Reserver",
        beastType: "Monstrosity",
        size: "Large",
        challengeRating: "8",
        alignment: "Lawful Evil"
    },
    {
        name: "Air Elemental",
        beastType: "Elemental",
        size: "Large",
        challengeRating: "5",
        alignment: "Neutral"
    },
    {
        name: "Alhoon",
        beastType: "Undead",
        size: "Medium",
        challengeRating: "10",
        alignment: "Any Evil"
    },
    {
        name: "Alkilith",
        beastType: "Fiend",
        size: "Medium",
        challengeRating: "11",
        alignment: "Chaotic Evil"
    },
    {
        name: "Allip",
        beastType: "Undead",
        size: "Medium",
        challengeRating: "5",
        alignment: "Neutral Evil"
    },
    {
        name: "Allosaurus",
        beastType: "Beast",
        size: "Large",
        challengeRating: "2",
        alignment: "Unaligned"
    },
    {
        name: "Ambush Drake",
        beastType: "Dragon",
        size: "Medium",
        challengeRating: "1/2",
        alignment: "Unaligned"
    },
    {
        name: "Amethyst Dragon Wyrmling",
        beastType: "Dragon",
        size: "Medium",
        challengeRating: "4",
        alignment: "Neutral"
    },
    {
        name: "Amethyst Greatwyrm",
        beastType: "Dragon",
        size: "Gargantuan",
        challengeRating: "26",
        alignment: "Neutral"
    },
    {
        name: "Amnizu",
        beastType: "Fiend",
        size: "Medium",
        challengeRating: "18",
        alignment: "Lawful Evil"
    },
    {
        name: "Ancient Amethyst Dragon",
        beastType: "Dragon",
        size: "Gargantuan",
        challengeRating: "23",
        alignment: "Neutral"
    },
    {
        name: "Ancient Black Dragon",
        beastType: "Dragon",
        size: "Gargantuan",
        challengeRating: "21",
        alignment: "Chaotic Evil"
    },
    {
        name: "Ancient Blue Dragon",
        beastType: "Dragon",
        size: "Gargantuan",
        challengeRating: "23",
        alignment: "Lawful Evil"
    },
    {
        name: "Ancient Brass Dragon",
        beastType: "Dragon",
        size: "Gargantuan",
        challengeRating: "20",
        alignment: "Chaotic Good"
    },
    {
        name: "Ancient Bronze Dragon",
        beastType: "Dragon",
        size: "Gargantuan",
        challengeRating: "22",
        alignment: "Lawful Good"
    },
    {
        name: "Ancient Copper Dragon",
        beastType: "Dragon",
        size: "Gargantuan",
        challengeRating: "21",
        alignment: "Chaotic Good"
    },
    {
        name: "Ancient Crystal Dragon",
        beastType: "Dragon",
        size: "Gargantuan",
        challengeRating: "19",
        alignment: "Chaotic Neutral"
    },
    {
        name: "Ancient Deep Crow",
        beastType: "Monstrosity",
        size: "Huge",
        challengeRating: "15",
        alignment: "Unaligned"
    },
    {
        name: "Ancient Deep Dragon",
        beastType: "Dragon",
        size: "Gargantuan",
        challengeRating: "18",
        alignment: "Neutral Evil"
    },
    {
        name: "Ancient Dragon Turtle",
        beastType: "Dragon",
        size: "Gargantuan",
        challengeRating: "24",
        alignment: "Neutral"
    },
    {
        name: "Ancient Emerald Dragon",
        beastType: "Dragon",
        size: "Gargantuan",
        challengeRating: "21",
        alignment: "Lawful Neutral"
    },
    {
        name: "Ancient Gold Dragon",
        beastType: "Dragon",
        size: "Gargantuan",
        challengeRating: "24",
        alignment: "Lawful Good"
    },
    {
        name: "Ancient Green Dragon",
        beastType: "Dragon",
        size: "Gargantuan",
        challengeRating: "22",
        alignment: "Lawful Evil"
    },
    {
        name: "Ancient Lunar Dragon",
        beastType: "Dragon",
        size: "Gargantuan",
        challengeRating: "19",
        alignment: "Neutral Evil"
    },
    {
        name: "Ancient Moonstone Dragon",
        beastType: "Dragon",
        size: "Gargantuan",
        challengeRating: "21",
        alignment: "Neutral"
    },
    {
        name: "Ancient Red Dragon",
        beastType: "Dragon",
        size: "Gargantuan",
        challengeRating: "24",
        alignment: "Chaotic Evil"
    },
    {
        name: "Ancient Sapphire Dragon",
        beastType: "Dragon",
        size: "Gargantuan",
        challengeRating: "22",
        alignment: "Lawful Evil"
    },
    {
        name: "Ancient Sea Serpent",
        beastType: "Dragon",
        size: "Gargantuan",
        challengeRating: "14",
        alignment: "Neutral"
    },
    {
        name: "Ancient Silver Dragon",
        beastType: "Dragon",
        size: "Gargantuan",
        challengeRating: "23",
        alignment: "Lawful Good"
    },
    {
        name: "Ancient Solar Dragon",
        beastType: "Dragon",
        size: "Gargantuan",
        challengeRating: "21",
        alignment: "Neutral"
    },
    {
        name: "Ancient Topaz Dragon",
        beastType: "Dragon",
        size: "Gargantuan",
        challengeRating: "20",
        alignment: "Chaotic Neutral"
    },
    {
        name: "Ancient White Dragon",
        beastType: "Dragon",
        size: "Gargantuan",
        challengeRating: "20",
        alignment: "Chaotic Evil"
    },
    {
        name: "Androsphix",
        beastType: "Monstrosity",
        size: "Large",
        challengeRating: "17",
        alignment: "Lawful Neutral"
    },
    {
        name: "Angry Sorrowsworn",
        beastType: "Monstrosity",
        size: "Medium",
        challengeRating: "13",
        alignment: "Neutral Evil"
    },
    {
        name: "Anhkolox",
        beastType: "Undead",
        size: "Huge",
        challengeRating: "9",
        alignment: "Neutral Evil"
    },
    {
        name: "Animated Armor",
        beastType: "Construct",
        size: "Medium",
        challengeRating: "1",
        alignment: "Unaligned"
    },
    {
        name: "Animated Statue",
        beastType: "Construct",
        size: "Medium",
        challengeRating: "12",
        alignment: "Unaligned"
    },
    {
        name: "Animated Tree",
        beastType: "Plant",
        size: "Huge",
        challengeRating: "9",
        alignment: "Unaligned"
    },
    {
        name: "Ankheg",
        beastType: "Monstrosity",
        size: "Large",
        challengeRating: "2",
        alignment: "Unaligned"
    },
    {
        name: "Anklyosaurus",
        beastType: "Beast",
        size: "Huge",
        challengeRating: "3",
        alignment: "Unaligned"
    },
    {
        name: "Annis Hag",
        beastType: "Fey",
        size: "Large",
        challengeRating: "6",
        alignment: "Chaotic Evil"
    },
    {
        name: "Anvilwrought Raptor",
        beastType: "Construct",
        size: "Tiny",
        challengeRating: "1/2",
        alignment: "Unaligned",
    },
    {
        name: "Ape",
        beastType: "Beast",
        size: "Medium",
        challengeRating: "1/2",
        alignment: "Unaligned"
    },
    {
        name: "Aphemia",
        beastType: "Monstrosity",
        size: "Medium",
        challengeRating: "5",
        alignment: "Chaotic Evil"
    },
    {
        name: "Apprentice Wizard",
        beastType: "Humanoid",
        size: "Medium",
        challengeRating: "1/4",
        alignment: "Any"
    },
    {
        name: "Arasta",
        beastType: "Monstrosity",
        size: "Huge",
        challengeRating: "21",
        alignment: "Neutral Evil"
    },
    {
        name: "Arcanaloth",
        beastType: "Fiend",
        size: "Medium",
        challengeRating: "12",
        alignment: "Neutral Evil"
    },
    {
        name: "Archaic",
        beastType: "Celestial",
        size: "Gargantuan",
        challengeRating: "18",
        alignment: "Neutral"
    },
    {
        name: "Archdruid",
        beastType: "Humanoid",
        size: "Medium",
        challengeRating: "12",
        alignment: "Any"
    },
    {
        name: "Archer",
        beastType: "Humanoid",
        size: "Medium",
        challengeRating: "3",
        alignment: "Any"
    },
    {
        name: "Archmage",
        beastType: "Humanoid",
        size: "Medium",
        challengeRating: "12",
        alignment: "Any"
    },
    {
        name: "Arclight Phoenix",
        beastType: "Elemental",
        size: "Medium",
        challengeRating: "12",
        alignment: "Chaotic Neutral"
    },
    {
        name: "Arcturia",
        beastType: "Undead",
        size: "Medium",
        challengeRating: "21",
        alignment: "Any Evil"
    },
    {
        name: "Armanite",
        beastType: "Fiend",
        size: "Large",
        challengeRating: "7",
        alignment: "Chaotic Evil"
    },
    {
        name: "Ash Zombie",
        beastType: "Undead",
        size: "Medium",
        challengeRating: "1/4",
        alignment: "Neutral Evil"
    },
    {
        name: "Ashen Knight",
        beastType: "Elemental",
        size: "Medium",
        challengeRating: "3",
        alignment: "Lawful Evil"
    },
    {
        name: "Ashen Rider",
        beastType: "Celestial",
        size: "Medium",
        challengeRating: "16",
        alignment: "Lawful Evil"
    },
    {
        name: "Aspect of Bahamut",
        beastType: "Dragon",
        size: "Gargantuan",
        challengeRating: "30",
        alignment: "Lawful Good"
    },
    {
        name: "Aspect of Tiamat",
        beastType: "Dragon",
        size: "Gargantuan",
        challengeRating: "30",
        alignment: "Chaotic Evil"
    },
    {
        name: "Assassin",
        beastType: "Humanoid",
        size: "Medium",
        challengeRating: "8",
        alignment: "Any Non-Good"
    },
    {
        name: "Assassin Bug",
        beastType: "Monstrosity",
        size: "Medium",
        challengeRating: "3",
        alignment: "Neutral"
    },
    {
        name: "Assassin Vine",
        beastType: "Plant",
        size: "Large",
        challengeRating: "3",
        alignment: "Unaligned"
    },
    {
        name: "Astral Blight",
        beastType: "Plant",
        size: "Medium",
        challengeRating: "1",
        alignment: "Unaligned"
    },
    {
        name: "Astral Dreadnought",
        beastType: "Monstrosity",
        size: "Gargantuan",
        challengeRating: "21",
        alignment: "Unaligned"
    },
    {
        name: "Atropal",
        beastType: "Undead",
        size: "Huge",
        challengeRating: "13",
        alignment: "Neutral Evil"
    },
    {
        name: "Aurelia",
        beastType: "Celestial",
        size: "Medium",
        challengeRating: "23",
        alignment: "Lawful Good"
    },
    {
        name: "Aurochs",
        beastType: "Beast",
        size: "Large",
        challengeRating: "2",
        alignment: "Unaligned"
    },
    {
        name: "Autognome",
        beastType: "Construct",
        size: "Small",
        challengeRating: "2",
        alignment: "Any"
    },
    {
        name: "Autumn Eladrin",
        beastType: "Fey",
        size: "Medium",
        challengeRating: "10",
        alignment: "Chaotic Neutral"
    },
    {
        name: "Awakened Shrub",
        beastType: "Plant",
        size: "Small",
        challengeRating: "0",
        alignment: "Unaligned"
    },
    {
        name: "Awakened Tree",
        beastType: "Plant",
        size: "Huge",
        challengeRating: "2",
        alignment: "Unaligned"
    },
    {
        name: "Axe Beak",
        beastType: "Beast",
        size: "Large",
        challengeRating: "1/4",
        alignment: "Unaligned"
    },
    {
        name: "Azer",
        beastType: "Elemental",
        size: "Medium",
        challengeRating: "2",
        alignment: "Lawful Neutral"
    },
    {
        name: "B'rohg",
        beastType: "Giant",
        size: "Huge",
        challengeRating: "6",
        alignment: "Any"
    },
    {
        name: "Babau",
        beastType: "Fiend",
        size: "Medium",
        challengeRating: "4",
        alignment: "Chaotic Evil"
    },
    {
        name: "Baboon",
        beastType: "Beast",
        size: "Small",
        challengeRating: "0",
        alignment: "Unaligned"
    },
    {
        name: "Badger",
        beastType: "Beast",
        size: "Tiny",
        challengeRating: "0",
        alignment: "Unaligned"
    },
    {
        name: "Bael",
        beastType: "Fiend",
        size: "Large",
        challengeRating: "19",
        alignment: "Lawful Evil"
    },
    {
        name: "Balhannoth",
        beastType: "Aberration",
        size: "Large",
        challengeRating: "11",
        alignment: "Chaotic Evil"
    },
    {
        name: "Balor",
        beastType: "Fiend",
        size: "Huge",
        challengeRating: "19",
        alignment: "Chaotic Evil"
    },
];
const seedMonster = () => Monster.bulkCreate(monsterData);

module.exports = seedMonster;