const correctEl = document.getElementById("correct");
const incorrectEl = document.getElementById("incorrect");

function changeClass() {
    correctEl.classList.remove('button2');
    correctEl.classList.add('correct');
}

correctEl.addEventListener('click', changeClass);