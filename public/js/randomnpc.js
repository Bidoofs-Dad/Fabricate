// const dnd = require('dnd-npc');
// const npc = new dnd.npc({ raceType: "warforged" }).generate();
 // Generates a Warforged with a random sub-race and role.

// const randomEl = document.getElementById("random-button")

// Generates a completely random character.

// const randomNpc = async () => {
//     localStorage.setItem('nameChoice', npc.character.name);
//     localStorage.setItem('raceChoice', 'High Elf');
//     localStorage.setItem('classChoice', 'Artificer');
//     localStorage.setItem('bgChoice', 'Sailor');
//     localStorage.setItem('strengthVal', 7);
//     localStorage.setItem('dexterityVal', 10);
//     localStorage.setItem('constitutionVal', 3);
//     localStorage.setItem('intelligenceVal', 5);
//     localStorage.setItem('wisdomVal', 15);
//     localStorage.setItem('charismaVal', 12);
// }

const saveNPCDataToLocalStorage = async () => {
    fetch('/api//users/randomnpc')
      .then(response => response.json())
      .then(npc => {
        // Access specific attributes from the NPC data
        const npcName = npc.character.name;
        console.log(npcName);
        // const npcStats = npc.stats;
        // ... access other attributes as needed

        // Store attributes in local storage
        // localStorage.setItem('npcName', npcName);
        // localStorage.setItem('npcStats', JSON.stringify(npcStats));
        // ... store other attributes as needed
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }