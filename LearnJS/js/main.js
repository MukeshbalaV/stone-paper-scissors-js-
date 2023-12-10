let playGame = confirm("Shall we play rock, paper, or scissors?");
let username = prompt("Enter Your Name");
if (playGame) {
  //play
  let playerChoice = prompt("Please enter rock, paper, or scissors.");
  if (playerChoice) {
    let Mukesh = playerChoice.trim().toLowerCase();
    if (
      Mukesh === "rock" ||
      Mukesh === "paper" ||
      Mukesh === "scissors"
    ) {
      let computerChoice = Math.floor(Math.random() * 3 + 1);
      let computer =
        computerChoice === 1
          ? "rock"
          : computerChoice === 2
          ? "paper"
          : "scissors";

      let result =
        Mukesh === computer
          ? "Tie game!"
          : Mukesh === "rock" && computer === "paper"
          ? `${username}: ${Mukesh}\nComputer: ${computer}\nComputer wins!`
          : Mukesh === "paper" && computer === "scissors"
          ? `${username}: ${Mukesh}\nComputer: ${computer}\nComputer wins!`
          : Mukesh === "scissors" && computer === "rock"
          ? `${username}: ${Mukesh}\nComputer: ${computer}\nComputer wins!`
          : `${username}: ${Mukesh}\nComputer: ${computer}\n${username} wins!`;
      alert(result);
      let playAgain = confirm("Play Again?");
      playAgain ? location.reload() : alert("Ok, thanks for playing.");
    } else {
      alert("You didn't enter rock, paper, or scissors.");
    }
  } else {
    alert("I guess you changed your mind. Maybe next time.");
  }
} else {
  alert("Ok, maybe next time.");
}
