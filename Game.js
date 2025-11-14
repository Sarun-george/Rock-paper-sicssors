const array = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let random1 = array[Math.floor(Math.random() * array.length)];
    return random1;
}

function getHumanChoice() {
    let choice = prompt("enter your choice");
    return choice.toLowerCase();
}


function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    }
    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}`;
    }
    if (
        (humanChoice === "rock" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "rock")
    ) {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}`;
    }
    return "Invalid choice! Please choose rock, paper, or scissors.";
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

alert(playRound(humanSelection, computerSelection));


function playGame() {
        for (let i = 0; i < 5; i++) {
            const humanSelection = getHumanChoice();
            const computerSelection = getComputerChoice();
         alert(playRound(humanSelection, computerSelection));
    }

      alert(`Final Score:\nYou: ${humanScore}\nComputer: ${computerScore}`);
}

playGame();
