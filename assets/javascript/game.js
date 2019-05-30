// Variables //
var wins = 0;
var losses = 0;
var guesses = 0;

// Possible computer choices //

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y","z" ];

// references to text on the HTML that we will be overwriting //

var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var guessesText = document.getElementById("guesses-left");
var guesses = document.getElementById("guesses")