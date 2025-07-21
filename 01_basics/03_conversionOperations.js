let score = "78"

console.log(typeof score);

let valueInNumber = Number(score)

console.log(typeof valueInNumber);
console.log(valueInNumber);

// when input 78 is in string then typeof output is number because we changed it into number.
// when input is 78abc then typeof output is NaN (Not a Number).
// when input is null then output is 0 and typeof score is object.
// when input is undefined then output is NaN.
// when input is any boolean vlaue then output is 1 when true and output is 0 when false.
// "78" => 78
// "78abc" => NaN
// boolean true=> 1, false=> 0

let isLoggedIn = 1

let booleanisLoggedIn = Boolean(isLoggedIn);
console.log(booleanisLoggedIn);
console.log(typeof booleanisLoggedIn);

// when value is 1 then value of booleanisLoggedin is true, when 0 then false.
// when empty string then value is false, when not empty string then value is true.

let num = 98

let stringNumber = String(num);

console.log(stringNumber);
console.log(typeof stringNumber);

// ************************************ OPERATIONS ***************************************

let value = 3
let negValue = -value;
console.log(negValue);

console.log("Hello " + "World");
console.log(1 + "2");
console.log("1" + 2);
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

// JavaScript has a type of conversion whatever data type is in front the elements will be treated like that
// In line no. 44 all were treated like string that is why the output came 122
// In line no. 45 since instead of string there was a number in the starting so it performed addition first then concatenated
// because last number was written in double quotes