"use strict";
function add(n1, n2, showResult, phrase) {
    let result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
        // console.log(phrase + n1 + n2) //wrong!
    }
    else {
        return n1 + n2;
    }
}
// If a variable is undefined at first, its best to initialize its type
let someNumber;
someNumber = 5;
//creates an error
// someNumber = 't'
const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = "Result is: ";
const result = add(number1, number2, printResult, resultPhrase);
