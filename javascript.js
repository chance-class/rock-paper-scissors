//The computer needs to randomly make a choice between Rock, Paper, or Scissors.

let choices = ['Rock', 'Paper', 'Scissors'];
let computerSelection;

function getComputerSelection() {
  computerSelection = choices[Math.floor(Math.random() * choices.length)];
}



//Get input from the user to make a choice between Rock, Paper, or Scissors.

let playerScore = 0;
let computerScore = 0;

function gameRound () {
let playerSelection = prompt("What is your choice?");
if (playerSelection === "Rock" && computerSelection === "Paper") {
  alert("You lose! Paper beats Rock.");
  return computerScore++;
} else if (playerSelection === "Paper" && computerSelection == "Rock") {
  alert("You win! Paper beats Rock.");
  return playerScore++;
} else if (playerSelection === "Rock" && computerSelection === "Scissors") {
  alert("You win! Rock beats Scissors.");
  return playerScore++;
} else if (playerSelection === "Scissors" && computerSelection === "Rock") {
  alert("You lose! Rock beats Scissors.");
  return computerScore++;
} else if (playerSelection === "Scissors" && computerSelection === "Paper") {
  alert("You win! Scissors beats Paper.");
  return playerScore++;
} else if (playerSelection === "Paper" && computerSelection === "Scissors") {
  alert("You lose! Scissors beats Paper.");
  return computerScore++;
} else if (playerSelection === computerSelection) {
  alert("It's a tie!");
} else if (playerSelection === ' ' || playerSelection === null) {
    alert('You canceled the game.');
} else {
  alert('Choice must be either Rock, Paper, or Scissors.');
}
}

getComputerSelection();
gameRound();

getComputerSelection();
gameRound();

getComputerSelection();
gameRound();

getComputerSelection();
gameRound();

getComputerSelection();
gameRound();

console.log(computerScore);
console.log(playerScore);

//Compare the computer's choice and the user's choice and declare the winner.

//Add 1 to the score of the winner.

//Repeat 4 more times.

//Alert that is the end of the game.
