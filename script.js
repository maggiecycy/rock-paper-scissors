let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
const totalRounds = 5;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playRound(humanChoice) {
    if (roundsPlayed >= totalRounds) {
        document.getElementById("result").textContent = "Game over! Refresh to play again.";
        return;
    }

    const computerChoice = getComputerChoice();
    let roundResult = "";

    if (humanChoice === computerChoice) {
        roundResult = `Tie! Both chose ${humanChoice}.`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        humanScore++;
        roundResult = `You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        roundResult = `You lose! ${computerChoice} beats ${humanChoice}.`;
    }

    roundsPlayed++;

    // 显示每轮结果
    document.getElementById("result").textContent = `Round ${roundsPlayed}: ${roundResult}`;

    // 显示当前分数
    document.getElementById("score").textContent = `Score - You: ${humanScore} | Computer: ${computerScore}`;

    // 如果5轮结束，显示最终结果
    if (roundsPlayed === totalRounds) {
        let finalResult = "";
        if (humanScore > computerScore) {
            finalResult = "Congratulations! You won the game!";
        } else if (computerScore > humanScore) {
            finalResult = "Sorry! You lost the game.";
        } else {
            finalResult = "It's a tie!";
        }
        document.getElementById("result").textContent += ` Final Result: ${finalResult}`;
    }
}
