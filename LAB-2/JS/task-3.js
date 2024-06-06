let randomNumber = Math.floor(Math.random() * 11);
let attempts = 3;

function guessNumber() {
    let guess = parseInt(document.getElementById("guessInput").value, 10);
    let attemptsLeftElement = document.getElementById("attemptsLeft");

    if (isNaN(guess) || guess < 0 || guess > 10) {
        alert("Будь ласка, введіть число від 0 до 10");
        return;
    }

    attempts--;

    if (guess === randomNumber) {
        alert("Вітаємо! Ви вгадали число.");
        resetGame();
        return;
    } else if (guess < randomNumber) {
        alert("Загадане число більше.");
    } else {
        alert("Загадане число менше.");
    }

    if (attempts === 0) {
        alert(`На жаль, ви не вгадали число. Це було ${randomNumber}.`);
        resetGame();
        return;
    }

    attemptsLeftElement.innerHTML = `Залишилось спроб: ${attempts}`;
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 11);
    attempts = 3;
    document.getElementById("guessInput").value = '';
    document.getElementById("attemptsLeft").innerHTML = 'Залишилось спроб: 3';
}
