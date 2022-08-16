"use strict";
var Vehicle = /** @class */ (function () {
    function Vehicle(name, make) {
        this.name = name;
        this.make = make;
    }
    return Vehicle;
}());
var VehicleList = /** @class */ (function () {
    function VehicleList(vehicles) {
        this.vehicles = vehicles;
    }
    return VehicleList;
}());
var newHonda = new Vehicle("Honda", "Civic");
var newMazda = new Vehicle("Mazda", "S3");
var allCars = new VehicleList([newHonda, newMazda]);
console.log(allCars);
//# sourceMappingURL=test01.js.map