console.log("works");

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (computerChoice === humanChoice){
        console.log("It is a TIE! Nobody wins");
    } else if (computerChoice === 'rock' && humanChoice === 'paper') {
        console.log("You win! Paper beats rock!");
        humanScore++;
    } else if (computerChoice === 'rock' && humanChoice === 'scissors') {
        console.log("You loose! Rock beats scissors!");
        computerScore++;
    } else if (computerChoice === 'paper' && humanChoice === "rock") {
        console.log("You lose! Paper beats rock!");
        computerScore++;
    } else if (computerChoice === 'paper' && humanChoice === 'scissors'){
        console.log("You win! Scissors beat paper");
        humanScore++;
    } else if (computerChoice === 'scissors' && humanChoice === 'rock') {
        console.log("You win! Rock beat scissors");
        humanScore++;
    } else if (computerChoice === 'scissors' && humanChoice === 'paper') {
        console.log("You loose. Scissors beat paper");
        computerScore++;
    }
    
}



const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);



function getComputerChoice(){
    const gameArray = ['rock', 'paper', 'scissors'];
    const computerChoice = gameArray[Math.floor(Math.random()*3)];
    console.log(computerChoice);
    return computerChoice;
}

function getHumanChoice(){
    const humanChoice = prompt("Write one of the following: 'rock', 'paper', 'scissors'").toLowerCase();
    if (humanChoice === 'rock' || humanChoice === 'paper' || humanChoice === 'scissors') {
        return humanChoice;
    } else {
        alert("you have to type 'rock', 'paper' or 'scissors'");
        getHumanChoice();
    }

}


console.log(getComputerChoice());
getHumanChoice();