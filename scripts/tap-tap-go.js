function continueGame(){
    let score = 0;
    let life = 5;
    setValueOfElement("score-count", score);
    setValueOfElement("life-count", life);
    const alphabet = getARandomAlphabet();
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
    setBackgroundColorById(alphabet);
}

function play(){
    elementToggler('home-screen', 'hide');
    elementToggler('score-section', 'hide');
    elementToggler('play-ground', 'show');
    continueGame();
}


function gameFinish() {
    elementToggler('home-screen', 'hide');
    elementToggler('play-ground', 'hide');
    elementToggler('score-section', 'show');
    const score = parseInt(getValueOfElement('score-count'));
    setValueOfElement('final-score', score);
    const currentAlphabet = document.getElementById('current-alphabet').innerText;
    removeBackgroundColorById(currentAlphabet);
}


document.addEventListener('keyup', gameLogic);