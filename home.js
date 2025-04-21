const currentUser = JSON.parse(localStorage.getItem('currentUser'));
if (!currentUser || currentUser.isAdmin) {
	window.location.href = 'index.html';
}
document.querySelector(
	'h1'
).textContent = `🧑🏻‍🎓 Welcome, ${currentUser.firstName}!`;
