// Demander utilisateur input "Rock / Paper / Scissor" et l'attribuer à une variable.
let playerScore = 0
let computerScore = 0
function playerPlay() {
  const question = "Choose between Rock Paper Scissors."
  let playerChoices = prompt(question).toLowerCase();
  return playerChoices
}

// Faire attribuer à une autre variable de manière aléatoire "Rock / Paper / Scissor" par l'ordinateur.
function computerPlay() {
  let choices = ['rock', 'paper', 'scissors']
  return choices[Math.floor(Math.random() * choices.length)]
}

// Comparer les valeurs attribuées aux deux variables et retourner le résultat.
function playRound() {
  let playerSelection = playerPlay()
  let computerSelection = computerPlay()
  let result = ""

  if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
      (playerSelection == 'scissors' && computerSelection == 'paper') ||
      (playerSelection == 'paper' && computerSelection == 'rock')) {
      
      playerScore += 1
      result = ('You win! ' + playerSelection + ' beats ' + computerSelection
          + " Player score: " + playerScore + " Computer score: " + computerScore)

      if (playerScore > computerScore) {
          result += ' You are winning!'
      }
  }
  else if (playerSelection == computerSelection) {
      result = ('It\'s a tie. You both chose ' + playerSelection
          + " Player score: " + playerScore + " Computer score: " + computerScore)
  }
  else {
      computerScore += 1
      result = ('You lose! ' + computerSelection + ' beats ' + playerSelection
          + " Player score: " + playerScore + " Computer score: " + computerScore)

      if (computerScore > playerScore) {
          result += ' You are losing!'
      }
  }
  alert(result)
  return
}

for (let i = 0; i < 5; i++) {
  playRound()
}

function finalResult() {
  if (playerScore > computerScore) {
    alert("You win the game! " + playerScore + " to " + computerScore + "!")
  }
  else if (playerScore < computerScore) {
    alert("You lose the game! " + playerScore + " to " + computerScore + "!")
  }
  else {
    alert("Draw!")
  }
}

finalResult();