let playerSelection = prompt("Please enter rock paper or scissors.").toLowerCase();
let computerSelection = getComputerChoice();
alert("Computer chooses " + (computerSelection) +"." + " Player chooses " + playerSelection + ".");
alert(playRound(playerSelection, computerSelection));

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3) + 1; //gives a random number between 1, 2, or 3
    if(randomNum == 3) {
        return "rock";
    }
    else if(randomNum == 2) {
        return "scissor";
    }
    else return "paper";
}

function playRound(playerSelection, computerSelection) {
    if((playerSelection === "rock" && computerSelection === "paper") || 
    (playerSelection === "paper" && computerSelection === "scissor") || 
    (playerSelection === "scissor" && computerSelection === "rock")) {
        return "Computer Wins";
    }
    else if((playerSelection === "rock" && computerSelection === "scissor") ||
    (playerSelection === "scissor" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")) {
        return "Player Wins";
    }
}
