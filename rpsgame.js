console.log("works");



function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    // play 5 round of the game
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

       

        let winner = playRound(humanSelection, computerSelection);

        if (winner === 'human') {
            humanScore++;
        } else if (winner === 'pc') {
            computerScore++;
        }
    }

    if (humanScore > computerScore) {
        console.log(`You win! Your score: ${humanScore}, computer's score: ${computerScore}`);
    } else if (humanScore < computerScore) {
        console.log(`You loose! Your score: ${humanScore}, computer's score: ${computerScore}`);
    } else {
        console.log(`it's a tie Your score: ${humanScore}, computer's score: ${computerScore}`);
    }
}


playGame();






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

function playRound(humanChoice, computerChoice) {
    if (computerChoice === humanChoice){
        console.log("It is a TIE! Nobody wins");
        return "tie";
    } else if (computerChoice === 'rock' && humanChoice === 'paper') {
        console.log("You win! Paper beats rock!");
        return 'human';
    } else if (computerChoice === 'rock' && humanChoice === 'scissors') {
        console.log("You loose! Rock beats scissors!");
        return 'pc';
    } else if (computerChoice === 'paper' && humanChoice === "rock") {
        console.log("You lose! Paper beats rock!");
        return 'pc';
    } else if (computerChoice === 'paper' && humanChoice === 'scissors'){
        console.log("You win! Scissors beat paper");
        return 'human';
    } else if (computerChoice === 'scissors' && humanChoice === 'rock') {
        console.log("You win! Rock beat scissors");
        return 'human';
    } else if (computerChoice === 'scissors' && humanChoice === 'paper') {
        console.log("You loose. Scissors beat paper");
        return 'pc';
    }
    
}