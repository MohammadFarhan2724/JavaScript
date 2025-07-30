const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNumber = 123.8966;

console.log(otherNumber.toPrecision(4));

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math.abs(-4)); // Gives Postive Absolute Value

console.log(Math.round(4.3)); // Gives output 4
console.log(Math.round(4.6)); // Gives output 5

console.log(Math.ceil(4.1)); // Always Gives higher value that is 5
console.log(Math.floor(4.7)); // Always Gives lower value that is 4

console.log(Math.max(4,3,6,8));
console.log(Math.min(4,3,6,8));

console.log(Math.random()); // Gives random value between 0 and 1

console.log(Math.floor(Math.random()*10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1) + min));
