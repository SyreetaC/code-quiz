const returnButton = document.getElementById("return-button");
const clearButton = document.getElementById("clear-scores-button");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const backToStart = () => {
  location.href = "/index.html";
};

const getFromLocalStorage = () => {
  const highscores = localStorage.getItem("highScores");
  if (highscores) {
    return highScores;
  } else {
    return [];
  }
};

const renderHighScoreTable = (highscores) => {
  if (highscores.length === 0) {
    console.log("empty");
  } else {
    console.log("create table");
  }
};

const constructHighScoresList = () => {
  const 
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
