const startButtonElement = document.getElementById("start-button");
const bodyElement = document.body;
const startGameDiv = document.getElementById("start-page-div");
const timerElement = document.getElementById("time-remaining");

let timerValue = 60;

const countdown = () => {
  const timerTick = () => {
    timerValue -= 1;
    timerElement.textContent = timerValue;

    if (timerValue === 0) {
      clearInterval(timer);
    }
  };
  const timer = setInterval(timerTick, 1000);
};
//Constructing game elements
const constructGameContainer = () => {
  const gamePageDiv = document.createElement("div");
  gamePageDiv.setAttribute("class", "game-page-section");

  const gamePageHeader = document.createElement("h4");
  gamePageHeader.setAttribute("class", "question-header");

  const gamePageAnswersDiv = document.createElement("div");
  gamePageAnswersDiv.setAttribute("class", "answer-buttons");

  const gamePageAnswerButton1 = document.createElement("button");
  gamePageAnswerButton1.setAttribute("class", "answer1");

  gamePageDiv.appendChild(
    gamePageHeader,
    gamePageAnswersDiv,
    gamePageAnswerButton1
  );

  //add buttons
  return gamePageDiv;
};

//Start of game
const startGame = () => {
  console.log("START GAME");
  const gamePageDiv = constructGameContainer();
  bodyElement.removeChild(startGameDiv); //Removes start page
  bodyElement.appendChild(gamePageDiv); //fix CSS for this appended child!

  countdown();
};

startButtonElement.addEventListener("click", startGame);

// let timerValue = 60;

// //set timer to reduce by 1 second
// const timerInterval = setInterval(timerElement, 1000);

//create a function to detail what happens when the button is clicked.
