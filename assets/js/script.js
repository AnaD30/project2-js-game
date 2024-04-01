//Rock,paper,scissors,lizard,spock


//Menu area responsiveness coneccted to Javascript
let playGameBtn = document.getElementById("play-game");
let container = document.getElementById("game-container");
let game = "<div class='roshambo'></div>";
let closeContainer = document.getElementById("close-container");
let closeInnerContainer = "<div class='closegame'></div>";


let playGame2Btn = document.getElementById("play-game2");
let game2 = "<div class='roshambo2'>";

let close2 = "<div class='closegame2'></div>"
let closeContainer2 = document.getElementById("close-container2");

playGameBtn.addEventListener('click', insurtGame);
playGame2Btn.addEventListener('click', insurtGame2);

function insurtGame() {
    container.innerHTML = game;
    closeContainer.innerHTML = closeInnerContainer;
}

function insurtGame2() {
    container.innerHTML = game2;
    closeContainer2.innerHTML = closeInnerContainer2;
}


/**
 * Declare constants for Dom elements
 * and possible choices
 * */

const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

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
const choices2 = ["rock", "paper", "scissors","lizard","spock" ];
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
    generateComputerChoice(choices, playerChoice);
}

function generateComputerChoice(choices, playerChoice){
    let computerChoice = choices[Math.floor(Math.random()* choices.length)];
    calculateWinner(computerChoice,playerChoice);

} 

/**
 * Gets the score for the second game  from the DOM and 
 * gets the second tally of incorrect answers from the DOM 
 **/2
function playGame2(event) {
    console.log(event);
    let playerChoice = event.target.id;
    console.log(playerChoice);
    generateComputerChoice(choices2, playerChoice);
}

function generateComputerChoice(choices2, playerChoice){
    let computerChoice = choices2[Math.floor(Math.random()* choices2.length)];
    calculateWinner(computerChoice,playerChoice);

} 

/**
 * Gets the current tally of incorrect answers from the DOM 
 */
function calculateWinner(computerChoice, playerChoice){
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
            result = (computerChoice === "rock") ? "YOU WIN!" : "Want to Quit!";
            break;
        case "spock":
            result = (computerChoice === "rock") ? "YOU WIN!": "Want to Quit!";
            
    }
}
*/

/**
 * main game function
 */
function updateScores(result, computerChoice, playerChoice){
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

function checkForOverallWinner(){
    let winningScore = 5;
    if (playerScore >= winningScore){
        //add player wins pop message 
        console.log("player-won-overall");
    } else if(computerScore >= winningScore){
        //add player loses haha pop message
        console.log("computer-won-haha");
    }else{
        //when nobody won overall
        console.log("play-next-round");
    }
}