let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 10;

function checkGuess() {
    const inputElement = document.getElementById("guess");
    const feedbackElement = document.getElementById("feedback");
    const guess = parseInt(inputElement.value); // Ensure the guess is treated as a number

    attempts--;

    if (guess === randomNumber) {
        feedbackElement.innerHTML = "Congratulations!!";
        feedbackElement.style.color = "green";
        inputElement.disabled = true; // Disable input to prevent further guesses
    } else if (guess < randomNumber) {
        feedbackElement.innerHTML = "Too low! Number of Attempts: " + attempts;
        feedbackElement.style.color = "red";
    } else {
        feedbackElement.innerHTML = "Too high! Number of Attempts: " + attempts;
        feedbackElement.style.color = "red";
    }

    if (attempts <= 0 && guess !== randomNumber) {
        feedbackElement.innerHTML = "Game Over! The number was " + randomNumber;
        feedbackElement.style.color = "red";
        inputElement.disabled = true; // Disable input to prevent further guesses
    }
}

