// recall ternary operator

// (condition) ? (condition is true) : (condition is false)

// example:
// let age = 3;
// console.log(age >= 18 ? "Can Vote" : "Cannot Vote")

// if (condition) {
//     ---executes this if condition is true---
// } else {
//     ---executes this if condition is false---
// }

let age = 27;

if (age >= 18) {
	console.log("You are allowed to vote");
} else {
	console.log("You are not allowed to vote");
}

const marksInExam = 14;
const minimumMarksToPass = 40;

if (marksInExam >= minimumMarksToPass) {
	console.log("You passed!");
} else {
	console.log("You have to improve");
}

// if (condition) {
//     ---executes this if condition is true---
// }

// shopping example

let totalPrice = 100;
let previousPurchases = 0;

if (previousPurchases === 0) {
	console.log("You get a 10% discount!");
	totalPrice *= 0.9;
}

previousPurchases++;
console.log("Your total price is Rs." + totalPrice);

// use if-else-if statements for multiple conditions

let cricketMatchScore = 191; // T-20 format

if (cricketMatchScore >= 180) {
	console.log("It is a very good score");
} else if (cricketMatchScore >= 150) {
	console.log("It is a decent score");
} else {
	console.log("It is a low score");
}

// only ONE block gets executed

let scienceExamScore = 56;

if (scienceExamScore >= 90) {
	console.log("You got an A grade");
} else if (scienceExamScore >= 80) {
	console.log("You got a B grade");
	//
} else if (scienceExamScore >= 70) {
	console.log("You got a C grade");
} else if (scienceExamScore >= 60) {
	console.log("You got a D grade");
} else {
	console.log("You got an E grade");
}

// nested if else

// tell if a number is even or odd
// if it is even tell me if it is divisible by 4 or not
// if it is odd tell me if it is divisible by 5 or not

const num1 = 33;

if (num1 % 2 === 0) {
	console.log("Number is even");

	if (num1 % 4 === 0) {
		console.log("The number is divisble by 4");
	} else {
		console.log("number is not divisible by 4");
	}
} else {
	console.log("Number is odd");

	if (num1 % 5 === 0) {
		console.log("The number is divisble by 5");
	} else {
		console.log("number is not divisible by 5");
	}
}

// switch-case statement

// switch (expression) {
//     case (value1):
//         statements
//         break;
//     case (value2):
//         statements
//         break;
//     case (value3):
//         statements
//         break;
//     default:
//         statements
//         break;
// }

let month = 2;

switch (month) {
	case 1:
		console.log("January");
		break;
	case 2:
		console.log("February");
		break;
	case 3:
		console.log("March");
		break;
	case 4:
		console.log("April");
		break;
	case 5:
		console.log("May");
		break;
	case 6:
		console.log("June");
		break;
	default:
		console.log("Something else");
		break;
}

let dayOfWeek = 1;
let dayName;

switch (dayOfWeek) {
	case 1:
		dayName = "Monday";
		break;
	case 2:
		dayName = "Tuesday";
		break;
	case 3:
		dayName = "Wednesday";
		break;
	case 4:
		dayName = "Thursday";
		break;
	case 5:
		dayName = "Friday";
		break;
	case 6:
		dayName = "Saturday";
		break;
	case 7:
		dayName = "Sunday";
		break;
	default:
		dayName = "Invalid day";
		break;
}

// console.log(dayName);

let fruit = "papaya";
let color;

switch (fruit) {
	case "banana":
	case "lemon":
		color = "yellow";
		break;
	case "apple":
	case "cherry":
	case "strawberry":
		color = "red";
		break;
	case "grape":
	case "blueberry":
		color = "purple";
		break;
	default:
		color = "unknown";
}

console.log(color);

dayOfWeek = "Saturday";

switch (dayOfWeek) {
	case "Monday":
	case "Tuesday":
	case "Wednesday":
	case "Thursday":
	case "Friday":
		console.log("It is a weekday");
		break;
	case "Saturday":
	case "Sunday":
		console.log("It is a weekend");
		break;
	default:
		console.log("Invalid day of the week");
}

let userType = "admin";

switch (userType) {
	case "Customer":
		// show all items for sale
		break;

	case "Seller":
		// show upload button, and details
		break;

	case "admin":
		// manage users, manage sellers,

		break;
}

if (userType === "Customer") {
	// show all items for sale
} else if (userType === "Seller") {
	// show upload button, and details
} else if (userType === "admin") {
	// manage users, manage sellers,
}
