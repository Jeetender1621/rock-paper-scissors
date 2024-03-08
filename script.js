alert("Welcome To The 'FAMOUS' Rock Paper Scissors Game");

let playerScore = 0;
let computerScore = 0;
let tie = 0;


function playRound(playerSelection, computerSelection) {
    // your code here!
    if(playerSelection && computerSelection){
    if( (playerSelection === "Rock" && computerSelection === "Scissors") || (playerSelection === "Paper" && computerSelection === "Rock") || (playerSelection ==="Scissors" && computerSelection === "Paper")){
        playerScore++;
        return `You have choosen ${playerSelection}, Computer selected ${computerSelection}. You win!`
    }
    else if((computerSelection === "Rock" && playerSelection === "Scissors") || (computerSelection === "Paper" && playerSelection === "Rock") || (computerSelection ==="Scissors" && playerSelection === "Paper")){
        computerScore++;
        return `You have choosen ${playerSelection}, Computer selected ${computerSelection}. Computer wins!`
    }
    else if( computerSelection === playerSelection){
        tie++;
        return `It's a Tie! Play Again..`
    }
    }
}
  
function getComputerChoice(){
    const number = Math.floor((Math.random()*3)) +1;

    if(number === 1){
        return "Rock"
    }
    else if(number === 2){
        return "Paper"
    }
    else{
        return "Scissors"
    }

}


function playGame(){
    for (let round = 1; round <= 5; round++) {
        let  playerSelection = prompt("Wisely pick one of these Rock, Paper or Scissors?", "");
        
        if (playerSelection !== null) {

            if (playerSelection) {
                playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLocaleLowerCase();
            } else {
                alert('Please enter only in (Rock, Paper, Scissors).');
                return;
            }
        } else {
            alert('You have cancelled the round!');
            return;
        }


        const computerSelection = getComputerChoice();

        alert(playRound(playerSelection, computerSelection));
    }
    //Report the scores
    if (playerScore > computerScore) {
        alert(`You win the game! Your score: ${playerScore}, Computer's score: ${computerScore}, Tie: ${tie}`);
    } else if (playerScore < computerScore) {
        alert(`Computer wins the game! Your score: ${playerScore}, Computer's score: ${computerScore}, Tie: ${tie}`);
    } else {
        alert(`It's a tie! Your score: ${playerScore}, Computer's score: ${computerScore}`);
    }
}


//Start the game
playGame();