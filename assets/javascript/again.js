var gameWords = [
    "CYLON",
    "RAPTOR",
    "PEGASUS",
    "CAPRICA",
    "TOASTER",
    "BALTAR",
    "ATHENA",
    "PASSACAGLIA",
    "KOBOL",
    "HANGAR",
];

var word = ""; 
var answerArray = [];
var wrongGuesses = [];
var wrongArray = [];

document.onkeyup = function(event) {
    var guessedLetter = event.key.toUpperCase();
    var isLetterFoundInWord = false;
    
    // Evaluate whether letter is found in wrongArray 
    // before "wasting cycles" in for loop
    if (wrongArray.indexOf(guessedLetter) === -1) {
        
        // Iterate over word string as an array and evaluate
        // whether letter at position "i" === user input
        for (var i = 0; i < word.length; i++) {
            if (word[i] === guessedLetter) {
                isLetterFoundInWord = true;
                answerArray[i] = guessedLetter;
            } 
        }
    
        if (isLetterFoundInWord === false) {
            wrongArray.push(guessedLetter);
        }
    }

    updateDom();

    restart();
}

function restart() {
    if (word === answerArray.join("")) {
        chooseRandomWord();
        updateDom();
    }
}

function chooseRandomWord() {
    word = gameWords[Math.floor(Math.random() * gameWords.length)];

    for (var i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }

    console.log('RANDOM WORD: '+ word);
}

function updateDom() {
    // Grabbing #blanks from DOM and inserting the result of .join()
    // .join creates a string from the values stored in the answeArray
    document.getElementById("blanks").innerHTML = answerArray.join(" ");
    document.getElementById("alreadyGuessed").innerHTML = wrongArray.join(", ");
}

// Start game on first run:

chooseRandomWord();
updateDom();