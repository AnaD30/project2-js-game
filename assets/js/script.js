//Rock,paper,scissors,lizard,spock


/**Menu area responsiveness coneccted to Javascript*/
// refering to classicGame
let playGameBtn = document.getElementById("play-game");
let playGame2Btn = document.getElementById("play-game2");
let container = document.getElementById("game-container");
let rulesButton = document.getElementById("rules");
let choices;
let playerDisplay;
let computerDisplay;
let resultDisplay;
let playerScoreDisplay;
let computerScoreDisplay;
let logo;


let playerScore = 0;
let computerScore = 0;

let classicGame = `<div class="roshambo">
<div class="choices">
  <button id="rock">
    <i class="fa-regular fa-hand-back-fist noclick"></i>
  </button>
  <button id="paper">
    <i class="fa-regular fa-hand noclick"></i>
  </button>
  <button id="scissors">
    <i class="fa-regular fa-hand-scissors noclick"></i>
  </button>
</div>
<div id="playerDisplay">Player:</div>
<div id="computerDisplay">Computer:</div>
<div id="resultDisplay">It's is a tie!</div>
<div class="scoreDisplay">
  Player Score:<span id="playerScoreDisplay">0</span>
</div>
<div class="scoreDisplay">
  Computer Score:<span id="computerScoreDisplay">0</span>
  <div id="close-container">
    <div class="closegame">
      <button class="close-button">&times</button>
    </div>
  </div>
</div>
</div>`;

let newGame = `<div class="roshambo2">
<div class="choices2">
  <button id="rock">
    <i class="fa-regular fa-hand-back-fist noclick"></i>
  </button>
  <button id="paper">
    <i class="fa-regular fa-hand noclick"></i>
  </button>
  <button id="scissors">
    <i class="fa-regular fa-hand-scissors noclick"></i>
  </button>
  <button id="lizard">
    <i class="fa-regular fa-hand-lizard noclick"></i>
  </button>
  <button id="spock">
    <i class="fa-regular fa-hand-spock noclick"></i>
  </button>
</div>
<div id="playerDisplay">Player:</div>
<div id="computerDisplay">Computer:</div>
<div id="resultDisplay">It's is a tie!</div>
<div class="scoreDisplay">
  Player Score:<span id="playerScoreDisplay">0</span>
</div>
<div class="scoreDisplay">
  Computer Score:<span id="computerScoreDisplay">0</span>
  <div id="close-container2">
    <div class="closegame2">
      <button class="close-button2">&times</button>
    </div>
  </div>
</div>
</div>`;

let menu = `<div>
<button id="play-game">Play Game</button>
</div>
<div>
<button id="play-game2">Play Game 2</button>
</div>
<div>
<button id="rules">Rules of the game</button> 
</div>`;


playGameBtn.addEventListener('click', insurtGame);
playGame2Btn.addEventListener('click', insurtGame2);
rulesButton.addEventListener('click',openEndRulesModal);


//insurting the classicclassical  version of the game
function insurtGame() {
    container.innerHTML = classicGame;
    setUpClassicGame()
}

//insurting the new version of the game
function insurtGame2() {
    container.innerHTML = newGame;
    setUpClassicGame()
    setUpNewGame()
}

/**
 * Declare constants for Dom elements
 * and possible choices
 * */
function setUpClassicGame() {
    choices = ["rock", "paper", "scissors"];
    playerDisplay = document.getElementById("playerDisplay");
    computerDisplay = document.getElementById("computerDisplay");
    resultDisplay = document.getElementById("resultDisplay");
    playerScoreDisplay = document.getElementById("playerScoreDisplay");
    computerScoreDisplay = document.getElementById("computerScoreDisplay");

    logo = document.getElementById("logo");

    const rockButton = document.getElementById('rock');
    const paperButton = document.getElementById('paper');
    const scissorsButton = document.getElementById('scissors');

    rockButton.addEventListener('click', playGame);
    paperButton.addEventListener('click', playGame);
    scissorsButton.addEventListener('click', playGame);

}

/**
 * second part of the choices,connected to the newGame
 */
function setUpNewGame() {
    choices = ["rock", "paper", "scissors", "lizard", "spock"];
    const lizardButton = document.getElementById('lizard');
    const spockButton = document.getElementById('spock');

    lizardButton.addEventListener('click', playGame);
    spockButton.addEventListener('click', playGame);
}

