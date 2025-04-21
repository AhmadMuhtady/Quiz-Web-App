const currentUser = JSON.parse(localStorage.getItem('currentUser'));
if (!currentUser || !currentUser.isAdmin) {
	window.location.href = 'index.html';
}

const users = JSON.parse(localStorage.getItem('users')) || [];
const userScoreList = document.getElementById('user-score-list');

if (users.length === 0) {
	userScoreList.innerHTML = '<p>No Students grade found.</p>';
} else {
	users.forEach((user) => {
		const div = document.createElement('div');
		div.style.marginBottom = '1rem';
		div.innerHTML = `<h3>${user.email}</h3>`;
		if (user.scores && Object.keys(user.scores).length > 0) {
			const ul = document.createElement('ul');
			for (let quizTitle in user.scores) {
				const li = document.createElement('li');
				li.textContent = `${quizTitle}: ${user.scores[quizTitle]}`;
				ul.appendChild(li);
			}
			div.appendChild(ul);
		} else {
			div.innerHTML += '<p>No quizzes taken yet.</p>';
		}

		userScoreList.appendChild(div);
	});
}
