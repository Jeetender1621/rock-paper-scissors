alert('Welcome to the game of "Rock, Paper, Scissors"');


const getComputerChoice = function () {
    let randomGen = Math.floor(Math.random() * 3) + 1;

    if (randomGen === 1) {
        return "Rock";
    }
    else if (randomGen === 2) {
        return "Paper";
    }
    else if (randomGen === 3) {
        return "Scissors";
    }
    else {
        return `Invalid Computer Selection`
    }
}



const playGame = function () {
    let round;
    let playerScore = 0;
    let computerScore = 0;
    let tie = 0;
    let gamesNotPlayed = 0;
    for (round = 1; round <= 5; round++) {

        let playerSelection = prompt("Wisely choose between Rock, Paper, Scissors", "Rock");
        if (playerSelection) playerSelection = playerSelection.charAt(0).toLocaleUpperCase() + playerSelection.slice(1).toLocaleLowerCase();

        const computerSelection = getComputerChoice();
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
        console.log(playRound(playerSelection, computerSelection));
    }

    //Report the scores
    if (playerScore > computerScore) {
        alert(`Total rounds played: ${--round}. You win the game! Your score: ${playerScore}, Computer's score: ${computerScore}, Tie: ${tie}, Games cancelled or given Incorrect Input :${gamesNotPlayed}`);
    } else if (playerScore < computerScore) {
        alert(`Total rounds played: ${--round}. Computer wins the game! Your score: ${playerScore}, Computer's score: ${computerScore}, Tie: ${tie}, Games cancelled or given Incorrect Input :${gamesNotPlayed}`);
    } else {
        alert(`Total rounds played: ${--round}. It's a tie! Your score: ${playerScore}, Computer's score: ${computerScore}, Tie: ${tie},  Games cancelled or Given IncorrectInput :${gamesNotPlayed}`);
    }
}
//Start the game
playGame();