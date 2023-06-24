const { Spell } = require('../models');

const spellData = [
    {
        name: "Acid Splash",
        school: "Conjuration",
        level: "Cantrip",
        damageType: "Acid",
        castingTime: '1 Action',
        duration: 'Instantaneous',
        range: '60ft.',
        components: 'V,S',
        attackSave: 'DEX SAVE',
    },
    {
        name: "Blade Ward",
        school: "Abjuration",
        level: "Cantrip",
        damageType: "Buff",
        castingTime: '1 Action',
        duration: '1 Round',
        range: 'Self',
        components: 'V,S',
        attackSave: 'None',
    },
    {
        name: "Booming Blade",
        school: "Evocation",
        level: "Cantrip",
        damageType: "Thunder",
        castingTime: '1 Action',
        duration: '1 Round',
        range: 'Self',
        components: 'S,M',
        attackSave: 'Melee',
    },
    {
        name: "Chill Touch",
        school: "Necromancy",
        level: "Cantrip",
        damageType: "Necrotic",
        castingTime: '1 Action',
        duration: '1 Round',
        range: '120 ft.',
        components: 'V,S',
        attackSave: 'Ranged',
    },
    {
        name: "Control Flames",
        school: "Transmutation",
        level: "Cantrip",
        damageType: "Control",
        castingTime: '1 Action',
        duration: 'Instantaneous',
        range: '60ft',
        components: 'S',
        attackSave: 'None',
    },
    {
        name: "Create Bonfire",
        school: "Conjuration",
        level: "Cantrip",
        damageType: "Fire",
        castingTime: '1 Action',
        duration: '1 Minute (Concentration)',
        range: '60ft. 5ft Cube.',
        components: 'V,S',
        attackSave: 'DEX SAVE',
    },
    {
        name: "Dancing Lights",
        school: "Evocation",
        level: "Cantrip",
        damageType: "Utility",
        castingTime: '1 Action',
        duration: '1 Minute (Concentration)',
        range: '120ft.',
        components: 'V,S,M',
        attackSave: 'None',
    },
    {
        name: "Druidcraft",
        school: "Transmutation",
        level: "Cantrip",
        damageType: "Control",
        castingTime: '1 Action',
        duration: 'Instantaneous',
        range: '30ft.',
        components: 'V,S',
        attackSave: 'None',
    },
    {
        name: "Eldritch Blast",
        school: "Evocation",
        level: "Cantrip",
        damageType: "Force",
        castingTime: '1 Action',
        duration: 'Instantaneous',
        range: '120ft.',
        components: 'V,S',
        attackSave: 'Ranged',
    },
   {
        name: "Encode Thoughts",
        school: "Enchantment",
        level: "Cantrip",
        damageType: "Creation",
        castingTime: '1 Action',
        duration: '8 Hours',
        range: 'Self',
        components: 'S',
        attackSave: 'None',
    },
    {
        name: "Fire Bolt",
        school: "Evocation",
        level: "Cantrip",
        damageType: "Fire",
        castingTime: '1 Action',
        duration: 'Instantaneous',
        range: '120ft.',
        components: 'V,S',
        attackSave: 'Ranged',
    },
    {
        name: "Friends",
        school: "Enchantment",
        level: "Cantrip",
        damageType: "Buff",
        castingTime: '1 Action',
        duration: '1 Minute (Concentration)',
        range: 'Self',
        components: 'S,M',
        attackSave: 'None',
    },
    {
        name: "Frostbite",
        school: "Evocation",
        level: "Cantrip",
        damageType: "Cold",
        castingTime: '1 Action',
        duration: 'Instantaneous',
        range: '60ft.',
        components: 'V,S',
        attackSave: 'CON SAVE',
    },
    {
        name: "Green-Flame Blade",
        school: "Evocation",
        level: "Cantrip",
        damageType: "Fire",
        castingTime: '1 Action',
        duration: 'Instantaneous',
        range: 'Self',
        components: 'S,M',
        attackSave: 'Melee',
    },
    {
        name: "Guidance",
        school: "Divination",
        level: "Cantrip",
        damageType: "Buff",
        castingTime: '1 Action',
        duration: '1 Minute (Concentration)',
        range: 'Touch',
        components: 'V,S',
        attackSave: 'None',
    },
    {
        name: "Gust",
        school: "Transmutation",
        level: "Cantrip",
        damageType: "Control",
        castingTime: '1 Action',
        duration: 'Instantaneous',
        range: '30ft.',
        components: 'V,S',
        attackSave: 'STR SAVE',
    },
    {
        name: "Infestation",
        school: "Conjuration",
        level: "Cantrip",
        damageType: "Poison",
        castingTime: '1 Action',
        duration: 'Instantaneous',
        range: '30ft.',
        components: 'V,S,M',
        attackSave: 'CON SAVE',
    },
    {
        name: "Light",
        school: "Evocation",
        level: "Cantrip",
        damageType: "Creation",
        castingTime: '1 Action',
        duration: 'Instantaneous',
        range: 'Touch (20ft Radius)',
        components: 'V,M',
        attackSave: 'DEX SAVE',
    },
    {
        name: "Lightning Lure",
        school: "Evocation",
        level: "Cantrip",
        damageType: "Lightning",
        castingTime: '1 Action',
        duration: 'Instantaneous',
        range: '15ft.',
        components: 'V',
        attackSave: 'STR SAVE',
    },
    {
        name: "Mage hand",
        school: "Conjuration",
        level: "Cantrip",
        damageType: "Utility",
        castingTime: '1 Action',
        duration: '1 Minute',
        range: '30ft.',
        components: 'V,S',
        attackSave: 'None',
    },
    {
        name: "Magic Stone",
        school: "Transmutatuion",
        level: "Cantrip",
        damageType: "Bludgeoning",
        castingTime: '1 Bonus Action',
        duration: '1 Minute',
        range: 'Touch (60ft.)',
        components: 'V,S',
        attackSave: 'Ranged',
    },
    {
        name: "Mending",
        school: "Transmutation",
        level: "Cantrip",
        damageType: "Utility",
        castingTime: '1 Minute',
        duration: 'Instantaneous',
        range: 'Touch',
        components: 'V,S,M',
        attackSave: 'None',
    },
    {
        name: "Message",
        school: "Transmutation",
        level: "Cantrip",
        damageType: "Communication",
        castingTime: '1 Action',
        duration: '1 Round',
        range: '120ft.',
        components: 'V,S,M',
        attackSave: 'None',
    },
    {
        name: "Mind Sliver",
        school: "Enchantment",
        level: "Cantrip",
        damageType: "Psychic",
        castingTime: '1 Action',
        duration: 'Instantaneous',
        range: '60ft.',
        components: 'V',
        attackSave: 'INT SAVE',
    },
    {
        name: "Minor Illusion",
        school: "Illusion",
        level: "Cantrip",
        damageType: "Control",
        castingTime: '1 Action',
        duration: '1 Minute',
        range: '30ft. (5ft. Cube)',
        components: 'S,M',
        attackSave: 'None',
    },
    {
        name: "Mold Earth",
        school: "Transmutation",
        level: "Cantrip",
        damageType: "Control",
        castingTime: '1 Action',
        duration: 'Instantaneous',
        range: '30ft. (5ft. Cube)',
        components: 'S',
        attackSave: 'None',
    },
    {
        name: "Poison Spray",
        school: "Conjuration",
        level: "Cantrip",
        damageType: "Poison",
        castingTime: '1 Action',
        duration: 'instantaneous',
        range: '10ft.',
        components: 'V,S',
        attackSave: 'CON SAVE',
    },
    {
        name: "Prestidigation",
        school: "Transmutation",
        level: "Cantrip",
        damageType: "Utility",
        castingTime: '1 Action',
        duration: '1 Hour',
        range: '10ft.',
        components: 'V,S',
        attackSave: 'None',
    },
    {
        name: "Primal Savagery",
        school: "Transmutation",
        level: "Cantrip",
        damageType: "Acid",
        castingTime: '1 Action',
        duration: 'Instantaneous',
        range: 'Self',
        components: 'S',
        attackSave: 'Melee',
    },
    {
        name: "Produce Flame",
        school: "Conjuration",
        level: "Cantrip",
        damageType: "Fire",
        castingTime: '1 Action',
        duration: '10 Minutes',
        range: 'Self (30 ft.)',
        components: 'V,S',
        attackSave: 'Ranged',
    },
    {
        name: "Ray of Frost",
        school: "Evocation",
        level: "Cantrip",
        damageType: "Cold",
        castingTime: '1 Action',
        duration: 'Instantaneous',
        range: '60ft.',
        components: 'V,S',
        attackSave: 'Ranged',
    },
    {
        name: "Resistance",
        school: "Abjuration",
        level: "Cantrip",
        damageType: "Buff",
        castingTime: '1 Action',
        duration: '1 Minute (Concentration)',
        range: 'Touch',
        components: 'V,S,M',
        attackSave: 'None',
    },
    {
        name: "Sacred Flame",
        school: "Evocation",
        level: "Cantrip",
        damageType: "Radiant",
        castingTime: '1 Action',
        duration: 'Instantaneous',
        range: '60ft.',
        components: 'V,S',
        attackSave: 'DEX SAVE',
    },
    {
        name: "Sapping Sting",
        school: "Necromancy",
        level: "Cantrip",
        damageType: "Necrotic",
        castingTime: '1 Action',
        duration: 'Instantaneous',
        range: '30ft.',
        components: 'V,S',
        attackSave: 'CON SAVE',
    },
    {
        name: "Shape Water",
        school: "Transmutation",
        level: "Cantrip",
        damageType: "Control",
        castingTime: '1 Action',
        duration: 'Instantaneous',
        range: '30ft. (5ft. Cube)',
        components: 'S',
        attackSave: 'None',
    },
    {
        name: "Shillelagh",
        school: "Transmutation",
        level: "Cantrip",
        damageType: "Bludgeoning",
        castingTime: '1 bonus Action',
        duration: '1 Minute',
        range: 'Touch',
        components: 'V,S,M',
        attackSave: 'Melee',
    },
    {
        name: "Shocking Grasp",
        school: "Evocation",
        level: "Cantrip",
        damageType: "Lightning",
        castingTime: '1 Action',
        duration: 'Instantaneous',
        range: 'Touch',
        components: 'V,S',
        attackSave: 'Melee',
    },
    {
        name: "Spare the Dying",
        school: "Necromancy",
        level: "Cantrip",
        damageType: "Healing",
        castingTime: '1 Action',
        duration: 'Instantaneous',
        range: 'Touch',
        components: 'V,S',
        attackSave: 'None',
    },
    {
        name: "Sword Burst",
        school: "Conjuration",
        level: "Cantrip",
        damageType: "Force",
        castingTime: '1 Action',
        duration: 'Instantaneous',
        range: 'Self',
        components: 'V',
        attackSave: 'DEX SAVE',
    },
    {
        name: "Thaumaturgy",
        school: "Transmutation",
        level: "Cantrip",
        damageType: "Control",
        castingTime: '1 Action',
        duration: '1 Minute',
        range: '30ft.',
        components: 'V',
        attackSave: 'None',
    },
    {
        name: "Thorn Whip",
        school: "Transmutation",
        level: "Cantrip",
        damageType: "Piercing",
        castingTime: '1 Action',
        duration: 'Instantaneous',
        range: '30ft.',
        components: 'V,S,M',
        attackSave: 'Melee',
    },
    {
        name: "Thunderclap",
        school: "Evocation",
        level: "Cantrip",
        damageType: "Thunder",
        castingTime: '1 Action',
        duration: 'Instantaneous',
        range: '5ft.',
        components: 'S',
        attackSave: 'CON SAVE',
    },
    {
        name: "Toll the Dead",
        school: "Necromancy",
        level: "Cantrip",
        damageType: "Necrotic",
        castingTime: '1 Action',
        duration: 'Instantaneous',
        range: '60ft.',
        components: 'V,S',
        attackSave: 'WIS SAVE',
    },
    {
        name: "True Strike",
        school: "Divination",
        level: "Cantrip",
        damageType: "Foreknwoledge",
        castingTime: '1 Action',
        duration: '1 Round (Concentration)',
        range: '30ft.',
        components: 'S',
        attackSave: 'None',
    },
    {
        name: "Viscous Mockery",
        school: "Enchantment",
        level: "Cantrip",
        damageType: "Psychic",
        castingTime: '1 Action',
        duration: 'Instantaneous',
        range: '60ft.',
        components: 'V',
        attackSave: 'WIS SAVE',
    },
    {
        name: "Word of Radiance",
        school: "Evocation",
        level: "Cantrip",
        damageType: "Radiant",
        castingTime: '1 Action',
        duration: 'Instantaneous',
        range: '5ft.',
        components: 'V,M',
        attackSave: 'CON SAVE',
    },
    {
        name: "Absorb Elements",
        school: "Abjuration",
        level: "1st Level",
        damageType: "Multi Elements",
        castingTime: '1 Reaction',
        duration: '1 Round',
        range: 'Self',
        components: 'S',
        attackSave: 'None/Melee',
    },
    {
        name: "Alarm",
        school: "Abjuration",
        level: "1st Level",
        damageType: "Detection",
        castingTime: '1 Minute',
        duration: '8 Hours (Ritual)',
        range: '30ft.',
        components: 'V,S,M',
        attackSave: 'None',
    },
    {
        name: "Animal Friendship",
        school: "Enchantment",
        level: "1st Level",
        damageType: "Charm",
        castingTime: '1 Action',
        duration: '24 Hours',
        range: '30ft.',
        components: 'V,S,M',
        attackSave: 'WIS SAVE',
    },
    {
        name: "Armor of Agathys",
        school: "Abjuration",
        level: "1st Level",
        damageType: "Cold",
        castingTime: '1 Action',
        duration: '1 Hour',
        range: 'Self',
        components: 'V,S,M',
        attackSave: 'None',
    },
    {
        name: "Arms of Hadar",
        school: "Conjuration",
        level: "1st Level",
        damageType: "Necrotic",
        castingTime: '1 Action',
        duration: 'Instantaneous',
        range: 'Self (10ft. Radius)',
        components: 'V,S',
        attackSave: 'STR SAVE ',
    },
    {
        name: "Bane",
        school: "Enchantment",
        level: "1st Level",
        damageType: "Debuff",
        castingTime: '1 Action',
        duration: '1 Minute (Concentration)',
        range: '30ft.',
        components: 'V,S,M',
        attackSave: 'CHA SAVE',
    },
    {
        name: "Beast Bond",
        school: "Divination",
        level: "1st Level",
        damageType: "Buff",
        castingTime: '1 Action',
        duration: '10 Minutes (Concentration)',
        range: 'Touch',
        components: 'V,S,M',
        attackSave: 'None',
    },
    {
        name: "Bless",
        school: "Enchantment",
        level: "1st Level",
        damageType: "Buff",
        castingTime: '1 Action',
        duration: '1 Minute',
        range: '30ft.',
        components: 'V,S,M',
        attackSave: 'None',
    },
    {
        name: "Burning Hands",
        school: "Evocation",
        level: "1st Level",
        damageType: "Fire",
        castingTime: '1 Action',
        duration: 'Instantaneous',
        range: '15ft Cone',
        components: 'V,S',
        attackSave: 'DEX SAVE',
    },
    {
        name: "Catapult",
        school: "Transmutation",
        level: "1st Level",
        damageType: "Bludgeoning",
        castingTime: '1 Action',
        duration: 'Instantaneous',
        range: '60ft.',
        components: 'S',
        attackSave: 'DEX SAVE',
    },
    {
        name: "Cause Fear",
        school: "Necromancy",
        level: "1st Level",
        damageType: "Frightened",
        castingTime: '1 Action',
        duration: '1 Minute (Concentration)',
        range: '60ft.',
        components: 'V',
        attackSave: 'WIS SAVE',
    },
    {
        name: "Ceremony",
        school: "Abjuration",
        level: "1st Level",
        damageType: "Buff",
        castingTime: '1 Hour (Ritual)',
        duration: 'Instantaneous',
        range: 'Touch',
        components: 'V,S,M',
        attackSave: 'None',
    },
    {
        name: "Chaos Bolt",
        school: "Evocation",
        level: "1st Level",
        damageType: "Multi Element",
        castingTime: '1 Action',
        duration: 'Instantaneous',
        range: '120ft.',
        components: 'V,S',
        attackSave: 'Ranged',
    },
    {
        name: "Charm Person",
        school: "Enchantment",
        level: "1st Level",
        damageType: "Charmed",
        castingTime: '1 Action',
        duration: '1 Hour',
        range: '30ft.',
        components: 'V,S',
        attackSave: 'WIS SAVE',
    },
    {
        name: "Chromatic Orb",
        school: "Evocation",
        level: "1st Level",
        damageType: "Multi Element",
        castingTime: '1 Action',
        duration: 'Instantaneous',
        range: '90ft.',
        components: 'V,S,M',
        attackSave: 'Ranged',
    },
    {
        name: "Color Spray",
        school: "Illusion",
        level: "1st Level",
        damageType: "Blinded",
        castingTime: '1 Action',
        duration: '1 Round',
        range: 'Self (15ft. Cone)',
        components: 'V,S,M',
        attackSave: 'None',
    },
    {
        name: "Command",
        school: "Enchantment",
        level: "1st Level",
        damageType: "Prone",
        castingTime: '1 Action',
        duration: '1 Round',
        range: '60ft.',
        components: 'V',
        attackSave: 'WIS SAVE',
    },
    {
        name: "Compelled Duel",
        school: "Enchantment",
        level: "1st Level",
        damageType: "Control",
        castingTime: '1 Bonus Action',
        duration: '1 Hour (Concentration)',
        range: '30ft.',
        components: 'V',
        attackSave: 'WIS SAVE',
    },
    {
        name: "Comprehend Languages",
        school: "Divination",
        level: "1st Level",
        damageType: "Social",
        castingTime: '1 Action (Ritual)',
        duration: '1 Hour',
        range: 'Self',
        components: 'V,S,M',
        attackSave: 'None',
    },
    {
        name: "Create or Destroy Water",
        school: "Transmutation",
        level: "1st Level",
        damageType: "Creation",
        castingTime: '1 Action',
        duration: 'Instantaneous',
        range: '30ft. (30ft. Cube)',
        components: 'V,S,M',
        attackSave: 'None',
    },
    {
        name: "Cure Wounds",
        school: "Evocation",
        level: "1st Level",
        damageType: "Healing",
        castingTime: '1 Action',
        duration: 'Instantaneous',
        range: 'Touch',
        components: 'V,S',
        attackSave: 'None',
    },
    {
        name: "Detect Evil and Good",
        school: "Divination",
        level: "1st Lelel",
        damageType: "Detection",
        castingTime: '1 Action',
        duration: '10 Minutes (Concentration)',
        range: 'Self (30ft Radius)',
        components: 'V,S',
        attackSave: 'None',
    },
    {
        name: "Detect Magic",
        school: "Dvination",
        level: "1st Level",
        damageType: "Detection",
        castingTime: '1 Action (Ritual)',
        duration: '10 Minutes (Concentration)',
        range: 'Self (30ft. Radius)',
        components: 'V,S',
        attackSave: 'None',
    },
    {
        name: "Detect Posion and Disease",
        school: "Divination",
        level: "1st Level",
        damageType: "Detection",
        castingTime: '1 Action (Ritual)',
        duration: '10 Minutes (Concentration)',
        range: 'Self (30ft. Radius)',
        components: 'V,S,M',
        attackSave: 'None',
    },
    {
        name: "Disguise Self",
        school: "Illusion",
        level: "1st Level",
        damageType: "Shapechanging",
        castingTime: '1 Action',
        duration: '1 Hour',
        range: 'Self',
        components: 'V,S',
        attackSave: 'None',
    },
    {
        name: "Dissonant Whispers",
        school: "Enchantment",
        level: "1st Level",
        damageType: "Psychic",
        castingTime: '1 Action',
        duration: 'Instantaneous',
        range: '60ft.',
        components: 'V',
        attackSave: 'WIS SAVE',
    },
    {
        name: "Distort Value",
        school: "Illusion",
        level: "1st Level",
        damageType: "Illusion",
        castingTime: '1 Minutes',
        duration: '8 Hours',
        range: 'Touch (1ft. Cube)',
        components: 'V',
        attackSave: 'None',
    },
    {
        name: "Divine Favor",
        school: "Evocation",
        level: "1st Level",
        damageType: "Radiant",
        castingTime: '1 Bonus Action',
        duration: '1 Minute (Concentration)',
        range: 'Self',
        components: 'V,S',
        attackSave: 'None',
    },
    {
        name: "Earth Tremor",
        school: "Evocation",
        level: "1st Level",
        damageType: "Bludgeoning",
        castingTime: '1 Action',
        duration: 'Instantaneous',
        range: '10ft.',
        components: 'V,S',
        attackSave: 'DEX SAVE',
    },
    {
        name: "Ensnaring Strike",
        school: "Conjuration",
        level: "1st Level",
        damageType: "Piercing",
        castingTime: '1 Bonus Action',
        duration: '1 Minute (Concentration)',
        range: 'Self',
        components: 'V',
        attackSave: 'STR SAVE',
    },
    {
        name: "Entangle",
        school: "Conjuration",
        level: "1st Level",
        damageType: "Restrained",
        castingTime: '1 Action',
        duration: '1 Minute (Concentration)',
        range: '90ft. (20ft. Cube)',
        components: 'V,S',
        attackSave: 'STR SAVE',
    },
    {
        name: "Expeditous Retreat",
        school: "Transmutation",
        level: "1st Level",
        damageType: "Movement",
        castingTime: '1 Bonus Action',
        duration: '10 Minutes (Concentration)',
        range: 'Self',
        components: 'V,S',
        attackSave: 'None',
    },
    {
        name: "Faerie Fire",
        school: "Evocation",
        level: "1st Level",
        damageType: "Debuff",
        castingTime: '1 Action',
        duration: '1 Minute (Concentration)',
        range: '60ft. (20ft. Cube)',
        components: 'V',
        attackSave: 'DEX SAVE',
    },
    {
        name: "False Life",
        school: "Necromancy",
        level: "1st Level",
        damageType: "Buff",
        castingTime: '1 Action',
        duration: '1 Hour',
        range: 'Self',
        components: 'V,S,M',
        attackSave: 'None',
    },
    {
        name: "Feather Fall",
        school: "Transmutation",
        level: "1st Level",
        damageType: "Exploration",
        castingTime: '1 Reaction',
        duration: '1 Minute',
        range: '60ft.',
        components: 'V,M',
        attackSave: 'None',
    },
    {
        name: "Find Familiar",
        school: "Conjuration",
        level: "1st Level",
        damageType: "Summoning",
        castingTime: '1 Hour (Ritual)',
        duration: 'Instantaneous',
        range: '10ft.',
        components: 'V,S,M',
        attackSave: 'None',
    },
    {
        name: "Floating Disk",
        school: "Conjuration",
        level: "1st Level",
        damageType: "Movement",
        castingTime: '1 Action (Ritual)',
        duration: '1 Hour',
        range: '10ft.',
        components: 'V,S,M',
        attackSave: 'None',
    },
    {
        name: "Fog Cloud",
        school: "Conjuration",
        level: "1st Level",
        damageType: "Control",
        castingTime: '1 Action',
        duration: '1 Hour (Concentration)',
        range: '120ft (20ft Radius)',
        components: 'V,S',
        attackSave: 'None',
    },
    {
        name: "Frost Fingers",
        school: "Evocation",
        level: "1st Level",
        damageType: "Cold",
        castingTime: '1 Action',
        duration: 'Instantaneous',
        range: 'Self (15ft. Cone)',
        components: 'V,S',
        attackSave: 'CON SAVE',
    },
    {
        name: "Gift of Alacrity",
        school: "Divination",
        level: "1st Level",
        damageType: "Buff",
        castingTime: '1 Minute',
        duration: '8 Hours',
        range: 'Touch',
        components: 'V,S',
        attackSave: 'None',
    },
    {
        name: "Goodberry",
        school: "Transmutation",
        level: "1st Level",
        damageType: "Healing",
        castingTime: '1 Action',
        duration: 'Instantaneous',
        range: 'Touch',
        components: 'V,S,M',
        attackSave: 'None',
    },
    {
        name: "Grease",
        school: "Conjuration",
        level: "1st Level",
        damageType: "Prone",
        castingTime: '1 Action',
        duration: '1 Minute',
        range: '60ft. (10ft. Cube)',
        components: 'V,S,M',
        attackSave: 'DEX SAVE',
    },
];
const seedSpell = () => Spell.bulkCreate(spellData);

module.exports = seedSpell;