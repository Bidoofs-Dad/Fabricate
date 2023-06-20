// const dnd = require('dnd-npc');
// const npc = new dnd.npc({ raceType: "warforged" })
//.generate(); // Generates a Warforged with a random sub-race and role.

// const randomEl = document.getElementById("random-button")

// Generates a completely random character.

const randomNpc = async () => {
    localStorage.setItem('nameChoice', 'Enterprise');
    localStorage.setItem('raceChoice', 'High Elf');
    localStorage.setItem('classChoice', 'Artificer');
    localStorage.setItem('bgChoice', 'Sailor');
    localStorage.setItem('strengthVal', 7);
    localStorage.setItem('dexterityVal', 10);
    localStorage.setItem('constitutionVal', 3);
    localStorage.setItem('intelligenceVal', 5);
    localStorage.setItem('wisdomVal', 15);
    localStorage.setItem('charismaVal', 12);
}