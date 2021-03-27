const returnButton = document.getElementById("return-button");
const clearButton = document.getElementById("clear-scores-button");

const backToStart = () => {
  location.href = "/index.html";
};

const clearScores = () => {
  localStorage.clear();
};

returnButton.addEventListener("click", backToStart);
clearButton.addEventListener("click", clearScores);
