// get computer's random choice
let getComputerChoice = () => {
  let choices = ["rock", "paper", "scissors"];
  let randomChoice = Math.floor(Math.random() * 3);
  return (computerChoice = choices[randomChoice]);
};

// get players selection
let getPlayerSelection = () => {
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

// function to generate a game that calls the single round multiple times
