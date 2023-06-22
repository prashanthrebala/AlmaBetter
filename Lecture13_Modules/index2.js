export function add(a, b) {
	// named export
	return a + b;
}

export function multiply(a, b) {
	// named export
	return a * b;
}

export function max(a, b) {
	// named export
	return a > b ? a : b;
}

export function min(a, b) {
	// named export
	return a < b ? a : b;
}

// you can have only 1 default export per file
// export using:
// export default function () {}
// import in another file using
// import functionName from "./fileWithExports.js"

// you can have multiple named exports per file
// export using:
// export function() {}
// import in another file using
// import { fn1, fn2, fn3 } from "./fileWithExports.js"

export default class Car {
	// default export
	constructor() {}
}

// export function serviceCar() {

// }

// export function checkTyrePressure() {

// }

// import Car, {serviceCar, checkTyrePressure} from "./index2.js"

//

// class Vehicle {
//     constructor() {

//     }
// }

// function serviceVehicle() {

// }

// function checkVehiclePressure() {

// }

// export default Vehicle;
// module.exports = {
//     serviceVehicle,
//     checkVehiclePressure
// }

// import Vehicle from "./index2.js";
// import {serviceVehicle, checkVehiclePressure} from "./index2.js"
