const randomNpc = async () => {
  fetch('/api/users/randomnpc')
    .then(response => response.json())
    .then(npc => {

      const randomName = npc.character.name;
      const randomRace = npc.race.name;
      const randomClass = npc.role.name;
      const randomBg = npc.character.background;
      const randomStr = npc.role.stats.strength;
      const randomDex = npc.role.stats.dexterity;
      const randomCon = npc.role.stats.constitution;
      const randomInt = npc.role.stats.intelligence;
      const randomWis = npc.role.stats.wisdom;
      const randomCha = npc.role.stats.charisma;

      localStorage.setItem('nameChoice', randomName);
      localStorage.setItem('raceChoice', randomRace);
      localStorage.setItem('classChoice', randomClass);
      localStorage.setItem('bgChoice', randomBg);
      localStorage.setItem('strengthVal', randomStr);
      localStorage.setItem('dexterityVal', randomDex);
      localStorage.setItem('constitutionVal', randomCon);
      localStorage.setItem('intelligenceVal', randomInt);
      localStorage.setItem('wisdomVal', randomWis);
      localStorage.setItem('charismaVal', randomCha);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}