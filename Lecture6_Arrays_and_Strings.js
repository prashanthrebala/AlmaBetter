// let num = 49;

// binary number system
// hexadecimal number system
// decimal number system

// let num1 = "1", num2 = "7";
// //num1 = window.prompt("Input the First integer", "0");
// //num2 = window.prompt("Input the second integer", "0");

// if(parseInt(num1) > parseInt(num2)) // (10 > 7)
// {
//     console.log("num1 is greater");
// } else {
//     console.log("num2 is greaer");
// }

// '15.8'  15.8

// let grade = "A";

// let result = 0;

// // "010 9 80"

// switch (grade) {
//     case "A":
//         result += 10;
//     case "B":
//         result += 9;

//     case "C":
//         result += 8;

//     default:
//         result += 0;
// }

// console.log(result);

// while(num !== 1) {

//     let sum = 0;

//     while(num !== 0) {

//         let digit = num % 10;

//         sum += digit ** 3;

//         num = Math.floor(num / 10);

//     }

//     num = sum;
//     console.log(num);
// }

// let cricketer1 = "Mr. Dhoni";
// let cricketer2 = "Mr. Virat";
// let cricketer3 = "Mr. Rohit";

// let cricketers = ["Dhoni", "Virat", "Rohit", 54, null, undefined, () => {}, [1, 2, 3]]
// console.log(cricketers);

let numArray = [10, 34, 87, 86, 86, 14, 75, 50, 74, 45];
let strArray = [
	"alfa",
	"bravo",
	"charlie",
	"delta",
	"echo",
	"foxtrot",
	"golf",
	"hotel",
	"india",
	"juliet",
];

let a = [8, 1, 0, -4, 7, 5, -6];

let b = new Array(5, 0, 4, 3, 1);

// creates [5, 0, 4, 3, 1]

let c = new Array(5);
console.log(c);
// A. creates [undefined, undefined, undefined, undefined, undefined]
// B. creates [5]

// accessing elements

console.log(a[5]);
console.log(a[100]);
console.log(c[0]);

// assigning elements

// ["apple", ud, ud, ud, "banana"]

c[0] = "apple";
console.log(c[0]);
c[4] = "banana";
console.log(c);

a[5] = -3.14;
console.log(a);

// length property

let arr = [5, 4, 7, 1, 2];
let n = arr.length;
console.log(arr[n - 1]);

numArray = [10, 34, 87, 86, 86, 14, 75, 50, 74, 45];

numArray.length;

// iterating through array
for (let i = 0; i < numArray.length; i++) {
	console.log(numArray[i]);
}

// // using for-of
for (let val of numArray) {
	console.log(val);
}

// forEach
numArray.forEach((val) => {
	console.log(val);
});

// const qw = ANYTHING
// qw[1] = asda // possible
// qw = // IMPOSSIBLE

// const q = [8, 4, 7];
// // q[2] = 12;

// console.log(q);

let d = [6, 3, 4, 1, 7, 2, 9];
//       0  1  2  3  4  5  6

// push() // adds to the right of array
d.push(12);
d.push(1, 3, 5, 6);
console.log(d);

// pop() // removes from right of the array
d.pop();
d.pop();
d.pop();
d.pop();
console.log(d);

// unshift() // adds to the left of array
d.unshift(12);
d.unshift(1);
d.unshift(3);

console.log(d);

// shift()  removes from left of the array
d.shift();
d.shift();
console.log(d);

// suppose i have arr[4,6,7] i want to remove 6 how ?
// arr.splice(1, 1)

d = [6, 3, 4, 1, 7, 2, 9];
//   0  1  2  3  4  5  6

// slice() - cuts array from firstValue to secondValue
// firtValue is included, secondValue is not included
// slice() doesn't modify original array

let slicedD = d.slice(1, 3);
console.log(slicedD);
console.log(d);

// MODIFIES ORIGINAL
// splice() - cuts array from (firstValue) and gives (secondValue) no. of items
console.log(d.splice(2, 1));
console.log(d);
// you can also add extra elements after splicing
console.log(d.splice(3, 2, 9, 4));
console.log(d);

let e = [5, 1, 8, 4, 9, 3, 2, 7, 6, 1, 3];
//       0  1  2  3  4  5  6  7  8  9  10

// indexOf()
console.log(e.indexOf(8));
console.log(e.indexOf(13)); // -1 if element doesn't exist

// lastIndexOf()
console.log(e.lastIndexOf(3));

// includes() ----- returns boolean
console.log(e.includes(3));

// concat() combines two arrays into a NEW array
e = [4, 5, 6];
d = [1, 2, 3];

console.log(e.concat(d));
console.log(e);
console.log(d);

// join() creates a string
console.log(e.join("---"));

// reverse() // modifies original array
console.log(e.reverse());

// https://stackoverflow.com/questions/20571215/javascript-list-of-array-methods-that-change-the-array-they-were-applied-to

// filter, find, map & reduce
e = [4, 1, 6, 5, 9, 3, 2, 7, 8, 1, 3];

// filter() - returns all elements that satisfy a condition
// e.filter(val => val > 5)

console.log(e.filter((val) => val > 5)); // give all numbers greater than 5

// find() - returns first element that satisfies a condition
console.log(e.find((val) => val > 7)); // give first number greater than 7

// map() - used to convert elements
console.log(e.map((val) => val + 5)); // add 5 to all elements

// reduce() -- not taught, will be covered in functions

// multidimensional array

let mat = [
	[1, 2, 3, 7, 0],
	[7, 8, 1, "hi"],
	[true, false, null],
	null,
	7,
	[6, "p", 5],
];

// Strings

// double quotes
// single quotes
// backticks

// strings arrays of characters

let myName = "AlmaBetter";
console.log(myName[1]);
console.log(myName.length);
// myName.length

// immutable
// you cannot change a part of a string
// you cannot do myName[2] = '5'

console.log(myName.charAt(0));
console.log(myName[0]);

console.log(myName.toUpperCase());
console.log(myName.toLowerCase());

console.log(myName.indexOf("ette"));

let randomString = "foobarFooBar-00-Bar-Foo";

console.log(randomString.replace("oo", "ee"));
console.log(randomString.replaceAll("oo", "ee"));

randomString = "     foobarFooBar-00-Bar-Foo   ";
console.log(randomString.trim());
