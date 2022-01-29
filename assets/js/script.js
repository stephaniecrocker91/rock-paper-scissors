// Gets button selection-elements and adds event listeneres
let selectionButton = document.getElementsByClassName("selection-button");

//Where we store our user's choice
let userSelectedChoice;

//Where we store our computer's choice
let computerSelectedChoice;

//Event listener for Rock, Paper, Scissor selection buttons
for (i of selectionButton) {
    i.addEventListener("click", userChoice);
}


/** Selects the targets ID and 
 * stores it in userSelectedChoice */ 
function userChoice(e) {
    userSelectedChoice = e.target.id;
    console.log(`user chose ${userSelectedChoice}`);
    computerChoice();
    console.log(`computer chose ${computerSelectedChoice}`);
}

function runGame() {
    
}


/** Function that randomly generates 
 * the computers choice */ 
function computerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0 ) {
        computerSelectedChoice = 'rock';
        }
        else if (randomNumber === 1 ){
            computerSelectedChoice = 'paper';
        }
        else if (randomNumber === 2) {
            computerSelectedChoice = 'scissors';
        }

}

function compareChoice() {

}

function updateWin() {

}

function updateDraw() {

}

function updateLose() {

}

function gameOver() {

}