$(document).ready(function () {

    // declare variables
    var userSum = 0;
    var targetNumber = 0;
    var totalWins = 0;
    var totalLosses = 0;

    function genTargetNumber() {
        targetNumber = Math.floor(Math.random() * (120 - 19)) + 19;
        console.log(targetNumber);
        $("#targetnumber").text(targetNumber);
    }

    genTargetNumber();

    function genCrystalValue() {
        $(".crystals").attr("value", function (index, attr) {
            var randomNumber = Math.floor(Math.random() * (12 - 1)) + 1;
            console.log(this, randomNumber);
            return randomNumber;

        })
    }

    genCrystalValue();

    function reset(totalWins, totalLosses) {
        userSum = 0;
        genTargetNumber();
        genCrystalValue();
        $("#totalwins").text(totalWins);
        $("#totallosses").text(totalLosses);
        $(".usermessage").text("");

    }
    $(".crystals").click(function (event) {
        var randomValue = $(this).attr("value");
        var crystalValue = parseInt(randomValue);
        userSum += crystalValue;

        $(".usersum").text(userSum);
        if (userSum > targetNumber) {
            $(".usermessage").text("You went over! Click the magic number and try again!");
            totalLosses++;
            $("#totallosses").text(totalLosses);
            $("#targetnumber").click(function (event) {
                reset();
                $(".usersum").text(userSum);

            });
        }
        else if (userSum === targetNumber) {
            $(".usermessage").text("Congrats! You win! *sparkle sparkle* Click the magic number and let's do it again!");
            totalWins++;
            $("#totalwins").text(totalWins);
            $("#targetnumber").click(function (event) {
                reset();
                $(".usersum").text(userSum);
            });
        }
    });

})