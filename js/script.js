const quizQuestions = [
  {
    title: "Which HTML element do we put the Javascript inside?",
    answers: ["js", "script", "javascript"],
    correctAnswer: "script",
  },

  {
    title: "How do you add a comment in Javascript?",
    answers: ["//", "<!--->", "This is a comment"],
    correctAnswer: "//",
  },

  {
    title: "Which one of these is a Javascript key word?",
    answers: ["const", "lot", "create", "proof"],
    correctAnswer: "const",
  },

  {
    title: "What statement supplies the value of a function?",
    answers: ["track", "return", "let", "value"],
    correctAnswer: "return",
  },

  {
    title: "Why do we use the console when coding in Javascript?",
    answers: [
      "To make sure everything works",
      "To make our code look good",
      "To test the code we have written",
      "To show the value of variables",
    ],
    correctAnswer: "To test the code we have written",
  },
];

const bodyElement = document.body;
const startGameDiv = document.getElementById("start-page-div");
const timerElement = document.getElementById("time-remaining");

let timerValue = 60;

const countdown = () => {
  const timerTick = () => {
    timerElement.textContent = timerValue;
    timerValue -= 1;

    if (timerValue < 0) {
      clearInterval(timer);
      alert("GAME OVER!"); //create 'game over' container
    }
  };
  const timer = setInterval(timerTick, 1000);
};

const createQuestion = (question) => {};

//Constructing game elements
const constructGameContainer = () => {
  const gamePageDiv = document.createElement("div");
  gamePageDiv.setAttribute("class", "game-page-section");

  const gamePageHeader = document.createElement("h4");
  gamePageHeader.setAttribute("class", "question-header");
  gamePageHeader.textContent = "Question 1";

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

const startButtonElement = document.getElementById("start-button");
//Start of game
const startGame = () => {
  console.log("START GAME");
  const gamePageDiv = constructGameContainer();
  bodyElement.removeChild(startGameDiv); //Removes start page
  bodyElement.appendChild(gamePageDiv); //fix CSS for this appended child!
  createQuestion(quizQuestions[0]);
  countdown();
};

startButtonElement.addEventListener("click", startGame);
