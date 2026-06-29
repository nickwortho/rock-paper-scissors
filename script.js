const win = 0;
const draw = 1;
const lose = 2;

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
    humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log("Draw!");
        return draw;
    } else {
        switch (humanChoice) {
            case "rock":
                if (computerChoice == "paper") {
                    console.log("You lose! Paper beats Rock.");
                    return lose;
                } else {
                    console.log("You win! Rock beats Scissors.");
                    return win;
                }
            case "paper":
                if (computerChoice == "scissors") {
                    console.log("You lose! Scissors beats Paper.");
                    return lose;
                } else {
                    console.log("You win! Paper beats Rock.");
                    return win;
                }
            case "scissors":
                if (computerChoice == "rock") {
                    console.log("You lose! Rock beats Scissors.");
                    return lose;
                } else {
                    console.log("You win! Scissors beats Paper.");
                    return win;
                }
        }
    }
}