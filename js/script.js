const startButtonElement = document.querySelector(".start-button");
const startGameDiv = document.querySelector(".start-page-div");
const timerElement = document.querySelector(".time-remaining");
const bodyElement = document.body;

let timerValue = 60;

//set timer to reduce by 1 second
const timer = setInterval("", 1000);

//create a function to detail what happens when the button is clicked.
const startGame = () => {
  startButtonElement.addEventListener("click");
};
