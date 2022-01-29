// Gets button selection-elements and adds event listeneres
let selectionButton = document.getElementsByClassName("selection-button");
let userSelectedChoice;


for (i of selectionButton) {
    i.addEventListener("click", userChoice);
}

function userChoice(e) {
   userSelectedChoice = e.target.id;
    console.log(userSelectedChoice);
}

function runGame() {

}

function computerChoice() {

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