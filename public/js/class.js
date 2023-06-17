const classButtons = document.querySelectorAll('.class-button');

classButtons.forEach(function (button) {
    button.addEventListener('click', function () {

        const classChoice = button.querySelector('p').textContent;
        
        console.log(classChoice); 

        localStorage.setItem('classChoice', classChoice);
    });
});