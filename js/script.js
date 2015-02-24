/**
 * Charles Johnson
 * Functions Assignment
 * SDI Section 1
 * February 26, 2014
 */

var lottoType = prompt ("Please enter Florida Lotto or Powerball.");

    while (lottoType == ""){
        prompt("Response can not be empty. Please enter Florida Lotto or Powerball.")
    }

function myLotto () {


    var num1 = Math.floor(Math.random() * 60);
    var num2 = Math.floor(Math.random() * 60);
    var num3 = Math.floor(Math.random() * 60);
    var num4 = Math.floor(Math.random() * 60);
    var num5 = Math.floor(Math.random() * 60);



    console.log("First Ball: " + num1);
    console.log(num2);
    console.log(num3);
    console.log(num4);
    console.log(num5);



}

myLotto();
