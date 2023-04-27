//The computer needs to randomly make a choice between Rock, Paper, or Scissors.

let choices = ['rock', 'paper', 'scissors'];
let computerSelection;

function getComputerSelection() {
  computerSelection = choices[Math.floor(Math.random() * choices.length)];
}



//Get input from the user to make a choice between Rock, Paper, or Scissors.

let playerScore = 0;
let computerScore = 0;

alert("Let's play Rock Paper Scissors! Best out of 5 wins. Think you can beat me?");

function gameRound () {
let playerSelection = prompt("What is your choice?");

//Compare the computer's choice and the user's choice and declare the winner.

//Add 1 to the score of the winner.

if (playerSelection === ' ' || playerSelection === null) {
  alert("You canceled the round. Scared, are we?");
  return;
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

//Play 5 rounds.

getComputerSelection();
gameRound();
console.log("The computer's score is: " + computerScore + ". Your score is: " + playerScore + ".");

getComputerSelection();
gameRound();
console.log("The computer's score is: " + computerScore + ". Your score is: " + playerScore + ".");

getComputerSelection();
gameRound();
console.log("The computer's score is: " + computerScore + ". Your score is: " + playerScore + ".");

getComputerSelection();
gameRound();
console.log("The computer's score is: " + computerScore + ". Your score is: " + playerScore + ".");

getComputerSelection();
gameRound();
console.log("The computer's score is: " + computerScore + ". Your score is: " + playerScore + ".");

//Alert that is the end of the game.

alert("The computer's score is: " + computerScore + ". Your score is: " + playerScore + ".");

if (computerScore > playerScore) {
  alert("Well well well. Looks like I beat you! Seek revenge and refresh the page to play again, if you dare.");
} else if (computerScore < playerScore) {
  alert("Okay okay, fine. You beat me. Revel in your glory if you must, and then refresh the page. I challenge you to a rematch!");
} else {
  alert("Hmm. It's a tie. Seems like we're evenly matched... Bet you can't beat me again! Refresh the page to find out.");
}





