const raceButtons = document.querySelectorAll('.race-button');

raceButtons.forEach(function (button) {
    button.addEventListener('click', function () {

        const raceChoice = button.querySelector('h1').textContent;
        
        console.log(raceChoice); 

        localStorage.setItem('raceChoice', raceChoice);
    });
});

