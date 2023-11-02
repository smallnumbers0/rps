/*****************************************************/
/******************** Variables **********************/
/*****************************************************/
let fireButton = document.getElementById("fire");
let waterButton = document.getElementById("water");
let grassButton = document.getElementById("grass");
let resetButton = document.getElementById("reset");
let gameText = document.getElementById("gameText")
let roundText = document.getElementById("roundText")
let scoreText = document.getElementById("scoreText")
let displayWinner = document.getElementById("displayWinner")
let playerScore = 0;
let computerScore = 0;
/*****************************************************/


/*****************************************************/
/************** Button Functions *********************/
/*****************************************************/
fireButton.addEventListener("click", function() {
    playerSelection = "fire";
    playRound(playerSelection, getComputerChoice())
})

waterButton.addEventListener("click", function() {
    playerSelection = "water";
    playRound(playerSelection, getComputerChoice())
})

grassButton.addEventListener("click", function() {
    playerSelection = "grass";
    playRound(playerSelection, getComputerChoice())
})

resetButton.addEventListener("click", function() {
    playerScore = 0;
    computerScore = 0;
    fireButton.disabled = false;
    waterButton.disabled = false;
    grassButton.disabled = false;
    gameText.innerHTML = ""
    roundText.innerHTML = ""
    scoreText.innerHTML = ""
    displayWinner.innerHTML = ""
})
/*****************************************************/


/*****************************************************/
/******************* All Functions *******************/
/*****************************************************/
function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3) + 1; 
    if(randomNum == 3) {
        return "fire";
    }
    else if(randomNum == 2) {
        return "grass";
    }
    else return "water";
}

function playRound(playerSelection, computerSelection) {

    gameText.innerHTML = ("Player chooses " + playerSelection + "." + " " + "Computer chooses " + (computerSelection) +".");
    if((playerSelection === "fire" && computerSelection === "water") || 
    (playerSelection === "water" && computerSelection === "grass") || 
    (playerSelection === "grass" && computerSelection === "fire")) {
        roundText.innerHTML = "Computer wins the round";
        computerScore++;
    }
    else if((playerSelection === "fire" && computerSelection === "grass") ||
    (playerSelection === "grass" && computerSelection === "water") ||
    (playerSelection === "water" && computerSelection === "fire")) {
        roundText.innerHTML = "Player wins the round";
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
        fireButton.disabled = true;
        waterButton.disabled = true;
        grassButton.disabled = true;
    }
    else if(computerScore === 5) {
        displayWinner.innerHTML = "Computer wins the game!"
        fireButton.disabled = true;
        waterButton.disabled = true;
        grassButton.disabled = true;
    }
}
