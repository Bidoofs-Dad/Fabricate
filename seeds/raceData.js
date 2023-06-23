const { Race } = require('../models');

const raceData = [
    {
        race: "Aarakocra",
        description: "The aarakocra, also known as birdfolk, are avian humanoids who live in high, mountainous regions. They are strong fliers and capable warriors.",
    },
    {
        race: "Aasimar",
        description: "Aasimar are born to serve as champions of the gods, their births hailed as blessed events. They are a people of otherworldly visages, with luminous features.", 
    },
    {
        race: "Autognome",
        description: "Autognomes are mechanical creatures that travel the unknowns of Wildspace. They share a lot of similarities with gnomes.", 
    },
    {
        race: "Bugbear",
        description: "Bugbears are hairy goblinoids born for battle and mayhem. They survive by raiding and hunting, but are fond of setting ambushes and fleeing when outmatched.", 
    },
    {
        race: "Centaur",
        description: "Centaur are half-human, half-horse creatures. They are considered fey instead of humanoid and tend to revere nature in all of its forms.", 
    },
    {
        race: "Changeling",
        description: "Changelings are a humanoid race who are distantly descended from doppelgangers and share their shapeshifting qualities. ", 
    },
    {
        race: "Black Dragonborn",
        description: "Dragonborns are humanoid beings with draconic heritage, possessing scales, dragon-like features, and the ability to breathe destructive elemental powers.", 
    },
    {
        race: "Blue Dragonborn",
        description: "Dragonborns are humanoid beings with draconic heritage, possessing scales, dragon-like features, and the ability to breathe destructive elemental powers.", 
    },
    {
        race: "Brass Dragonborn",
        description: "Dragonborns are humanoid beings with draconic heritage, possessing scales, dragon-like features, and the ability to breathe destructive elemental powers.", 
    },
    {
        race: "Bronze Dragonborn",
        description: "Dragonborns are humanoid beings with draconic heritage, possessing scales, dragon-like features, and the ability to breathe destructive elemental powers.", 
    },
    {
        race: "Copper Dragonborn",
        description: "Dragonborns are humanoid beings with draconic heritage, possessing scales, dragon-like features, and the ability to breathe destructive elemental powers.", 
    },
    {
        race: "Gold Dragonborn",
        description: "Dragonborns are humanoid beings with draconic heritage, possessing scales, dragon-like features, and the ability to breathe destructive elemental powers.", 
    },
    {
        race: "Green Dragonborn",
        description: "Dragonborns are humanoid beings with draconic heritage, possessing scales, dragon-like features, and the ability to breathe destructive elemental powers.", 
    },
    {
        race: "Red Dragonborn",
        description: "Dragonborns are humanoid beings with draconic heritage, possessing scales, dragon-like features, and the ability to breathe destructive elemental powers.", 
    },
    {
        race: "Silver Dragonborn",
        description: "Dragonborns are humanoid beings with draconic heritage, possessing scales, dragon-like features, and the ability to breathe destructive elemental powers.", 
    },
    {
        race: "White Dragonborn",
        description: "Dragonborns are humanoid beings with draconic heritage, possessing scales, dragon-like features, and the ability to breathe destructive elemental powers.", 
    },
    {
        race: "Amethyst Dragonborn",
        description: "Dragonborns are humanoid beings with draconic heritage, possessing scales, dragon-like features, and the ability to breathe destructive elemental powers.", 
    },
    {
        race: "Crystal Dragonborn",
        description: "Dragonborns are humanoid beings with draconic heritage, possessing scales, dragon-like features, and the ability to breathe destructive elemental powers.", 
    },
    {
        race: "Emerald Dragonborn",
        description: "Dragonborns are humanoid beings with draconic heritage, possessing scales, dragon-like features, and the ability to breathe destructive elemental powers.", 
    },
    {
        race: "Sapphire Dragonborn",
        description: "Dragonborns are humanoid beings with draconic heritage, possessing scales, dragon-like features, and the ability to breathe destructive elemental powers.", 
    },
    {
        race: "Topaz Dragonborn",
        description: "Dragonborns are humanoid beings with draconic heritage, possessing scales, dragon-like features, and the ability to breathe destructive elemental powers.", 
    },
    {
        race: "Hill Dwarf",
        description: "Hill dwarves are a deeply materialistic race who believe that the resources of the natural world exist only to serve the purpose of conscious beings.", 
    },
    {
        race: "Mountain dwarf",
        description: "Mountain dwarves are a breed of dwarves at home in the high peaks and rarified air of the rocky mountains.", 
    },
    {
        race: "Duergar",
        description: "Duergar are dwarves whose ancestors were transformed by centuries living in the deepest places of the Underdark.", 
    },
    {
        race: "Drow (Dark Elf)",
        description: "Dark elves are a dark-skinned and white-haired subrace of elves connected to the subterranean Underdark", 
    },
    {
        race: "Eladrin",
        description: "Eladrin are elves of the Feywild, a realm of perilous beauty and boundless magic.", 
    },
    {
        race: "High Elf",
        description: "The High Elves are a highly cultured people who are known for breathtaking architecture and massive historical libraries.", 
    },
    {
        race: "Sea Elf",
        description: "Sea elves are a rare elven race found throughout many oceans and seas", 
    },
    {
        race: "Shadar-Kai",
        description: "Sworn to the Raven Queen's service, the mysterious shadar-kai venture into the Material Plane from the Shadowfell to advance her will.", 
    },
    {
        race: "Wood Elf",
        description: "The wood elves were actually native to Faerûn.", 
    },
    {
        race: "Pallid Elf",
        description: "Pallid elves are a subrace of elves distinctive by their pale skin.", 
    },
    {
        race: "Astral Elf",
        description: "Astral elves who don't dwell in the Astral Plane can live to be more than 750 years old.", 
    },
    {
        race: "Fairy",
        description: "Infused with the magic of the Feywild, most fairies look like Small elves with insectile wings.", 
    },
    {
        race: "Firbolg",
        description: "Firbolgs possess great wisdom, living in concert with the natural world. This allows them to communicate with beasts and plants.", 
    },
    {
        race: "Air Genasi",
        description: "Genasi are individuals born with the inherent power of the elemental planes, manifesting as human-like beings with unique physical traits and the ability to harness and manipulate elemental energies.", 
    },
    {
        race: "Earth Genasi",
        description: "Genasi are individuals born with the inherent power of the elemental planes, manifesting as human-like beings with unique physical traits and the ability to harness and manipulate elemental energies.", 
    },
    {
        race: "Fire Genasi",
        description: "Genasi are individuals born with the inherent power of the elemental planes, manifesting as human-like beings with unique physical traits and the ability to harness and manipulate elemental energies.", 
    },
    {
        race: "Water Genasi",
        description: "Genasi are individuals born with the inherent power of the elemental planes, manifesting as human-like beings with unique physical traits and the ability to harness and manipulate elemental energies.", 
    },
    {
        race: "Giff",
        description: "Giff are tall, broad-shouldered folk with hippo-like features.", 
    },
    {
        race: "Githyanki",
        description: "Psionic humanoids from the astral plane, the githyanki are warriors, while the githzerai are monks and mystics.", 
    },
    {
        race: "Githzerai",
        description: "Focused philosophers and austere ascetics, the githzerai pursue lives of rigid order.", 
    },
    {
        race: "Forest Gnome",
        description: "Forest gnomes are largely hunter-gatherers, harvesting their food from wild fruits, nuts, and berries, and supplementing their diet with a little meat.", 
    },
    {
        race: "Rock Gnome",
        description: "Rock gnomes are a curious, childlike race.", 
    },
    {
        race: "Deep Gnome",
        description: "Deep gnomes, called svirfneblin in their own language, were a gnome subrace that lived in the Underdark.", 
    },
    {
        race: "Goblin",
        description: "Goblins are small, black-hearted humanoids that lair in despoiled dungeons and other dismal settings.", 
    },
    {
        race: "Goliath",
        description: "Towering humanoids from mountainous regions, goliaths are known for their strength and endurance.", 
    },
    {
        race: "Hadozee",
        description: "Hadozees are people with simian features that long ago adapted to live among the tall trees of their home world.", 
    },
    {
        race: "Half-Elf",
        description: "As a race, they have elven grace without elven aloofness and human energy without human boorishness.", 
    },
    {
        race: "Half-Orc",
        description: "Half-orcs are humanoids born of both human and orc ancestry by a multitude of means.", 
    },
    {
        race: "Lightfoot Halfling",
        description: "The most common type of halflings seen in the world, in large part due to their famous wanderlust.", 
    },
    {
        race: "Stout Halfling",
        description: "Stout halflings are quiet and earthy people, content to stay in their small communities and away from the crowds of tall folk.", 
    },
    {
        race: "Ghostwise Halfling",
        description: "Ghostwise halflings were very elusive and were generally isolated from the outside world.", 
    },
    {
        race: "Lotusden Halfling",
        description: "Long tied to the natural heart of the Lotusden Greenwood, these halflings have adapted to live synergistically with the chaotic laws of the wilds.", 
    },
    {
        race: "Harengon",
        description: "Harengons are bipedal, with the characteristic long feet of the rabbits they resemble and fur in a variety of colors.", 
    },
    {
        race: "Hobgoblin",
        description: "Hobgoblins are an elite species of goblinoids trained in military fighting techniques.", 
    },
    {
        race: "Human",
        description: "Versatile and adaptable, humans are the most widespread race in most D&D settings.", 
    },
    {
        race: "Kalashtar",
        description: "The kalashtar are a compound race created from the union of humanity and renegade spirits from the plane of dreams", 
    },
    {
        race: "Kender",
        description: "Kender are a small-sized race with gnomish ancestors, primarily known for their absence of fear.", 
    },
    {
        race: "Kenku",
        description: "Raven-like humanoids, kenku have a talent for mimicry but are cursed with an inability to speak in their own voices.", 
    },
    {
        race: "Kobold",
        description: "Kobolds are craven reptilian humanoids that commonly infest dungeons. They make up for their physical ineptitude with a cleverness for trap making.", 
    },
    {
        race: "Leonin",
        description: "Leonin are prideful and self-reliant, and most have no need of gods to coddle them.", 
    },
    {
        race: "Lineages",
        description: "A lineage replaces your race's traits and sometimes adds some new flavor to your character. You can choose any race and apply a lineage to it", 
    },
    {
        race: "Lizardfolk",
        description: "Lizardfolk are tall humanoids that look like a cross between a powerfully built human and a lizard.", 
    },
    {
        race: "Loxodon",
        description: "Loxodons are a race of elephant humanoids. They are known as formidable warriors.", 
    },
    {
        race: "Minotaur",
        description: "Minotaurs are barrel-chested humanoids with heads resembling those of bulls.", 
    },
    {
        race: "Orc",
        description: "Savage and fearless, motivated by their hatred of the civilized races of the world and their need to satisfy the demands of their deities.", 
    },
    {
        race: "Owlin",
        description: "Distant kin of giant owls from the Feywild, owlin come in many shapes and sizes, from petite and fluffy to wide-winged and majestic.", 
    },
    {
        race: "Plasmoid",
        description: "Plasmoids are amorphous beings with no typical shape. In the presence of other folk, they often adopt a similar shape.", 
    },
    {
        race: "Satyr",
        description: "Most satyrs appear as half-humanoid, half-goat creatures that stem from a cross between nature spirits and humans.", 
    },
    {
        race: "Shifter",
        description: "At first a shifter may appear human, but closer inspection reveals pointed ears, flat noses, and canine teeth.", 
    },
    {
        race: "Simic Hybrid",
        description: "Fused with animals, they were created to become super soldiers tasked with protecting the natural world from the expansion of civilization.", 
    },
    {
        race: "Tabaxi",
        description: "Feline humanoids, tabaxi are agile and curious, with a natural inclination for exploration and curiosity.", 
    },
    {
        race: "Thri-kreen",
        description: "Thri-kreen have insectile features and two pairs of arms. Their bodies are encased in protective chitin.", 
    },
    {
        race: "Tiefling",
        description: "Humans with infernal or fiendish ancestry, tieflings often possess demonic features and innate magical abilities.", 
    },
    {
        race: "Tortle",
        description: "Tortles are a simple and friendly race of turtle-like humanoids.", 
    },
    {
        race: "Triton",
        description: "Aquatic humanoids, tritons are adapted to life underwater and possess various water-related abilities.", 
    },
    {
        race: "Vedalken",
        description: "Vedalken are a race of partially-amphibious, blue-skinned humanoids resembling earless humans in body paint.", 
    },
    {
        race: "Verdan",
        description: "Verdans are an ambiguously Goblinoid mortal or creature that is nearly equipped to be disordered oddities.", 
    },
    {
        race: "Warforged",
        description: "Constructed beings, warforged are living constructs created for war, known for their durability and versatility.", 
    },
    {
        race: "Yuan-ti",
        description: "All Yuan-ti are snake-like, though some more so than others, possessing serpentine bodies instead of legs or scaled, snaking arms that descend.", 
    },
];
const seedRace = () => Race.bulkCreate(raceData);

module.exports = seedRace;