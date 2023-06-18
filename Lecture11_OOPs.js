

let cricketer1 = {
	name: "Dhoni",
	age: 41,
	team: "India",
	iplTeams: ["CSK", "RPSG"],
	isCaptain: true,
};

let cricketer2 = {
	name: "Virat",
	age: 35,
	team: "India",
	iplTeams: ["RCB"],
};

let cricketer3 = {
	name: "Rohit",
	age: 38,
	team: "India",
	iplTeams: ["DC", "MI"],
};


// what is Class?
// class is blueprint or a schema
// every cricketer will have
// name -> string
// age -> number
// team -> string



// create classes

class Cricketer {



	constructor(playerName, playerAge, playerTeam) {

		this.playerName = playerName;
		this.age = playerAge;
		this.team = playerTeam;
	}



}

// create an object of class Crickter

let cric1 = new Cricketer("Dhoni", 41, "India");
let cric2 = new Cricketer("Virat", 35, "India");


// console.log(cric1);
// console.log(cric2);

// create a class of Rectangle
// two properties - length & breadth
// two methods - perimeter & area

class Rectangle {

	constructor(l, b) {
		this.length = l;
		this.breadth = b;
	}

	getPerimeter(message) {
		console.log(message);
		return 2 * (this.length + this.breadth);
	}

	getArea() {
		return this.length * this.breadth;
	}

	someRandomName() {

	}

}

// arrow function look cool
// but they mght have unexepcted issues

// {
// 	key: 
// }

const rect1 = new Rectangle(5, 6);
const rect2 = new Rectangle(8, 7);
const rect3 = new Rectangle(1, 9);


// console.log(rect1.getPerimeter("Hello"));

// revisit closure 

// create a class of Vehicle
// type, no.of wheels, modeOfTransport


class Vehicle {
	constructor(type, wheels, mode) {

		this.type = type
		this.noOfWheels = wheels
		this.transportMode = mode

	}

	startEngine() {
		console.log(`${this.type} says engine started`);
	}

}


const vh1 = new Vehicle("Car", 4, "Road");


class Car extends Vehicle {

	constructor(company, model, color) {
		super("Car", 4, "road"); // mandatory

		this.company = company;
		this.model = model
		this.color = color;
	}

}

class Airplane extends Vehicle {

	constructor(company, passengerCount) {
		super("Airplane", 6, "Air");
		this.company = company;
		this.passengerCount = passengerCount;
	}

}

const car1 = new Car("Honda", "Civic", "Black");

const ap1 = new Airplane("Indigo", 200);

// car1.startEngine();
// ap1.startEngine();

// console.log(car1);
// console.log(ap1);

// inheritance 

// console.log(car1 instanceof Car);
// console.log(vh1 instanceof Vehicle);


// console.log(vh1 instanceof Car);
// console.log(car1 instanceof Vehicle);


// console.log(ap1 instanceof Vehicle);
// console.log(car1 instanceof Airplane);

// console.log(car1 instanceof Object);
// console.log(vh1 instanceof Object);

const ss = new Set();
const ss2 = [1, 2, 3];
console.log(ss2 instanceof Object);





// properties, methods and functions


// cricketer1.age

// A. property
// B. method
// C. function
// D. variable


// rect1.getArea()

// A. property
// B. method
// C. function
// D. variable


// let pi = Math.PI;

// A. property
// B. method
// C. function
// D. variable



// const m = new Map();
// m.add(12);

// A. property
// B. method
// C. function
// D. variable



// let arr = [6, 3, 4, 8, 9];
// arr.length;

// A. property
// B. method
// C. function
// D. variable


let person1 = {
	firstName: "John",
	lastName: "Doe",
	greet: function() {
		console.log(`Hello my name is ${this.firstName} ${this.lastName}`);
	}
};


let person2 = {
	firstName: "Jason",
	lastName: "Don"
}

let person3 = {
	firstName: "Alma",
	lastName: "Better"
}


// bind(), call(), and apply()
// it is used to give a function an object.
// whenever that function uses 'this', it refers to the specified object


// bind() 
function greet() {
	console.log(`Hello my name is ${this.firstName} ${this.lastName}`);
}

// syntax for bind
// newBoundedFn = nameOfFunction.bind(nameOfTheObject)

const boundedGreet = greet.bind(person3);
const boundedGreet2 = greet.bind(person1);

// boundedGreet();
// boundedGreet();
// boundedGreet2();
// boundedGreet2();



// hobbies of John Doe
// call()
// apply()

// greet.call(person3);

function hobbies(hobby1, hobby2, hobby3) {
	console.log(`Hi! I am ${this.firstName} ${this.lastName}. My hobbies are ${hobby1}, ${hobby2} and ${hobby3}`);
}

// call
// nameOfFunction.call(nameOfTheObject, param1, param2, ..., paramN)

// hobbies.call(person3, "swimming", "HorseRiding", "Skydiving");

// apply
// nameOfFunction.call(nameOfTheObject, [param1, param2, ..., paramN])

// hobbies.apply(person1, ["Poker", "Drawing", "Singing"]);



const obj = {
	value: 5,
	multiply: function(num) {
		return this.value * num;
	}
};


const result1 = obj.multiply(2);

// console.log(result1); // 10

function globalMultiply(num) {

	return this.value * num;
}


const boundMultiply = globalMultiply.bind({ value: 7 });

const result2 = boundMultiply(10);

// console.log(result2); // 70


const result3 = globalMultiply.apply({ value: 7 }, [2]);

// console.log(result3); // 14

const newObj = { value: 12 };

const result4 = obj.multiply.call(newObj, 10);

// console.log(result4); // 120
  

