console.log("works");

function getComputerChoice(){
    const gameArray = ['rock', 'paper', 'scissors'];
    const computerChoice = Math.floor(Math.random()*3);
    return gameArray[computerChoice];
}

console.log(getComputerChoice());