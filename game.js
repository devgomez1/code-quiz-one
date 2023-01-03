const correctEl = document.getElementById("correct");
const incorrectEl = document.getElementById("incorrect");
const incorrectEl2 = document.getElementById("incorrect2");
const incorrectEl3 = document.getElementById("incorrect3");

function correctClass() {
  correctEl.classList.remove("button2");
  correctEl.classList.add("correct");
}

function incorrectClass(event) {
  event.target.classList.remove("button2");
  event.target.classList.add("incorrect");
}

correctEl.addEventListener("click", correctClass);
incorrectEl.addEventListener("click", incorrectClass);
incorrectEl2.addEventListener("click", incorrectClass);
incorrectEl3.addEventListener("click", incorrectClass);
