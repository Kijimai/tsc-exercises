"use strict";
const hobbies = ["Videogames", "Cooking", "Gardening"];
const activeHobbies = ["Hiking", "Weight Lifting"];
activeHobbies.push(...hobbies);
console.log(activeHobbies);
// On Objects
const person = {
    name: "Solid Snake",
    age: 40,
};
const copiedPerson = Object.assign({}, person);
console.log(copiedPerson);
console.log(copiedPerson === person); // false
console.log(JSON.stringify(copiedPerson) === JSON.stringify(person)); // true
