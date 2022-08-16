class Vehicle {
  name: string
  make: string

  constructor(name: string, make: string) {
    this.name = name
    this.make = make
  }
}

class VehicleList {
  vehicles: Vehicle[]

  constructor(vehicles: Vehicle[]) {
    this.vehicles = vehicles
  }
}

const newHonda = new Vehicle("Honda", "Civic")
const newMazda = new Vehicle("Mazda", "S3")

const allCars = new VehicleList([newHonda, newMazda])
console.log(allCars)