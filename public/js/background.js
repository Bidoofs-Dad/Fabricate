const bgButtons = document.querySelectorAll('.bg-button');

bgButtons.forEach(function (button) {
    button.addEventListener('click', function () {

        const bgChoice = button.querySelector('p').textContent;
        
        console.log(bgChoice); 

        localStorage.setItem('bgChoice', bgChoice);
    });
});

