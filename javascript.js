//The computer needs to randomly make a choice between Rock, Paper, or Scissors.

let choices = ['rock', 'paper', 'scissors'];
let computerSelection;

function getComputerSelection() {
  computerSelection = choices[Math.floor(Math.random() * choices.length)];
}



//Get input from the user to make a choice between Rock, Paper, or Scissors.

let playerScore = 0;
let computerScore = 0;

function gameRound () {
let playerSelection = prompt("What is your choice?");
if (playerSelection === ' ' || playerSelection === null) {
  alert('You canceled the game. You forfeit this round.');
  return computerScore++;
} else if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper") {
  alert("You lose! Paper beats Rock.");
  return computerScore++;
} else if (playerSelection.toLowerCase() === "paper" && computerSelection == "rock") {
  alert("You win! Paper beats Rock.");
  return playerScore++;
} else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
  alert("You win! Rock beats Scissors.");
  return playerScore++;
} else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") {
  alert("You lose! Rock beats Scissors.");
  return computerScore++;
} else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
  alert("You win! Scissors beats Paper.");
  return playerScore++;
} else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") {
  alert("You lose! Scissors beats Paper.");
  return computerScore++;
} else if (playerSelection.toLowerCase() === computerSelection) {
  alert("It's a tie!");
} else {
  alert('Choice must be either Rock, Paper, or Scissors. You forfeit this round.');
  return computerScore++;
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
