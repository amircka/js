function checkNumber() {
    var userNumber = parseInt(document.getElementById('userInput').value);
    if (isNaN(userNumber) || userNumber < 1 || userNumber > 100) {
        alert('Please enter a valid number between 1 and 100.');
        return;
    }

    var generatedNumber = Math.floor(Math.random() * 100) + 1;
    var hintElement = document.getElementById('hint');

    if (userNumber < generatedNumber) {
        hintElement.innerText = "The generated number is greater.";
    } else if (userNumber > generatedNumber) {
        hintElement.innerText = "The generated number is smaller.";
    } else {
        hintElement.innerText = "Congratulations! You guessed the number!";
    }
}