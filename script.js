const loginTab = document.getElementById('show-register');
const registerTab = document.getElementById('show-login');
const loginForm = document.querySelector('.login-container');
const registerForm = document.querySelector('.register-container');

loginTab.addEventListener('click', () => {
	loginForm.classList.add('hidden');
	registerForm.classList.remove('hidden');
});
registerTab.addEventListener('click', () => {
	registerForm.classList.add('hidden');
	loginForm.classList.remove('hidden');
});

const firstName = document.getElementById('register-first-name').value;
const lastName = document.getElementById('register-last-name').value;
const email = document.getElementById('register-email').value;
const password = document.getElementById('register-password').value;
