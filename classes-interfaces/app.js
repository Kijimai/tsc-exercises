"use strict";
// interfaces only exist in Typescript
// Describe the structure of an object, what it looks like etc., can also be used to define the structure of a function
// Why do we need this? vs a custom Type?
const add = (n1, n2) => {
    return n1 + n2;
};
// can implement multiple interfaces
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet(phrase) {
        console.log(`${phrase} I am ${this.name}!`);
    }
    fart() {
        console.log("Bffppppt");
    }
}
let user1;
// This wont work anymore with interfaces, you have to instantiate a new object with the new keyword now
// user1 = {
//   name: "James Howlett",
//   age: 121,
//   greet(phrase: string) {
//     console.log(`${phrase} I am ${this.name}!`)
//   },
// }
user1 = new Person("James Howlett", 121);
user1.greet("What's up!");
user1.fart();
class Pig {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log("UEWWWWEEEEEEEEEEEEEEEE");
    }
    fart() {
        console.log("Piggu fart.");
    }
}
const babe = new Pig("Babe", 1);
babe.fart();
babe.greet();
// babe.name = "asdasdad" // works
// console.log(babe.name)
// user1.name = "asdasdasd" // readonly, cant reassign
// Why have interfaces?
// It forces the existence of certain methods you want other classes to inherit as well and every class has to add its own implementation of that method
