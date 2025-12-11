let humanScore = 0;
let computerScore = 0;
let gameOver = false;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(humanChoice) {
    if (gameOver) return;

    const computerChoice = getComputerChoice();
    let message = "";

    if (humanChoice === computerChoice) {
        message = `Tie! You both chose ${humanChoice}.`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        humanScore++;
        message = `You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        message = `You lose! ${computerChoice} beats ${humanChoice}.`;
    }

    // 更新画面
    document.getElementById("result").textContent = message;
    document.getElementById("score").textContent =
        `Score — You: ${humanScore} | Computer: ${computerScore}`;

    // 判断是否有人到 5 分
    if (humanScore === 5 || computerScore === 5) {
        gameOver = true;

        const winner =
            humanScore === 5 ? "🎉 You win the game!" : "💀 Computer wins!";
        document.getElementById("result").textContent += `  ${winner}`;
    }
}
