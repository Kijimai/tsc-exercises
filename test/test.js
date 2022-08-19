"use strict";
const button = document.querySelector("button");
// ! makes sure it is never null, "as" typecasts the selector
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");
// var : type --> adds explicit typing for params
function add(num1, num2) {
    return num1 + num2;
}
// adding + converts the argument passed in
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
