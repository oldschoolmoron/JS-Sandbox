const score = 100

const balance = new Number(100.2345)
//console.log(balance);

//console.log(balance.toString().length);
//console.log(balance.toFixed(2));

const othernUmber = 123.4699

//console.log(othernUmber.toPrecision(3));

const hundreds = 1000000

//console.log(hundreds.toLocaleString('en-IN'));

// console.log(Math.abs(-4))
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2))
// console.log(Math.floor(4.9))
// console.log(Math.min(4, 5, 6, 8, 2)) // same for max

console.log(Math.random()) // values are vary b/w 0 to 1
console.log((Math.random()*10) + 1) 

console.log(Math.floor(Math.random()*10) + 1)

const min = 10
const max = 20

// Generate a random integer between 'min' (inclusive) and 'max' (inclusive)
console.log(Math.floor(Math.random() * (max - min + 1)) + min) 
