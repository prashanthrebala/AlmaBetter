
// first class citizens

// you can declare functions

// you can pass functions as parameters
// you can return functions from functions

// pure function
// is a function which only depends on it's parameters



let a = 5;

// impure function
// because the function depends on the variable a 
function addToA(val) {
    return a + val;
}
addToA(10);


// pure function
function areaOfRectangle(l, b) {
    return l * b;
}
areaOfRectangle(5, 6);




// function composition using pipe of any number of functions
const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x); 
const double = x => x * 2
const square = x => x * x
const triple = x => x * 3

// function pipe
const output_final = pipe(double, square, triple)(2);
// console.log(output_final);

const fn = pipe(double, square);


// 2
// double(2) -> 4
// square(4) -> 16
// triple(16) -> 48


// multiple arguments

// arrow functions don't have 'arguments'
// rest parameter


// pipe(double, square, triple)

// args[0] ---> duoble
// args[1] ---> square
// args[2] ---> trilpe


const pipeDetailed = (...args) => {

    return (num) => {

        // let ans = num; // 2
        // ans = double(ans); // 4
        // ans = square(ans); // 16
        // ans = triple(ans); // 48

        // let ans = num; // 2
        // ans = args[0] (ans); // 4
        // ans = args[1] (ans); // 16
        // ans = args[2] (ans); // 48

        // let ans = num;
        // for(let i = 0; i < args.length; i++) {
        //     ans = args[i](ans);
        // }

        // let ans = num;
        // for(let f of args) {
        //     ans = f(ans);
        // }
        // return ans;

        args.reduce((ans, f) => f(ans), num);


    };

}

const pipe0 = (...fns)  => x   => fns.reduce( (y, f)   => f(y),   x); 
const pipe1 = (...args) => num => args.reduce((ans, f) => f(ans), num);




arr = [4, 5, 6];
let sum = 0;
for(let val of arr) {
    sum = sum + val;
}
console.log(sum);

arr.reduce((sum, val) => sum + val, 0);


const pipedFn = pipe2();


