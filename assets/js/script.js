var timeMinutes = document.getElementById("time-count-minutes");
var timeSeconds = document.getElementById("time-count-seconds");
var quizStartButton = document.getElementById("start-button");
var startScreen = document.getElementById("start-quiz-screen");
var quizScreen = document.getElementById("quiz-questions-screen");
var elapsedTime = 0;
var answerKey = [1,3,5,2];
var highscore = 0;

function quizTimer() {
    setInterval(function () {
        elapsedTime++;
        timeSeconds.textContent = elapsedTime % 60;
        timeMinutes.textContent = Math.floor(elapsedTime / 60);
    },1000);
}

function beginQuiz() {
    quizTimer();
    var questionNum = 0;
    startScreen.style.visibility = "collapse";
    quizScreen.style.visibility = "visible";
    loadQuestion(0);
}

function loadQuestion(num) {
    var questionText = document.getElementById("question-prompt");
    var answerButtons = document.getElementById("answer-options");
    var correctAnswer = answerKey[num];
    //console.log("answer key", correctAnswer);
    questionText.textContent = quesAndAns[num][0];

    // if (answerButtons.hasChildNodes) {
    //     // console.log(answerButtons.childNodes);
    //     answerButtons.childNodes.forEach(element => element.remove());
    // }
    // if (answerButtons.hasChildNodes.length > 0) {  
    //     while (answerButtons.hasChildNodes) {
    //         answerButtons.removeChild(answerButtons.firstChild);
    //     }    
    // }

    // console.log("Amount of Answers",quesAndAns[num].length)
    for (var i = 1; i < quesAndAns[num].length; i++) {
        var button = document.createElement('button');
        button.setAttribute('class', 'option');
        button.setAttribute('data-number',(i));
        //button.setAttribute('text', quesAndAns[num][i]);
        button.textContent = quesAndAns[num][i];
        answerButtons.appendChild(button);
        button.addEventListener("click", function(event) {
            //checkAnswer();
            // console.log(event.target);
            // console.log(event.target.dataset.number);
            if (event.target.dataset.number == correctAnswer) {
                console.log("correct!");
                highscore++;
            } else {
                console.log("Incorrect :(");
            }
            // clearWindow();
            if (num < answerKey.length) {
                // clearWindow()
                loadQuestion(++num);
            }
        })
    }

    // document.addEventListener("option", function  (event) {
    //     console.log("fired");
    // })
}

function clearWindow() {
    var questionText = document.getElementById("question-prompt");
    var answerButtons = document.getElementById("answer-options");
    questionText.textContent = ""
    var allButtons = document.getElementsByClassName("option")
    console.log("hopefully this is all the buttons: ",allButtons);
    for(var i = 0; i < allButtons.length; i++) {
        //allButtons[i].removeEventListener();
        allButtons[i].remove();
    }
    
}

// function checkAnswer() {
//     console.log("fired");
// }


// document.addEventListener("DOMContentLoaded", function (event) {

// })

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