// Demander utilisateur input "Rock / Paper / Scissor" et l'attribuer à une variable.
const question = "Choose between Rock Paper Scissors."
const playerSelection = prompt(question).toLowerCase();
const computerSelection = computerPlay()

// Faire attribuer à une autre variable de manière aléatoire "Rock / Paper / Scissor" par l'ordinateur.
function computerPlay() {
    const computerSelection = () => {
        const randomNumber = (Math.floor(Math.random() * 3))
        if (randomNumber === 0){
          return "rock";
        }
        else if (randomNumber === 1) {
          return "paper";
        }
        else if (randomNumber === 2) {
          return "scissors";
        }
          }
      return(computerSelection());
}
// Comparer les valeurs attribuer aux deux variables et retourner le résultat.
function playRound( playerSelection, computerSelection ) {
  if (playerSelection === computerSelection) {
    alert("Draw! Both players played " + playerSelection + "!");
  }
  else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      alert("You lose! Paper beats Rock!");
    }
    else if (computerSelection === "scissors") {
      alert("You win! Rock beats Scissors!");
    }
  }
  else if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      alert("You lose! Scissors beats Paper!");
    }
    else if (computerSelection === "rock") {
      alert("You win! Paper beats Rock!");
    }
  }
  else if (playerSelection === "scissors")  {
    if (computerSelection === "rock") {
      alert("You lose! Rock beats Scissors!");
    }
    else if (computerSelection === "paper") {
      alert("You win! Scissors beats Paper!");
    }
  }
}
playRound(playerSelection, computerSelection)