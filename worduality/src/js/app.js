document.addEventListener("DOMContentLoaded", () => {
  const WORD_SIZE = 5;
  const ATTEMPT_SIZE = 6;
  const FAKE_WORD = "perro";
  const FAKE_WORD2 = "patos";

  const cells = getCells();
  const keyboard = registerKeys();
  console.log(keyboard);

  var attempt = 0;
  var letterPos = 0;

  function getCells() {
    const cells = document.querySelectorAll(".cell");
    return cells;
  }

  const url =
    "https://us-central1-worduality.cloudfunctions.net/helloWorld?word=";
  function callResponse(word) {
    fetch(url + word)
      .then((res) => res.json())
      .then((out) => {
        console.log("Checkout this JSON! ", out);
        for (let position = 0; position < WORD_SIZE; position++) {
          const cell = cells[attempt * WORD_SIZE + position];
          const letter = cell.textContent;
          data = out[0];
          console.log(data.word1);
          console.log(data.word2);
          applyCellStyle(cell, letter, position, data.word1, data.word2);
          // applyKeyboardStyle(letter, position, data.word1, data.word2);
        }
        attempt = attempt + 1;
        letterPos = 0;
      })
      .catch((err) => console.log(err));
  }

  function getWord() {
    var outWord = "";
    for (let position = 0; position < WORD_SIZE; position++) {
      const cell = cells[attempt * WORD_SIZE + position];
      const letter = cell.textContent;
      outWord += letter;
    }
    return outWord;
  }

  function checkTheAttempt() {
    const word = getWord();
    callResponse(word);
  }

  function applyKeyboardStyle(letter, position, word1, word2) {
    const key = keyboard.find(
      (target) => target.getAttribute("data-key") === letter
    );
    console.log(key + " " + letter);
    applyCellStyle(key, letter, position, word1, word2);
  }

  function applyCellStyle(cell, letter, position, word1, word2) {
    if (word1[position] === letter && word2[position] === letter) {
      applyCellCorrectBoth(cell);
    } else if (word1[position] === letter) {
      applyCellCorrectOne(cell);
    } else if (word2[position] === letter) {
      applyCellCorrectTwo(cell);
    } else if (word1.includes(letter) || word2.includes(letter)) {
      applyCellNear(cell);
    } else {
      applyCellDoesNotExist(cell);
    }
  }

  function applyCellCorrectBoth(cell) {
    cell.classList.add("correct-both");
  }

  function applyCellCorrectOne(cell) {
    cell.classList.add("correct-one");
  }

  function applyCellCorrectTwo(cell) {
    cell.classList.add("correct-two");
  }

  function applyCellNear(cell) {
    cell.classList.add("near");
  }

  function applyCellDoesNotExist(cell) {
    cell.classList.add("wrong");
  }

  function processEnter() {
    console.log("process enter");
    if (attempt < ATTEMPT_SIZE) {
      if (letterPos == WORD_SIZE) {
        checkTheAttempt();
      }
    }
  }

  function processDel() {
    if (letterPos > 0) {
      letterPos = letterPos - 1;
      setTextToCell(attempt, letterPos, "");
    }
  }

  function processLetter(letter) {
    console.log("letter: " + letter);
    if (letterPos < WORD_SIZE) {
      setTextToCell(attempt, letterPos, letter);
      letterPos = letterPos + 1;
    }
  }

  function setTextToCell(attempt, letterPos, text) {
    const cellPos = attempt * WORD_SIZE + letterPos;
    cells[cellPos].textContent = text;
  }

  function registerKeys() {
    const keys = document.querySelectorAll(".keyboard-row button");

    keys.forEach((key) => {
      key.onclick = ({ target }) => {
        const letter = target.getAttribute("data-key");

        if (letter === "enter") {
          processEnter();
        } else if (letter === "del") {
          processDel();
        } else {
          processLetter(letter);
        }
      };
    });

    return Array.from(keys);
  }
});
