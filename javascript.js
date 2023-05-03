//The computer needs to randomly make a choice between Rock, Paper, or Scissors.

let choices = ['rock', 'paper', 'scissors'];
let computerSelection;

function getComputerSelection() {
  computerSelection = choices[Math.floor(Math.random() * choices.length)];
}



//Get input from the user to make a choice between Rock, Paper, or Scissors.

let playerScore = 0;
let computerScore = 0;

const scoreBoard = document.querySelector('.scoreBoard');
scoreBoard.textContent = "Seer score: " + computerScore + " Your score: " + playerScore;

//alert("Let's play Rock Paper Scissors! First to 5 wins. Think you can beat me?");

//Compare the computer's choice and the user's choice and declare the winner.

//Add 1 to the score of the winner.

function gameRound () {
  getComputerSelection();

  if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      alert("You lose! Paper beats Rock.");
      computerScore++;
    } else if (computerSelection === "scissors") {
      alert("You win! Rock beats Scissors.");
      playerScore++;
    } else {
      alert("It's a tie!");
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock"){
      alert("You win! Paper beats Rock.");
      playerScore++;
    } else if (computerSelection === "scissors") {
      alert("You lose! Scissors beats Paper.");
      computerScore++;
    } else {
      alert("It's a tie!");
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "paper") {
      alert("You win! Scissors beats Paper.");
      playerScore++;
    } else if (computerSelection === "rock") {
      alert("You lose! Rock beats Scissors.");
      computerScore++;
    } else {
      alert("It's a tie!");
    }
  }
}

function updateScore () {
  scoreBoard.textContent = "Seer score: " + computerScore + " Your score: " + playerScore;
}

const rockBtn = document.querySelector('#rockBtn');

rockBtn.addEventListener('click', () => {
  playerSelection = "rock";
  gameRound();
  console.log(playerScore, computerScore);
  updateScore();
  checkScore();
});

const paperBtn = document.querySelector('#paperBtn');
paperBtn.addEventListener('click', () => {
  playerSelection = "paper";
  gameRound();
  console.log(playerScore, computerScore);
  updateScore();
  checkScore();
});

const scissBtn = document.querySelector('#scissBtn');
scissBtn.addEventListener('click', () => {
  playerSelection = "scissors";
  gameRound();
  console.log(playerScore, computerScore);
  updateScore();
  checkScore();
});

//Alert that is the end of the game.

function checkScore () {
  if (playerScore === 5) {
    alert("Hmm... My vision must be foggy. But I foresee that you wish to challenge me again! Yes, it's getting clearer... The omens do not look good for you. Still care to try?");
    playerScore = 0;
    computerScore = 0;
  } else if (computerScore === 5) {
    alert("Well well well. I tried to warn you. No longer shall you deny the power of Sight. Play again, if you dare.");
    playerScore = 0;
    computerScore = 0;
  }
}










