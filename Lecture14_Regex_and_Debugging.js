// PRACTICE PROBLEMS https://regexone.com/lesson/introduction_abcs
// REGEX PLAYGROUND https://regexr.com/
// YOUTUBE TUTORIAL https://www.youtube.com/watch?v=rhzKDrUiJVk

// search for normal words

// +    (e+)

// ?    (ea?)

// *    (re*)

// console.log("Hello \nWorld")

// .    (.at) -- cannot match \n

// \. \w \s \d
// \w includes l;etters, numbers and underscore

// {min,max}

// []    [fc]at

// ()    (t|r|e)

// ^ -- starts With
// $ -- ends with




// const arr = [10, 13, 11, 9, 12, 8, 9];

// 11, 14, 12, 9, 13, 8, 9
// 11 + 14 + 12 + 13 
// 50

// 10, 13, 11, 12
// 11, 14, 12, 13
// const answer = arr.filter(x => x >= 10)
//                   .map(x => x + 1)
//                   .reduce((sum, val) => sum + val, 0);

// console.log(answer);


const pattern1 = /a+b/g;
const pattern2 = new RegExp("c{2,}d");


const string1 = "baaaabaa aababbaa bbbb";
const string2 = "ccccdd cdcdcdc dddd";

// console.log(pattern1.test(string1));

// aaaab   -- a*b  true
// aaaab   -- a+b  true
// b       -- a*b  true
// b       -- a+b  false

// console.log(pattern1.exec(string1));
// console.log(string1.match(pattern1));

console.log(string2.replace(pattern2, "---"))
console.log(string1.split(pattern1));
// string           baaaabaa aababbaa bbbb
// pattern /a+b/g


// b aa   baa bbbb

// compiler design

function add(x, y, d) {
    d.push(4);
    console.log("hello");
    console.log("hello");
    console.log("hello");
    console.log("hello");
    return x + y - 1;
}

const a = 5;
let b = a + 17;
let d = [3, 4, 5]

let c = add(a, b, d);

console.log(c);
