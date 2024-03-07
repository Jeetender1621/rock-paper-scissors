alert("Welcome To 'FAMOUS' Rock Paper Scissors Game");

let  playerSelection = prompt("Wisely pick one of these Rock, Paper or Scissors?", "");

if(playerSelection){
playerSelection = playerSelection.charAt(0).toLocaleUpperCase()+playerSelection.slice(1).toLocaleLowerCase();
}

function playRound(playerSelection, computerSelection) {
    // your code here!
    if(playerSelection && computerSelection){
    if( (playerSelection === "Rock" && computerSelection === "Scissors") || (playerSelection === "Paper" && computerSelection === "Rock") || (playerSelection ==="Scissors" && computerSelection === "Paper")){
        return `You have choosen ${playerSelection}, Computer selected ${computerSelection}. You win!`
    }
    else if((computerSelection === "Rock" && playerSelection === "Scissors") || (computerSelection === "Paper" && playerSelection === "Rock") || (computerSelection ==="Scissors" && playerSelection === "Paper")){
        return `You have choosen ${playerSelection}, Computer selected ${computerSelection}. Computer wins!`
    }
    else if( computerSelection === playerSelection){
        return `It's a Tie! Play Again..`
    }
    else{
        return `Please enter only in(Rock, Paper, Scissors).`;
    }
    }
    else{
        return 'You have cancelled the game!'
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
const computerSelection = getComputerChoice();
alert(playRound(playerSelection, computerSelection));
console.log(playRound(playerSelection, computerSelection));
  