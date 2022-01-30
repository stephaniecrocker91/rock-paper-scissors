// Gets button selection-elements to then add event listeneres
let selectionButton = document.getElementsByClassName("selection-button");

//Gets alert-result section where "You win", "You lose" or "You draw" will be displayed accordingly.
let alertResult = document.getElementById("alert-result");

//Gets span where Round Number will be displayed.
let roundNumberDisplay = document.getElementById("round-number");

//Gets span where WIN, LOSE and DRAW scores will be displayed.
let wins = document.getElementById("user-win");
let lose = document.getElementById("user-lose");
let draw = document.getElementById("draw");


//Gets span where User Choice & Computer Choice will be displayed. Will later add image
let userChoiceDisplay = document.getElementById("user-image");
let computerChoiceDisplay = document.getElementById("computer-image");


//Get Refresh Button to then add event listener
let refreshButton = document.getElementById("refresh-button");

//Where we store our user's choice
let userSelectedChoice;

//Where we store our computer's choice
let computerSelectedChoice;

//Event listener for Rock, Paper, Scissor selection buttons
for (i of selectionButton) {
    i.addEventListener("click", runGame);
}

//Event listener for Refresh Button
refreshButton.addEventListener("click", refreshGame);

/** Function refresh game, which will also be thr games starting point: 
 * Round 1 and 
 * results tally of 0
 */
//function refreshGame() {
 //   wins.innerText="0";
  //  lose.innerText="0";
   // draw.innerText="0";
   // roundNumberDisplay.innerText = "1";
//}


/** Selects the targets ID,
 * stores it in userSelectedChoice and displays
 * in userChoiceDisplay. */
function userChoice(e) {
    userSelectedChoice = e.target.id;
    userChoiceDisplay.innerText = userSelectedChoice;
}
/** Function that displays Round Number */
function updateRound() {
    lastRound = parseInt(roundNumberDisplay.innerText);
    document.getElementById("round-number").innerText = lastRound + 1;
    if (lastRound === 5) {
        gameOver();
    }
}


/** Function that randomly generates 
 * the computers choice, stores it in computerSelectedChoice
 * and displays it in computerChoiceDisplay */
function computerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        computerSelectedChoice = 'rock';
    } else if (randomNumber === 1) {
        computerSelectedChoice = 'paper';
    } else if (randomNumber === 2) {
        computerSelectedChoice = 'scissors';
    }
    computerChoiceDisplay.innerText = computerSelectedChoice;
}
/** Function that compares user choice and computer choice, determining
 * the result and displaying an alert message below: ("You win!", "You lose!" or "You draw!") */
function compareChoice() {
    if (computerSelectedChoice === userSelectedChoice) {
        alertResult.innerHTML = "You draw!";
        updateDraw();
    } else if ((userSelectedChoice === "paper" && computerSelectedChoice === "rock") ||
        (userSelectedChoice === "rock" && computerSelectedChoice === "scissors") ||
        (userSelectedChoice === "scissors" && computerSelectedChoice === "paper")) {
        alertResult.innerHTML = "You win!";
        updateWin();
    } else if ((userSelectedChoice === "paper" && computerSelectedChoice === "scissors") ||
        (userSelectedChoice === "rock" && computerSelectedChoice === "paper") ||
        (userSelectedChoice === "scissors" && computerSelectedChoice === "rock")) {
        alertResult.innerHTML = "You lose!";
        updateLose();
    }
}
/** Function that increments the WIN
 * score by 1 point, each time user wins
 */
function updateWin() {
    oldScoreWin = parseInt(wins.innerText);
    document.getElementById("user-win").innerText = oldScoreWin + 1;
}

function updateDraw() {
    oldScoreDraw = parseInt(draw.innerText);
    document.getElementById("draw").innerText = oldScoreDraw + 1;
}

function updateLose() {
    oldScoreLose = parseInt(lose.innerText);
    document.getElementById("user-lose").innerText = oldScoreLose + 1;
}

function gameOver() {
    if (oldScoreWin > oldScoreLose) {
        (document.getElementById("end-game-result")).innerHTML = "You win the game!";
    } else if (oldScoreWin < oldScoreLose) {
        (document.getElementById("end-game-result")).innerHTML = "Game over, you lose!";
    } else if (oldScoreLose === oldScoreWin) {
        (document.getElementById("end-game-result")).innerHTML = "It's a draw!";
    }
}

//Init function that runs all the game functions
function runGame(e) {
    userChoice(e);
    computerChoice();
    compareChoice();
    updateRound();
}