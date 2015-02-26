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


        var num1 = Math.floor(Math.random() * 59) + 1;

        do {
            var num2 = Math.floor(Math.random() * 59) + 1;
        } while (num2 == num1)

        do {

            var num3 = Math.floor(Math.random() * 59) + 1;

        } while (num3 == num2 || num3 == num1)

        do {

            var num4 = Math.floor(Math.random() * 59) + 1;

        } while (num4 == num1 || num4 == num2 || num4 == num3)

        do {

        var num5 = Math.floor(Math.random() * 59) + 1;

        } while (num5 == num1 || num5 == num2 || num5 == num3 || num5 == num4)

        do {

        var num6 = Math.floor(Math.random() * 59) + 1;

        } while (num6 == num1 || num6 == num2 || num6 == num3 || num6 == num4 || num6 == num5)


        console.log("The winning numbers of the " + lottoType + " are....");
        console.log("1st Ball: " + num1);
        console.log("2nd Ball: " + num2);
        console.log("3rd Ball: " + num3);
        console.log("4th Ball: " + num4);
        console.log("5th Ball: " + num5);
        console.log("6th Ball: " + num6);


    } else if (lottoType == "Powerball"){



        var num1 = Math.floor(Math.random() * 59) + 1;

        do {

            var num2 = Math.floor(Math.random() * 59) + 1;

        } while (num2 == num1)


            do {

                var num3 = Math.floor(Math.random() * 59) + 1;

            } while (num3 == num2 || num3 == num1)


                do {

                    var num4 = Math.floor(Math.random() * 59) + 1;

                } while (num4 == num1 || num4 == num2 || num4 == num3)


                    do {

                        var num5 = Math.floor(Math.random() * 59) + 1;

                    } while (num5 == num1 || num5 == num2 || num5 == num3 || num5 == num4)

                        do {

                            var powerBall = Math.floor(Math.random() * 35) + 1;

                        } while (powerBall == num1 || powerBall == num2 || powerBall == num3 || powerBall == num4 || powerBall == num5)


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
}

myLotto(lottoType);
