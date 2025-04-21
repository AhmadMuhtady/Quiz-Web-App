const currentUser = JSON.parse(localStorage.getItem('currentUser'));
if (!currentUser || currentUser.isAdmin) {
	window.location.href = 'index.html';
}

const quizData = JSON.parse(localStorage.getItem('currentQuiz'));
const quizForm = document.getElementById('quiz-form');
const quizTitle = document.getElementById('quiz-title');
const resultDiv = document.getElementById('quiz-result');
