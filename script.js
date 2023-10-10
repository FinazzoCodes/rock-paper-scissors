// get computer's random choice
let getComputerChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  let randomChoice = Math.floor(Math.random() * 3);
  return (computerChoice = choices[randomChoice]);
};

// get players selection
let getUserChoice = () => {
  let userChoice = prompt("Please enter rock, paper, or scissors: ");
  userChoice = userChoice.toLowerCase();
  while (
    userChoice != "rock" &&
    userChoice != "paper" &&
    userChoice != "scissors"
  ) {
    userChoice = prompt(
      "Invalid entry.\nPlease enter rock, paper, or scissors: "
    );
  }
  return userChoice;
};

// function to play a single round
let playRound = (playerSelection, computerSelection) => {
  console.log(playerSelection);
  console.log(computerSelection);
  if (playerSelection === computerSelection) {
    console.log("It's a tie!");
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    console.log("Computer Wins!");
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    console.log("Computer Wins!");
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    console.log("Computer Wins!");
  } else {
    console.log("You win!");
  }
};
const computerSelection = getComputerChoice();
const playerSelection = getUserChoice();
console.log(playRound(playerSelection, computerSelection));

// function to generate a game that calls the single round multiple times
