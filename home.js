const currentUser = JSON.parse(localStorage.getItem('currentUser'));
if (!currentUser || currentUser.isAdmin) {
	window.location.href = 'index.html';
}
document.querySelector(
	'h1'
).textContent = `🧑🏻‍🎓 Welcome, ${currentUser.firstName}!`;

let quizzes = JSON.parse(localStorage.getItem('quizzes'));
if (!quizzes) {
	quizzes = [
		{
			id: 1,
			title: 'General Knowledge',
			questions: [
				{
					question: 'Who was the first President of the United States?',
					options: ['Thomas Jefferson', 'George Washington', 'Abraham Lincoln'],
					answer: 'George Washington',
				},
				{
					question: 'What ship did the Pilgrims sail on in 1620?',
					options: ['The Mayflower', 'The Nina', 'The Victoria'],
					answer: 'The Mayflower',
				},
				{
					question: 'Which civilization built Machu Picchu?',
					options: ['Aztec', 'Maya', 'Inca'],
					answer: 'Inca',
				},
			],
		},
	];
	localStorage.setItem('quizzes', JSON.stringify(quizzes));
}
const quizList = document.getElementById('quiz-list');
const takeQuizButton = document.createElement('button');
takeQuizButton.textContent = 'Take the Quiz';
takeQuizButton.addEventListener('click', () => {
	localStorage.setItem('currentQuiz', JSON.stringify(quizzes[0])); // only one quiz
	window.location.href = 'quiz.html';
});
quizList.appendChild(takeQuizButton);
