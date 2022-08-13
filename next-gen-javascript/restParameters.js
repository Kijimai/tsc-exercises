"use strict";
var add = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var result = numbers.reduce(function (a, b) {
        return a + b;
    }, 0);
    return result;
};
var addedNumbers = add(1, 4, 5, 7, 110);
console.log(addedNumbers);
