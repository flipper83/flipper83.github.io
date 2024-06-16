document.addEventListener("DOMContentLoaded", () => {
  const WORD_SIZE = 5;
  const ATTEMPT_SIZE = 6;
  const FAKE_WORD = "perro";
  const FAKE_WORD2 = "patos";

  const cells = getCells();


  function getCells() {
    const cells = document.querySelectorAll(".cell");
    return cells;
  }

  function setTextToCell(attempt, letterPos, text) {
    const cellPos = attempt * WORD_SIZE + letterPos;
    cells[cellPos].textContent = text;
  }
});

function score(team,value) {
  const element = document.getElementById(team)
  var score = parseInt(element.textContent);
  score +=parseInt(value);
  if (score < 0) {
    score = 0;
  }
  element.textContent = score;
  
}
