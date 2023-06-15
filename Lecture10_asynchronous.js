// template strings

const str1 = "Hello World!";
const str2 = 'Hello World!';

// use '\' to escape

let a = 12;
let b = 3;
let c = a + b;

function sum(a, b) {
    return a + b;
}

const sampleString = "a is " + a + " b is " + b + " their sum is " + c;
const templateString = `a is ${a} b is ${b} "their" 'sum' is ${sum(a, b)}`
console.log(templateString);

const username = "Chetan";
const welcomeString = `Welcome to this website ${username}`;
console.log(welcomeString);


// hoisting means pushing everything to the top
// functions are always hoisted (when declared with the keyword `function`)
// var is hoisted inside the functions


const closureTest = () => {
    
    let d = 5;
    return () => {
        console.log(d++);
    }
    
}

let someFn = closureTest();
someFn();
someFn();
someFn();
someFn();


let someFn2 = closureTest();
someFn2();
someFn2();
someFn2();



// function multiply(a, b) {
//     console.log("A");
//     return a * b;
// }

// function square(a) {
//     console.log("B");
//     return multiply(a, a);
// }

// function printSquare(n) {
//     console.log("C");
//     let ans = square(n);
//     console.log(ans);
// }

// printSquare(5);



// what are Higher Order Functions

// a function that take another function as a parameter
// a function that returns another function



// what is a callback?
// a function that is passed as an argument to another function AND
// this function is called upon an event

// https://stackoverflow.com/questions/9596276/how-to-explain-callbacks-in-plain-english-how-are-they-different-from-calling-o/9652434#9652434

// callback is -> function of getting the parcel and giving it to the neighbour
// the event is -> the doorbell ringing

// what is setTimeout

function printHello() {
    console.log("Hello World");
}

setTimeout(() => {
    console.log("From Anon function");
}, 3000);


// loading, data = getInformation();
// show loading
// if data is present remove loading and then show data


function printX() {
    console.log("X");
}

console.log("A");
setTimeout(printX, 0);
console.log("B");



console.log("A");

setTimeout(() => {
    console.log("Y");
}, 200);

setTimeout(() => {
    console.log("Z");
}, 100);

console.log("B");




let timeoutId = setTimeout(() => {
    console.log("Text")
}, 2000);

clearTimeout(timeoutId);

let count = 0;

let timerId = setInterval(() => {
    console.log(count++);

    if(count === 2) {
        clearInterval(timerId);
    }

}, 1000);



console.log("A");
setTimeout(() => {
    console.log("C")
}, 2000);
smallDelay("D");
console.log("B");


console.log("A");
setTimeout(() => {
    console.log("C")
}, 100);
longDelay("D");
console.log("B");



function smallDelay(message) {
    let n = 2100000000;
    while(n-- > 0);
    console.log(message);
}

function longDelay(message) {
    let n = 5000000000;
    while(n-- > 0);
    console.log(message);
}





