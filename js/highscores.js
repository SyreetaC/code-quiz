const returnButton = document.getElementById("return-button");
const clearButton = document.getElementById("clear-scores-button");

const backToStart = () => {
  location.href = "./index.html";
};

const writeToTable = (highscores) => {};
const constructHighScoreTable = () => {
  const highScoreTable = document.createElement("highScoreTable");
  table.setAttribute("class", "highScoreTable");
  table.setAttribute("id", "highScoreTable");
};

//get existing data from local storage
const getFromLocalStorage = () => {
  const highScores = JSON.parse(localStorage.getItem("highScores"));
  console.log(highScores); //why does this show twice?
  if (highScores) {
    return highScores;
  } else {
    return [];
  }
};

const renderHighScoreTable = () => {
  const highscores = getFromLocalStorage();
  if (highscores) {
    highscores.map(writeToTable);
  } else {
    console.log("there are no scores");
  }
};

const onLoad = () => {
  const highscores = getFromLocalStorage();
  renderHighScoreTable();
};

const clearScores = () => {
  localStorage.clear();
  onLoad();
};

returnButton.addEventListener("click", backToStart);
clearButton.addEventListener("click", clearScores);

window.addEventListener("load", onLoad);
