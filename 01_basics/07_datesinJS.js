// Dates

let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());

// Type of Date is an object, In JavaScript, months start from zero(0)

// let myCreatedDate = new Date(2002, 1, 27);
let myCreatedDate = new Date(2002, 1, 27, 0, 30);
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);

let newDate = new Date();
console.log(newDate.toLocaleString('default', {
    era: "long",
    hour12: "long"
}));