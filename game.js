// Demander utilisateur input "Rock / Paper / Scissor" et l'attribuer à une variable.
const question = "Choose between Rock Paper Scissors."
const playerSelection = prompt(question).toLowerCase();
const computerSelection = computerPlay()

// Faire attribuer à une autre variable de manière aléatoire "Rock / Paper / Scissor" par l'ordinateur.
function computerPlay() {
    const computerSelection = () => {
        const randomNumber = (Math.floor(Math.random() * 3))
        if (randomNumber === 0){
          return 'rock';
        }
        else if (randomNumber === 1){
          return 'paper';
        }
        else if (randomNumber === 2){
        return 'scissor';
        }
          }
      return(computerSelection());
}
// Comparer les valeurs attribuer aux deux variables et retourner le résultat.
