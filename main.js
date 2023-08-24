function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        return "Rock";
    }
    else if (computerChoice === 1) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}


function playRound(playerChoice, computerChoice) {
    let playerWon = true;

    if (playerChoice === computerChoice) {
        // In a draw, playerWon === undefined
        return;
    }
    else if (playerChoice === "Rock" && computerChoice === "Paper") {
        playerWon = false;
    }
    else if (playerChoice === "Paper" && computerChoice === "Scissors") {
        playerWon = false;
    }
    else if (playerChoice === "Scissors" && computerChoice === "Rock") {
        playerWon = false;
    }

    return playerWon;
}


function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let index = 0; index < 5; index++) {
        let playerChoice = prompt("Rock, Paper or Scissors?");
        // Capitalize playerChoice so that it can be compared to computerChoice
        playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase();
        const computerChoice = getComputerChoice();
        const playerWon = playRound(playerChoice, computerChoice);

        if (playerWon === undefined) {
            console.log("It's a draw!");
        }
        else if (playerWon) {
            console.log(`You won! Your ${playerChoice} beats the computer's ${computerChoice}.`);
            playerScore++;
        }
        else {
            console.log(`You lost! The computer's ${computerChoice} beats your ${playerChoice}.`);
            computerScore++;
        }

        console.log(`Player: ${playerScore} | Computer: ${computerScore}`);
    }

    console.log("Game! And the winner is...");

    if (playerScore === computerScore) {
        console.log("No one, it's a draw!");
    }
    else if (playerScore > computerScore) {
        console.log(`You, with ${playerScore} points!`);
    }
    else {
        console.log(`The Computer, with ${playerScore} points!`);
    }
}

game();