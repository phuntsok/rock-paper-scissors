function getComputerChoice() {
    const game = ["Rock", "Paper", "Scissor"];
    return game[Math.floor(Math.random() * game.length)];
}
console.log(getComputerChoice());

function rpc_game(playerSelection, computerSelection) {
    if (playerSelection=="Rock") {
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
    else if (playerSelection=="Paper") {
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
    else if (playerSelection=="Scissors") {
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

let playerChoice = prompt("Rock, Paper or Scissors: Choose One");