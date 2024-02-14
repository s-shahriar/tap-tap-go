function continueGame(){
    const alphabet = getARandomAlphabet();
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
    setBackgroundColorById(alphabet);
}

function play(){
    elementToggler('home-screen', 'hide');
    elementToggler('play-ground', 'show');
    continueGame();
}