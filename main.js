let playerScore = 0;
let computerScore = 0;

window.onload = game;


function game() {
    const selections = document.querySelectorAll(".selection > img[data-selection]");

    selections.forEach(
        (selection) => {
            selection.addEventListener(
                "click",
                (event) => {
                    playRound(selection.getAttribute("data-selection"), getComputerChoice())
                }
            );
        }
    );
}


function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice === 0) {
        return "rock";
    }
    else if (computerChoice === 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}


function playRound(playerChoice, computerChoice) {
    let message = document.querySelector(".message");
    let scores = document.querySelector(".scores");

    if (playerChoice === computerChoice) {
        message.textContent = "It's a draw!";
    }
    else if (playerChoice === "rock" && computerChoice === "scissors"
    || playerChoice === "paper" && computerChoice === "scissors"
    || playerChoice === "scissors" && computerChoice === "paper") {
        message.textContent = `You won! Your ${playerChoice} beats the computer's ${computerChoice}.`;
        playerScore++;
    }
    else {
        message.textContent = `You lost! The computer's ${computerChoice} beats your ${playerChoice}.`;
        computerScore++;
    }

    if (playerScore == 5) {
        alert("You won!");
        playerScore = 0;
        computerScore = 0;
        message.textContent = "";
    }
    else if (computerScore == 5) {
        alert("The computer won!");
        playerScore = 0;
        computerScore = 0;
        message.textContent = "";
    }

    scores.textContent = `You: ${playerScore} | Computer: ${computerScore}`;
}