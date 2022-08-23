"use strict"
// Type setting for objects to contain two different Types
// The same can be achievable with interfaces
// Below is the syntax for interfaces
// interface Admin {
//   name: string
//   privileges: string[]
// }
const employee1 = {
  name: "Steve",
  privileges: ["create-server", "read-server"],
  startDate: new Date(),
}
// Type Guard - to check if the arguments passed in are string or otherwise
function add(a, b) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString()
  }
  return a + b
}
function printEmployeeInformation(emp) {
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
  loadCargo(amount) {
    console.log("Loading cargo..." + amount)
  }
}
const v1 = new Car()
const v2 = new Truck()
function useVehicle(vehicle) {
  vehicle.drive()
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000)
  }
  // if ("loadCargo" in vehicle) {
  //   vehicle.loadCargo(1000)
  // }
}
useVehicle(v1)
useVehicle(v2)
// this function accepts an animal argument of type Animal
// allows to check if a given animal's type is a certain animal, only call on specific methods/properties based on the type
function moveAnimal(animal) {
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
// v2 
const userInputElement = document.getElementById("user-input")
// const userInputElement = document.getElementById("user-input")
userInputElement.value = "hello there"
function emailError(error) {
  return {
    id: error.id,
    message: error.message,
  }
}
