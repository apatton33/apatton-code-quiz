const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById
('question-container')

const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
var timerElement = document.querySelector('#timer-count');
var timer = 60;
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
    var setTimer = setInterval(function () {
        timer--;
        timerElement.textContent = timer;
        if(timer === 0) {
            clearInterval(setTimer);
            timerElement.textContent = " " + 0;
            endQuiz();
        }
    }, 1000);
}


function endQuiz () {
    
     return   location.href = "score.html";
}



function startQuiz() {
    timerCount = 60;
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    score = 0
    questionContainerElement.classList.remove('hide')
    startTimer()
    showQuestion(questions)
   // setNextQuestion()
}


function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerHTML = "";
    answerButtonsElement.innerHTML = "";
    if(timer === 0 || currentQuestionIndex === questions.length) {
        console.log("RESULT: ", currentQuestionIndex + questions.length)
        return endQuiz()
    }
    var currIndex = question[currentQuestionIndex];
    questionElement.innerText = currIndex.question;
    currIndex.answers.forEach(answer => {
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


console.log(" CURRINDEX-1: ", currentQuestionIndex)

function selectAnswer(event) {
    // get the button that was clicked
    var element = event.target.textContent;
    // get the button's data attributes
    //getAttribute('answer-buttons')
    // check if the button has a data-correct === true
    

    if (element !== questions[currentQuestionIndex].answers[currentQuestionIndex].text) {
        timer -= 10;
    }
    

    currentQuestionIndex++;
    console.log(" CURRINDEX-2: ", currentQuestionIndex)
    showQuestion(questions);
    // if correct, add point to score
    // if incorrect, remove time from the timer
    // Note: you could handle showing the score input here if this was the last question
    //       or you could do it in the click handler for next question button
    // increment currentQuestionIndex
    // show the next question button
}




