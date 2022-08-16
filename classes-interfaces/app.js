"use strict";
var Department = /** @class */ (function () {
    function Department(n) {
        this.employees = [];
        this.name = n;
    }
    Department.prototype.describe = function () {
        console.log("I am the ".concat(this.name, " department"));
    };
    return Department;
}());
var artDepartment = new Department("Art");
var artDepartmentCopy = { describe: artDepartment.describe };
artDepartment.describe(); // 'I am the art Department'
// The 'this' context of type '{ describe: (this: Department) => void; }' is not assignable to method's 'this' of type 'Department'.
// Property 'name' is missing in type '{ describe: (this: Department) => void; }' but required in type 'Department'.ts(2684)
// console.log(artDepartmentCopy.describe()) // Undefined
//# sourceMappingURL=app.js.map