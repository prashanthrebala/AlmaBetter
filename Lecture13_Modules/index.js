function changePrimitive(val = 199) {
	val++;
}

function changeObject(obj) {
	obj.push(5);
}

function changeObject2(obj) {
	obj = [5, 4, 1];
}

// primitives are "passed by value" -- create copy and pass to function
// objects are "passed by reference" -- pass a reference of the object to the function (the object itself)

function main() {
	let y = 10;
	let arr = [1, 2, 3];
	arr = [6, 7, 8];

	// changePrimitive(y);
	// changeObject(arr);
	// changeObject2(arr);

	// console.log(y);
	// console.log(arr);

	// let x = y;
	// y++;
	// console.log(x);
	// console.log(y);

	// let arr2 = arr;
	// arr[0] = 0;
	// console.log(arr);
	// console.log(arr2);
}

main();

// arr = [1, 2, 3, 4]
// console.log(arr.reduce((ans, val) =>  ans - val, 0));

// const newArray = arr.map(val => val + 2)

let name = "Dhoni";
let age = "41";
let teamName = "India";

const cricketer = {
	name,
	age,
	teamName,
};

let obj = {
	key1: "value1",
	key2: "value2",
	key3: "value3",
};

let { key1, key2 } = obj;

import Car from "./index2.js"; // this syntax is for DEFAULT EXPORTS
// you can name it whatever you want (but don't)

import { multiply, max, min } from "./index2.js";

// custom names
// alias
// use 'as' keyword to give an export your own name
// example
// import { multiply as mul, max as mx, min } from "./index3.js";

// one line if you want to include both named and default
// import add, { multiply, max, min } from "./index2.js";

console.log(multiply(5, 10));
console.log(max(5, 10));
console.log(min(5, 10));

// everything until now is ES Modules

// commonJS

// used in server side code ---- nodeJS

// importing is done using require

// const Car = require("./index2.js")
// const { multiply, max, min } = require("./index2.js");
