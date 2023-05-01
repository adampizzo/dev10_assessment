let numToGuess = Math.floor(Math.random() * 20);
console.log(`Number to Guess: ${numToGuess}.`);

const playerGuess = () => {
    const playerGuess = parseInt(playerGuessInput.value);
    evaluateGuess(playerGuess);
};

const evaluateGuess = (guess) => {
    guessStatus.removeAttribute("hidden");
    if (guess === numToGuess) {
        guessStatus.innerText = "You got it!";
    } else if (guess < numToGuess) {
        guessStatus.innerText = "No, try a higher number.";
    } else {
        guessStatus.innerText = "No, try a lower number.";
    }
};

const guessBtn = document.getElementById("guessBtn");
const guessStatus = document.getElementById("guessStatus");

guessBtn.addEventListener("click", playerGuess);
