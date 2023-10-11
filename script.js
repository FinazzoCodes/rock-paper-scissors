let userScore = 0;
let computerScore = 0;

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
  console.log(`You chose: ${playerSelection}`);
  console.log(`Computer chose: ${computerSelection}`);
  if (playerSelection === computerSelection) {
    console.log("It's a tie!");
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    console.log("Computer wins the round!");
    computerScore += 1;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    console.log("Computer wins the round!");
    computerScore += 1;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    console.log("Computer wins the round!");
    computerScore += 1;
  } else {
    console.log("You win the round!");
    userScore += 1;
  }
};

// function to generate a game that calls the single round multiple times
let game = () => {
  const totalRounds = 5;

  for (let i = 1; i <= totalRounds; i++) {
    console.log(`Round ${i}`);
    let computerSelection = getComputerChoice();
    let playerSelection = getUserChoice();
    playRound(playerSelection, computerSelection);
  }

  if (userScore > computerScore) {
    console.log("Congratulations! You have beat the computer :)");
  } else if (userScore < computerScore) {
    console.log("Oh no! You have lost the game :(");
  } else {
    console.log("The game is a tie.");
  }
};

game();
