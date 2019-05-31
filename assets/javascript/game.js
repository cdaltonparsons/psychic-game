// Variables //
var wins = 0;
var losses = 0;
var guesses = 10;
// Possible computer and user choices //

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y","z" ];
var userChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y","z"]

// references to text on the HTML that we will be overwriting //
var computerLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)];

var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var guessesText = document.getElementById("guesses-left");
var wrongGuesses = document.getElementById("wrong-guesses");

winsText.textContent = wins;
lossesText.textContent = losses

// var computerLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)];
// function and any loops //

function reset(){
    guesses = 10;
    wrongGuesses.textContent = "";
    guessesText.textContent = guesses;
    winsText.textContent = wins;
    lossesText.textContent = losses

}

document.onkeyup = function(event) {
    var userGuess = event.key;

    console.log(computerLetter);
    console.log(userGuess)

    if(userChoices.indexOf(userGuess) > -1) {
        if(guesses > 1) {
        if(userGuess === computerLetter) {
            wins++;
            reset();
            return alert("Congratulations! Press any letter key to begin a new game!")
            
        } else {
            guesses--;
            
        }
    } else {
        losses++;
        reset();
       return alert("You Lose! Press any letter key to begin a new game!");
    }
    winsText.textContent = wins;
    lossesText.textContent = losses
    guessesText.textContent = guesses
    wrongGuesses.append(event.key + " ")
    } 


}

