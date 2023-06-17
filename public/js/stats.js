const statsSubmitBtn = document.getElementById('stats-submit');
const strengthEl = document.getElementById('strength');

const statsSubmit = () => {
    const strengthVal = strengthEl.value

       console.log(strengthVal);

       localStorage.setItem('strengthVal', strengthVal);
}
