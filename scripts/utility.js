function elementToggler(elementId, operation) {
  switch (operation) {
    case "hide":
      const hiddenElement = document.getElementById(elementId);
      hiddenElement.classList.add("hidden");
      break;
    case "show":
      const shownElement = document.getElementById(elementId);
      shownElement.classList.remove("hidden");
      break;
  }
}

function getARandomAlphabet() {
  const randomNumber = Math.floor(Math.random() * 26);
  const alphabet = String.fromCharCode(97 + randomNumber);
  return alphabet;
}

function setBackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-orange-400");
}

function removeBackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("bg-orange-400");
}

function getValueOfElement(elementId) {
  const alphabet = document.getElementById(elementId).innerText;
  return alphabet;
}

function setValueOfElement(elementId, value) {
  document.getElementById(elementId).innerText = value;
}



function gameLogic(event) {
  const playerPressedKey = event.key;
  if (event.key === 'Escape') gameFinish();

  const alphabet = getValueOfElement("current-alphabet")
    .toString()
    .toLowerCase();

  if (alphabet === playerPressedKey) {
    score = parseInt(getValueOfElement("score-count"));
    score ++;
    setValueOfElement("score-count", score);

    removeBackgroundColorById(playerPressedKey);

    const alphabet = getARandomAlphabet();
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
    setBackgroundColorById(alphabet);


  } else {
    let life = parseInt(getValueOfElement("life-count"));
    if (life > 0) {
      life--;
      setValueOfElement("life-count", life);
    } else {
      gameFinish();
    }
  }
}
