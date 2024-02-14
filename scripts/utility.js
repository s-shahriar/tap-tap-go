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

function getARandomAlphabet(){
    const randomNumber = Math.floor(Math.random() * 26);
    const alphabet = String.fromCharCode(97 + randomNumber);
    return alphabet;
}

function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}


