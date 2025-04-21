const currentUser = JSON.parse(localStorage.getItem('currentUser'));
if (!currentUser || !currentUser.isAdmin) {
  window.location.href = 'index.html';
}

const users = JSON.parse(localStorage.getItem('users')) || [];
const userScoreList = document.getElementById('user-score-list');

if (users.length === 0) {
  userScoreList.innerHTML = '<p>No Students grade found.</p>';
} else {
  users.forEach(user => {
    const div = document.createElement('div');
    div.style.marginBottom = '1rem';
    div.innerHTML = `<h3>${user.email}</h3>`;
