function playRound(playerSelection, computerSelection) {
  let player_1 = "jack";
  let computer = "computer";

  switch (playerSelection) {
    case "scissors":
      switch (computerSelection) {
        case "scissors":
          console.log("It's draw!");
          break;
        case "rock":
          console.log("you lose! rock beats Scissors");
          return computer;
        case "paper":
          console.log("I win! Scissors beats Paper ");
          return player_1;
      }
      break;
    case "rock":
      switch (computerSelection) {
        case "scissors":
          console.log("I win! ROCK beats Scissors");
          return player_1;
        case "rock":
          console.log("it's draw!");
          break;
        case "paper":
          console.log("you lose! Paper beats ROCK ");
          return computer;
      }
      break;
    case "paper":
      switch (computerSelection) {
        case "scissors":
          console.log("you lose! Scissors beats Paper");
          return computer;
        case "rock":
          console.log("I win! Paper beats ROCK");
          return player_1;
        case "paper":
          console.log("it's draw!");
          break;
      }

      break;

    default:
      console.log("Wrong! Input retry agin");
  }
}

function computerPlay() {
  let randomArray = ["rock", "paper", "scissors"];
  let randomItem = randomArray[Math.floor(Math.random() * randomArray.length)];
  return randomItem;
}

/*const playerSelection = prompt(
  "Enter one of these (paper, rock, scissors) in lowerCase ?"
);
 console.log(playerSelection); */
let computerSelection = computerPlay();
/* console.log(computerSelection); */
/* console.log(playRound(playerSelection, computerSelection)); */
console.log(Game());

function Game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt(
      "Enter one of these (paper, rock, scissors) in lowerCase ?"
    );
    console.log(playRound(playerSelection, computerSelection));
    computerSelection = computerPlay();
  }
}
