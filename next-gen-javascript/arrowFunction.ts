// const add = (a: number , b: number) => {
//   return a + b
// }

// implicit return
const add = (a: number = 1, b: number = 1) => a + b

const printOutput: (output: number | string) => void = (output) =>
  console.log(output)

// const btn = document.querySelector("button")

// if(btn) {
//   btn.addEventListener('click', (event) => {
//     console.log(event)
//   })
// }

printOutput(add(5, 2))
printOutput(add())
