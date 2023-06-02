// assignment operator (=)

// reserved key words
// let, var, const

let a = 7;
let b = 4;
let c = 2;

// can also declare multiple numbers at once
// let a = 7, b = 4, c = 2;

// addition operator

// console.log(3 + 8);
// console.log(b + c);
// console.log(a + 5);
// console.log(a + b + 10 + c);

// subtraction operator

// a = 7
// b = 4
// c = 2

// console.log(a - b);
// console.log(c - 5);
// console.log(a + c - b);
// console.log(-b + 5);

// multiplication operator

// a = 7
// b = 4
// c = 2

// console.log(3 * 7);
// console.log(c * 6);
// console.log(a + b * c);

// division operator

// console.log(b / c);
// console.log(a / c);
// console.log(a - b / c);
// console.log(a * b / c);

// remainder (or) modulus (or) modulo operator

// + - * / %

// a = 7
// b = 4
// c = 2

// console.log(a % c);
// console.log(10 % 3);
// console.log(b * c % a);
// console.log(a * 5 % c * 2);

// IMPORTANT
// always do multiplication, division and modulo first (from left to right)
// then addition and subtraction (from left to right)

// power operator

// a = 7
// b = 4
// c = 2

// console.log(b ** c);
// console.log(a ** c + 1);

//

// assignment operator continued
// right side value is put in the left side variable

// a = 7
// b = 4
// c = 2

let d = a + 3;
// console.log(d);

d = d + 5;
// console.log(d);

// d = d + 5; can also be written as
// d += 5;

// d = d - 5  ----> d -= 5

d += 10;
// console.log(d);

// a = 7
// b = 4
// c = 2

d -= a; // d = d - a
// console.log(d);

let e = 3;
e *= 8;
// console.log(e);

e /= 4;
// console.log(e);

// post increment
let f = 8;
// console.log(f--);
// console.log(f);

// f++ means, use the value of f, and then increase by 1
// f-- means, use the value of f, and then decrease by 1

// pre increment
let g = 10;
// console.log(++g);
// console.log(g);

// ++f   first increase, then use the value
// --f   first decrease, then use the value

let h = 5;
// console.log(h++ + ++h);
// 5 + 7       (h = 7)

// console.log(h);

h = 6;
// console.log(h++ + h);
// 6 + 7
// console.log(h);

// comparison operators
// will always return true or false

// a = 7
// b = 4
// c = 2

// console.log(3 > 6);
// console.log(b < a);
// console.log(c * b >= a);
// console.log(11 <= a + b);  // 11 <= 11

// => and =< are wrong
// <= and >= should be used

// loose equality ==
// console.log(5 == 4 + 1);
// console.log(a == b + 5);
// console.log(6 == "6");

// console.log(true == "true");
// https://stackoverflow.com/questions/11363659/why-does-true-true-show-false-in-javascript

// a = 7
// b = 4
// c = 2

// strict equality ===

// console.log(6 === "6");
// console.log(a - 1 === b + c);

// let almaString = "Alma";
// console.log("alma" === almaString);

// loose inequality !=

// console.log(5 != 4 + 1);
// console.log(a != b + 5);
// console.log(6 != "6");
// console.log(true != "true");

// strict inequality !==

// a = 7
// b = 4
// c = 2

// console.log(6 !== "6");
// console.log(a - 1 !== b + c);

// 2 != "2"
// 2 == "2"   -> true

// let almaString = "Alma";
// console.log("Alma" !== almaString);

// logical operators
// will also return true or false
// logical && and logical ||

// a = 7
// b = 4
// c = 2

// console.log(a > b && c === 2); // true && true => true
// console.log((4 * 2 > 0) && (c > 2)); // true && false => false

// console.log(a > b || c === 2); // true || true => true
// console.log((4 * 2 > 0) || (c > 2)); // true || false => true
// console.log((4 > 5) || (a === -10)); // false || false => false

//          &&      ||
//--------------------------
//  FF      F       F
//  TF      F       T
//  FT      F       T
//  TT      T       T

// console.log(true && true && true && false);
// console.log(false || false || true || false);

let j = 23;
// console.log(j % 2 === 0);

// string concatenation

let firstName = "Foo";
let lastName = "Bar";
// console.log(firstName + " " + lastName);

// ternary operator

// condition ? (if cond is true) : (if cond is false)

let age = 23;

// console.log(age >= 18 ? "Can Vote" : "Cannot Vote");

let k = 12;
// console.log(k % 2 === 0 ? "Even" : "Odd");

const l = 4 < 5 ? 7 : 3; // const cannot be changed
// console.log(l);

// console.log(l++ === "8");

// console.log(typeof a);
// console.log(typeof firstName);
// console.log(typeof (b >= c));
