const button = document.querySelector("button")
// ! makes sure it is never null, "as" typecasts the selector
const input1 = document.getElementById("num1")! as HTMLInputElement
const input2 = document.getElementById("num2")! as HTMLInputElement

// var : type --> adds explicit typing for params
function add(num1: number, num2: number) {
  return num1 + num2
}

// adding + converts the argument passed in
button.addEventListener("click", function () {
  console.log(add(+input1.value, +input2.value))
})
