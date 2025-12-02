// Make a random number between 1 and 20
let secretNumber = Math.floor(Math.random() * 200) + 1;

// Find the guess button
document.getElementById("guessBtn").addEventListener("click", checkGuess);

// Find the reset button (we’ll add it in HTML)
document.getElementById("resetBtn").addEventListener("click", function() {
  secretNumber = Math.floor(Math.random() * 200) + 1; // new secret number
  document.getElementById("message").textContent = "Game reset! Make a new guess.";
  document.getElementById("guessInput").value = ""; // clear input
});

function checkGuess() {
  let guess = Number(document.getElementById("guessInput").value);
  let difference = Math.abs(secretNumber - guess); // difference between guess and secret

  if (guess === secretNumber) {
    document.getElementById("message").textContent = "Correct! You win!";
  } 
  else if (difference === 10) {
    if (guess > secretNumber) document.getElementById("message").textContent = "Just a little high!";
    else document.getElementById("message").textContent = "Just a little low!";
  } 
  else if (guess > secretNumber) {
    document.getElementById("message").textContent = "Too high!";
  } 
  else {
    document.getElementById("message").textContent = "Too low!";
  }
}
