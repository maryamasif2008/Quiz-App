const questions = [
    {
        question: "What will the following code output? console.log(typeof null);",
        options: ["number", "undefined", "object", "null"],
        answer: 2
    },
    {
        question: "Which of the following is not a JavaScript data type?",
        options: ["Undefined", "Null", "Boolean", "Character"],
        answer: 3
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        options: ["Both A and B", "//", "/* */", "#"],
        answer: 1
    },
    {
        question: "What is the result of 2 + '2' in JavaScript?",
        options: ["4", "22", "undefined", "NaN"],
        answer: 1
    },
    {
        question: "What will the following code output? console.log(0 == '0');",
        options: ["true", "false", "undefined", "TypeError"],
        answer: 0
    }
];

let currentQuestionIndex = 0;
let score = 0;
let timer;

function loadQuestion() {
    const quizDiv = document.getElementById('quiz');
    const question = questions[currentQuestionIndex];
    const timeDiv = document.getElementById('time');
    quizDiv.innerHTML = `
        <h2>${question.question}</h2>
        <div id="options"></div>
    `;
    const optionsDiv = document.getElementById('options');
    question.options.forEach((option, index) => {
        optionsDiv.innerHTML += `<button onclick="checkAnswer(${index})">${option}</button>`;
    });

    let timeLeft = 10; // 5 seconds for each question
    timeDiv.innerText = timeLeft;

    timer = setInterval(() => {
        timeLeft--;
        timeDiv.innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            checkAnswer(null);  // Move to next question if time is up
        }
    }, 1000);
}

function checkAnswer(selectedIndex) {
    const question = questions[currentQuestionIndex];

    if (selectedIndex !== null) {
        if (selectedIndex === question.answer) {
            score++;
        }
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const resultDiv = document.getElementById('result');
    const scoreDiv = document.getElementById('score');
    resultDiv.classList.remove('hidden');
    scoreDiv.innerText = score;
    document.getElementById('quiz').innerHTML = '';
    document.getElementById('timer').style.display = 'none';
}

loadQuestion();
