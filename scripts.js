function getComputerChoice() {
    const game = ["Rock", "Paper", "Scissor"];
    return game[Math.floor(Math.random() * game.length)];
}
console.log(getComputerChoice());