/**
 * instructions part for the games 
 * in the menu 
 */
let endRulesModal = document.getElementById("endRulesModal");
// Get the <span> element that closes the modal
let modalCloseRules = document.getElementsByClassName("modalCloseRules")[0];

//when the user click on the rules of the games
function openEndRulesModal(){
  endRulesModal.style.display = "block";
}

function closeEndRulesmodal(){
  endRulesModal.style.display = "none";

  // go back to the main menu
  goToMainMenu()
}

// When the user clicks on <span> (x), close the modal
endRulesModal.addEventListener('click',closeEndRulesmodal);
// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', () => {
  if (event.target == endRulesModal) {
      endRulesModal.style.display = "none";
  }
})

/**
 * Gets the score of the first game from the DOM and 
 * gets the first tally of incorrect answers from the DOM 
 **/
function playGame(event) {
    console.log(event);
    let playerChoice = event.target.id;
    console.log(playerChoice);
    generateComputerChoice(choices, playerChoice);
}

function generateComputerChoice(choices, playerChoice) {
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    calculateWinner(computerChoice, playerChoice);

}

/**
 * Gets the current tally of incorrect answers from the DOM 
 */
function calculateWinner(computerChoice, playerChoice) {
    if (playerChoice === computerChoice) {
        result = "IT'S A TIE!";
    } else {
        switch (playerChoice) {
            case "rock":
                result = (computerChoice === "scissors" || computerChoice === "lizard") ? "YOU WIN!" : "Want to Quit!";
                break;
            case "paper":
                result = (computerChoice === "rock" || computerChoice === "spock") ? "YOU WIN!" : "Want to Quit!";
                break;
            case "scissors":
                result = (computerChoice === "paper" || computerChoice === "lizard") ? "YOU WIN!" : "Want to Quit!";
                break;
            case "lizard":
                result = (computerChoice === "paper" || computerChoice === "spock") ? "YOU WIN!" : "Want to Quit!";
                break;
            case "spock":
                result = (computerChoice === "scissors" || computerChoice === "rock") ? "YOU WIN!" : "Want to Quit!";
                break;
        }
    }
    updateScores(result, computerChoice, playerChoice)
}

/**
 * main game function
 */
function updateScores(result, computerChoice, playerChoice) {
    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("darkvioletText", "lightvioletText");

    switch (result) {
        case "YOU WIN!":
            resultDisplay.classList.add("darkvioletText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "Want to Quit!":
            console.log("updateComputerScore");
            console.log(computerScore);
            resultDisplay.classList.add("lightvioletText");
            computerScore++;
            console.log(computerScore);
            computerScoreDisplay.textContent = computerScore;
            break;
    }
    checkForOverallWinner()
}

function checkForOverallWinner() {
    let winningScore = 5;
    if (playerScore >= winningScore) {
        //add player wins pop message 
        console.log("You won!");
       
        playerScoreModal.innerText = playerScore;
        computerScoreModal.innerText = computerScore;
        modalMessage.innerText = "You won!";
        openEndGameModal()
    } else if (computerScore >= winningScore) {
        //add player loses haha pop message
        console.log("You lost,want to leave?");

        playerScoreModal.innerText = playerScore;
        computerScoreModal.innerText = computerScore;
        modalMessage.innerText = "You lost,want to leave?";
        openEndGameModal()

    } else {
        //when nobody won overall
        console.log("play-next-round");
    }
}

// Get the modal for the classical game and the new version of the game
let endGameModal = document.getElementById("endModal");
let playerScoreModal = document.getElementById("modal-player-score");
let computerScoreModal = document.getElementById("modal-computer-score");
let modalMessage = document.getElementById("modal-message");
// Get the <span> element that closes the modal
let modalClose = document.getElementsByClassName("modalClose")[0];

// When the user reaches the end of the game, open the modal 
function openEndGameModal() {
    endGameModal.style.display = "block";
}

function closeEndGameModal(event) {
    endGameModal.style.display = "none";

    // reset the players scores
    
    // go back to the main menu
    goToMainMenu()
}

// When the user clicks on <span> (x), close the modal
modalClose.addEventListener('click', closeEndGameModal)
// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', () => {
    if (event.target == endGameModal) {
        endGameModal.style.display = "none";
    }
})