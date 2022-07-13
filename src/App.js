import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'What is the capital of India?',
			answerOptions: [
				{ answerText: 'New Delhi', isCorrect: true },
				{ answerText: 'Kolkata', isCorrect: false },
				{ answerText: 'Chennai', isCorrect: false },
				{ answerText: 'Mumbai', isCorrect: false },
			],
		},
		{
			questionText: 'Where was Lord Krishna born?',
			answerOptions: [
				{ answerText: 'Mathura', isCorrect: true },
				{ answerText: 'Vrindavan', isCorrect: false },
				{ answerText: 'Magadh', isCorrect: false },
				{ answerText: 'Ayodhya', isCorrect: false },
			],
		},
		{
			questionText: 'How many avatars does Lord Vishnu have?',
			answerOptions: [
				{ answerText: '10', isCorrect: true },
				{ answerText: '8', isCorrect: false },
				{ answerText: '12', isCorrect: false },
				{ answerText: 'No avatar', isCorrect: false },
			],
		},
		{
			questionText: 'Last avatar of Lord Vishnu?',
			answerOptions: [
				{ answerText: 'Ram', isCorrect: false },
				{ answerText: 'Krishna', isCorrect: false },
				{ answerText: 'Buddha', isCorrect: false },
				{ answerText: 'Kalki', isCorrect: true },
			],
		},
		{
			questionText: 'How many days did Mahabharat war last?',
			answerOptions: [
				{ answerText: '18', isCorrect: true },
				{ answerText: '20', isCorrect: false },
				{ answerText: '30', isCorrect: false },
				{ answerText: '16', isCorrect: false },
			],
		},
		{
			questionText: 'How many brothers did Duryodhan had?',
			answerOptions: [
				{ answerText: '99', isCorrect: true },
				{ answerText: '101', isCorrect: false },
				{ answerText: '100', isCorrect: false },
				{ answerText: '98', isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
