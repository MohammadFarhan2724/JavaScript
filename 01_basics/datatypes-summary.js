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

// ****************************************************************************************************************

// Stack, Heap - Two types of memories

// For Primitive data types stack memory is used and for non primitive heap memory is used

let myYoutubename = "Railway Nest";

let anothername = myYoutubename;
anothername = "farhan";

console.log(myYoutubename);
console.log(anothername);

let userone = {
    name: "Farhan",
    Dept: "IT",
    EmpId: 2724,
}

// In stack a copy is made whereas in heap we change the reference which changes the original value

let userTwo = userone

userTwo.name = "Shaikh Bakhtiyar"
console.log(userone.name);
console.log(userTwo.name);

// Here above when I changed the value in user two the value in user one also changed, this is change by reference