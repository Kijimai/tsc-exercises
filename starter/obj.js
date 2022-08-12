"use strict";
// Suboptimal: better to let TS to infer the types
// const person: {
//   name: string
//   age: number
// } = {
//   name: "Max",
//   age: 30,
// }
// const ADMIN = 0
// const READ_ONLY = 1
// const AUTHOR = 2
// each value is represented by an index value
// Defaults at  0 for the first enum value, but can be changed and all other values will follow suit
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 1] = "ADMIN";
    Role[Role["READ_ONLY"] = 2] = "READ_ONLY";
    Role[Role["AUTHOR"] = 3] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    name: "Minun",
    hobbies: ["Sports", "Cooking"],
    age: 30,
    role: Role.ADMIN,
};
if (person.role === Role.ADMIN) {
    console.log(Role.ADMIN);
    console.log("Admin type!");
}
//Better Syntax
// const person : {
//   name: string,
//   age: number,
//   hobbies: string[],
//   role: [number, string] // This is how to define a tuple
// } = {
//   name: "Minun",
//   hobbies: ["Sports", "Cooking"],
//   age: 30,
//   // Holds a 'union' type:  (string | number)[]
//   role: [2, "author"]
// }
// person.role[1] = 'dog' // allowed
// person.role[0] = 'cat' // not allowed, needs to be a number
console.log(person);
//error because needs to be type of array of strings
// let favoriteActivities: string[]
// favoriteActivities = "Soccer"
// Error because one of its values isnt a string
// favoriteActivities = ["Soccer", 1]
//error because property does not exist
// console.log(person.nickname)
// Of course object types can also be created for nested objects.
// Let's say you have this JavaScript object:
// const product = {
//   id: 'abc1',
//   price: 12.99,
//   tags: ['great-offer', 'hot-and-new'],
//   details: {
//     title: 'Red Carpet',
//     description: 'A great carpet - almost brand-new!'
//   }
// }
// This would be the type of such an object:
// {
//   id: string;
//   price: number;
//   tags: string[];
//   details: {
//     title: string;
//     description: string;
//   }
// }
// So you have an object type in an object type so to say.
//Tuples
// Looks like an array, but is a fixed length array
// [1, 2]
// Enums in Typescript
// enum {NEW, OLD} : Added by TypeScript: automatically enumerated global constant identifiers
