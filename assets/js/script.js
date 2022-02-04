//GLOBAL VARIABLES

//Gets span where Round Number will be displayed.
let roundNumberDisplay = document.getElementById("round-number");

//Where we store our computers choice and users choice
let userSelectedChoice;
let computerSelectedChoice;

//Gets span where User Choice & Computer Choice will be displayed as image
let userChoiceDisplay = document.getElementById("user-image");
let computerChoiceDisplay = document.getElementById("computer-image");

//Gets span where WIN, LOSE and DRAW scores will be displayed.
let wins = document.getElementById("user-win");
let lose = document.getElementById("user-lose");
let draw = document.getElementById("draw");

//Gets alert-result section where "You win", "You lose" or "You draw" will be displayed accordingly.
let alertResult = document.getElementById("alert-result");




//EVENT LISTENERS
//Event listener for Rock, Paper, Scissor selection buttons
let selectionButton = document.getElementsByClassName("selection-button");
for (i of selectionButton) {
    i.addEventListener("click", playRound);
}

// Event listener for submit button in form
let form = document.getElementById("player-name-form");
form.addEventListener("submit", handlePlayerName);

//Event listener for Refresh Button
let refreshButton = document.getElementById("refresh-button");
refreshButton.addEventListener("click", refreshGame);





//FUNCTIONS BELOW!


/** FUNCTION for Launch Game Modal */
function launchGame() {
    (document.getElementById("play-round-modal-1")).style.display = "none";
    (document.getElementById("play-round-modal-2")).style.display = "none";
    (document.getElementById("game-over-modal")).style.display = "none";
    (document.getElementById("round-number-section")).style.display = "none"; 
}

/** FUNCTION for adding Player Name */
function handlePlayerName (e) {
    e.preventDefault();
    let playerName = (document.getElementById("player-name")).value;
    console.log(playerName)
    document.getElementById("insert-player-name").innerText= playerName;
    (document.getElementById("play-round-modal-2")).style.display = "block";
    (document.getElementById("launch-game-modal")).style.display = "none";
    (document.getElementById("round-number-section")).style.display = "block";
}

/** FUNCTION that runs each round */
function playRound(e) {
    userChoice(e);
    computerChoice();
    compareChoice();
    updateRound();
}


/** FUNCTION that displays Round Number */
function updateRound() {
    lastRound = parseInt(roundNumberDisplay.innerText);
    document.getElementById("round-number").innerText = lastRound + 1;
    if (lastRound === 5) {
        gameOver();
    }
}


/** FUNCTION that selects the targets ID,
 * stores it in userSelectedChoice and displays
 * in userChoiceDisplay. */
 function userChoice(e) {
    userSelectedChoice = e.target.id;
    userChoiceDisplay.innerHTML = `<img src="./assets/images/${userSelectedChoice}.jpg" alt="${userSelectedChoice}">`;
    (document.getElementById("play-round-modal-1")).style.display = "block";
}


/** FUNCTION that randomly generates 
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
    computerChoiceDisplay.innerHTML = `<img src="./assets/images/${computerSelectedChoice}.jpg" alt="${computerSelectedChoice}">`;
}


/** FUNCTION that compares user choice and computer choice, determining
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


/** FUNCTION to REFRESH GAME back to start
 */
function refreshGame() {
    (document.getElementById("game-over-modal")).style.display = "none";
    (document.getElementById("play-round-modal-1")).style.display = "none";
    (document.getElementById("play-round-modal-2")).style.display = "none";
    (document.getElementById("launch-game-modal")).style.display = "block";
    (document.getElementById("round-number-section")).style.display = "none";
    
    wins.innerText="0";
    lose.innerText="0";
    draw.innerText="0";
    roundNumberDisplay.innerText = "1";
    computerChoiceDisplay.innerText ="";
    userChoiceDisplay.innerText="";
    alertResult.innerText="";
    (document.getElementById("player-name")).value="";
    document.getElementById("insert-player-name").innerText= "";

}


/** FUNCTION that increments the WIN
 * score by 1 point, each time user wins
 */
function updateWin() {
    oldScoreWin = parseInt(wins.innerText);
    document.getElementById("user-win").innerText = oldScoreWin + 1;
}


/** FUNCTION that increments the DRAW
 * score by 1 point, each time user wins
 */
function updateDraw() {
    oldScoreDraw = parseInt(draw.innerText);
    document.getElementById("draw").innerText = oldScoreDraw + 1;
}


/** FUNCTION that increments the LOSE
 * score by 1 point, each time user wins
 */
function updateLose() {
    oldScoreLose = parseInt(lose.innerText);
    document.getElementById("user-lose").innerText = oldScoreLose + 1;
}


/**FUNCTION that will 
 * display GAME OVER MODAL after 5 rounds and show final result of game
 */
 function gameOver() {
    let finalScoreWin = document.getElementById("user-win").innerText;
    let finalScoreLose = document.getElementById("user-lose").innerText;
    let finalScoreDraw = document.getElementById("draw").innerText;
    if (finalScoreWin > finalScoreLose) {
        (document.getElementById("game-over-result")).innerHTML = "You win the game!";
    } else if (finalScoreWin < finalScoreLose) {
        (document.getElementById("game-over-result")).innerHTML = "Game over, you lose!";
    } else if (finalScoreLose === finalScoreWin) {
        (document.getElementById("game-over-result")).innerHTML = "It's a draw!";
    }
    (document.getElementById("play-round-modal-1")).style.display = "none";
    (document.getElementById("play-round-modal-2")).style.display = "none";
    (document.getElementById("game-over-modal")).style.display = "block";
    (document.getElementById("round-number-section")).style.display = "none";    
}
