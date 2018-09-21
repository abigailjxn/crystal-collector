$(document).ready(function(){



// declare variables
var userSum = 0;
var targetNumber = 0;
var crystalA = 0;
var crystalB = 0;
var crystalC = 0;
var crystalD = 0;
var totalWins = 0;
var totalLosses = 0;
var winMessage = "";
var loseMessage = "";

// dispaly random number ()
targetNumber = Math.floor(Math.random() * (120 - 19)) + 19;
console.log(targetNumber);
// on click of crystal, update user score
    // make crystal clickable
// generate 4 different scores and attach value to crystal
// make each crystal hold random number (1-12)

// win, lose states
// user score > random number = lose
// user score = random number = win
// user score < random number = keep adding

// add to win or loss counter

// reset on win or loss
// reset state: new random number, random crystals, user score = 0

})