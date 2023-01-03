const correctEl = document.getElementById("correct");
const incorrectEl = document.getElementById("incorrect");
const incorrectEl2 = document.getElementById("incorrect2");
const incorrectEl3 = document.getElementById("incorrect3");
const userScore = document.getElementById("test1");

let score = sessionStorage.getItem("score") || 0;

function correctClass() {
  correctEl.classList.remove("button2");
  correctEl.classList.add("correct");
  score++;
  sessionStorage.setItem("score", score);
  console.log(score);
  updateScore();
}

function incorrectClass(event) {
  event.target.classList.remove("button2");
  event.target.classList.add("incorrect");
  score--;
  sessionStorage.setItem("score", score);
  console.log(score);
  updateScore();
}

function updateScore() {
  userScore.textContent = `Score: ${score} out of 4`;
}

document.addEventListener("DOMContentLoaded", function () {
  updateScore();
});

correctEl.addEventListener("click", correctClass);
incorrectEl.addEventListener("click", incorrectClass);
incorrectEl2.addEventListener("click", incorrectClass);
incorrectEl3.addEventListener("click", incorrectClass);
