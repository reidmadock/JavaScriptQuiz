var timeMinutes = document.getElementById("time-count-minutes");
var timeSeconds = document.getElementById("time-count-seconds");
var quizStartButton = document.getElementById("start-button");
var startScreen = document.getElementById("start-quiz-screen");
var quizScreen = document.getElementById("quiz-questions-screen");
var elapsedTime = 0;

function quizTimer() {
    setInterval(function () {
        elapsedTime++;
        timeSeconds.textContent = elapsedTime % 60;
        timeMinutes.textContent = Math.floor(elapsedTime / 60);
    },1000);
}

function beginQuiz() {
    quizTimer();
    startScreen.style.visibility = "collapse";
    quizScreen.style.visibility = "visible";
    trackQuiz();
}

function trackQuiz() {
    var score = 0;
    var questionCount = 0;
    var quizRunning = true;
    while (quizRunning) {
        loadQuestion(questionCount++)
        quizRunning = false;
    }
}

function loadQuestion(num) {
    var questionText = document.getElementById("question-prompt");
    var answerButtons = document.getElementById("answer-options");
    questionText.textContent = "Changed in function";
    var button = document.createElement('BUTTON');
    button.textContent = "Option A.";
    answerButtons.appendChild(button);
}


quizStartButton.addEventListener("click", beginQuiz);