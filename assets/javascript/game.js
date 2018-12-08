// STEP ONE: Create three Arrays: corretLetters, correctlyGuessedLetters and incorrectlyGuessedLetters
// STEP TWO: Push User's guess to appropriate array
// STEP THREE: Create two Arrays sortedCorrectWord and sortedCorrectlyGuessedLetters to hold the Sorted contents of their complementary arrays (e.g. sortedCorrectWord = correctWord.sort())
// STEP FOUR: Compare Sorted Arrays

// var targetDiv = document.getElementById("question");
// targetDiv.textContent = "WHAT WORD AM I THINKING OF?"; 

// Create Array for correctLetters 
var correctLetters = ["c ","a ","t"];

for (i=0; i<correctLetters.length; i++){
    console.log(correctLetters[i]);
}

// Create Array to hold correctlyGuessedLetters
var correctlyGuessedLetters = ["_ ","_ ","_"];

var incorrectlyGuessedLetters = [];

var guessesRemaining = correctLetters.length * 2;
console.log("You have " + guessesRemaining + " guesses remaining.")

var wins = 0;

for (i=0; i<correctlyGuessedLetters.length; i++){
    console.log(correctlyGuessedLetters[i]);
}
document.onkeyup = function(event) {

    var userGuess = event.key;

    if (JSON.stringify(correctLetters) == JSON.stringify(correctlyGuessedLetters)){
        console.log("You Win!");

        wins += 1;
        console.log("You have won " + wins + " times.");
    }
    
    if (guessesRemaining === 0){
        console.log("You Lose!");
    }

    else if (userGuess ==="c"){
        correctlyGuessedLetters[0] = "c ";
        console.log(correctlyGuessedLetters);
        if (JSON.stringify(correctLetters) == JSON.stringify(correctlyGuessedLetters)){
            console.log("You Win");

            wins += 1;
            console.log("You have won " + wins + " times.");
        }
    }

    else if (userGuess ==="a"){
        correctlyGuessedLetters[1] = "a ";
        console.log(correctlyGuessedLetters);
        if (JSON.stringify(correctLetters) == JSON.stringify(correctlyGuessedLetters)){
            console.log("You Win");

            wins += 1;
            console.log("You have won " + wins + " times.");
        }
    }

    else if (userGuess ==="t"){
        correctlyGuessedLetters[2] = "t";
        console.log(correctlyGuessedLetters);
        if (JSON.stringify(correctLetters) == JSON.stringify(correctlyGuessedLetters)){
            console.log("You Win");

            wins += 1;
            console.log("You have won " + wins + " times.");
        }
    }

    else{
        incorrectlyGuessedLetters.push(userGuess);
        console.log(incorrectlyGuessedLetters);

        guessesRemaining = guessesRemaining - 1;
        console.log("You have " + guessesRemaining + " guesses remaining.");
    }
}


// // Create array that will hold the letters the user guesses INCORRECTLY
// var incorrectlyGuessedLetters = [];

// // Create array that will hold the letters the user gusses CORRECTLY

// // var sortedCorrectlyGuessedLetters = correctlyGuessedLetters.sort();

// // // Create variables that hold references to the places in the HTML where we want to display things.
// // var fillingCorrectGuess = document.getElementById("filling-correct-guess-text");
// // fillingCorrectGuesst.textContent = "wins: ";

// // Comparison Test
// if (JSON.stringify(correctLetters) != JSON.stringify(correctlyGuessedLetters)){
//     console.log("You Win");
// }

// // This function is run whenever the user presses a key.
// document.onkeyup = function(event) {

//     // Determines which key was pressed.
//     var userGuess = event.key;

    

//     // Check if user's guess is correct or incorrect
//     if ((userGuess == "c") || (userGuess == "a" || (userGuess == "t"))){

//         // Push corret letters to correctlyGuessedLetters array
//         correctlyGuessedLetters.push(userGuess);
//         console.log("You currently guessed: " + userGuess);
//         console.log("You have guessed the following letters correctly: " + correctlyGuessedLetters)

//         // Sort correctlyGuessedLetters
//         sortedCorrectlyGuessedLetters = correctlyGuessedLetters.sort();
//         console.log("sorted correctly guessed letters: " + sortedCorrectlyGuessedLetters);
//     }
//     else 

//         // Push incorrect letters to incorrectlyGuessedLetters array
//         incorrectlyGuessedLetters.push(userGuess);
//         console.log("You currently guessed: " + userGuess);
//         console.log("You have guessed the following letters incorrectly: " + incorrectlyGuessedLetters)
    
// }


