/**
 * Charles Johnson
 * Functions Assignment
 * SDI Section 1
 * February 26, 2014
 */

var lottoType = "Powerball";

//var lottoType = prompt ("Please enter Florida Lotto or Powerball.");

//    while (lottoType == ""){
//        prompt("Response can not be empty. Please enter Florida Lotto or Powerball.")
//    }

function myLotto (lottoType) {
    if (lottoType == "Florida Lotto") {

        var num1 = Math.floor(Math.random() * 60);

        while (num1 < 1) {

            var num1 = Math.floor(Math.random() * 60);
        }

        var num2 = Math.floor(Math.random() * 60);

        while (num2 < 1) {

            var num2 = Math.floor(Math.random() * 60);
        }
        var num3 = Math.floor(Math.random() * 60);

        while (num3 < 1) {

            var num3 = Math.floor(Math.random() * 60);
        }
        var num4 = Math.floor(Math.random() * 60);

        while (num4 < 1) {

            var num4 = Math.floor(Math.random() * 60);
        }
        var num5 = Math.floor(Math.random() * 60);

        while (num5 < 1) {

            var num5 = Math.floor(Math.random() * 60);
        }

        var num6 = Math.floor(Math.random() * 60);

        while (num6 < 1) {

            var num6 = Math.floor(Math.random() * 60);
        }

        console.log("The winning numbers of the " + lottoType + " are....")
        console.log("1st Ball: " + num1);
        console.log("2nd Ball: " + num2);
        console.log("3rd Ball: " + num3);
        console.log("4th Ball: " + num4);
        console.log("5th Ball: " + num5);
        console.log("6th Ball: " + num6);


    } else if (lottoType == "Powerball"){



        var num1 = Math.floor(Math.random() * 60);

        while (num1 < 1) {

            var num1 = Math.floor(Math.random() * 60);
        }

        var num2 = Math.floor(Math.random() * 60);

        while (num2 < 1) {


            while (num2 == num1) {


            }

            If  (num2 == num1)

            var num2 = Math.floor(Math.random() * 60);
        } else
        {

        }
    }
    var num3 = Math.floor(Math.random() * 60);

    while (num3 < 1) {
        while (num3 == num1 || num3 == num2) {

            var num3 = Math.floor(Math.random() * 60);
        } else {

        }
    }
    var num4 = Math.floor(Math.random() * 60);

    while (num4 < 1) {

        while (num4 == num1 || num3 == num2 || num3) {

            var num4 = Math.floor(Math.random() * 60);

        }
        var num5 = Math.floor(Math.random() * 60);

        while (num5 < 1) {

            var num5 = Math.floor(Math.random() * 60);
        }

        var powerBall = Math.floor(Math.random() * 36);

        while (powerBall < 1) {

            var powerBall = Math.floor(Math.random() * 36);
        }

        console.log("The winning numbers of the " + lottoType + " are....")
        console.log("Ball 1: " + num1);
        console.log("Ball 2: " + num2);
        console.log("Ball 3: " + num3);
        console.log("Ball 4: " + num4);
        console.log("Ball 5: " + num5);
        console.log("and the POWERBALL is............... " + powerBall);


    } else {


        console.log("No money for you, you aren't playing a real lottery.")

    }

myLotto(lottoType);
