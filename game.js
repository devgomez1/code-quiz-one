const correct = document.getElementById('correct');
const incorrect = document.querySelector ('#incorrect')
const submission = document.querySelector ('#submission')


let score = 0;
let highscores = []

correct.addEventListener('click', () => {
    correct.classList.remove('.button2')
    correct.classList.add('.correct')
    score++
})

incorrect.addEventListener('click', () => {
    correct.classList.remove('.button2')
    correct.classList.add('.incorrect')
    score--
})

submission.addEventListener("click", () => {
    var submissions = submission.textContent
    push.submissions(highscores)
})


