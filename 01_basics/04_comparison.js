//console.log(2 > 1);
//console.log(2 >= 1);
//console.log(2 != 1);
//console.log(2 == 1);

//console.log("2" > 1);
//console.log("02" > 1);

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true

// The greater than (>) and less than (<) operator converts null into zero(0) and treats it as a number whereas
// the equality check operator does not convert null into zero(0)

console.log(undefined == 0); //false
console.log(undefined > 0); //false
console.log(undefined < 0); //false
console.log(undefined >= 0); //false
console.log(undefined <= 0); //false

// undefined work differently with the comparison and equality check operator that is why every output is false
// we have to avoid these type of conversions because our priority is clean and readable code
// === strict check operator does not do conversion in data types