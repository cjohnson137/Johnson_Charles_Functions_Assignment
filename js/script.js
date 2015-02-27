/**
 * Charles Johnson
 * Functions Assignment
 * SDI Section 1
 * February 26, 2014
 */

//var lottoType = "Powerball"; Bypass prompt while working on code.

var lottoType = prompt ("Please enter Florida Lotto or Powerball."); // Choose lottery type prompt

    while (lottoType == ""){ // validate empty string
        prompt("Response can not be empty. Please enter Florida Lotto or Powerball.") // response to empty string
    }

function myLotto (lottoType) { // Lotto function

    if (lottoType == "Florida Lotto") { // Run this portion if Florida Lotto is entered.


        var num1 = Math.floor(Math.random() * 53) + 1; // Generate random number 1

        do { // Start Do While loop to validate duplicates
            var num2 = Math.floor(Math.random() * 53) + 1; // Generate random number 2
        } while (num2 == num1) // Check duplicate against previous number

        do { // Start Do While loop to validate duplicates

            var num3 = Math.floor(Math.random() * 53) + 1; // Generate random number 3

        } while (num3 == num2 || num3 == num1) // Check duplicate against previous numbers

        do { // Start Do While loop to validate duplicates

            var num4 = Math.floor(Math.random() * 53) + 1; // Generate random number 4

        } while (num4 == num1 || num4 == num2 || num4 == num3) // Check duplicate against previous numbers

        do { // Start Do While loop to validate duplicates

        var num5 = Math.floor(Math.random() * 53) + 1; // Generate random number 5

        } while (num5 == num1 || num5 == num2 || num5 == num3 || num5 == num4) // Check duplicate against previous numbers

        do { // Start Do While loop to validate duplicates

        var num6 = Math.floor(Math.random() * 53) + 1; // Generate random number 6

        } while (num6 == num1 || num6 == num2 || num6 == num3 || num6 == num4 || num6 == num5) // Check duplicate against previous numbers


        console.log("The winning numbers of the " + lottoType + " are...."); // Send Lotto Type to Console
        console.log("1st Ball: " + num1); // Generate ball 1
        console.log("2nd Ball: " + num2); // Generate ball 2
        console.log("3rd Ball: " + num3); // Generate ball 3
        console.log("4th Ball: " + num4); // Generate ball 4
        console.log("5th Ball: " + num5); // Generate ball 5
        console.log("6th Ball: " + num6); // Generate ball 6


    } else if (lottoType == "Powerball"){



        var num1 = Math.floor(Math.random() * 59) + 1; // Generate random number 1

        do { // Start Do While loop to validate duplicates

            var num2 = Math.floor(Math.random() * 59) + 1; // Generate random number 2

        } while (num2 == num1) // Check duplicate against previous numbers


            do { // Start Do While loop to validate duplicates

                var num3 = Math.floor(Math.random() * 59) + 1; // Generate random number 3

            } while (num3 == num2 || num3 == num1) // Check duplicate against previous numbers


                do { // Start Do While loop to validate duplicates

                    var num4 = Math.floor(Math.random() * 59) + 1; // Generate random number 4

                } while (num4 == num1 || num4 == num2 || num4 == num3) // Check duplicate against previous numbers


                    do { // Start Do While loop to validate duplicates

                        var num5 = Math.floor(Math.random() * 59) + 1; // Generate random number 5

                    } while (num5 == num1 || num5 == num2 || num5 == num3 || num5 == num4) // Check duplicate against previous numbers

                        do { // Start Do While loop to validate duplicates

                            var powerBall = Math.floor(Math.random() * 35) + 1; // Generate random PowerBall

                        } while (powerBall == num1 || powerBall == num2 || powerBall == num3 || powerBall == num4 || powerBall == num5) // Check duplicate against previous numbers


    console.log("The winning numbers of the " + lottoType + " are....") // Display
    console.log("Ball 1: " + num1); // Generate ball 1
    console.log("Ball 2: " + num2); // Generate ball 2
    console.log("Ball 3: " + num3); // Generate ball 3
    console.log("Ball 4: " + num4); // Generate ball 4
    console.log("Ball 5: " + num5); // Generate ball 5
    console.log("and the POWERBALL is............... " + powerBall);  // Generate PowerBall


    } else {


        console.log("No money for you, you aren't playing a real lottery.")

    }
}

myLotto(lottoType);
