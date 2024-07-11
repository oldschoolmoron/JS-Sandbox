/*Primitive {

        7 types : string, number, boolean , null, undefined, symbol, BigInt

}*/
// JavaScript is Dynamic type lang(reason) -- variable types are determined at runtime rather than at compile time.

const score = 100
const scoreval = 120.4

const isLoggedin = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const BigNum = 123458395248520557n
console.log(BigNum)

/* Reference Type (Non primitive){

        Arrays, Objects, Functions
}*/

const heros = ["Shaktiman", "Superman", "Doga", "Ironman"]
let myObj = {
    name : "Ananya",
    age : 100,
}

const myFn = function(){
    console.log("hello World");
}

console.log(typeof outsideTemp);

// https://262.ecma-international.org/5.1/#sec-11.4.3