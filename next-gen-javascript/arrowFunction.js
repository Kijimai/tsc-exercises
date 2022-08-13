"use strict";
// const add = (a: number , b: number) => {
//   return a + b
// }
// implicit return
var add = function (a, b) {
    if (a === void 0) { a = 1; }
    if (b === void 0) { b = 1; }
    return a + b;
};
var printOutput = function (output) {
    return console.log(output);
};
// const btn = document.querySelector("button")
// if(btn) {
//   btn.addEventListener('click', (event) => {
//     console.log(event)
//   })
// }
printOutput(add(5, 2));
printOutput(add());
