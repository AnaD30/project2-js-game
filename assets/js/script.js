//Rock,paper,scissors,lizard,spock


/**Menu area responsiveness coneccted to Javascript*/
// referingreferring to game 1 or original version
let playGameBtn = document.getElementById("play-game");
let playGame2Btn = document.getElementById("play-game2");
let container = document.getElementById("game-container");
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

//let closeContainer = document.getElementById("close-container");
//let closeInnerContainer = "<div class='closegame'></div>";

//let close2 = "<div class='closegame2'></div>"
//let closeInnerContainer2 = document.getElementById("close-container2");



//refering to a option of closing the game once inside the game
//closeButton.addEventListener('click', closeGame);


function insurtGame() {
    container.innerHTML = classicGame;
    setUpClassicGame()
}

//insurting the game and playing, game 2
function insurtGame2() {
    container.innerHTML = newGame;
    setUpClassicGame()
    setUpNewGame()
}

// insurtin the container with rules or better said instructions
let rulesButton = document.getElementById("rules");
let rulesContainer = document.getElementById("rules-container");
let rules = `<div class="instructions">
<p class="old-version">
  The players may start by counting to three aloud, or by speaking the
  name of the game (e.g. "Rock! Paper! Scissors!"), raising one hand
  in a fist and swinging it down with each syllable onto their other
  hand (or in a less common variant, holding it behind their back).
  They then "throw" or "shoot" by extending their selected sign
  towards their opponent on what would have been the fourth count,
  often saying the word "shoot" while doing so.
</p>
<br />
<p class="new-version">
  The game is an expansion on the game Rock, Paper, Scissors. Each
  player picks a variable and reveals it at the same time. The winner
  is the one who defeats the others. In a tie, the process is repeated
  until a winner is found. Almost always, the boys will all pick Spock
  at the same time and tie over and over again.Scissors cuts
  Paper,Paper covers Rock,Rock crushes Lizard, Lizard poisons
  Spock,Spock smashes Scissors,Scissors decapitates Lizard,Lizard eats
  Paper,Paper disproves Spock, Spock vaporizes Rock(and as it always
  has) Rock crushes Scissors.
</p>
<div id="close-container3">
  <div class="close-rules">
    <button class="close-button3">&times</button>
  </div>
</div>
</div>`;

/*closing the tructions part,menu
let closeButton3 = document.getElementById("close-button3");
let closeContainer3 = document.getElementById("close-container3");
let closeInnerContainer3 = "<div class='close-rules'></div>";
*/

rulesButton.addEventListener('click', insurtRules);
//closeButton3.removeEventListener('click', closeContainer3);

function insurtRules() {
    rulesContainer.innerHTML = rules;

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
 * second part of the choices,connected to the game 2
 */
function setUpNewGame() {
    choices = ["rock", "paper", "scissors", "lizard", "spock"];
    const lizardButton = document.getElementById('lizard');
    const spockButton = document.getElementById('spock');

    lizardButton.addEventListener('click', playGame);
    spockButton.addEventListener('click', playGame);
}



/**
 * Gets the score of the first game from the DOM and 
 * gets the first tally of incorrect answers from the DOM 
 **/
1

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
 * Gets the score for the second game  from the DOM and 
 * gets the second tally of incorrect answers from the DOM for the second game
 **/
2


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
 * Gets the current tally of incorrect answers from the DOM 
 */
/** 
if (playerChoice === computerChoice) {
    result = "IT'S A TIE!";
} else {
    switch (playerChoice) {
        case "rock":
            result = (computerChoice === "scissors") ? "YOU WIN!" : "Want to Quit!";
            break;
        case "paper":
            result = (computerChoice === "rock") ? "YOU WIN!" : "Want to Quit!";
            break;
        case "scissors":
            result = (computerChoice === "paper") ? "YOU WIN!" : "Want to Quit!";
            break;
        case "lizard":
            result = (computerChoice === "spock") ? "YOU WIN!" : "Want to Quit!";
            break;
        case "spock":
            result = (computerChoice === "rock") ? "YOU WIN!": "Want to Quit!";
        case "rock":
            result = (computer === "spock") ? "YOU WIN!": "Want to Quit!";
        case "paper"
         result = (computer === "lizard") ? "YOU WIN!": "Want to Quit!";
       case "lizard":
            result = (computerChoice === "paepaper") ? "YOU WIN!" : "Want to Quit!";
            break;
            
    }
}

*/

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
        console.log("player-won-overall");
       
        playerScoreModal.innerText = playerScore;
        computerScoreModal.innerText = computerScore;
        modalMessage.innerText = "player-won-overall";
        openEndGameModal()
    } else if (computerScore >= winningScore) {
        //add player loses haha pop message
        console.log("computer-won-haha");

        playerScoreModal.innerText = playerScore;
        computerScoreModal.innerText = computerScore;
        modalMessage.innerText = "computer-won-haha";
        openEndGameModal()

    } else {
        //when nobody won overall
        console.log("play-next-round");
    }
}

// Get the modal
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