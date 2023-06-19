const classEl = document.getElementById("character-class")
const raceEl = document.getElementById("character-race")
const bgEl = document.getElementById("character-background")
const strengthEl = document.getElementById("strength")
const dexterityEl = document.getElementById('dexterity');
const constitutionEl = document.getElementById('constitution');
const intelligenceEl = document.getElementById('intelligence');
const wisdomEl = document.getElementById('wisdom');
const charismaEl = document.getElementById('charisma');
const nameEl = document.getElementById('character-name');

const classChoice = localStorage.getItem('classChoice');
const raceChoice = localStorage.getItem('raceChoice');
const bgChoice = localStorage.getItem('bgChoice');
const strengthVal = localStorage.getItem('strengthVal');
const dexterityVal = localStorage.getItem('dexterityVal');
const constitutionVal = localStorage.getItem('constitutionVal');
const intelligenceVal = localStorage.getItem('intelligenceVal');
const wisdomVal = localStorage.getItem('wisdomVal');
const charismaVal = localStorage.getItem('charismaVal');

classEl.value = classChoice
raceEl.value = raceChoice
bgEl.value = bgChoice
strengthEl.value = strengthVal
dexterityEl.value = dexterityVal
constitutionEl.value = constitutionVal
intelligenceEl.value = intelligenceVal
wisdomEl.value = wisdomVal
charismaEl.value = charismaVal

const submitCharacter = async () => {
  const name = nameEl.value.trim();
  const race = raceEl.value.trim();
  const characterclass = classEl.value.trim();
  const background = bgEl.value.trim();



  if (name && race && characterclass && background) {
    const response = await fetch('/api/users/characters', {
      method: 'POST',
      body: JSON.stringify({ name, race, characterclass, background }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      alert('Character Submitted!');
    } else {
      alert('Failed to save character </3');
    }
  }
};

document
  .querySelector('#submit-character')
  .addEventListener('submit', submitCharacter);