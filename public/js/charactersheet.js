const classEl = document.getElementById("character-class")
const raceEl = document.getElementById("character-race")
const bgEl = document.getElementById("character-background")
const strengthEl = document.getElementById("strength")

const classChoice = localStorage.getItem('classChoice');
const raceChoice = localStorage.getItem('raceChoice');
const bgChoice = localStorage.getItem('bgChoice');
const strengthVal = localStorage.getItem('strengthVal');

classEl.value = classChoice
raceEl.value = raceChoice
bgEl.value = bgChoice
strengthEl.value = strengthVal