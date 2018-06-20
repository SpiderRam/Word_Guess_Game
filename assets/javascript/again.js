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
var winCounter = 0;
var wrongGuessCounter = 12;

document.onkeyup = function(event) {
    var guessedLetter = event.key.toUpperCase();
    var isLetterFoundInWord = false;
    
    
    if (wrongArray.indexOf(guessedLetter) === -1) {
        
        
        for (var i = 0; i < word.length; i++) {
            if (word[i] === guessedLetter) {
                isLetterFoundInWord = true;
                answerArray[i] = guessedLetter;
            } 
        }
    
        if (isLetterFoundInWord === false) {
            wrongGuessCounter --;
            document.querySelector("#guessesRemain").innerHTML = wrongGuessCounter;
            wrongArray.push(guessedLetter);
        }
    }

    updateDom();

    restart();
}

function restart() {
    
    if (word === answerArray.join("")) {
        answerArray = [];
        wrongArray = [];
        winCounter ++;
        wrongGuessCounter = 12;
        document.querySelector("#guessesRemain").innerHTML = wrongGuessCounter;
        document.querySelector("#wins").innerHTML=winCounter;
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
    console.log("UPDATE BLANKS: " + answerArray)
    console.log("UPDATE GUESSES: "+ wrongArray)
    
    document.getElementById("blanks").innerHTML = answerArray.join(" ");
    document.getElementById("alreadyGuessed").innerHTML = wrongArray.join(", ");
}


chooseRandomWord();
updateDom();