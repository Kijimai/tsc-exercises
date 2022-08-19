"use strict";
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
};
// Type Guard - to check if the arguments passed in are string or otherwise
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInformation(emp) {
    console.log("Name: " + emp.name);
    if ("privileges" in emp) {
        console.log("Privileges: " + emp.privileges);
    }
    if ("startDate" in emp) {
        console.log("Start Date: " + emp.startDate);
    }
}
printEmployeeInformation({ name: "Steven", startDate: new Date() }); // doesnt print the privileges because it doesnt exist on this object
// using instaceof typeguard for classes
class Car {
    drive() {
        console.log("Driving...");
    }
}
class Truck {
    drive() {
        console.log("Driving a truck...");
    }
    loadCargo(amount) {
        console.log("Loading cargo..." + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
    // if ("loadCargo" in vehicle) {
    //   vehicle.loadCargo(1000)
    // }
}
useVehicle(v1);
useVehicle(v2);
