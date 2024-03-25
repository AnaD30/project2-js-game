// Rock Paper Scissors 
/**
 * Declare constants for Dom elements
 * and possible choices
 */
const choices = ["rock", "paper", "scissors,lizard,spock"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const logo = document.getElementById(logo)

const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

rockButton.addEventListener('click', playGame);
paperButton.addEventListener('click', playGame);
scissorsButton.addEventListener('click', playGame);


let playerScore = 0;
let computerScore = 0;

/** menu area */
// Get the modal
const modal = document.getElementById("myModal");
const btn = document.getElementsById("myBtn--blue");
const span = document.getElementsByClassName("close")[0];



// When the user clicks the button, open the modal 
btn.addEventListener('click', myFunction);
function myFunction() {
    modal.style.display = "block";
    
  }
btnClose.addEventListener('click',btnClose);
function () {
   
}
 // When the user clicks on <span> (x), close the modal 
 span.onclick = function() {
    modal.style.display = "none";
  }

// When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

/**
 * Gets the current score from the DOM and 
 * gets the current tally of incorrect answers from the DOM 
 *
 */

function playGame(event) {
    console.log(event);
    let playerChoice = event.target.id;
    console.log(playerChoice);
    const computerChoice = choices[Math.floor(Math.random() * 5)];
    let result = "";

    /**
     * Gets the current tally of incorrect answers from the DOM 
     */

    if (playerChoice === computerChoice) {
        result = "IT'S A TIE!";
    } else {
        switch (playerChoice) {
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN,😎!" : "Want to Quit!";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN!😎" : "Want to Quit!";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN!😎" : "Want to Quit!";
                break;
        }
    }
    /**
     * main game function.
     */
    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("darkblueText", "lightblueText");

    switch (result) {
        case "YOU WIN!":
            resultDisplay.classList.add("darkblueText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "Want to QUIT?":
            resultDisplay.classList.add("lightblueText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }
}