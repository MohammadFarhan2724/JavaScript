// Primitive Data types

// 7 : String, Number, Boolean, Null, Undefined, Symbol(), BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');

const anotherId = Symbol('123');

console.log(id == anotherId);

const bigNum = 481648n

console.log(typeof bigNum);

// Reference (Non Primitive) Data Types

// Arrays, Objects, Functions

const cars = ["LC300", "Defender", "Patrol"]; // Array

let info = {     // Object
    name: "Farhan",
    age: 24,
};

console.log(info);

// https://262.ecma-international.org/5.1/#sec-11.4.3