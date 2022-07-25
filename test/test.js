var button = document.querySelector("button");
// ! makes sure it is never null, "as" typecasts the selector
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
// var : type --> adds explicit typing for arguments
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
