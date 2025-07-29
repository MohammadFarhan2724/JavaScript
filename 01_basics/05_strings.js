const name = "   Farhan   "
const repoCount = 50

console.log(name + "" + repoCount + " Value");

console.log(`Hello my name is ${name} and my repository count is ${repoCount}`); // String Interpolation

const gameName = new String (`God of War Ragnarok`);

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('o'));

const newString = gameName.substring(0,7); // Negative values cannot be used
console.log(newString);

const newStr = gameName.slice(-7,9); // Negative values can be used
console.log(newStr);

const newStrOne = name.trim();
console.log(name);
console.log(newStrOne);

let url = "https://www.linkedin.com/farhan%40anjum/13384323";
const newUrl = url.replace('%40', '-');
console.log(url);
console.log(newUrl);

console.log(url.includes("farhan")); // gives boolean value true or false

console.log(url.split("/"));

