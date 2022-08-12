"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result is: " + num);
}
// Functions as a Type
// combineValues should take a Type of Function which takes two parameters where each parameter takes in a number
// returns a number
let combineValues;
// The callback will be taking a number, but not necessarily return a value so it is set to void
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
combineValues = add;
printResult(combineValues(10, 10));
addAndHandle(10, 20, (x) => {
    console.log(x);
});
//Pt. 2 -- Function Types and callbacks
