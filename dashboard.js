const currentUser = JSON.parse(localStorage.getItem('currentUser'));
if (!currentUser || !currentUser.isAdmin) {
	window.location.href = 'index.html';
}

const users = JSON.parse(localStorage.getItem('users')) || [];
const userScoreList = document.getElementById('user-score-list');

const filteredUsers = users.filter(
	(user) => user.scores && Object.keys(user.scores).length > 0
);

if (filteredUsers.length === 0) {
	userScoreList.innerHTML = '<p>No quiz results available.</p>';
} else {
	const header = document.createElement('div');
	header.classList.add('score-row', 'score-header');
	header.innerHTML = `
    <div>First Name</div>
    <div>Last Name</div>
    <div>Email</div>
    <div>Quiz Title</div>
    <div>Score</div>
  `;
	userScoreList.appendChild(header);
	filteredUsers.forEach((user) => {
		for (let quizTitle in user.scores) {
			const row = document.createElement('div');
			row.classList.add('score-row');
			row.innerHTML = `
        <div>${user.firstName}</div>
        <div>${user.lastName}</div>
        <div>${user.email}</div>
        <div>${quizTitle}</div>
        <div>${user.scores[quizTitle]}</div>
      `;
			userScoreList.appendChild(row);
		}
	});
}
