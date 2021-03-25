const quizQuestions = [
  {
    title: "Which HTML element do we put the Javascript inside?",
    answers: ["js", "script", "javascript"],
    correctAnswer: 1,
  },

  {
    title: "How do you add a comment in Javascript?",
    answers: ["//", "<!--->", "This is a comment"],
    correctAnswer: 0,
  },

  {
    title: "Which one of these is a Javascript key word?",
    answers: ["const", "lot", "create", "proof"],
    correctAnswer: 0,
  },

  {
    title: "What statement supplies the value of a function?",
    answers: ["track", "return", "let", "value"],
    correctAnswer: 1,
  },

  {
    title: "Why do we use the console when coding in Javascript?",
    answers: [
      "To make sure everything works",
      "To make our code look good",
      "To test the code we have written",
      "To show the value of variables",
    ],
    correctAnswer: 2,
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
const createChoices = (answers) => {
  const choiceContainer = document.createElement("div");

  const createChoice = (answer) => {
    const answersDiv = document.createElement("div");
    const answerButtons = document.createElement("button");
    answerButtons.setAttribute("data-answer", answer);
    answerButtons.setAttribute("class", "answer-btn");
    answerButtons.textContent = answer;

    answersDiv.appendChild(answerButtons);
    choiceContainer.appendChild(answersDiv); //appends each choice button to a container.

    //Sets the number of buttons to the number of answers in the button elements.
  };
  answers.forEach(createChoice);
  return choiceContainer;
};

const createQuestion = (question) => {
  // console.log(question);
  const questionContainer = document.createElement("div");
  questionContainer.setAttribute("id", "question");
  questionContainer.setAttribute("data-answer", question.correctAnswer);

  const h2 = document.createElement("h2");
  h2.textContent = question.title;
  questionContainer.appendChild(h2);

  const choices = createChoices(question.answers);
  questionContainer.appendChild(choices);
  return questionContainer;
};

//Constructing game elements
const constructGameContainer = () => {
  const gamePageDiv = document.createElement("div");
  gamePageDiv.setAttribute("class", "game-page-div");

  gamePageDiv.appendChild(createQuestion(quizQuestions[0])); //Append question container to main game page div.
  return gamePageDiv;
};

const startButtonElement = document.getElementById("start-button");
//Start of game
const startGame = () => {
  bodyElement.removeChild(startGameDiv); //Removes start page
  const gamePageDiv = constructGameContainer();

  bodyElement.appendChild(gamePageDiv); //fix CSS for this appended child!

  quizQuestions.forEach(createQuestion); //for each quiz question run create question function.
  countdown();
};

startButtonElement.addEventListener("click", startGame);
document.addEventListener("click", (event) => {
  if (event.target.className === "answer-btn") {
    console.log(event.target.getAttribute("data-answer"));

    // nextQuestion();
  }
});

// const nextQuestion = () => {
//   if ("answer-btn" === question.CorrectAnswer) {
//     console.log("Correct");
//   } else {
//     alert("STOP!");
//   }
// };
