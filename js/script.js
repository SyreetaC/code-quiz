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
const gameContainer = document.getElementById("game-container");
const startGameDiv = document.getElementById("start-page-div");
const timerElement = document.getElementById("time-remaining");
let timerValue = 30;
let index = 0;

const countdown = () => {
  const timerTick = () => {
    timerElement.textContent = timerValue;
    timerValue -= 1;

    if (timerValue < 0) {
      if (timer === 0) {
        const score = timer;
        clearInterval(timer);
        alert("GAME OVER!"); //create 'game over' container
      }
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

  gameContainer.appendChild(questionContainer);

  return questionContainer;
};

//Constructing game elements
const constructGameContainer = () => {
  const gamePageDiv = document.createElement("div");
  gamePageDiv.setAttribute("class", "game-page-div");
  bodyElement.appendChild(gamePageDiv);
  gamePageDiv.appendChild(createQuestion(quizQuestions[index])); //Append question container to main game page div.
  return gamePageDiv;
};

const verifyChoice = (event) => {
  const questionContainer = document.getElementById("question");
  const target = event.target;
  const currentTarget = event.currentTarget;
  if (target.matches("button")) {
    const answer = target.getAttribute("data-answer");
    const correctAnswer = currentTarget.getAttribute("data-answer");

    if (answer === correctAnswer) {
      const correct = document.createElement("h2");
      correct.setAttribute("id", "correct-answer");
      correct.textContent = "Well done!!!";
      questionContainer.appendChild(correct);

      if (index === quizQuestions.length - 1) {
        gameOver();
      } else {
        index += 1;

        gameContainer.removeChild(questionContainer);
        createQuestion(quizQuestions[index]);
      }
    } else {
      const wrongAnswer = document.createElement("h2");
      wrongAnswer.setAttribute("id", "wrong-answer");
      wrongAnswer.textContent = "Try again!!!";
      questionContainer.appendChild(wrongAnswer);

      if (timerValue > 10) {
        timerValue -= 10;
      } else {
        timerValue = 1;
      }
    }
  }
};

//ends game and presents form
const gameOver = () => {
  const questionContainer = document.getElementById("question");
  const gameContainer = document.getElementById("game-container");
  timerElement.remove();
  gameContainer.removeChild(questionContainer);

  //create elements for game over screen
  const scoreDiv = document.createElement("div");
  scoreDiv.setAttribute("class", "question-container");
  const scoreHeader = document.createElement("h1");
  const scoreParagraph = document.createElement("p");
  const scoreForm = document.createElement("form");
  const scoreLabel = document.createElement("label");
  const scoreInput = document.createElement("input");
  const scoreButton = document.createElement("button");

  scoreHeader.textContent = "Game over!";
  scoreParagraph.textContent = "Your final score is" + score;
  scoreLabel.textContent = "Enter your name: ";
  scoreButton.textContent = "Submit";

  //append game over screen elements onto the gameContainer Div
  gameContainer.appendChild(scoreDiv);
  scoreDiv.appendChild(scoreHeader);
  scoreDiv.appendChild(scoreParagraph);
  scoreDiv.appendChild(scoreForm);
  scoreForm.appendChild(scoreLabel);
  scoreForm.appendChild(scoreInput);
  scoreInput.setAttribute("type", "text");
  scoreInput.setAttribute("id", "score-input");
  scoreForm.appendChild(scoreButton);
  scoreButton.setAttribute("type", "submit");
  scoreButton.setAttribute("id", "score-button");
};

const submitButtonContent = document.getElementById("score-button");
const submitForm = (event) => {
  event.preventDefault();
  const scoreInputContent = document.getElementById("score-input").value;
  //record the initials and score in local storage if no existing value stored
  let currentHighScore = localStorage.getItem("score");
  if (currentHighScore === null) {
    localStorage.setItem("initials", scoreInputContent);
    localStorage.setItem("score", score);
  } else {
    currentHighScore = parseInt(currentHighScore);
    //record the initials and score in local storage if score is higher than current value stored
    if (score > currentHighScore) {
      localStorage.setItem("initials", scoreInputContent);
      localStorage.setItem("score", score);
    }
  }
  //navigate to the highscores page
  window.location.href = "./highscores.html";
};

const startButtonElement = document.getElementById("start-button");
//Start of game
const startGame = () => {
  gameContainer.removeChild(startGameDiv); //Removes start page

  createQuestion(quizQuestions[index]); //for each quiz question run create question function.

  countdown();
};

startButtonElement.addEventListener("click", startGame);
