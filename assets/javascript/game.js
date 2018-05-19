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
var userVal;
var letterGuessed;


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
    checkLetters(letterGuessed);
    guesses--;
}

function checkLetters(ltr){
    while (remainingLetters > 0) {
        console.log('USER VAL IN WHILE LOOP IS: ' + userVal)
        
        //Show the player their progress.
        document.getElementById("blanks").innerHTML = answerArray.join(" ");

     if (guesses === 0) {
        // Exit the game loop.
        console.log("You lose!");
        break;
    } else if (guesses > 0 ) {
        console.log("USER VAL IN ELSE IF: "+ ltr)
        for (var j = 0; j < word.length; j++) {
            if (word[j] === ltr) {
                //console.log("THE LETTER: " + answerArray[j])
                answerArray[j] = ltr;
                remainingLetters--;
                
            }
        }
       
        // Only works on correct guesses, how to capture wrong ones?
        document.getElementById("alreadyGuessed").innerHTML = letterGuessed;
    } 
// The end of the game loop.
    }
}

/* Need to figure out how to make it stop guessing 
the first letter over and over until it hits max. */

// How to record the already guessed?

// How to record wins?

// Any possibility of changin the picture based on win/lose?