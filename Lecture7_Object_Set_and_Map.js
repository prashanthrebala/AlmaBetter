// https://stackoverflow.com/questions/58483101/for-of-loop-should-i-use-const-or-let

// join and split are opposite of each other
// join - coverts array into string (with delimiter)
// split - converts string into array (with delimiter)

// Objects are used to store multiple things about some entity

// object properties are always considered strings

let cricketer1 = {
	name: "Dhoni",
	age: 41,
	team: "India",
	iplTeams: ["CSK", "RPSG"],
	isCaptain: true,
	plansAfterRetirement: null,
};

// access using '.'
console.log(cricketer1.iplTeams);

// access using []

console.log(cricketer1["isCaptain"]);

// create new properties
cricketer1.jerseyColor = "Blue";

cricketer1["iplJerseyColor"] = "Yellow";

console.log(cricketer1);

// delete properties using `delete`
delete cricketer1.isCaptain;
delete cricketer1["jerseyColor"];

console.log(cricketer1);

// IMPORTANT
// destructure objects  (not for today, but will be used a lot)
// DESTRUCTURING OBJECT
// let { name, age, isCaptain, jerseyColor } = cricketer1;

// console.log(cricketer1['name']);
// console.log(cricketer1.age);

// console.log(name);
// console.log(age);

function startEngineFn(message) {
	console.log(message);
}

// function definition --- riceCooker
// function call --- riceCooker()

// let car = {
//     company: "Honda",
//     type: "Civic",
//     color: "black",
//     startEngine: startEngineFn
// }

let name = "Prashanth";
let age = 10000;

// 'this' means 'The object's'
// this.age means The object's age

// const person = {
//     name: "John",
//     age: 30,
//     greet: function() {
//       console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     }
// };

// console.log(person.greet());

// iterate through object

// use for-in loop
for (let propName in cricketer1) {
	// console.log(propName);
	console.log(propName + " " + cricketer1[propName]);
	// console.log(cricketer1[propName]);
}

// let cricketer1 = {
//     name: "Dhoni",
//     age: 41,
//     team: "India",
//     iplTeams: ["CSK", "RPSG"],
//     isCaptain: true,
//     plansAfterRetirement: null,
// };

// [ ["name", "Dhoni"], ["age", 41], ["team", "India"]

//]

// you can change values
// cricketer1['age'] = 42;

let allKeys = Object.keys(cricketer1);
console.log(allKeys.length);

// keys()
console.log(Object.keys(cricketer1));

// values()
console.log(Object.values(cricketer1));

// entries()
console.log(Object.entries(cricketer1));

// to know how many properties are there in an object
console.log(Object.keys(cricketer1).length);

let obj1 = {
	kingdom: "Animal Kingdom",
	animal: "Dog",
};

let obj2 = {
	noOfLegs: 4,
	type: "Husky",
	animal: "Cat",
};

// Object.assign(obj1, obj2);

let newObj = { ...obj1, ...obj2 };

console.log(newObj);

let a1 = [5, 4, 2, 4];

let a2 = [7, 3, 9];

a1.push(...a2);

// A. [5, 4, 2, [7, 3, 9]];
// B. [5, 4, 2, 7, 3, 9];

console.log(a1);

// OBJECTS
// storing data
// keys are always string
// iterating does not guarantee order

// Set - used for storing unique items (no duplicates)
//       order matters

const s = new Set();

// add()

s.add(1); // { 1 }
console.log(s);

s.add(24); // { 1, 24 }
console.log(s);

s.add(6); // { 1, 24, 6 }
console.log(s);

s.add(24); // { 1, 24, 6 }
console.log(s);

s.add(97);
s.add(12);
s.add(63);

console.log(s);

// has() to check if element exists

console.log(s.has(5));
console.log(s.has(12));

// delete() to remove elements
s.delete(63);
s.delete(97);

console.log(s);

console.log(s.size);

// clear() removes all elements
s.clear();

console.log(s);
console.log(s.size);

// property means property or key
// method means it's a function

// Map - used for storing key-value pairs (like object)
//       key can be any data-type
//       order is maintained
//       good practice to use all keys of the same data type
//                       and all value of the same data type

let m = new Map();

// set() - to add elements -- this is like add()

m.set("Dhoni", 7);
m.set("Virat", 18);
m.set("Rohit", 45);

console.log(m);

// get() - to retrieve element

console.log(m.get("Dhoni"));

// latest value is given priority
m.set("Dhoni", 17);
console.log(m);

// has()
console.log(m.has("Shikhar"));

// delete()
m.delete("Rohit");
console.log(m);

// clear()
m.clear();

console.log(m);

// Array
// Object
// Set
// Map

// instanceof

let aaa = [1, 2, 3];

console.log(aaa instanceof Array);

//

// https://random-data-api.com/
