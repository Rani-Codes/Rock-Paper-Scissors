function getPlayerChoice() {
    let playerChoice = prompt("Will you choose Rock, Paper, or Scissors? ", "Rock");
    playerChoice = playerChoice.toLowerCase();
    if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
        return playerChoice;
    } else {
        getPlayerChoice();
    }
}

//Create a function that gets the computer's choice
//Make sure it's randomly returning either Rock, Paper or Scissors.
function getComputerChoice() {
    let choice;
    let counter = 0;
    counter = Math.random(counter) * 10;

    if (counter < 3.33) {
        choice = "rock";
    } else if(counter < 6.66) {
        choice = "paper";
    } else {
        choice = "scissors";
    }
    return choice;
}

//Function that plays one round and determines a winner 
//Include PlayerChoice and ComputerChoice as parameters
getComputerChoice();
const computerChoice = getComputerChoice();
const playerChoice = getPlayerChoice();
function playRound(playerChoice, computerChoice) {
    let result;
    //All choices if player chooses rock
    if(playerChoice === "rock" && computerChoice === "scissors") {
        result = "winner";
    }else if(playerChoice === "rock" && computerChoice === "paper") {
        result = "loser";
    }else {
        result = "tie";
    }
    return console.log(result);
}

console.log(playRound(playerChoice, computerChoice));

