let playerChoice;
let computerChoice = getComputerChoice();

const rockBtn = document.querySelector('.rockBtn');
const paperBtn = document.querySelector('.paperBtn');
const scissorsBtn = document.querySelector('.scissorsBtn');

rockBtn.addEventListener('click', () => {
    playerChoice = "rock";
    return playRound(playerChoice, computerChoice);
});
paperBtn.addEventListener('click', () => {
    playerChoice = "paper";
    return playRound(playerChoice, computerChoice);
});
scissorsBtn.addEventListener('click', () => {
    playerChoice = "scissors";
    return playRound(playerChoice, computerChoice);
});


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

//Include PlayerChoice and ComputerChoice as parameters

let result;
let playerScore = 0;
let computerScore = 0;

// function calcWinner() {
//     if(result === "winner") {
//         playerScore++;
//     } else if(result === "loser") {
//         computerScore++;
//     }
// }

// function getWinner(playerPoints, computerPoints) {
//     playerPoints = playerScore;
//     computerPoints = computerScore;
//     if(playerPoints > computerPoints) {
//         console.log("You beat the computer in a best of five!");
//     } else if(playerPoints < computerPoints) {
//         console.log("You have lost in this best of five game against the computer");
//     } else {
//         console.log("You and the computer have reached a tie.");
//     }
// }

//Function that plays one round and determines a winner 
function playRound(playerChoice, computerChoice) {
    //All choices if player chooses rock
    if(playerChoice === "rock" && computerChoice === "scissors") {
        result = "winner";
    }else if(playerChoice === "rock" && computerChoice === "paper") {
        result = "loser";
    }else if (playerChoice === "rock" && computerChoice === "rock") {
        result = "tie";
    }
    //All choices if player chooses paper
    if(playerChoice === "paper" && computerChoice === "rock") {
        result = "winner";
    }else if(playerChoice === "paper" && computerChoice === "scissors") {
        result = "loser";
    }else if (playerChoice === "paper" && computerChoice === "paper") {
        result = "tie";
    }
    //All choices if player chooses scissors
    if(playerChoice === "scissors" && computerChoice === "paper") {
        result = "winner";
    }else if(playerChoice === "scissors" && computerChoice === "rock") {
        result = "loser";
    }else if (playerChoice === "scissors" && computerChoice === "scissors") {
        result = "tie";
    }
    //Results printed out based on game outcome
    if(result === "winner") {
        console.log(`You are the winner, ${playerChoice} beats ${computerChoice}!!`);
    } else if(result === "loser") {
        console.log(`You lost, ${playerChoice} is defeated by ${computerChoice}.`);
    } else if(result === "tie") {
        console.log(`It's a tie, you both chose ${playerChoice} so nobody won.`);
    }
}


playRound(playerChoice, computerChoice);

// function game() {
//     for (let i = 0; i < 5; i++) {
//         playRound(playerChoice, computerChoice);
//         calcWinner()
//         //Created to address the additional inputs being asked when not needed
//         if(i < 4) {
//             computerChoice = getComputerChoice();
//             playerChoice = getPlayerChoice();
//         } else {
//             break;
//         }
//     }
//     console.log("\n") 
//     getWinner();
// }

// game();