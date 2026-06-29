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
    let choice = prompt("Enter choice of: rock, paper, or scissors.", "rock");

}