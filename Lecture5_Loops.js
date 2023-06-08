// syntax

// for loop

// for ( initialization ; condition ; increment/decrement) {
//    // statement1
//    // statement2
//        ...
// }

for (let i = 0; i < 5; i++) {
	console.log("Hello world!");
	console.log(i);
}

// initialization happens ONCE, BEFORE EVERYTHING ELSE
// condition is checked EVERYTIME BEFORE executing
// increment/decrement is performed AFTER executing

let arrayLength = 7;
let a = [54, 12, 32, 89, -7, 61, 83];
// index  0   1   2   3   4   5   6

console.log(a[0]);
console.log(a[5]);
console.log(a[10]);

for (let i = 0; i < arrayLength; i++) {
	console.log(a[i]);
}

// print index

// code live: print array in reverse order

for (let i = arrayLength - 1; i >= 0; i--) {
	console.log(a[i]);
}

// code live: display "Hello World" 'n' times

let N = 5;
for (let i = 0; i < N; i++) {
	console.log("Hello wrold");
}

// infinite loop
// for(;;){
//   console.log("Hi");
// }

// code live: given k and n, print n lines of strings
// where each string has k star signs

// n = 3; k = 8;
// ********
// ********
// ********

let n = 5;
let k = 20;

let stars = "";
for (let i = 0; i < k; i++) {
	stars += "*";
}

for (let i = 0; i < n; i++) {
	console.log(stars);
}

// *
// **
// ***
// ****

n = 10;

for (let i = 0; i < n; i++) {
	//   // i = 0  -> 1
	//   // i = 1  -> 2
	//   // i = 2  -> 3
	//   // i = 3  -> 4

	//   // when we have 'i', we want to print i + 1 stars

	let star = "";
	let numberOfStars = i + 1;

	for (let j = 0; j < numberOfStars; j++) {
		star += "*";
	}

	console.log(star);
}

// for in    ----- used mainly for objects
// for of    ----- used mainly for arrays

const definitions = {
	"+": "Used for adding two numbers (or) combining two strings",

	"-": "Used for subtracting two numbers",

	"%": "Used to find remainder",

	"**": "Used to find power of a number",

	1: "weqdw",

	5: "asdasd",
};

// for in iterates through all the keys

for (let key in definitions) {
	console.log(definitions[key]);
}

// behavior in arrays

// let arrayLength = 7;
// let a = [54, 12, 32, 89, -7, 61, 83];
//  index    0   1   2   3   4   5   6

for (let key in a) {
	console.log(key + " " + a[key]);
}

// syntax
// for in loops
// used for objects
// for (let variableName in objectName) {}
// go through all the keys in an object

// for of loops
// used for arrays
// for (let variableName of arrayName) {}
// go through all the value in an array

for (let val of a) {
	console.log(val);
}

// shopping list example:

const shoppingItems = ["Puma Shoes", "Socks", "Belt", "Tshirts", "Towels"];

for (let item of shoppingItems) {
	console.log("I need to buy " + item);
}

// while loops

// while (condition) {
//    // statement1
//    // statement2
//        ...
// }

const studentMarks = [99, 97, 95, 90, 90, 89, 87, 86, 78, 76, 74, 67, 50];

let studentIndex = 0;

while (studentMarks[studentIndex] >= 85) {
	console.log(studentMarks[studentIndex]);
	studentIndex++;
}

console.log("No. of students with more than 85 marks: " + studentIndex);

// do while

let counter = 1;

do {
	console.log(counter);
	counter++;
} while (counter <= 0);

// 10000 lines
// while (condition) {
//  10000 lines
// }

// do {
//    10000 lines
// } while (condition);

// break --- exit the loop completely

// continue --- go to the next step of the loop

let array = [1, 3, 5, 8, 11, 12, 57];

for (let i = 0; i < array.length; i++) {
	if (array[i] % 2 === 0) {
		continue;
	}

	console.log(array[i]);
}

console.log("Hello");
console.log("End of class");
