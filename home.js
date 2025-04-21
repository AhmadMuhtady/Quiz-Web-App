const currentUser = JSON.parse(localStorage.getItem('currentUser'));
if (!currentUser || currentUser.isAdmin) {
	window.location.href = 'index.html';
}
