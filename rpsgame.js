console.log("works");

function getComputerChoice(){
    const gameArray = ['rock', 'paper', 'scissors'];
    const computerChoice = Math.floor(Math.random()*3);
    return gameArray[computerChoice];
}

function getHumanChoice(){
    const humanChoice = prompt("Write one of the following: 'rock', 'paper', 'scissors'");
    if (humanChoice === 'rock' || humanChoice === 'paper' || humanChoice === 'scissors') {
        return humanChoice;
    } else {
        alert("you have to type 'rock', 'paper' or 'scissors'");
        getHumanChoice();
    }

}


console.log(getComputerChoice());
getHumanChoice();