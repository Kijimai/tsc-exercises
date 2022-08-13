"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var hobbies = ["Videogames", "Cooking", "Gardening"];
var activeHobbies = ["Hiking", "Weight Lifting"];
activeHobbies.push.apply(activeHobbies, hobbies);
console.log(activeHobbies);
// On Objects
var person = {
    name: "Solid Snake",
    age: 40,
};
var copiedPerson = __assign({}, person);
console.log(copiedPerson);
console.log(copiedPerson === person); // false
console.log(JSON.stringify(copiedPerson) === JSON.stringify(person)); // true
