"use strict";
const add = (...numbers) => {
    let result = numbers.reduce((a, b) => {
        return a + b;
    }, 0);
    return result;
};
const addedNumbers = add(1, 4, 5, 7, 110);
console.log(addedNumbers);
