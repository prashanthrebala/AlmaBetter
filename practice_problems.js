// Write your code INSIDE all the functions
let output1, output2, output3;

// Example question 1:
// function to add two numbers
function addTwoNumbers(a, b) {
    let c = a + b;
    return c; // you can write return a + b; directly if you want
}

output1 = addTwoNumbers(2, 3);
output2 = addTwoNumbers(9813, 6532);

console.log(output1); // 5
console.log(output2); // 16345


// Example question 2:
// function to tell the larger of two number
function largerNumber(a, b) {

    let greater;

    if(a > b) {
        greater = a;
    } else {
        greater = b;
    }

    return greater;
}

output1 = largerNumber(12, 67);
output2 = largerNumber(8163, 8163);

console.log(output1); // 67
console.log(output2); // 8163



// Problem 1
// write a function to print the largest of three numbers
function largestOfThree(num1, num2, num3) {

    // write your code here

}

output1 = largestOfThree(-8, 3, 12);
output2 = largestOfThree(76, 12, 8);

console.log(output1); // 12
console.log(output2); // 76



// Problem 2
// write a function to print the smallest number in an array
function smallestInArray(arr) {

    // write your code here

}

output1 = smallestInArray( [29, 43, 15, 103, 64, 87] );
output2 = smallestInArray( [7, 5, 3, 4, 8, 3, 8, 4, 8, 2, 2, 7, 6, 3, 2, 8, 9, 2, 3, 6, 7, 3, 9, 1] );

console.log(output1); // 15
console.log(output2); // 1




// Problem 3
// given a number, return an array of the digits of the number
function digitsArray(num) {

    // write your code here

}

output1 = digitsArray(9842);
output2 = digitsArray(8195173);

console.log(output1); // [9, 8, 4, 2]
console.log(output2); // [8, 1, 9, 5, 1, 7, 3]



// Problem 4
// given a number, return a list of its divisors
function divisorList(num) {

    // write your code here

}


output1 = divisorList(36);
output2 = divisorList(70);

// NOTE 
// your output array NEED NOT be sorted
// you can put the divisors in ANY order

console.log(output1); // [1, 2, 3, 4, 6, 9, 12, 18, 36]
console.log(output2); // [5, 10, 7, 35, 2, 1, 70, 14]


// BONUS QUESTION
// write a function to check if a number is a Perfect Number
// Perfect Number definition https://www.cuemath.com/numbers/perfect-numbers/


// Problem 5
// given an array and a number, find the first index of that number inside the array
// return -1 if the element is not there
// DO NOT USE indexOf() method.
function myIndexOf(arr, num) {

    // write your code here

}

output1 = myIndexOf( [5, 6, 1, 8, 4, 1, 9]  ,  1 );
output2 = myIndexOf( [10, 11, 12, 13, 14]  , 6 );

console.log(output1); // 2
console.log(output2); // -1


// Problem 6
// given an array and a number, tell (t/f) if all elements in the array are greater than the number
// DO NOT USE every() method.
function myEvery(arr, num) {

    // write your code here

}

output1 = myEvery( [5, 6, 4, 8, 4, 7, 9]  ,  3 );
output2 = myEvery( [10, 11, 12, 13, 14]  , 12 );

console.log(output1); // true
console.log(output2); // false


// Problem 7
// given an array find the sum of all the numbers in the array
function sumOfElements(arr) {

    // write your code here

}

output1 = sumOfElements([5, 6, 1, 8, 4, 1, 9]);
output2 = sumOfElements([10, 11, 12, 13, 14]);

console.log(output1); // 34
console.log(output2); // 60


// Problem 8
// given an array, divide all the even numbers by 2, and multiply odd numbers by 3
function divAndMulArray(arr) {

    // write your code here

}

output1 = divAndMulArray([5, 6, 1, 8, 4, 1, 9]);
output2 = divAndMulArray([10, 11, 12, 13, 14]);

console.log(output1); // [10, 3, 2, 4, 2, 2, 18]
console.log(output2); // [5, 22, 6, 26, 7]


// Problem 9
// given a person's name tell (true/false) if their name starts with a vowel
// vowels are the letters 'A' 'E' 'I' 'O' and 'U'
function startsWithVowel(personName) {

    // write your code here

}

output1 = startsWithVowel("Dhoni");
output2 = startsWithVowel("Almabetter");
output3 = startsWithVowel("ashwin")

console.log(output1); // false
console.log(output2); // true
console.log(output3); // true



// Problem 10
// given a list of N strings and each string has N characters
// return a string where:
// 1st letter is the 1st letter of the 1st word
// 2nd letter is the 2nd letter of the 2nd word
// and so on...
// Nth letter is the Nth letter of the Nth word

// example ["123", "456", "789"]
// (1)23
// 4(5)6
// 78(9)
// output: "159"

function coolString(stringList) {

    // write your code here

}

output1 = coolString(["abcd", "efgh", "ijkl", "mnop"]);
output2 = coolString(["dhoni", "rohit", "kohli", "raina", "jaddu"]);

console.log(output1); // afkp
console.log(output2); // dohnu



// Problem 11
// given an array of numbers, remove all the duplicates and return a new array
function removeDuplicates(arr) {

    // write your code here

}

// NOTE the output need not be sorted
// you can print in any order

output1 = removeDuplicates([4, 5, 1, 4, 2, 9, 7, 2, 8, 9, 1, 7, 8]);
output2 = removeDuplicates([1, 2, 3, 4, 5, 6, 7, 8, 9]);

console.log(output1); // [4, 5, 1, 2, 7, 8, 9]
console.log(output2); // [1, 2, 3, 4, 5, 6, 7, 8, 9]


// Problem 12
// given an array of numbers return some data structure that will tell
// how many times each number appears in the array
function numberCount(arr) {

    // write your code here

}

// NOTE the output need not be sorted
// you can print in any order

let dataStructure1 = numberCount([20, 12, 64, 12, 73, 20, 73, 20, 58]);
let dataStructure2 = numberCount([4, 5, 1, 4, 2, 9, 7, 2, 8, 9, 1, 7, 8]);

console.log(dataStructure1); 
// should print some data structure that tells
// 20 occurs 3 times
// 64 occurs 1 time
// 12 occurs 2 times
// 73 occurs 2 times
// 58 occurs 1 time
console.log(dataStructure2); 


// Problem 13
// given the datastructure (from problem 9) and a number,
// print how may times the number occurs in the datastructure
// print 0 if it's not there
function noOfOccurrences(dataStructure, num) {

    // write your code here

}

output1 = noOfOccurrences(dataStructure1, 20); 
output2 = noOfOccurrences(dataStructure2, 8);
output3 = noOfOccurrences(dataStructure2, 10);

console.log(output1); // 3
console.log(output2); // 2
console.log(output3); // 0


// Problem 14
// given the same datastructure, 
// return which key has the highest value
// if there are many options, print any one
// you must return an object the looks like this:
// {
//     keyWithHighestValue: answer,
//     theHighestValue: answer
// }
function mostFrequent(dataStructure) {

    // write your code here

}

output1 = mostFrequent(dataStructure1); 
output2 = mostFrequent(dataStructure2);

console.log(output1);
// {
//     keyWithHighestValue: 20,
//     theHighestValue: 3
// }

console.log(output2);
// You can print any key (but should have highest value)
// {
//     keyWithHighestValue: 4,
//     theHighestValue: 2
// }









