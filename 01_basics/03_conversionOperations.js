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