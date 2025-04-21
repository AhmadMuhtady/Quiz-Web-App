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
	filteredUsers.forEach((user) => {
		for (let quizTitle in user.scores) {
			const userDiv = document.createElement('div');
			userDiv.classList.add('user-score-card');
			userDiv.innerHTML = `
		  <p><strong>First Name:</strong> ${user.firstName}</p>
		  <p><strong>Last Name:</strong> ${user.lastName}</p>
		  <p><strong>Email:</strong> ${user.email}</p>
		  <p><strong>Quiz Title:</strong> ${quizTitle}</p>
		  <p><strong>Score:</strong> ${user.scores[quizTitle]}</p>
		`;
			userScoreList.appendChild(userDiv);
		}
	});
}
