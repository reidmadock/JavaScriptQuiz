var timeMinutes = document.getElementById("time-count-minutes");
var timeSeconds = document.getElementById("time-count-seconds");
var quizStartButton = document.getElementById("start-button");
var startScreen = document.getElementById("start-quiz-screen");
var quizScreen = document.getElementById("quiz-questions-screen");
var endScreen = document.getElementById("end-quiz-screen");
var elapsedTime = 0;
var answerKey = [1,3,5,2];
var highscore = 0;
var totalTime = 100;
var isQuizOver = false;

function countdown() {
    var timeInterval = setInterval(function () {
        totalTime--;
        timeSeconds.textContent = totalTime;
      if(totalTime === 0 || totalTime < 0 || isQuizOver) {
        clearInterval(timeInterval);
        loadEndScreen();
      }
    },1000)
}

function quizTimer() {
    setInterval(function () {
        elapsedTime++;
        timeSeconds.textContent = elapsedTime % 60;
        timeMinutes.textContent = Math.floor(elapsedTime / 60);
    },1000);
}

function beginQuiz() {
    // quizTimer();
    countdown();
    //var questionNum = 0;
    startScreen.style.visibility = "collapse";
    quizScreen.style.visibility = "visible";
    loadQuestion(0);
}

function loadQuestion(num) {
    var questionText = document.getElementById("question-prompt");
    var answerButtons = document.getElementById("answer-options");
    var correctAnswer = answerKey[num];
    questionText.textContent = quesAndAns[num][0];

    for (var i = 1; i < quesAndAns[num].length; i++) {
        var button = document.createElement('button');
        button.setAttribute('class', 'option');
        button.setAttribute('data-number',(i));
        //button.setAttribute('text', quesAndAns[num][i]);
        button.textContent = quesAndAns[num][i];
        answerButtons.appendChild(button);

        button.addEventListener("click", function(event) {
            if (event.target.dataset.number == correctAnswer) {
                console.log("correct!");
                highscore++;
            } else {
                totalTime -= 5;
                console.log("Incorrect :(");
            }
            clearWindow();
            if (num < answerKey.length - 1) {
                // clearWindow()
                loadQuestion(++num);
            } else {
                isQuizOver = true;
                loadEndScreen();
            }
        })
    }
}
/* since removing child elements can't be done in a loop the clearWindow() function uses recursion to remove all buttons */
function clearWindow() {
    // var questionText = document.getElementById("question-prompt");
    // console.log("Clearing window...");
    var answerButtons = document.getElementById("answer-options");
    // questionText.textContent = ""
    // var allButtons = document.getElementsByClassName("option")
    // console.log("hopefully this is all the buttons: ", allButtons);
    // for(var i = 0; i < allButtons.length; i++) {
    //     allButtons[i].remove();
    // }
    // console.log(answerButtons.childNodes);
    // for (var i = 0; i < answerButtons.childNodes.length; i++) {
    //     console.log("Removing first child...")
    //     answerButtons.firstChild.remove();
    // }
    if (answerButtons.childNodes.length > 0) {
        console.log("Removing first child recursively...")
        answerButtons.firstChild.remove();
        clearWindow();
    }
    
}

function loadEndScreen() {
    quizScreen.style.visibility = "collapse";
    endScreen.style.visibility = "visible";
    // var displayMsg = document.createElement("h2")
    // displayMsg.textContent = "Congratulations!"
    // endScreen.append(displayMsg);
    var currentScore = document.getElementById("score");
    currentScore.textContent = (highscore * 10);

}

quizStartButton.addEventListener("click", beginQuiz);
/* 2D array, [][] -> [question #][question data] where N_{0} is question data and N_{1,..,M} are options.
therefor [0][0] is the first question, [0][1] is the first answer choice, [1][0] is the second question.
This has the added benefit of minimizing confusion for the answer key lining up with the indecies of answers
as in Option 1. == 1 instead of Option 1. == 0 */
var quesAndAns = [
    ["What does DOM stand for?","Document Object Model","Derived Object Model","Document Object Main","It doesn't mean anything"],
    ["What does DOM stand for?","Document Object Model","Derived Object Model","Document Object Main","It doesn't mean anything"],
    ["What does DOM stand for?","Document Object Model","Derived Object Model","Document Object Main","It doesn't mean anything"],
    ["What does DOM stand for?","Document Object Model","Derived Object Model","Document Object Main","It doesn't mean anything"]];