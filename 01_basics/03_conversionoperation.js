let score = undefined


console.log(typeof score)
console.log(typeof (score))

let valueInnumber = Number(score)

console.log(valueInnumber)

// "34" => 34
// "abc" => NaN
// true => 1; false => 0

let isLoggedin = "value";
let booleanisLoggedIn = Boolean(isLoggedin)
console.log(booleanisLoggedIn)

// 1 => true; 0 => false;
// "" => false;
// "value" => true;

let num = 43
let stringNumber = String(num)
console.log(stringNumber)
console.log(typeof stringNumber)


// ************************************ Operations *********************************

let val = 3
let negval = -val
console.log(negval)

console.log(+true)
console.log(+"")


//link to study about these operations
//https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion