const getComputerChoice = function () {
    let computerChoice = ["Rock", "Paper", "Scissors"];
    return computerChoice[Math.floor(Math.random() * computerChoice.length)];
};

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll(".buttons-container button");

// Result div
const res = document.querySelector('.result');

let playerScore = document.querySelector('.player-score');
let computerScore = document.querySelector('.computer-score');

let tie = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection && computerSelection) {
        if ((playerSelection === "Rock" && computerSelection === "Scissors") || (playerSelection === "Paper" && computerSelection === "Rock") || (playerSelection === "Scissors" && computerSelection === "Paper")) {
            parseInt(playerScore.textContent++);
            return `You selected ${playerSelection}, Computer selected ${computerSelection}. You win!`;
        }
        else if ((computerSelection === "Rock" && playerSelection === "Scissors") || (computerSelection === "Paper" && playerSelection === "Rock") || (computerSelection === "Scissors" && playerSelection === "Paper")) {
            parseInt(computerScore.textContent++);
            return `You selected ${playerSelection}, Computer selected ${computerSelection}. Computer wins!`;
        }
        else if (computerSelection === playerSelection) {
            return `You selected ${playerSelection}, Computer selected ${computerSelection}. It's a Tie! Play Again..`;
        }
    }
    else {
        return 'Game crashed!!!!. Contact System Adminstrator';
    }
}


function resetGame() {
    playerScore.textContent = 0;
    computerScore.textContent = 0;
    res.style.color = 'black';
}

let shouldResetScores = false; // Flag to indicate if scores should be reset

buttons.forEach((button) => {
    // For each button, add a 'click' listener
    button.addEventListener("click", () => {
        if (shouldResetScores) {
            resetGame();
            shouldResetScores = false; // Reset the flag
        }

        // Determine the result of the round
        const resultMessage = playRound((button.id.charAt(0).toLocaleUpperCase() + button.id.slice(1).toLocaleLowerCase()), getComputerChoice());

        // Update result message
        res.textContent = resultMessage;

        // Check if either player or computer has reached 5 points
        if (parseInt(playerScore.textContent) === 5) {
            res.textContent = `You WON the game... Play Again!!!`;
            res.style.color = 'green';
            shouldResetScores = true; // Set the flag to reset scores on next round
        }
        if (parseInt(computerScore.textContent) === 5) {
            res.textContent = `You LOST, Computer won the game... Play Again!!!`;
            res.style.color = 'red';
            shouldResetScores = true; // Set the flag to reset scores on next round
        }
    });
});