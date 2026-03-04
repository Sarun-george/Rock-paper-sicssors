const choices = ["rock", "paper", "scissors"];

let humanScore = 0;
let computerScore = 0;
let round = 0;

function getComputerChoice() {
  let randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "tie";
  }

  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    return "human";
  } else {
    return "computer";
  }
}

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

const resultDiv = document.getElementById("result");
const scoreDiv = document.getElementById("score");

rockBtn.addEventListener("click", function () {
  handleGame("rock");
});

paperBtn.addEventListener("click", function () {
  handleGame("paper");
});

scissorsBtn.addEventListener("click", function () {
  handleGame("scissors");
});

function handleGame(humanChoice) {

  if (round >= 5) {
    return;
  }

  let computerChoice = getComputerChoice();

  let winner = playRound(humanChoice, computerChoice);

  if (winner === "human") {
    humanScore++;
    resultDiv.textContent = "You win this round!";
  } 
  else if (winner === "computer") {
    computerScore++;
    resultDiv.textContent = "Computer wins this round!";
  } 
  else {
    resultDiv.textContent = "It's a tie!";
  }

  round++;

  scoreDiv.textContent = "You: " + humanScore + " | Computer: " + computerScore;

  if (round === 5) {
    if (humanScore > computerScore) {
      resultDiv.textContent = "Game Over! You won the game!";
    } 
    else if (computerScore > humanScore) {
      resultDiv.textContent = "Game Over! Computer won the game!";
    } 
    else {
      resultDiv.textContent = "Game Over! It's a draw!";
    }
  }
}