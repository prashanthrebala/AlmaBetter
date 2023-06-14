

// ======================================================
//
//          WAYS TO WRITE FUNCTIONS
//          we'll write sum function
//
// ======================================================

// simplest way to write function

function sumOfArrayOld(arr) {

    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}


// function identifier - name of the function
// function declaration - body of the function
const sumOfArray = function (arr) {

    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}


// basic arrow functions
const sumOfArrayArrowFn = (arr) => {

    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}


// for single parameter, you don't need ()

// for zero args, you have to put ()
// const functionWithZeroArgs = () => {
//      //execute code
// }

// let is BLOCK scoped
// var is function scoped


// single parameter arrow function doesn't need brackets ()
const singleParamArrowFn = arr => {
    
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    
    return sum;
}

// console.log(sum);


// if your function is returning value in a singel line, you can write it as:
// const productOfTwoNums = (a, b) => a * b;

// Both declarations below are the same

const productOfTwoNumsOneline = (a, b) => a * b;


const productOfTwoNums = (a, b) => {
    return a * b;
}


// square root of a number 
const sqrt = num => num ** 0.5;

console.log(sqrt(100));


let arr = [4, 9, 16, 81, 49];

// function greaterThan20Old (val) {
//     return val > 20;
// }

console.log(arr.filter(val => val > 20));

let cricketers = ["Dhoni", "Virat", "Rohit"];

const addMr = str => "Mr. " + str;


console.log(cricketers.map(str => "Mr. " + str));

// // anonymous function
// // function without a name



// check if palindrome


const isPalindrome = str => {

    // two pointers
    for(let i = 0, j = str.length - 1; i < j; i++, j--) {
        if (str[i] !== str[j]) {
            return false;
        }
    }

    return true;

} 

console.log(isPalindrome("Alma"));
console.log(isPalindrome("123321"));
console.log(isPalindrome("madam"));


