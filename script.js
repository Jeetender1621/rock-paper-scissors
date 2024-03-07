alert("Welcome To Rock Paper Scissors Game");

let  playerSelection = prompt("Wisely pick one of these Rock, Paper or Scissors?", "");

if(playerSelection){
playerSelection = playerSelection.toLocaleLowerCase();
}

function playRound(playerSelection, computerSelection) {
    // your code here!
    if( (playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && playerSelection === "rock") || (playerSelection ==="scissors" && computerSelection === "paper")){
        return `You have choosen ${playerSelection}, Computer selected ${computerSelection}. You win!`
    }
    else if((computerSelection === "rock" && playerSelection === "scissors") || (computerSelection === "paper" && playerSelection === "rock") || (computerSelection ==="scissors" && playerSelection === "paper")){
        return `You have choosen ${playerSelection}, Computer selected ${computerSelection}. Computer wins!`
    }
    else if( computerSelection === playerSelection){
        return `It's a Tie! Play Again..`
    }
    else{
        return `Please enter only in(Rock, Paper, Scissors).`;
    }

}
  
function getComputerChoice(){
    const number = Math.floor((Math.random()*3)) +1;

    if(number === 1){
        return "rock"
    }
    else if(number === 2){
        return "paper"
    }
    else{
        return "scissors"
    }

}
const computerSelection = getComputerChoice();
alert(playRound(playerSelection, computerSelection));
console.log(playRound(playerSelection, computerSelection));
  