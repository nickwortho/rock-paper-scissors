let humanScore = 0;
let computerScore = 0;

// generates a random choice of [rock, paper, scissors]
// approx equal chance to choice any
// always slightly less likely to choose scissors
function getComputerChoice() {
    let choice = Math.round(Math.random() * 10) % 3;
    switch (choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function getHumanChoice() {
    // assumes choice always valid
    return prompt("Enter choice of: rock, paper, or scissors.", "rock");
}

function playRound(humanChoice, computerChoice) {

    humanChoice = humanChoice.toLowerCase();

    const roundResultDisplay = document.querySelector("#roundResultDisplay");

    if (humanChoice === computerChoice) {
        roundResultDisplay.textContent = "Draw! You both chose " + humanChoice + "!";
    } else {
        switch (humanChoice) {
            case "rock":
                if (computerChoice == "paper") {
                    roundResultDisplay.textContent = "You lose! Paper beats Rock.";
                    computerScore++;
                } else {
                    roundResultDisplay.textContent = "You win! Rock beats Scissors.";
                    humanScore++;
                }
                break;
            case "paper":
                if (computerChoice == "scissors") {
                    roundResultDisplay.textContent = "You lose! Scissors beats Paper.";
                    computerScore++;
                } else {
                    roundResultDisplay.textContent = "You win! Paper beats Rock.";
                    humanScore++;
                }
                break;
            case "scissors":
                if (computerChoice == "rock") {
                    roundResultDisplay.textContent = "You lose! Rock beats Scissors.";
                    computerScore++;
                } else {
                    roundResultDisplay.textContent = "You win! Scissors beats Paper.";
                    humanScore++;
                }
                break;
            default:
                roundResultDisplay.textContent = "Error. Unrecognised move.";
        }
    }
}

function updateResultsDisplay() {
    const scoreDisplay = document.querySelector("#scoreDisplay");
    scoreDisplay.textContent = "Player: " + humanScore + " - Computer: " + computerScore;
    if (humanScore >= 5) {
        const finalResultMessage = document.createElement("p");
        finalResultMessage.textContent = "Game over - You win!";
        scoreDisplay.appendChild(finalResultMessage);
        resetScore();
    } else if (computerScore >= 5) {
        const finalResultMessage = document.createElement("p");
        finalResultMessage.textContent = "Game over - You lose!";
        scoreDisplay.appendChild(finalResultMessage);
        resetScore();
    }
}

function resetScore() {
    humanScore = 0;
    computerScore = 0;
}

const rockButton = document.querySelector("#rockButton");
const paperButton = document.querySelector("#paperButton");
const scissorsButton = document.querySelector("#scissorsButton");

rockButton.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
    updateResultsDisplay();
})
paperButton.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
    updateResultsDisplay();
})
scissorsButton.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
    updateResultsDisplay();
})

updateResultsDisplay();