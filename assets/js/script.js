// Gets button selection-elements and adds event listeneres
let selectionButton = document.getElementsByClassName("selection-button");
//Gets alert-result section where "You win", "You lose" or "You draw" will be displayed accordingly.
let alertResult = document.getElementById("alert-result");

//Gets span where WIN score will be displayed.
let wins = document.getElementById("user-win");

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
    compareChoice();
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
/** Function that compares user choice and computer choice, determining
 * the result and displaying an alert message below: ("You win!", "You lose!" or "You draw!") */ 
function compareChoice() {
    if (computerSelectedChoice===userSelectedChoice) {
        alertResult.innerHTML = "You draw!";
        updateDraw;
    } else if ((userSelectedChoice==="paper" && computerSelectedChoice==="rock") 
    || (userSelectedChoice==="rock" && computerSelectedChoice==="scissors") 
    || (userSelectedChoice==="scissors" && computerSelectedChoice==="paper")) {
        alertResult.innerHTML = "You win!";
        updateWin();
    } else if ((userSelectedChoice==="paper" && computerSelectedChoice==="scissors") 
    || (userSelectedChoice==="rock" && computerSelectedChoice==="paper") 
    || (userSelectedChoice==="scissors" && computerSelectedChoice==="rock")) {
        alertResult.innerHTML = "You lose!";
        updateLose();
    } 
}
/** Function that increments the WIN
 * score by 1 point, each time user wins
 */
function updateWin() {
    oldScore = parseInt(wins.innerText);
    document.getElementById("user-win").innerText = oldScore+1;
}

function updateDraw() {

}

function updateLose() {

}

function gameOver() {

}