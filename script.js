
function getComputerChoice() {

  let compChoice = Math.round(Math.random() * 2);

  switch(compChoice) {
    case 0:
        return 'rock'
    case 1:
       return 'paper'
    case 2:
        return 'scissors'
  }
  return compChoice;
}

function getHumanChoice() {

    let humanInput = prompt('Choose rock, paper, or scissors:').toLowerCase();

    return humanInput;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanInput, compChoice) {


    if (humanInput === 'scissors' && compChoice === 'paper') {
        console.log('You win! Scissors beats Paper.');
        humanScore++
    }
    else if (humanInput === 'paper' && compChoice === 'rock') {
        console.log('You win! Paper beats Rock.');
        humanScore++
    }
    else if (humanInput === 'rock' && compChoice === 'scissors') {
        console.log('You win! Rock beats Scissors.');
        humanScore++
    }
    else if (compChoice === 'scissors' && humanInput === 'paper') {
        console.log('You lose! Scissors beats Paper.');
        computerScore++
    }
    else if (compChoice === 'paper' && humanInput === 'rock') {
        console.log('You lose! Paper beats Rock.');
        computerScore++
    }
    else if (compChoice === 'rock' && humanInput === 'scissors') {
        console.log('You lose! Rock beats Scissors.');
        computerScore++
    }
    else {
        console.log('It\'s a draw!');
    }
    return computerScore, humanScore
}

    
function playGame () {

        for (i = 0; i < 6; i++) {
            let humanInput = getHumanChoice();
            let compChoice = getComputerChoice();
            playRound(humanInput, compChoice);
            console.log(humanScore);
            console.log(computerScore);
        }
    if (humanScore > computerScore) {
        alert('You\'ve won the game!');
    }

    else if (computerScore > humanScore) {
        alert('You\'ve lost the game.');
    }

    else {
        alert('It\s a tie!');
    }
}
playGame();
