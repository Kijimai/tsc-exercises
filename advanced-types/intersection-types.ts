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

type ElevatedEmployee = Admin & Employee

const employee1: ElevatedEmployee = {
  name: "Steve",
  privileges: ["create-server", "read-server"],
  startDate: new Date(),
}

// usable with any types as well

type Combinable = string | number
type Numeric = number | boolean

type Universal = Combinable | Numeric

// Type Guard - to check if the arguments passed in are string or otherwise
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
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000)
  }
  // if ("loadCargo" in vehicle) {
  //   vehicle.loadCargo(1000)
  // }
}

useVehicle(v1)
useVehicle(v2)
