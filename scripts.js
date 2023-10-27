let playerSelection = prompt().toLowerCase();
let computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));

function getComputerChoice() {
    return "paper";
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection === "rock" && computerSelection == "paper") {
        return "Computer Wins";
    }
}
