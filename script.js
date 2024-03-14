const getComputerChoice = function () {
    let computerChoice = ["Rock", "Paper", "Scissors"]
    return computerChoice[Math.floor(Math.random() * computerChoice.length)];
}

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll(".buttons-container button");

const res = document.querySelector('.result');

// we use the .forEach method to iterate through each button

let playerScore = 0;
let computerScore = 0;
let tie = 0;
let gamesNotPlayed = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection && computerSelection) {
        if ((playerSelection === "Rock" && computerSelection === "Scissors") || (playerSelection === "Paper" && computerSelection === "Rock") || (playerSelection === "Scissors" && computerSelection === "Paper")) {
            playerScore++;
            return `You have choosen ${playerSelection}, Computer selected ${computerSelection}. You win!`
        }
        else if ((computerSelection === "Rock" && playerSelection === "Scissors") || (computerSelection === "Paper" && playerSelection === "Rock") || (computerSelection === "Scissors" && playerSelection === "Paper")) {
            computerScore++;
            return `You have choosen ${playerSelection}, Computer selected ${computerSelection}. Computer wins!`
        }
        else if (computerSelection === playerSelection) {
            tie++;
            return `You have choosen ${playerSelection}, Computer selected ${computerSelection}. It's a Tie! Play Again..`
        }
        else {
            gamesNotPlayed++;
            return `Invalid input. Please choose only from (Rock, Paper, Scissors).`
        }
    }
    else if (playerSelection === '') {
        gamesNotPlayed++;
        return `Choose any one in (Rock, Paper, Scissors)`;
    }
    else if (playerSelection === null) {
        gamesNotPlayed++;
        return 'You have cancelled the game!';
    }
    else {
        return 'Game crashed!!!!. Contact System Adminstrator';
    }
}

buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener("click", () => {
        res.textContent = playRound(button.textContent, getComputerChoice())
    });
});