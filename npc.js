const dnd = require('dnd-npc');

const npc = new dnd.npc({ raceType: "warforged" })
    .generate()

console.log(npc);
console.log(npc.character.name)
// data?.results?.[randomEl]?.esrb_rating?.name