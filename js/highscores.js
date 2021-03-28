const returnButton = document.getElementById("return-button");
const clearButton = document.getElementById("clear-scores-button");
const highscores = JSON.parse(localStorage.getItem("highScores")) || [];

const backToStart = () => {
  location.href = "/index.html";
};

const getFromLocalStorage = () => {
  const highScore = localStorage.getItem("highScores");
  if (highScore) {
    return highScore;
  } else {
    return [];
  }
};

const renderHighScoreTable = (highscores) => {
  getFromLocalStorage();
  if (highscores.length === 0) {
    console.log("empty");
  } else {
    constructHighScoresText();
  }
};

const constructHighScoresText = () => {
  const scoreContainer = document.getElementById("score-container");
  const highScoreContent = document.createElement("div");
  highScoreContent.setAttribute("id", "highScoreContent");
  highScoreContent.textContent = highscores;
  scoreContainer.appendChild(highScoreContent);
};

const onLoad = () => {
  const highscores = getFromLocalStorage();
  renderHighScoreTable(highscores);
};

const clearScores = () => {
  localStorage.clear();
  onLoad();
};

returnButton.addEventListener("click", backToStart);
clearButton.addEventListener("click", clearScores);

window.addEventListener("load", onLoad);
