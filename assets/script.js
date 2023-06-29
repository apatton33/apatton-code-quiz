const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById
('question-container')

const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
var timerElement = document.querySelector('timer-count');
var timer;
var timerCount;

let shuffledQuestions
let currentQuestionIndex = 0;
let score = 0;

const questions = [
    {
        question:'In which HTML tag do we put the JavaScript?',
        answers: [
            { text: '<script>', correct: true },
            { text: '<js>', correct: false},
            { text: '<scripting>', correct: false},
            { text: '<javascript>', correct: false},
        ]
    }, 
    {
        question:'Which of the following keywords is used to define a variable in JavaScript',
        answers: [
            { text: 'var', correct: false},
            { text: 'let', correct: false},
            { text: 'Both A and B', correct: true},
            { text: 'None of the above', correct: false},
        ]
    },
    {
        question:'How can you add a comment in a JavaScript?:',
        answers: [
            { text: '//This is a comment', correct: true },
            { text: '-This is a comment', correct: false},
            { text: '<!--This is a comment-->', correct: false},
            { text: '<This is a comment', correct: false},
        ]
    }
];



startButton.addEventListener('click', startQuiz)


function startTimer () {
    
}



function startQuiz() {
    timerCount = 60;
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    score = 0
    questionContainerElement.classList.remove('hide')
    startTimer()
    setNextQuestion()
}


function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click' , selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}


function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}



function selectAnswer(event) {
    // get the button that was clicked
    document.getElementById('btn')
    // get the button's data attributes
    // check if the button has a data-correct === true
    // if correct, add point to score
    // if incorrect, remove time from the timer
    // Note: you could handle showing the score input here if this was the last question
    //       or you could do it in the click handler for next question button
    // increment currentQuestionIndex
    // show the next question button
}




