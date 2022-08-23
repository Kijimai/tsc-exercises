// Type setting for objects to contain two different Types
// The same can be achievable with interfaces
// Below is the syntax for interfaces
// interface Admin {
//   name: string
//   privileges: string[]
// }

// interface Employee {
//   name: string
//   startDate: Date
// }

// interface ElevatedEmployee extends Admin, Employee {}

// const employee1: ElevatedEmployee = {
//   name: "Steve",
//   privileges: ["create-server", "read-server"],
//   startDate: new Date(),
// }

type Admin = {
  name: string
  privileges: string[]
}

type Employee = {
  name: string
  startDate: Date
}

// Intersection / Combined Types
type ElevatedEmployee = Admin & Employee

const employee1: ElevatedEmployee = {
  name: "Steve",
  privileges: ["create-server", "read-server"],
  startDate: new Date(),
}

// usable with any types as well
// union types
type Combinable = string | number
type Numeric = number | boolean

type Universal = Combinable | Numeric

// Type Guard - to check if the arguments passed in are string or otherwise
// This function overload syntax for the accepted arguments and the return type
function add(a: string, b: string): string
function add(a: number, b: number): number
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString()
  }
  return a + b
}

type UnknownEmployee = Employee | Admin

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("Name: " + emp.name)
  if ("privileges" in emp) {
    console.log("Privileges: " + emp.privileges)
  }
  if ("startDate" in emp) {
    console.log("Start Date: " + emp.startDate)
  }
}

printEmployeeInformation({ name: "Steven", startDate: new Date() }) // doesnt print the privileges because it doesnt exist on this object

// using instaceof typeguard for classes

class Car {
  drive() {
    console.log("Driving...")
  }
}

class Truck {
  drive() {
    console.log("Driving a truck...")
  }

  loadCargo(amount: number) {
    console.log("Loading cargo..." + amount)
  }
}

type Vehicle = Car | Truck

const v1 = new Car()
const v2 = new Truck()

function useVehicle(vehicle: Vehicle) {
  vehicle.drive()
  // instanceof only usable on class instances, this cant be use for interfaces
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000)
  }
  // if ("loadCargo" in vehicle) {
  //   vehicle.loadCargo(1000)
  // }
}

useVehicle(v1)
useVehicle(v2)

// Discriminated Unions - used for eliminating cases of mistyping
// They have one common type of property in every object that makes up the union case we have below which describes the object
// i.e. 'type' -- type = bird  / horse
interface Bird {
  type: "bird"
  flyingSpeed: number
}

interface Horse {
  type: "horse"
  runningSpeed: number
}

type Animal = Bird | Horse

// this function accepts an animal argument of type Animal
// allows to check if a given animal's type is a certain animal, only call on specific methods/properties based on the type
function moveAnimal(animal: Animal): void {
  let speed
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed
      break
    case "horse":
      speed = animal.runningSpeed
      break
  }
  console.log("Moving at speed: " + speed)
}

moveAnimal({ type: "bird", flyingSpeed: 10 })

// Type casting -- tells TS what type we're selecting
// v1
// const userInputElement = <HTMLInputElement>document.getElementById("user-input")
// v2 -- to avoid clashing with JSX syntax in React
// const userInputElement = document.getElementById(
//   "user-input"
// )! as HTMLInputElement
// const userInputElement = document.getElementById("user-input")
// another alternative way to check for it to not be potentially null
// If it exists, assign its value to Hi there, but identify it as an HTMLInputElement First
// if (userInputElement) {
//   (userInputElement as HTMLInputElement).value = "Hi there"
// }

// Index Properties / Types
// allows creation of objects that are more flexible regarding the properties they hold
// The property name can be interpreted as a string, but the value has to be a string

// potentially some error object's interface
// {id: '1afezsfde1ew', email: 'Not a valid email', username: 'Must start with a valid character!' }

interface ErrorContainer {
  id: string
  [prop: string]: string
}

// can have as many properties as it needs now!
// as long as "id" is in it
const errorBag: ErrorContainer = {
  id: "asd1231",
  email: "Not a valid email",
  blah: "asdasdasd",
  username: "Must start with a capital character!",
  moreProps: "asdasdasdasdasdasdasdasda",
}

// This will generate a typescript error
// Property 'id' is missing in type, but required in type ErrorContainer
// const thisWillGenerateATypescriptError: ErrorContainer = {
//   email: "Not a valid email!",
//   username: "Must start with a capital character!",
// }

function emailError(error: ErrorContainer) {
  return {
    id: error.id,
    message: error.message,
  }
}

// Function overloads -- allows for defining multiple function signatures
// We can have multiple function signatures
// check the original add function for syntax
const result = add(1, 5) // 6
const result2 = add("1", "5") // 15
console.log(result, result2)

// Optional Chaining
// useful for instances where you are getting data from a backend
// Where the data is uncertain to be defined

const fetchedUserData = {
  id: "u1",
  name: "Max",
  job: { title: "CEO", description: "My Own Company" },
}

// attach a '?' to the base property or object if a specific property may or may not exist
console.log(fetchedUserData?.job?.title)

// Nullish Coalescing
const userInput = null
const storedData = userInput ?? 15 // if null, put 15 by default as fallback
console.log(storedData)