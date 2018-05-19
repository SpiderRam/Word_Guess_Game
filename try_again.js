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

var guesses = 9;
var userVal;

//Pick a random word.
var word = gameWords[Math.floor(Math.random() * gameWords.length)];
console.log('RANDOM WORD: '+ word);

//Set up the answer array.
var answerArray = [];
for (var i = 0; i < word.length; i++) {
    //console.log("word length: " + word.length);
    //console.log("COUNTER: " + i);
    answerArray[i] = "_";
    //console.log("answerarray[i]: " + answerArray[i]);
}

var remainingLetters = word.length;


// grab user letter

    //The game loop.


   



function checkLetters(ltr){
    while (remainingLetters > 0) {
        console.log('USER VAL IN WHILE LOOP IS: ' + userVal)
        
        //Show the player their progress.
        //alert(answerArray.join(" "));
        document.getElementById("blanks").innerHTML = answerArray.join(" ");
     //var guess = prompt("Guess a letter, or click Cancel to stop playing.");
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
        guesses--;
        //alert("Please enter a single letter.");
        document.getElementById("alreadyGuessed")
    } 
// The end of the game loop.
}


}


/*
// Show the answer and congratulate the player.
//alert(answerArray.join(" "));
//alert("Good job! The answer was " + word);

//Then initiate the function for capturing key clicks.
//GAME FUNCTIONALITY
document.onkeyup = function(event) {
 // Converts all key clicks to lowercase letters.
 var letterGuessed = String.fromCharCode(event.which).toLowerCase();
 // Runs the code to check for correctness.
 checkLetters(letterGuessed);
 
*/