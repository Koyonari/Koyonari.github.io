document.getElementById("start-quiz").addEventListener("click", function() {
    document.querySelector(".quiz").style.display = "block";
	document.querySelector(".quizsec").style.height = "45rem";
	document.querySelector("#start-quiz").style.display = "none";

	if (window.innerWidth < 768) {
		document.querySelector(".quizsec").style.height = "70rem";
	}
	
	//Fade in buttons
	const answerButtons = document.querySelectorAll("#answer-buttons .quizbtn");
    answerButtons.forEach(button => {
        button.style.opacity = 0;
        setTimeout(() => button.style.opacity = 1, 100 * 2);
    });
});

const questions = [
	{
		question: "The long-run objective of financial management is to:",
		answers: [{text: "a) Maximize earnings per share", correct: false},
				{text: "b) Maxmimize the value of the firm's common stock", correct: true},
				{text: "c) Maximize return on investment", correct: false},
				{text: "d) Maximize market share", correct: false}
			]
	},
	{
		question: "The market price of a share of common stock is determined by:",
		answers: [{text: "a) The board of directors of the firm", correct: false},
				{text: "b) The stock exchange on which the stock is listed", correct: false},
				{text: "c) The president of the company", correct: false},
				{text: "d) Individuals buying and selling the stock", correct: true}
			]
	},
	{
		question: "Time value of money supports the comparison of cash flows recorded at different time period by",
		answers: [{text: "a) Discounting all cash flows to a common point of time", correct: false},
				{text: "b) Compounding all cash flows to a common point of time", correct: false},
				{text: "c) Both Compounding & Discounting cash flows", correct: true},
				{text: "d) Deducting the differences in cash flows at different time period", correct: false}
			]
	},
	{
		question: "Risk of two securities with different expected return can be compared with",
		answers: [{text: "a) Coefficient of variation", correct: true},
				{text: "b) Standard deviation of securities", correct: false},
				{text: "c) Variance of securities", correct: false},
				{text: "d) Alpha of securities", correct: false}
			]
	},
	{
		question: "____________ is defined as the length of time required to recover the initial cash out-lay.",
		answers: [{text: "a) Payback-period", correct: true},
				{text: "b) Inventory conversion period", correct: false},
				{text: "c) Discounted payback-period", correct: false},
				{text: "d) Budget period", correct: false}
			]
	},
	{
		question: "____________ is the length of time between the firm’s actual cash expenditure and its own cash receipt.",
		answers: [{text: "a) Cash conversion cycle", correct: false},
				{text: "b) Net operating cycle", correct: true},
				{text: "c) Working capital cycle", correct: false},
				{text: "d) Gross operating cycle", correct: false}
			]
	},
	{
		question: "When goods are sent to the consignee- the journal entry passed",
		answers: [{text: "a) Goods A/c Dr., Consignment A/c Cr.", correct: false},
				{text: "b) Consignment A/c Dr, Cash A/c Cr.", correct: false},
				{text: "c) Goods sent on Consignment A/c Dr., Consignment A/c Cr.", correct: false},
				{text: "d) Consignment A/c Dr., Goods Sent on Consignment A/c Cr.", correct: true}
			]
	},
	{
		question: "Which type of account is entered in profit & loss a/c?",
		answers: [{text: "a) Nominal", correct: true},
				{text: "b) Personal", correct: false},
				{text: "c) Real", correct: false},
				{text: "d) Goodwill", correct: false}
			]
	},
	{
		question: "A company can improve (lower) its debt-to-total assets ratio by doing which of the following?",
		answers: [{text: "a) Borrow more", correct: false},
				{text: "b) Sell common stock", correct: true},
				{text: "c) Shift short term to long term", correct: false},
				{text: "d) Shift long term to short term", correct: false}
			]
	},
	{
		question: "A profitability index of .85 for a project means that",
		answers: [{text: "a) The present value of benefits is 85% greater than the project's costs", correct: false},
				{text: "b) The project's NPV is greater than zero", correct: false},
				{text: "c) The project returns 85 cents in present value for each current rupee invested", correct: true},
				{text: "d) The payback period is less than on year", correct: false}
			]
	},
];

//Shuffle the questions array randomly
questions.sort(() => Math.random() - 0.5);

//Pick only the first 5 questions
const selectedQuestions = questions.slice(0, 5);

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;
let maxQuestions = selectedQuestions.length;

function startQuiz() {
	currentQuestionIndex = 0;
	score = 0;
	nextButton.innerHTML = "Next";
	resetState();
	showQuestion();
};

function showQuestion() {
	resetState();
	let currentQuestion = questions[currentQuestionIndex];
	let questionNo = currentQuestionIndex + 1;
	questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

	currentQuestion.answers.forEach(answer => {
		const button = document.createElement('button');
		button.innerHTML = answer.text;
		button.classList.add('quizbtn');
		answerButtons.appendChild(button);
		if (answer.correct) {
			button.dataset.correct = answer.correct;
		}
		button.addEventListener('click', selectAnswer);
	});
};

function resetState() {
	nextButton.style.display = "none";
	while (answerButtons.firstChild) {
		answerButtons.removeChild(answerButtons.firstChild);
	}
}

function selectAnswer(e) {
	const selectedBtn = e.target;
	const isCorrect = selectedBtn.dataset.correct === "true";
	if (isCorrect) {
		selectedBtn.classList.add('correct');
		score++;
	}
	else {
		selectedBtn.classList.add('incorrect');
	}
	Array.from(answerButtons.children).forEach(button => {
		if (button.dataset.correct === "true") {
			button.classList.add('correct');
		}
		button.disabled = true;
	});
	nextButton.style.display = "block";
}

function showScore() {
	resetState();
	questionElement.innerHTML = `Your score is ${score}/5`;
	nextButton.innerHTML = "Restart";
	nextButton.style.display = "block";
}

function handleNextButton() {
	currentQuestionIndex++;
	if (currentQuestionIndex < 5) {
		showQuestion();
	}
	else {
		showScore();
	}
}

nextButton.addEventListener('click', () => {
	if (currentQuestionIndex < maxQuestions) {
	  handleNextButton(); // Go to next question if ongoing
	} else {
	  startQuiz(); // Restart the quiz if finished
	}
  });  

startQuiz();