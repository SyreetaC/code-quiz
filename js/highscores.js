const returnButton = document.getElementById("return-button");
const clearButton = document.getElementById("clear-scores-button");

const backToStart = () => {
  location.href = "./index.html";
};

//get existing data from local storage
const getFromLocalStorage = () => {
  const highScores = JSON.parse(localStorage.getItem("highScores"));
  if (highScores) {
    return highScores;
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

const constructHighScoresTable = () => {
  const initials = localStorage.getItem("initials");
  console.log(initials);
  const score = localStorage.getItem("score");
  console.log(score);

  const scoreContainer = document.getElementById("score-container");
  const highScoreContent = document.createElement("div");
  highScoreContent.setAttribute("id", "highScoreContent");
  highScoreContent.textContent = `${initials} - ${score}`;
  scoreContainer.append(highScoreContent);
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
