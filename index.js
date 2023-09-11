let playerChoice;
let computerChoice = getComputerChoice();

const rockBtn = document.querySelector('.rockBtn');
const paperBtn = document.querySelector('.paperBtn');
const scissorsBtn = document.querySelector('.scissorsBtn');
const results = document.querySelector('.results');
const roundResults = document.querySelector('.roundResults');
const scoreResults = document.querySelector('.scoreResults');


rockBtn.addEventListener('click', () => {
    playerChoice = "rock";
    computerChoice = getComputerChoice();
    return playRound(playerChoice, computerChoice);
});
paperBtn.addEventListener('click', () => {
    playerChoice = "paper";
    computerChoice = getComputerChoice();
    return playRound(playerChoice, computerChoice);
});
scissorsBtn.addEventListener('click', () => {
    playerChoice = "scissors";
    computerChoice = getComputerChoice();
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
        h2Results.textContent = `You are the winner, ${playerChoice} beats ${computerChoice}!!`
    } else if(result === "loser") {
        h2Results.textContent = `You lost, ${playerChoice} is defeated by ${computerChoice}.`
    } else if(result === "tie") {
        h2Results.textContent = `It's a tie, you both chose ${playerChoice} so nobody won.`
    }

    calcWinner();
}

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

let result;
let playerScore = 0;
let computerScore = 0;

function calcWinner() {
    if(result === "winner") {
        playerScore++;
        h3playerScore.textContent = `Player's Score: ${playerScore}`
    } else if(result === "loser") {
        computerScore++;
        h3CompScore.textContent = `Computer's Score: ${computerScore}`
    }
    if(playerScore > 5 || computerScore > 5) {
        location.reload();
    }

    if(playerScore === 5 && computerScore === 5) {
        h3FinalScore.textContent = "You and the computer have reached a tie."
    } else if(computerScore === 5) {
        h3FinalScore.textContent = "You have lost in this best of five game against the computer"
    } else if (playerScore === 5) {
        h3FinalScore.textContent = "You beat the computer in a best of five!"
    }
}


// game();

const h2Results = document.createElement('h2');
roundResults.appendChild(h2Results);

const h3playerScore = document.createElement('h3');
scoreResults.append(h3playerScore);

const h3CompScore = document.createElement('h3');
scoreResults.append(h3CompScore);

const h3FinalScore = document.createElement('h3');
results.appendChild(h3FinalScore);


