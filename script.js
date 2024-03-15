const getComputerChoice = function () {
    let computerChoice = ["Rock", "Paper", "Scissors"]
    return computerChoice[Math.floor(Math.random() * computerChoice.length)];
}

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll(".buttons-container button");

//result div
const res = document.querySelector('.result');

let plrScore = document.querySelector('.player-score');
let playerScore = plrScore.textContent = 0;

let compScore = document.querySelector('.computer-score');
let computerScore = compScore.textContent = 0;

let tie = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection && computerSelection) {
        if ((playerSelection === "Rock" && computerSelection === "Scissors") || (playerSelection === "Paper" && computerSelection === "Rock") || (playerSelection === "Scissors" && computerSelection === "Paper")) {
            playerScore++;
            plrScore.textContent = playerScore;
            return `You selected ${playerSelection}, Computer selected ${computerSelection}. You win!`
        }
        else if ((computerSelection === "Rock" && playerSelection === "Scissors") || (computerSelection === "Paper" && playerSelection === "Rock") || (computerSelection === "Scissors" && playerSelection === "Paper")) {
            computerScore++;
            compScore.textContent = computerScore;
            return `You selected ${playerSelection}, Computer selected ${computerSelection}. Computer wins!`
        }
        else if (computerSelection === playerSelection) {
            tie++;
            return `You selected ${playerSelection}, Computer selected ${computerSelection}. It's a Tie! Play Again..`
        }
    }
    else {
        return 'Game crashed!!!!. Contact System Adminstrator';
    }
}

const resetGame = function(){
    playerScore = 0;
    computerScore = 0;
    plrScore.textContent = playerScore;
    compScore.textContent = computerScore;
}

buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener("click", () => {
        res.textContent = playRound(button.textContent, getComputerChoice());
        if(playerScore === 5){
            plrScore.textContent = playerScore;
            compScore.textContent = computerScore;
            res.textContent = `You won the game with ${playerScore} points!!!`
            resetGame();
        }
        if(computerScore === 5){
            plrScore.textContent = playerScore;
            compScore.textContent = computerScore;
            res.textContent = `You lost the game with ${computerScore- playerScore} points difference, Computer won the game... Play Again!!!`
            resetGame();
        }
    });
});