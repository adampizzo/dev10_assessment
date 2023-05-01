let numToGuess = Math.floor(Math.random() * 20);
console.log(`Number to Guess: ${numToGuess}.`);


const playerGuess = () => {
    console.log(playerGuessInput.value);
    
};

const guessBtn = document.getElementById("guessBtn");

guessBtn.addEventListener("click", playerGuess);
