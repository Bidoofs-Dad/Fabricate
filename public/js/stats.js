const statsSubmitBtn = document.getElementById('stats-submit');
const strengthEl = document.getElementById('strength');
const dexterityEl = document.getElementById('dexterity');
const constitutionEl = document.getElementById('constitution');
const intelligenceEl = document.getElementById('intelligence');
const wisdomEl = document.getElementById('wisdom');
const charismaEl = document.getElementById('charisma');

const statsSubmit = () => {
    const strengthVal = strengthEl.value
    const dexterityVal = dexterityEl.value
    const constitutionVal = constitutionEl.value
    const intelligenceVal = intelligenceEl.value
    const wisdomVal = wisdomEl.value
    const charismaVal = charismaEl.value

       console.log(strengthVal);

       localStorage.setItem('strengthVal', strengthVal);
       localStorage.setItem('dexterityVal', dexterityVal);
       localStorage.setItem('constitutionVal', constitutionVal);
       localStorage.setItem('intelligenceVal', intelligenceVal);
       localStorage.setItem('wisdomVal', wisdomVal);
       localStorage.setItem('charismaVal', charismaVal);
}
