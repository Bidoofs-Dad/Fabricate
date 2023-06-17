const classEl = document.getElementById("character-class")
const raceEl = document.getElementById("character-race")

const classChoice = localStorage.getItem('classChoice');
const raceChoice = localStorage.getItem('raceChoice');

classEl.value = classChoice
raceEl.value = raceChoice