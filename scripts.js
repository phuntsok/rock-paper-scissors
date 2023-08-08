function getComputerChoice() {
    const game = ["Rock", "Paper", "Scissor"];
    return game[Math.floor(Math.random() * game.length)];
}

function rpc_game(playerSelection, computerSelection) {
    const player = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
    if (player=="Rock") {
        if (computerSelection=="Paper") {
            return "You Lose! Paper beats Rock";
        }
        else if (computerSelection=="Scissors") {
            return "You Win! Rock beats Scissors";
        }
        else {
            return "It is a Draw, you might want to try again";
        }
    }
    else if (player=="Paper") {
        if (computerSelection=="Paper") {
            return "It is a Draw, you might want to try again";
        }
        else if (computerSelection=="Scissors") {
            return "You Lose! Scissors beats Paper";
        }
        else {
            return "You Win! Paper beats Rock";
        }
    }
    else if (player=="Scissors") {
        if (computerSelection=="Paper") {
            return "You Win! Scissors beats Paper";
        }
        else if (computerSelection=="Scissors") {
            return "It is a Draw, you might want to try again";
        }
        else {
            return "You Lose! Rock beats Scissors";
        }
    }
    else {
        return "Invalid Input, please try again.";
    }
}

let noOfGames = parseInt(prompt("How many matches would you like to play?"));
let scorePlayer = scoreComputer = 0;
function game(matches) {
    for (i=0; i<matches; i++) {
        let playerChoice = prompt("Rock, Paper or Scissors: Choose One");
        let result = rpc_game(playerChoice, getComputerChoice());
        if (result.search(/win/i) != -1) {
            scorePlayer++;
        }
        else if (result.search(/lose/i) != -1) {
            scoreComputer++;
        }
        else {
            i--;
        }
        console.log(result);
    }
    if (scorePlayer>scoreComputer) {
        return "You win. Your score is " + scorePlayer + ".";
    }
    else if (scorePlayer<scoreComputer) {
        return "You lose. The computers score is " + scoreComputer + ".";
    }
    else {
        return "It is a draw."
    }
}

console.log(game(noOfGames));