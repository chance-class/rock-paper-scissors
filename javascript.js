//The computer needs to randomly make a choice between Rock, Paper, or Scissors.

let choices = ['rock', 'paper', 'scissors'];
let computerSelection;

function getComputerSelection() {
  computerSelection = choices[Math.floor(Math.random() * choices.length)];
}



//Get input from the user to make a choice between Rock, Paper, or Scissors.

let playerScore = 0;
let computerScore = 0;

alert("Let's play Rock Paper Scissors! First to 5 wins. Think you can beat me?");

//Compare the computer's choice and the user's choice and declare the winner.

//Add 1 to the score of the winner.

function gameRound () {
  getComputerSelection();

  if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      alert("You lose! Paper beats Rock.");
      return computerScore++;
    } else if (computerSelection === "scissors") {
      alert("You win! Rock beats Scissors.");
      return playerScore++;
    } else {
      alert("It's a tie!");
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock"){
      alert("You win! Paper beats Rock.");
      return playerScore++;
    } else if (computerSelection === "scissors") {
      alert("You lose! Scissors beats Paper.");
      return computerScore++;
    } else {
      alert("It's a tie!");
    }
  } else if (playerSelection() === "scissors") {
    if (computerSelection === "paper") {
      alert("You win! Scissors beats Paper.");
      return playerScore++;
    } else if (computerSelection === "rock") {
      alert("You lose! Rock beats Scissors.");
      return computerScore++;
    } else {
      alert("It's a tie!");
    }
  }
}





//Alert that is the end of the game.

alert("The computer's score is: " + computerScore + ". Your score is: " + playerScore + ".");

if (computerScore > playerScore) {
  alert("Well well well. Looks like I beat you! Seek revenge and refresh the page to play again, if you dare.");
} else if (computerScore < playerScore) {
  alert("Okay okay, fine. You beat me. Revel in your glory if you must, and then refresh the page. I challenge you to a rematch!");
} else {
  alert("Hmm. It's a tie. Seems like we're evenly matched... Bet you can't beat me again! Refresh the page to find out.");
}





