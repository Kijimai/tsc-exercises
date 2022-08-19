abstract class Vehicle {
  // Removing this and the (this.model, this.make) properties below allow for shorthand construction
  // model: string
  // make: string
  protected colors: string[] = []
  // Add the private modifier within the constructor definition, should still work
  // readonly is only in typescript, makes sure you fail if you try to writeover the property after initialization
  constructor(protected readonly model: string, private make: string, protected modelYear: number) {
    // this.model = model
    // this.make = make
  }

  addColor(color: string) {
    this.colors.push(color)
  }

  abstract describe(): void
}

class VehicleList {
  // Can only be accessed within the class VehicleList, can't add anything through a single instance
  private vehicles: Vehicle[] = []

  constructor(vehicles: Vehicle[]) {
    this.vehicles = vehicles
  }

  showInventory() {
    console.log(`Showing all vehicles in inventory:\n`, this.vehicles)
  }
}

class Car extends Vehicle {}

const newHonda = new Vehicle("Honda", "Civic")
const newMazda = new Vehicle("Mazda", "S3")
// newMazda.describe()
// newHonda.describe()
const allCars = new VehicleList([newHonda, newMazda])
// console.log(allCars)
const hondaCopy = { describe: newHonda.describe() }
console.log(hondaCopy.describe)
allCars.showInventory()
