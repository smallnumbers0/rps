let playerSelection = prompt("Please enter rock paper or scissors.").toLowerCase();
console.log(playerSelection)
let computerSelection = getComputerChoice();
alert(playRound(playerSelection, computerSelection));

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3) + 1; //gives a random number between 1, 2, or 3
    if(randomNum == 3) {
        return "rock";
    }
    else if(randomNum == 2) {
        return "scissors";
    }
    else return "paper";
}

function playRound(playerSelection, computerSelection) {

    alert("Computer chooses " + (computerSelection) +"." + " Player chooses " + playerSelection + ".");
    if((playerSelection === "rock" && computerSelection === "paper") || 
    (playerSelection === "paper" && computerSelection === "scissors") || 
    (playerSelection === "scissors" && computerSelection === "rock")) {
        return "Computer Wins";
    }
    else if((playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")) {
        return "Player Wins";
    }
    else if(playerSelection === computerSelection) {
        return "Its a tie";
    }
    else return "Did not chose rock paper or scissors"
}
