function getPlayerSelection() {
    let playerChoice = prompt("Will you choose Rock, Paper, or Scissors? ", "Rock");
    playerChoice = playerChoice.toLowerCase();
    if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
        return console.log(playerChoice);
    } else {
        getPlayerSelection();
    }
}

function getComputerChoice() {

}