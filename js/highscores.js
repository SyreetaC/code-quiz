const returnButton = document.getElementById("return-button");
const clearButton = document.getElementById("clear-scores-button");

const backToStart = () => {
  location.href = "./index.html";
};

const writeToTable = (highScores) => {
  constructHighScoreTable();
  const highScoreTable = document.getElementById("highScoreTable");
  row = highScoreTable.insertRow();
  row.insertCell().textContent = highScores.initials;
  row.insertCell().textContent = highScores.score;
};

const constructHighScoreTable = () => {
  const highScoreTable = document.createElement("table");
  highScoreTable.setAttribute("class", "highScoreTable");
  highScoreTable.setAttribute("id", "highScoreTable");
  const tableContainer = document.getElementById("tableContainer");
  tableContainer.appendChild(highScoreTable);

  row = highScoreTable.insertRow();
  row.insertCell().textContent = "Initials";
  row.insertCell().textContent = "Score";
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
