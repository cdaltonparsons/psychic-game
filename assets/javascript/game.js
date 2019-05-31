
var wins = 0;
var losses = 0;
var guesses = 10;


var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y","z" ];
var userChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y","z"]
var userGuesses = [];


var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var guessesText = document.getElementById("guesses-left");
var wrongGuesses = document.getElementById("wrong-guesses");
var computerLetter = cpuGuess();
winsText.textContent = wins;
lossesText.textContent = losses



function cpuGuess(){
    return computerLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)]
}

function reset(){
    guesses = 10;
    wrongGuesses.textContent = "";
    guessesText.textContent = guesses;
    winsText.textContent = wins;
    lossesText.textContent = losses
    userGuesses = [];
    cpuGuess();

}



document.onkeyup = function(event) {
    var userGuess = event.key;

    console.log(computerLetter);
    console.log(userGuess)

    if(userChoices.indexOf(userGuess) > -1 && (userGuesses.indexOf(userGuess)) < 0) {
        if(guesses > 1) {
        if(userGuess === computerLetter) {
            wins++;
            reset();
            return alert("Congratulations! Press any letter key to begin a new game!")
            
        } 
        else {
            guesses--;
            userGuesses.push(userGuess);
            console.log(userGuesses)
            
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

