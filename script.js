let getComputerChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  let randomChoice = Math.floor(Math.random() * 3); // 0-2
  return (computerChoice = choices[randomChoice]);
};

let playRound = (playerSelection) => {
  computerSelection = getComputerChoice();
  console.log(`You chose: ${playerSelection}`);
  console.log(`Computer chose: ${computerSelection}`);
  if (playerSelection === computerSelection) {
    winner.textContent = `It's a tie, you both chose ${playerSelection}`;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    winner.textContent = `Computer wins the round! Computer chose ${computerSelection}.`;
    results.appendChild(winner);
    computerScore += 1;
    computerScoreElement.textContent = computerScore;
    checkForWinner();
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    winner.textContent = `Computer wins the round! Computer chose ${computerSelection}.`;
    results.appendChild(winner);
    computerScore += 1;
    computerScoreElement.textContent = computerScore;
    checkForWinner();
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    winner.textContent = `Computer wins the round! Computer chose ${computerSelection}.`;
    results.appendChild(winner);
    computerScore += 1;
    computerScoreElement.textContent = computerScore;
    checkForWinner();
  } else {
    winner.textContent = `You win the round! Computer chose ${computerSelection}.`;
    results.appendChild(winner);
    userScore += 1;
    userScoreElement.textContent = userScore;
    checkForWinner();
  }
};

let resetScores = () => {
  userScore = 0;
  computerScore = 0;
  userScoreElement.textContent = "0";
  computerScoreElement.textContent = "0";
};

let checkForWinner = () => {
  if (userScore === 5) {
    winner.textContent = "Congratulations you win the game! :)";
    resetScores();
  } else if (computerScore === 5) {
    winner.textContent = "You have lost to the computer! :(";
    resetScores();
  }
};

let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let results = document.querySelector("#results");
let winner = document.createElement("h3");
let userScoreElement = document.querySelector("#userScore");
let computerScoreElement = document.querySelector("#computerScore");

userScore = parseInt(userScoreElement.textContent);
computerScore = parseInt(computerScoreElement.textContent);

console.log(userScore);

rock.addEventListener("click", () => {
  playRound("rock");
});
paper.addEventListener("click", () => {
  playRound("paper");
});
scissors.addEventListener("click", () => {
  playRound("scissors");
});
