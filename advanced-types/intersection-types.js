"use strict";
// Type setting for objects to contain two different Types
// The same can be achievable with interfaces
// Below is the syntax for interfaces
// interface Admin {
//   name: string
//   privileges: string[]
// }
var _a;
const employee1 = {
    name: "Steve",
    privileges: ["create-server", "read-server"],
    startDate: new Date(),
};
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
    // instanceof only usable on class instances, this cant be use for interfaces
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
    // if ("loadCargo" in vehicle) {
    //   vehicle.loadCargo(1000)
    // }
}
useVehicle(v1);
useVehicle(v2);
// this function accepts an animal argument of type Animal
// allows to check if a given animal's type is a certain animal, only call on specific methods/properties based on the type
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
            break;
    }
    console.log("Moving at speed: " + speed);
}
moveAnimal({ type: "bird", flyingSpeed: 10 });
// can have as many properties as it needs now!
// as long as "id" is in it
const errorBag = {
    id: "asd1231",
    email: "Not a valid email",
    blah: "asdasdasd",
    username: "Must start with a capital character!",
    moreProps: "asdasdasdasdasdasdasdasda",
};
// This will generate a typescript error
// Property 'id' is missing in type, but required in type ErrorContainer
// const thisWillGenerateATypescriptError: ErrorContainer = {
//   email: "Not a valid email!",
//   username: "Must start with a capital character!",
// }
function emailError(error) {
    return {
        id: error.id,
        message: error.message,
    };
}
// Function overloads -- allows for defining multiple function signatures
// We can have multiple function signatures
// check the original add function for syntax
const result = add(1, 5); // 6
const result2 = add("1", "5"); // 15
console.log(result, result2);
// Optional Chaining
// useful for instances where you are getting data from a backend
// Where the data is uncertain to be defined
const fetchedUserData = {
    id: "u1",
    name: "Max",
    job: { title: "CEO", description: "My Own Company" },
};
// attach a '?' to the base property or object if a specific property may or may not exist
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
// Nullish Coalescing
const userInput = null;
const storedData = userInput !== null && userInput !== void 0 ? userInput : 15; // if null, put 15 by default as fallback
console.log(storedData);
