let rockButton = document.getElementById("rock");
let paperButton = document.getElementById("paper");
let scissorsButton = document.getElementById("scissors");
let gameText = document.getElementById("gameText")
let roundText = document.getElementById("roundText")
let scoreText = document.getElementById("scoreText")
let displayWinner = document.getElementById("displayWinner")
let playerScore = 0;
let computerScore = 0;

rockButton.addEventListener("click", function() {
    let playerSelection = "rock";
    console.log(playRound(playerSelection, getComputerChoice()))
})

paperButton.addEventListener("click", function() {
    let playerSelection = "paper";
    console.log(playRound(playerSelection, getComputerChoice()))
})

scissorsButton.addEventListener("click", function() {
    let playerSelection = "scissors";
    console.log(playRound(playerSelection, getComputerChoice()))
})

//alert(playRound(getPlayerChoice(), getComputerChoice()));

// function getPlayerChoice() {
//     return prompt("Please enter rock paper or scissors.").toLowerCase();
// }

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

    gameText.innerHTML = ("Player chooses " + playerSelection + "." + " " + "Computer chooses " + (computerSelection) +".");
    if((playerSelection === "rock" && computerSelection === "paper") || 
    (playerSelection === "paper" && computerSelection === "scissors") || 
    (playerSelection === "scissors" && computerSelection === "rock")) {
        roundText.innerHTML = "Computer wins the round";
        computerScore++;
    }
    else if((playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")) {
        roundText.innerHTML = "Player Wins the round";
        playerScore++;
    }
    else if(playerSelection === computerSelection) {
        roundText.innerHTML = "Its a tie";
    }
    scoreText.innerHTML = "Player: " + playerScore + " " + "Computer: " + computerScore;
    findWinner(playerScore, computerScore);

}

function findWinner(playerScore, computerScore) {
    if(playerScore === 5) {
        displayWinner.innerHTML = "Player wins the game!"
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
    }
    else if(computerScore === 5) {
        displayWinner.innerHTML = "Computer wins the game!"
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
    }
}