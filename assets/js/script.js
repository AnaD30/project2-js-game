//Rock,paper,scissors,lizard,spock


//Menu area responsiveness coneccted to Javascript
let playGameBtn = document.getElementById("play-game");
let container = document.getElementById("game-container");
let game = "<div class='Roshambo'></div>";
let closeContainer = document.getElementById("close-container");
let close = "<div class='callout'></div>"

let playGame2Btn = document.getElementById("play-game2");
let game2 = "<div class='Roshambo2'></div>";

let close2 = "<div class='callout2'></div>"
let closeContainer2 = document.getElementById("close-container2");

playGameBtn.addEventListener('click', insurtGame);
playGame2Btn.addEventListener('click', insurtGame);

function insurtGame() {
    container.innerHTML = game;
    close.innerHTML = close;
}

function insurtGame() {
    container.innerHTML = game2;
    close2.innerHTML = close2;
}


/**
 * Declare constants for Dom elements
 * and possible choices
 * */

const choices = ["rock", "paper", "scissors","lizard","spock" ];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const logo = document.getElementById("logo");

const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

rockButton.addEventListener('click', playGame);
paperButton.addEventListener('click', playGame);
scissorsButton.addEventListener('click', playGame);

/**
 * second part of the choices,connected to the game 2
 */
const lizardButton = document.getElementById('lizard');
const spockButton = document.getElementById('spock');

lizardButton.addEventListener('click',playGame);
spockButton.addEventListener('click',playGame);

let playerScore = 0;
let computerScore = 0;


/**
 * Gets the score of the first game from the DOM and 
 * gets the fisrt tally of incorrect answers from the DOM 
 **/1
function playGame(event) {
    console.log(event);
    let playerChoice = event.target.id;
    console.log(playerChoice);
}

const computerChoice = choices[Math.floor(Math.random() * 5)];
let result = "";


/**
 * Gets the score for the second game  from the DOM and 
 * gets the second tally of incorrect answers from the DOM 
 **/2
function playGame(event) {
    console.log(event);
    let playerChoice = event.target.id;
    console.log(playerChoice);
}

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
            result = (computerChoice === "scissors") ? "YOU WIN!" : "Want to Quit!";
            break;
        case "paper":
            result = (computerChoice === "rock") ? "YOU WIN!" : "Want to Quit!";
            break;
        case "scissors":
            result = (computerChoice === "paper") ? "YOU WIN!" : "Want to Quit!";
            break;
    }
}

/**
 * Gets the current tally of incorrect answers from the DOM 
 */

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
            result = (computerChoice === "rock") ? "YOU WIN!" : "Want to Quit!";
            break;
        case "spock"
        result = (computerChoice === "paper") ? "YOU WIN!": "Want to Quit!";
            
    }
}

/**
 * main game function
 */
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
    case "Want to QUIT?":
        resultDisplay.classList.add("lightvioletText");
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
        break;
}
