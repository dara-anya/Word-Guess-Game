// Array: goal
var correctLetters = ["c ","a ","t"];

// Array: correct guesses
var correctlyGuessedLetters = ["_ ", "_ ", "_"];
document.getElementById("correct-guess").textContent = correctlyGuessedLetters;

// Array: incorrect guesses
var incorrectlyGuessedLetters = [];

// Variable: remaining guesses
var guessesRemaining = correctLetters.length * 2;
document.getElementById("guesses-remaining").textContent = guessesRemaining;

// Variable: wins
var wins = 0;
document.getElementById("wins").textContent = wins;

// Event: when key is pressed
document.onkeyup = function(event) {

    // Condition: if key pressed not in alphabet
    if (event.keyCode < 65 || event.keyCode > 90){
        console.log("Please select a letter in the alphabet.")
    }

    // Conditional: key pressed must be in alphabet
    if (event.keyCode >= 65 && event.keyCode <= 90){

        // Variable: store pressed key
        var userGuess = event.key;  

    
        // Conditional: Stop game if won
        if (JSON.stringify(correctLetters) == JSON.stringify(correctlyGuessedLetters)){
            console.log("You already won! Get over yourself");
        }
    
        // Conditional: Stop game if no more guesses remain
        else if (guessesRemaining === 0){
            document.getElementById("game-over").textContent = ("Game Over! You ran out of guesses!");
        }

        // Conditionals: 1) check for correct letter, 2) replace placeholder with correct letter, 3) check if won
        else if (userGuess ==="c"){
            correctlyGuessedLetters[0] = "c ";
            document.getElementById("correct-guess").textContent = correctlyGuessedLetters;
            
            // Conditional: compare correct guesses to goal word to check if won
            if (JSON.stringify(correctLetters) == JSON.stringify(correctlyGuessedLetters)){

                // Add 1 to win
                wins++;
                document.getElementById("wins").textContent = wins;
            }
        }

        else if (userGuess ==="a"){
            correctlyGuessedLetters[1] = "a ";
            document.getElementById("correct-guess").textContent = correctlyGuessedLetters;

            // Conditional: compare correct guesses to goal word to check if won
            if (JSON.stringify(correctLetters) == JSON.stringify(correctlyGuessedLetters)){

                // Add 1 to win
                wins++;
                document.getElementById("wins").textContent = wins;
            }
        }

        else if (userGuess ==="t"){
            correctlyGuessedLetters[2] = "t";
            document.getElementById("correct-guess").textContent = correctlyGuessedLetters;

            // Conditional: compare correct guesses to goal word to check if won
            if (JSON.stringify(correctLetters) == JSON.stringify(correctlyGuessedLetters)){

                // Add 1 to win
                wins++;
                document.getElementById("wins").textContent = wins;
            }
        }

        else{

            // Condition: Check to see if letter already guessed
            if (incorrectlyGuessedLetters.includes(userGuess)){
                console.log("You already incorrectly guessed that letter. Please guess a different one");
            }

            else{
                // Push incorrect guess to array
                incorrectlyGuessedLetters.push(userGuess);

                // Subtract 1 guess
                guessesRemaining = guessesRemaining - 1;
                document.getElementById("guesses-remaining").textContent = guessesRemaining;
        
                document.getElementById("wrong-guess").textContent = incorrectlyGuessedLetters;
                }
            
            }
            
    }
        
}