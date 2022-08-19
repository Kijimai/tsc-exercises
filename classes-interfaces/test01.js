"use strict";
class Vehicle {
    // Add the private modifier within the constructor definition, should still work
    // readonly is only in typescript, makes sure you fail if you try to writeover the property after initialization
    constructor(model, make, modelYear) {
        this.model = model;
        this.make = make;
        this.modelYear = modelYear;
        // Removing this and the (this.model, this.make) properties below allow for shorthand construction
        // model: string
        // make: string
        this.colors = [];
        // this.model = model
        // this.make = make
    }
    addColor(color) {
        this.colors.push(color);
    }
}
class VehicleList {
    constructor(vehicles) {
        // Can only be accessed within the class VehicleList, can't add anything through a single instance
        this.vehicles = [];
        this.vehicles = vehicles;
    }
    showInventory() {
        console.log(`Showing all vehicles in inventory:\n`, this.vehicles);
    }
}
class Car extends Vehicle {
}
const newHonda = new Vehicle("Honda", "Civic");
const newMazda = new Vehicle("Mazda", "S3");
// newMazda.describe()
// newHonda.describe()
const allCars = new VehicleList([newHonda, newMazda]);
// console.log(allCars)
const hondaCopy = { describe: newHonda.describe() };
console.log(hondaCopy.describe);
allCars.showInventory();
