//The computer needs to randomly make a choice between Rock, Paper, or Scissors.

let choices = ['Rock', 'Paper', 'Scissors'];
let computerSelection;

function getComputerChoice() {
  computerSelection = choices[Math.floor(Math.random() * choices.length)];
}

getComputerChoice();
console.log(computerSelection);

//Get input from the user to make a choice between Rock, Paper, or Scissors.

//Compare the computer's choice and the user's choice and declare the winner.

//Add 1 to the score of the winner.

//Repeat 4 more times.

//Alert that is the end of the game.
