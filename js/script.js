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
let index = 0;

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
    answersDiv.setAttribute("class", "answer-container");
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
  h2.setAttribute("class", "question-header");
  h2.textContent = question.title;
  questionContainer.appendChild(h2);

  const choices = createChoices(question.answers);
  questionContainer.appendChild(choices);
  questionContainer.addEventListener("click", verifyChoice);

  return questionContainer;
};

const verifyChoice = (event) => {
  const target = event.target;
  const currentTarget = event.currentTarget;
  if (target.matches("button")) {
    const answer = target.getAttribute("data-answer");
    const correctAnswer = currentTarget.getAttribute("data-answer");

    if (answer === correctAnswer) {
      index += 1;
      bodyElement.appendChild(createQuestion(quizQuestions[index]));
    } else {
      questionContainer.removeChild(document.getElementById("question"));

      const wrongAnswer = document.createElement("h2");
      wrongAnswer.setAttribute("id", "wrongAnswer");
      wrongAnswer.textContent = "Try again";
      createQuestion.appendChild("wrongAnswer");
    }
  }
  if (index < quizQuestions.length) {
    const formContainer = document.createElement("div");
    const form = document.createElement("form");
    const label = document.createElement("label");
    const input = document.createElement("input");

    "game-page-div".removeChild("game-page-div");
    formContainer.appendChild(form, label, input);
    bodyElement.appendChild(formContainer);
  }
};

//Constructing game elements
const constructGameContainer = () => {
  const gamePageDiv = document.createElement("div");
  gamePageDiv.setAttribute("class", "game-page-div");
  bodyElement.appendChild(gamePageDiv);
  gamePageDiv.appendChild(createQuestion(quizQuestions[index])); //Append question container to main game page div.
  return gamePageDiv;
};

const startButtonElement = document.getElementById("start-button");
//Start of game
const startGame = () => {
  bodyElement.removeChild(startGameDiv); //Removes start page
  constructGameContainer();

  createQuestion(quizQuestions[index]); //for each quiz question run create question function.

  countdown();
};

startButtonElement.addEventListener("click", startGame);
