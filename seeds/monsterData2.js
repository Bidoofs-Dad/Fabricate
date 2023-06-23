const { Monster } = require('../models');

const monsterData2 = [
    {
        name: "Banderhobb",
        beastType: "Monstrosity",
        size: "Large",
        challengeRating: "5",
        alignment: "Neutral Evil"
    },
    {
        name: "Bandit",
        beastType: "Humanoid",
        size: "Medium",
        challengeRating: "1/8",
        alignment: "Any Non-Lawful"
    },
    {
        name: "Bandit Captain",
        beastType: "Humanoid",
        size: "Medium",
        challengeRating: "2",
        alignment: "Any Non-Lawful"
    },
    {
        name: "Banshee",
        beastType: "Undead",
        size: "Medium",
        challengeRating: "4",
        alignment: "Chaotic Evil"
    },
    {
        name: "Baphomet",
        beastType: "Fiend",
        size: "Huge",
        challengeRating: "23",
        alignment: "Chaotic Evil"
    },
    {
        name: "Barbed Devil",
        beastType: "Fiend",
        size: "Medium",
        challengeRating: "5",
        alignment: "Lawful Evil"
    },
    {
        name: "Bard",
        beastType: "Humanoid",
        size: "Medium",
        challengeRating: "2",
        alignment: "Any"
    },
    {
        name: "Barghest",
        beastType: "Fiend",
        size: "Large",
        challengeRating: "4",
        alignment: "Neutral Evil"
    },
    {
        name: "Barlgura",
        beastType: "Fiend",
        size: "Large",
        challengeRating: "5",
        alignment: "Chaotic Evil"
    },
    {
        name: "Basilisk",
        beastType: "Monstrosity",
        size: "Meduim",
        challengeRating: "3",
        alignment: "Unaligned"
    },
    {
        name: "Bat",
        beastType: "BEast",
        size: "Tiny",
        challengeRating: "0",
        alignment: "Unaligned"
    },
    {
        name: "Battleforce Angel",
        beastType: "Celestial",
        size: "Medium",
        challengeRating: "5",
        alignment: "Lawful Good"
    },
    {
        name: "Bearded Devil",
        beastType: "Fiend",
        size: "Medium",
        challengeRating: "3",
        alignment: "Lawful Evil"
    },
    {
        name: "Behir",
        beastType: "Monstrosity",
        size: "Huge",
        challengeRating: "11",
        alignment: "Neutral Evil"
    },
    {
        name: "Beholder",
        beastType: "Aberration",
        size: "Large",
        challengeRating: "13",
        alignment: "Lawful Evil"
    },
    {
        name: "Beholder Zombie",
        beastType: "Undead",
        size: "Large",
        challengeRating: "5",
        alignment: "Neutral Evil"
    },
    {
        name: "Bel",
        beastType: "Fiend",
        size: "Large",
        challengeRating: "25",
        alignment: "Lawful Evil"
    },
    {
        name: "Berbalang",
        beastType: "Aberration",
        size: "Medium",
        challengeRating: "2",
        alignment: "Neutral Evil"
    },
    {
        name: "Berserker",
        beastType: "Humanoid",
        size: "Medium",
        challengeRating: "2",
        alignment: "Any"
    },
    {
        name: "Bheur Hag",
        beastType: "Fey",
        size: "Medium",
        challengeRating: "7",
        alignment: "Chaotic Evil"
    },
    {
        name: "Biomancer",
        beastType: "Humanoid",
        size: "Medium",
        challengeRating: "10",
        alignment: "Neutral Good"
    },
    {
        name: "Black Abishai",
        beastType: "Fiend",
        size: "Medium",
        challengeRating: "7",
        alignment: "Lawful Evil"
    },
    {
        name: "Black Bear",
        beastType: "Beast",
        size: "Medium",
        challengeRating: "1/2",
        alignment: "Unaligned"
    },
    {
        name: "Black Dragon Wyrmling",
        beastType: "Dragon",
        size: "Medium",
        challengeRating: "2",
        alignment: "Chaotic Evil"
    },
    {
        name: "Black Greatwyrm",
        beastType: "Dragon",
        size: "Gargantuan",
        challengeRating: "27",
        alignment: "Chaotic Evil"
    },
    {
        name: "Black Guard Drake",
        beastType: "Dragon",
        size: "Medium",
        challengeRating: "2",
        alignment: "Unaligned"
    },
    {
        name: "Black Pudding",
        beastType: "Ooze",
        size: "Large",
        challengeRating: "4",
        alignment: "Unaligned"
    },
    {
        name: "Blackguard",
        beastType: "Humanoid",
        size: "Medium",
        challengeRating: "8",
        alignment: "Non-Good Alignment"
    },
    {
        name: "Blink Dog",
        beastType: "Fey",
        size: "Medium",
        challengeRating: "1/4",
        alignment: "Lawful Good"
    },
    {
        name: "Blood Drinker Vampire",
        beastType: "Undead",
        size: "Medium",
        challengeRating: "8",
        alignment: "Lawful Evil"
    },
    {
        name: "Blood Hawk",
        beastType: "Beast",
        size: "Small",
        challengeRating: "1/8",
        alignment: "Unaligned"
    },
    {
        name: "Blood Hunter",
        beastType: "Humanoid",
        size: "Medium",
        challengeRating: "5",
        alignment: "Any"
    },
    {
        name: "Blood Witch",
        beastType: "Humanoid",
        size: "Medium",
        challengeRating: "7",
        alignment: "Chaotic Evil"
    },
    {
        name: "Bloodfray Giant",
        beastType: "Giant",
        size: "Huge0",
        challengeRating: "6",
        alignment: "Chaotic Evil"
    },
    {
        name: "Blue Abishai",
        beastType: "Fiend",
        size: "Medium",
        challengeRating: "17",
        alignment: "Lawful Evil"
    },
    {
        name: "Blue Dragon Wyrmling",
        beastType: "Dragon",
        size: "Medium",
        challengeRating: "3",
        alignment: "Lawful Evil"
    },
    {
        name: "Blue Greatwyrm",
        beastType: "Dragon",
        size: "Gargantuan",
        challengeRating: "27",
        alignment: "Lawful Evil"
    },
    {
        name: "Blue Guard Drake",
        beastType: "Dragon",
        size: "Medium",
        challengeRating: "2",
        alignment: "Unaligned"
    },
    {
        name: "Blue Slaad",
        beastType: "Aberration",
        size: "Large",
        challengeRating: "7",
        alignment: "Chaotic Neutral"
    },
    {
        name: "Boar",
        beastType: "Beast",
        size: "Medium",
        challengeRating: "1/4",
        alignment: "Unaligned"
    },
    {
        name: "Bodak",
        beastType: "Undead",
        size: "Medium",
        challengeRating: "6",
        alignment: "Chaotic Evil"
    },
    {
        name: "Bodytaker Plant",
        beastType: "Plant",
        size: "Huge",
        challengeRating: "7",
        alignment: "Unaligned"
    },
    {
        name: "Boggle",
        beastType: "Fey",
        size: "Small",
        challengeRating: "1/2",
        alignment: "Chaotic Neutral"
    },
    {
        name: "Bone Devil",
        beastType: "Fiend",
        size: "Large",
        challengeRating: "9",
        alignment: "Lawful Evil"
    },
    {
        name: "Bone Knight",
        beastType: "Undead",
        size: "Medium",
        challengeRating: "5",
        alignment: "Any Non-Good"
    },
    {
        name: "Bone Naga",
        beastType: "Undead",
        size: "Large",
        challengeRating: "4",
        alignment: "Lawful Evil"
    },
    {
        name: "Boneclaw",
        beastType: "Undead",
        size: "Large",
        challengeRating: "12",
        alignment: "Chaotic Evil"
    },
    {
        name: "Boneless",
        beastType: "Undead",
        size: "Medium",
        challengeRating: "1",
        alignment: "Unaligned"
    },
    {
        name: "Borborygmos",
        beastType: "Giant",
        size: "Huge",
        challengeRating: "18",
        alignment: "Chaotic Neutral"
    },
    {
        name: "Bore Worm",
        beastType: "Construct",
        size: "Gargantuan",
        challengeRating: "16",
        alignment: "Unaligned"
    },
    {
        name: "Brackish Trudge",
        beastType: "Plant",
        size: "Large",
        challengeRating: "3",
        alignment: "Unaligned"
    },
    {
        name: "Brain in a Jar",
        beastType: "Undead",
        size: "Small",
        challengeRating: "3",
        alignment: "Unaligned"
    },
    {
        name: "Brass Dragon Wyrmling",
        beastType: "Dragon",
        size: "Medium",
        challengeRating: "1",
        alignment: "Chaotic Good"
    },
    {
        name: "Brass Greatwyrm",
        beastType: "Dragon",
        size: "Gargantuan",
        challengeRating: "28",
        alignment: "Lawful Good"
    },
    {
        name: "Braxat",
        beastType: "Giant",
        size: "Huge",
        challengeRating: "9",
        alignment: "Neutral"
    },
    {
        name: "Brigganock",
        beastType: "Fey",
        size: "Tiny",
        challengeRating: "1/8",
        alignment: "Neutral Good"
    },
    {
        name: "Bristled Moorbounder",
        beastType: "Beast",
        size: "Large",
        challengeRating: "3",
        alignment: "Unaligned"
    },
    {
        name: "Brontosaurus",
        beastType: "Beast",
        size: "Gargantuan",
        challengeRating: "5",
        alignment: "Unaligned"
    },
    {
        name: "Bronze Dragon Wyrmling",
        beastType: "Dragon",
        size: "Medium",
        challengeRating: "2",
        alignment: "Lawful Good"
    },
    {
        name: "Bronze Greatwyrm",
        beastType: "Dragon",
        size: "Gargantuan",
        challengeRating: "28",
        alignment: "Lawful Good"
    },
    {
        name: "Bronze Sable",
        beastType: "Construct",
        size: "Medium",
        challengeRating: "1",
        alignment: "Unaligned"
    },
    {
        name: "Bronze Scout",
        beastType: "Construct",
        size: "Medium",
        challengeRating: "1",
        alignment: "Unaligned"
    },
    {
        name: "Brown Bear",
        beastType: "Beast",
        size: "Large",
        challengeRating: "1",
        alignment: "Unaligned"
    },
    {
        name: "Brown Scavver",
        beastType: "Monstrosity",
        size: "Large",
        challengeRating: "4",
        alignment: "Unaligned"
    },
    {
        name: "Bugbear",
        beastType: "Humanoid",
        size: "Medium",
        challengeRating: "1",
        alignment: "Chaotic Evil"
    },
    {
        name: "Bugbear Chief",
        beastType: "Humanoid",
        size: "Medium",
        challengeRating: "3",
        alignment: "Chaotic Evil"
    },
    {
        name: "Bulette",
        beastType: "Monstrosity",
        size: "Large",
        challengeRating: "5",
        alignment: "Unaligned"
    },
    {
        name: "Bulezau",
        beastType: "Fiend",
        size: "Medium",
        challengeRating: "3",
        alignment: "Chaotic Evil"
    },
    {
        name: "Bullywug",
        beastType: "Humanoid",
        size: "Medium",
        challengeRating: "1/4",
        alignment: "Neutral Evil"
    },
    {
        name: "Bullywug Croaker",
        beastType: "Humanoid",
        size: "Medium",
        challengeRating: "2",
        alignment: "Neutral Evil"
    },
    {
        name: "Bullywug Knight",
        beastType: "Humanoid",
        size: "Medium",
        challengeRating: "3",
        alignment: "Lawful Good"
    },
    {
        name: "Bullywug Royal",
        beastType: "Humanoid",
        size: "Humanoid",
        challengeRating: "3",
        alignment: "Any"
    },
    {
        name: "Burrowshark",
        beastType: "Humanoid",
        size: "Medium",
        challengeRating: "4",
        alignment: "Neutral Evil"
    },
    {
        name: "Cackler",
        beastType: "Fiend",
        size: "Small",
        challengeRating: "1/2",
        alignment: "Chaotic Evil"
    },
    {
        name: "Cadaver Collector",
        beastType: "Construct",
        size: "Large",
        challengeRating: "14",
        alignment: "Lawful Evil"
    },
    {
        name: "Cambion",
        beastType: "Fiend",
        size: "Medium",
        challengeRating: "5",
        alignment: "Any Evil"
    },
    {
        name: "Camel",
        beastType: "BEast",
        size: "Large",
        challengeRating: "1/8",
        alignment: "Unaligned"
    },
    {
        name: "Canoloth",
        beastType: "Fiend",
        size: "Medium",
        challengeRating: "8",
        alignment: "Neutral Evil"
    },
    {
        name: "Canopic Golem",
        beastType: "Construct",
        size: "Large",
        challengeRating: "13",
        alignment: "Unaligned"
    },
    {
        name: "Carrion Crawler",
        beastType: "Monstrosity",
        size: "Large",
        challengeRating: "2",
        alignment: "Unaligned"
    },
    {
        name: "Carrion Ogre",
        beastType: "Giant",
        size: "Large",
        challengeRating: "2",
        alignment: "Chaotic Evil"
    },
    {
        name: "Carrion Stalker",
        beastType: "Monstrosity",
        size: "Tiny",
        challengeRating: "3",
        alignment: "Unaligned"
    },
    {
        name: "Carrionette",
        beastType: "Construct",
        size: "Small",
        challengeRating: "1",
        alignment: "Unaligned"
    },
    {
        name: "Cat",
        beastType: "Beast",
        size: "Tiny",
        challengeRating: "0",
        alignment: "Unaligned"
    },
    {
        name: "Catergory 1 Krasis",
        beastType: "Monstrosity",
        size: "Medium",
        challengeRating: "1",
        alignment: "Unaligned"
    },
    {
        name: "Catergory 2 Krasis",
        beastType: "Monstrosity",
        size: "Large",
        challengeRating: "6",
        alignment: "Unaligned"
    },
    {
        name: "Catergory 3 Krasis",
        beastType: "Monstrosity",
        size: "Huge",
        challengeRating: "16",
        alignment: "Unaligned"
    },
    {
        name: "Catoblepas",
        beastType: "Monstrosity",
        size: "Large",
        challengeRating: "5",
        alignment: "Unaligned"
    },
    {
        name: "Cave Badger",
        beastType: "Beast",
        size: "Medium",
        challengeRating: "1/4",
        alignment: "Unaligned"
    },
    {
        name: "Cave Bear",
        beastType: "Beast",
        size: "Medium",
        challengeRating: "2",
        alignment: "Unaligned"
    },
    {
        name: "Cave Fisher",
        beastType: "Monstrosity",
        size: "Medium",
        challengeRating: "3",
        alignment: "Unaligned"
    },
    {
        name: "Centuar",
        beastType: "Monstrosity",
        size: "Large",
        challengeRating: "2",
        alignment: "Neutral Good"
    },
    {
        name: "Chain Devil",
        beastType: "Fiend",
        size: "Medium",
        challengeRating: "8",
        alignment: "Lawful Evil"
    },
    {
        name: "Champion",
        beastType: "Humanoid",
        size: "Medium",
        challengeRating: "9",
        alignment: "Any"
    },
    {
        name: "Changeling",
        beastType: "Humanoid",
        size: "Medium",
        challengeRating: "1/2",
        alignment: "Any"
    },
    {
        name: "Chasme",
        beastType: "Fiend",
        size: "Large",
        challengeRating: "6",
        alignment: "Chaotic Evil"
    },
    {
        name: "Chimera",
        beastType: "Monstrosity",
        size: "Large",
        challengeRating: "6",
        alignment: "Chaotic Evil"
    },
    {
        name: "Chitine",
        beastType: "Monstrosity",
        size: "Small",
        challengeRating: "1/2",
        alignment: "Chaotic Evil"
    },
    {
        name: "Choker",
        beastType: "Aberration",
        size: "Small",
        challengeRating: "1",
        alignment: "Chaotic Evil"
    },
    {
        name: "Choldrith",
        beastType: "Monstrosity",
        size: "Medium",
        challengeRating: "3",
        alignment: "Chaotic Evil"
    },
    {
        name: "Chuul",
        beastType: "Aberration",
        size: "Large",
        challengeRating: "4",
        alignment: "Chaotic Evil"
    },
    {
        name: "Clay Gladiator",
        beastType: "Construct",
        size: "Medium",
        challengeRating: "5",
        alignment: "Unaligned"
    },
    {
        name: "Clay Golem",
        beastType: "Construct",
        size: "Large",
        challengeRating: "9",
        alignment: "Unaligned"
    },
    {
        name: "Cloaker",
        beastType: "Aberration",
        size: "Large",
        challengeRating: "8",
        alignment: "Chaotic Neutral"
    },
    {
        name: "Clockwork Bronze Scout",
        beastType: "Construct",
        size: "Medium",
        challengeRating: "1",
        alignment: "Unaligned"
    },
    {
        name: "Clockwork Defender",
        beastType: "Construct",
        size: "Medium",
        challengeRating: "1",
        alignment: "Unaligned"
    },
    {
        name: "Clockwork Dragon",
        beastType: "Construct",
        size: "Medium",
        challengeRating: "1",
        alignment: "Neutral"
    },
    {
        name: "Clockwork Iron Cobra",
        beastType: "Construct",
        size: "Medium",
        challengeRating: "4",
        alignment: "Unaligned"
    },
    {
        name: "Clockwork Dragon",
        beastType: "Construct",
        size: "Large",
        challengeRating: "10",
        alignment: "Unaligned"
    },
    {
        name: "Clockwork Oaken Bolter",
        beastType: "Construct",
        size: "Medium",
        challengeRating: "5",
        alignment: "Unaligned"
    },
    {
        name: "Clockwork Stone Defender",
        beastType: "Construct",
        size: "Medium",
        challengeRating: "4",
        alignment: "Unaligned"
    },
    {
        name: "Cloud Giant",
        beastType: "Giant",
        size: "Huge",
        challengeRating: "9",
        alignment: "Neutral"
    },
    {
        name: "Cloud Giant Smiling One",
        beastType: "Giant",
        size: "Huge",
        challengeRating: "11",
        alignment: "Chaotic Neutral"
    },
    {
        name: "Cockatrice",
        beastType: "Monstrosity",
        size: "Small",
        challengeRating: "1/2",
        alignment: "Unaligned"
    },
    {
        name: "Colossus of Akros",
        beastType: "Construct",
        size: "Gargantuan",
        challengeRating: "23",
        alignment: "Unaligned"
    },
    {
        name: "Commoner",
        beastType: "Humanoid",
        size: "Medium",
        challengeRating: "0",
        alignment: "Any"
    },
    {
        name: "Conclave Dryad",
        beastType: "Fey",
        size: "Medium",
        challengeRating: "9",
        alignment: "Lawful Good"
    },
    {
        name: "Conjurer Wizard",
        beastType: "Humanoid",
        size: "Medium",
        challengeRating: "6",
        alignment: "Any"
    },
    {
        name: "Constrictor Snake",
        beastType: "Beast",
        size: "Large",
        challengeRating: "1/4",
        alignment: "Unaligned"
    },
    {
        name: "Copper Dragon Wyrmling",
        beastType: "Dragon",
        size: "Medium",
        challengeRating: "1",
        alignment: "Chaotic Good"
    },
    {
        name: "Copper Greatwyrm",
        beastType: "Dragon",
        size: "Gargantuan",
        challengeRating: "28",
        alignment: "Lawful Good"
    },
    {
        name: "Corpse Flower",
        beastType: "Plant",
        size: "Large",
        challengeRating: "8",
        alignment: "Chaotic Evil"
    },
    {
        name: "Cosmic Horror",
        beastType: "Aberration",
        size: "Gargantuan",
        challengeRating: "18",
        alignment: "Neutral Evil"
    },
    {
        name: "Couatl",
        beastType: "Celestial",
        size: "Medium",
        challengeRating: "4",
        alignment: "Lawful Good"
    },
    {
        name: "Cow",
        beastType: "Beast",
        size: "Large",
        challengeRating: "1/4",
        alignment: "UNaligned"
    },
    {
        name: "Crab",
        beastType: "Beast",
        size: "Tiny",
        challengeRating: "0",
        alignment: "Unaligned"
    },
    {
        name: "Crawling Claw",
        beastType: "Undead",
        size: "Tiny",
        challengeRating: "0",
        alignment: "Neutral Evil"
    },
    {
        name: "Crocodile",
        beastType: "Beast",
        size: "Large",
        challengeRating: "1/2",
        alignment: "Unaligned"
    },
    {
        name: "Crystal Dragon Wyrmling",
        beastType: "Dragon",
        size: "Medium",
        challengeRating: "2",
        alignment: "Chaotic Neutral"
    },
    {
        name: "Crystal Greatwyrm",
        beastType: "Dragon",
        size: "Gargantuan",
        challengeRating: "26",
        alignment: "Chaotic Neutral"
    },
    {
        name: "Crystal Golem",
        beastType: "Construct",
        size: "Large",
        challengeRating: "10",
        alignment: "Unaligned"
    },
    {
        name: "Cult Fanatic",
        beastType: "Humanoid",
        size: "Medium",
        challengeRating: "2",
        alignment: "Any Non-Good"
    },
    {
        name: "Cultist",
        beastType: "Humanoid",
        size: "Medium",
        challengeRating: "1/8",
        alignment: "Any Non-Good"
    },
    {
        name: "Cyclops",
        beastType: "Giant",
        size: "Huge",
        challengeRating: "6",
        alignment: "Chaotic Neutral"
    },
]

const seedMonster2 = () => Monster.bulkCreate(monsterData2);

module.exports = seedMonster2;