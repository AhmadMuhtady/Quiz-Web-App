const loginTab = document.getElementById('show-register');
const registerTab = document.getElementById('show-login');
const loginForm = document.querySelector('.login-container');
const registerForm = document.querySelector('.register-container');

loginTab.addEventListener('click', () => {
	loginForm.classList.add('hidden');
	registerForm.classList.remove('hidden');
});
