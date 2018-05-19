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

//Pick a random word.
var word = gameWords[Math.floor(Math.random() * gameWords.length)];
console.log('RANDOM WORD: '+ word);

var remainingLetters = word.length;
var guesses = 9;
var guessedLetters = [];
var letterGuessed;
var guessesLeft = 0;
var correctGuesses = 0;
var winCount = 0;
var guessCount = 9;

//Set up the answer array.
var answerArray = [];
for (var i = 0; i < word.length; i++) {
    //console.log("word length: " + word.length);
    //console.log("COUNTER: " + i);
    answerArray[i] = "_";
    //console.log("answerarray[i]: " + answerArray[i]);
}

document.onkeyup = function(event) {
    // Converts all key clicks to uppercase letters.
    letterGuessed = String.fromCharCode(event.which).toUpperCase();
    // Runs the code to check for correctness.
    if (remainingLetters > 0 && guesses > 0) {
        guessedLetters.push(letterGuessed); 
        checkLetters(letterGuessed) 
        guessesLeft = guesses - guessedLetters.length + correctGuesses;
        console.log(guessesLeft); 
    }

    if (guesses === 0 && remainingLetters > 0) {
        console.log("You lose!");
        }
    /*function changeImage(img) {
        document.getElementById("#changePic") = img.src.replace("./assets/images/lose_Starbuck.png");
        console.log("image");
        console.log("You lose!");*/
    }
    if (guesses > 0 && remainingLetters === 0) {
        winCount++;
        document.getElementById("wins").innerHTML = winCount;
        console.log("You win!");
    }


function checkLetters(ltr){
    
    //console.log("Letter chosen: "+ ltr)
    for (var j = 0; j < word.length; j++) {
        if (word[j] === ltr) {
            //console.log("THE LETTER: " + answerArray[j])
            answerArray[j] = ltr;
            remainingLetters--;
            correctGuesses++;
        }
    
    }
     //Show the player their progress.
    document.getElementById("blanks").innerHTML = answerArray.join(" ");
    // Only works on correct guesses, how to capture wrong ones?
    document.getElementById("alreadyGuessed").innerHTML = guessedLetters.join(" ");
}

// The end of the game loop.



/* Need to figure out how to make it stop guessing 
the first letter over and over until it hits max. */

// How to record the already guessed?

// How to record wins?

// Any possibility of changin the picture based on win/lose?