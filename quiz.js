const currentUser = JSON.parse(localStorage.getItem('currentUser'));
if (!currentUser || currentUser.isAdmin) {
	window.location.href = 'index.html';
}

const quizData = JSON.parse(localStorage.getItem('currentQuiz'));
const quizForm = document.getElementById('quiz-form');
const quizTitle = document.getElementById('quiz-title');
const resultDiv = document.getElementById('quiz-result');

if (!quizData) {
	quizTitle.textContent = 'No quiz selected!';
} else {
	quizTitle.textContent = quizData.title;

	quizData.questions.forEach((q, index) => {
		const qDiv = document.createElement('div');
		qDiv.innerHTML = `<h3>${index + 1}. ${q.question}</h3>`;
		q.options.forEach((option, i) => {
			const label = document.createElement('label');
			label.innerHTML = `
          <input type="radio" name="q${index}" value="${option}" required />
          ${option}
        `;
			qDiv.appendChild(label);
			qDiv.appendChild(document.createElement('br'));
		});
		quizForm.appendChild(qDiv);
	});
}

document.getElementById('submit-quiz').addEventListener('click', function (e) {
	e.preventDefault();
	const formData = new FormData(quizForm);
	let score = 0;

	quizData.questions.forEach((q, index) => {
		const selected = formData.get(`q${index}`);
		if (selected === q.answer) {
			score++;
		}
	});
	const users = JSON.parse(localStorage.getItem('users')) || [];
	const userIndex = users.findIndex((u) => u.email === currentUser.email);
	if (userIndex !== -1) {
		users[userIndex].scores = users[userIndex].scores || {};
		users[userIndex].scores[quizData.title] = score;
		localStorage.setItem('users', JSON.stringify(users));
	}
	resultDiv.innerHTML = `<h2>Your score: ${score}/${quizData.questions.length}</h2>`;
});
