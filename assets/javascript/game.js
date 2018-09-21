$(document).ready(function () {



    // declare variables
    var userSum = 0;
    var userSumDisplay = 0;
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

    $("#crystala").click(function () {
        console.log(crystalA);
        userSum = userSum + crystalA;
        // console.log(userSum);
        $(".usersum").text(userSum);
    });
    $("#crystalb").click(function () {
        console.log(crystalB);
        userSum = userSum + crystalB;
        // console.log(userSum);
        $(".usersum").text(userSum);
    });
    $("#crystalc").click(function () {
        console.log(crystalC);
        userSum = userSum + crystalC;
        // console.log(userSum);
        $(".usersum").text(userSum);
    });
    $("#crystald").click(function () {
        console.log(crystalD);
        userSum = userSum + crystalD;
        $(".usersum").text(userSum);
    });

    

    // generate 4 different scores and attach value to crystal
    // make each crystal hold random number (1-12)

    // on click, add crystal value to userSum
    // $(".usersum").text(userSum);

    // win, lose states
    // user score > random number = lose
    // user score = random number = win
    // user score < random number = keep adding

    // add to win or loss counter

    // reset on win or loss
    // reset state: new random number, random crystals, user score = 0

})