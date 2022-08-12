function add(n1: number, n2: number) {
  return n1 + n2
}

function printResult(num: number): void {
  console.log("Result is: " + num)
}

// Functions as a Type
// combineValues should take a Type of Function which takes two parameters where each parameter takes in a number
// returns a number
let combineValues: (a: number, b: number) => number

// The callback will be taking a number, but not necessarily return a value so it is set to void
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2
  cb(result)
}

combineValues = add
printResult(combineValues(10, 10))
addAndHandle(10, 20, (x) => {
  console.log(x)
})
//Pt. 2 -- Function Types and callbacks
