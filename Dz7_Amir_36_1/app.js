const resultDisplay = document.getElementById('result');

function checkGuess() {
    const userGuessInput = document.getElementById('userGuess');
    const userGuess = parseInt(userGuessInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        resultDisplay.textContent = "Введите число от 1 до 100";
        resultDisplay.style.color = "black";
        return;
    }

    const randomNumber = Math.floor(Math.random() * 100) + 1;

    if (userGuess < randomNumber) {
        resultDisplay.textContent = "Загаданное число больше";
        resultDisplay.style.color = "green";
    } else if (userGuess > randomNumber) {
        resultDisplay.textContent = "Загаданное число меньше";
        resultDisplay.style.color = "red";
    } else {
        resultDisplay.textContent = "Вы угадали!";
        resultDisplay.style.color = "black";
    }
}
