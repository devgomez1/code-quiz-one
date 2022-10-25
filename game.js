const correct = document.querySelector ('#correct')

correct.addEventListener('click', () => {
    correct.classList.remove('.button2')
    correct.classList.add('.correct')
})