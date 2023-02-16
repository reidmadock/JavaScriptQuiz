var timeMinutes = document.getElementById("time-count-minutes");
var timeSeconds = document.getElementById("time-count-seconds");
var quizStartButton = document.getElementById("start-button");
var elapsedTime = 0;

function quizTimer() {
    setInterval(function () {
        elapsedTime++;
        timeSeconds.textContent = elapsedTime % 60;
        timeMinutes.textContent = Math.floor(elapsedTime / 60);
    },1000);
}


quizStartButton.addEventListener("click", quizTimer);