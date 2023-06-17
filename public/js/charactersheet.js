const classEl = document.getElementById("character-class")
const raceEl = document.getElementById("character-race")
const bgEl = document.getElementById("character-background")

const classChoice = localStorage.getItem('classChoice');
const raceChoice = localStorage.getItem('raceChoice');
const bgChoice = localStorage.getItem('bgChoice');

classEl.value = classChoice
raceEl.value = raceChoice
bgEl.value = bgChoice