const returnButton = document.getElementById("return-button");
const clearButton = document.getElementById("clear-scores-button");
const highscores = JSON.parse(localStorage.getItem("highscores")) || [];

const backToStart = () => {
  location.href = "/index.html";
};

const clearScores = () => {
  localStorage.clear();
  onLoad();
};

const getFromLocalStorage = () => {
  const highscores = localStorage.getItem("highscores");
  if (highscores) {
    return highscores;
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

const onLoad = () => {
  const highscores = getFromLocalStorage();
  renderHighScoreTable(highscores);
};

returnButton.addEventListener("click", backToStart);
clearButton.addEventListener("click", clearScores);

window.addEventListener("load", onLoad);
