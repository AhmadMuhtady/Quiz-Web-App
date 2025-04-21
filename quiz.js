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
