const loginForm = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();
  
  if (email && password) {

    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (!response.ok) {
      alert('Log in failed');
    } else{
      window.location.href='/';
    }
  }
};

document
  .querySelector('#login-form')
  .addEventListener('submit', loginForm);
  