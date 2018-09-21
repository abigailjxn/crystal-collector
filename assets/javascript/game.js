$(document).ready(function () {



    // declare variables
    var userSum = 0;
    var targetNumber = 0;
    var crystalA = Math.floor(Math.random() * (12 - 1)) + 1;
    var crystalB = Math.floor(Math.random() * (12 - 1)) + 1;
    var crystalC = Math.floor(Math.random() * (12 - 1)) + 1;
    var crystalD = Math.floor(Math.random() * (12 - 1)) + 1;
    var totalWins = 0;
    var totalLosses = 0;
    var winMessage = "";
    var loseMessage = "";

    // dispaly random number ()
    targetNumber = Math.floor(Math.random() * (120 - 19)) + 19;
    console.log(targetNumber);
    $("#targetnumber").text(targetNumber);
    // on click of crystal, update user score
    // make crystal clickable
$(".crystals").click(function (){


    $("#crystala").click(function () {
        console.log(crystalA);
    });
    $("#crystalb").click(function () {
        console.log(crystalB);
    });
    $("#crystalc").click(function () {
        console.log(crystalC);
    });
    $("#crystald").click(function () {
        console.log(crystalD);
    });
    // userSum = crystalA;

})
    // generate 4 different scores and attach value to crystal
    // make each crystal hold random number (1-12)

    // on click, add crystal value to userSum
    // userSum = 

    // win, lose states
    // user score > random number = lose
    // user score = random number = win
    // user score < random number = keep adding

    // add to win or loss counter

    // reset on win or loss
    // reset state: new random number, random crystals, user score = 0

})