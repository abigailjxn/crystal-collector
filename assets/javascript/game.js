$(document).ready(function () {



    // declare variables
    // var userSum = "0";
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
    // function genTargetNumber () {
    //     targetNumber = Math.floor(Math.random() * (120 - 19)) + 19;
    // console.log(targetNumber);
    // $("#targetnumber").text(targetNumber);
    // }
    targetNumber = Math.floor(Math.random() * (120 - 19)) + 19;
    console.log(targetNumber);
    $("#targetnumber").text(targetNumber);
    // on click of crystal, update user score
    // make crystal clickable

    $(".crystals").attr("value", function (index, attr) {
        var randomNumber = Math.floor(Math.random() * (12 - 1)) + 1;
        console.log(this, randomNumber);
        return randomNumber;
        
    })

    function reset (totalWins, totalLosses) {
        userSum = 0;


    }

   
    var userSum = 0;
    $(".crystals").click(function (event) {
        var randomValue = $(this).attr("value");
       
        var crystalValue = parseInt(randomValue);
          parseInt(userSum);
        userSum += crystalValue;
        console.log(userSum);

        $(".usersum").text(userSum);
        if (userSum > targetNumber) {
            $(".usermessage").text("You went over! Try again!");
            console.log("lose");
            totalLosses++;
            $("#totallosses").text(totalLosses);
        }
        else if (userSum === targetNumber) {
            $(".usermessage").text("Congrats! You win! *sparkle sparkle* Let's do it again!");
            console.log("win");
            totalWins++;
            $("#totalwins").text(totalWins);
        }
    });
    // $("#crystalb").click(function () {
    //     console.log(crystalB);
    //     userSum = userSum + crystalB;
    //     $(".usersum").text(userSum);
    //     if (userSum > targetNumber) {
    //         $(".usermessage").text("You went over! Try again!");
    //         console.log("lose");
    //         totalLosses = totalLosses + 1;
    //         $("#totallosses").text(totalLosses);
    //     }
    //     else if (userSum === targetNumber) {
    //         $(".usermessage").text("Congrats! You win! *sparkle sparkle* Let's do it again!");
    //         console.log("win");
    //         totalWins = totalWins + 1;
    //         $("#totalwins").text(totalWins);
    //     }
    // });
    // $("#crystalc").click(function () {
    //     console.log(crystalC);
    //     userSum = userSum + crystalC;
    //     $(".usersum").text(userSum);
    //     if (userSum > targetNumber) {
    //         $(".usermessage").text("You went over! Try again!");
    //         console.log("lose");
    //         totalLosses = totalLosses + 1;
    //         $("#totallosses").text(totalLosses);
    //     }
    //     else if (userSum === targetNumber) {
    //         $(".usermessage").text("Congrats! You win! *sparkle sparkle* Let's do it again!");
    //         console.log("win");
    //         totalWins = totalWins + 1;
    //         $("#totalwins").text(totalWins);
    //     }
    // });
    // $("#crystald").click(function () {
    //     console.log(crystalD);
    //     userSum = userSum + crystalD;
    //     $(".usersum").text(userSum);
    //     if (userSum > targetNumber) {
    //         $(".usermessage").text("You went over! Try again!");
    //         console.log("lose");
    //         totalLosses = totalLosses + 1;
    //         $("#totallosses").text(totalLosses);
    //     }
    //     else if (userSum === targetNumber) {
    //         $(".usermessage").text("Congrats! You win! *sparkle sparkle* Let's do it again!");
    //         console.log("win");
    //         totalWins = totalWins + 1;
    //         $("#totalwins").text(totalWins);
    //     }
    // });

    //   if (userSum > targetNumber) {
    //       $(".usermessage").text("You went over! Try again!");
    //   }
    //   else if (userSum = targetNumber) {
    //       $(".usermessage").text("Congrats! You win! *sparkle sparkle* Let's do it again!");
    //   }

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