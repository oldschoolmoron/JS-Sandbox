// array

const Arr = [0, 1, 2, 2, 5, 6]
// console.log(Arr[2])
// Arr.push(7)
// Arr.push(8)
// Arr.pop()
// Arr.unshift(9)
// Arr.shift()
// console.log(Arr)


const ArrofHeros = ["Ironman", "Shaktiman", "Programmer", "Loki", "CaptainofAmerica", "goku"]
// console.log(ArrofHeros.includes("Loki")) // either true/false
// console.log(ArrofHeros.indexOf("Thor")) // -1

const NewArr = ArrofHeros.join()

// console.log(ArrofHeros)
// console.log(NewArr) // type string
// console.log(typeof NewArr)

//slice and splice

// console.log("A ", Arr);

const myarr1 = Arr.slice(1 , 4);
// console.log(myarr1);
// console.log("B", Arr)

const myarr2 = Arr.splice(1, 4);
// console.log(myarr2);
// console.log("C", Arr)
// 'slice' returns a shallow copy of a portion of an array without modifying the original array, while 'splice' modifies the original array by removing or adding elements.

// Array part - 2
const marvel_heros = ["thor", "Ironman", "spiderman","Programmer"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros) o/p = [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// marvel_heros.concat(dc_heros)// output = [ 'thor', 'Ironman', 'spiderman' ]
const Allheros = marvel_heros.concat(dc_heros)
// console.log(Allheros)

const All_new_heros = [...marvel_heros, ...dc_heros];
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// console.log(All_new_heros)

const anoth_arr = [1, 2 ,3, [4, 5, 6],7 , [8, 9, [10, 11]]]

const original_form = anoth_arr.flat(Infinity)
// console.log(original_form);

console.log(Array.isArray("moron"))
console.log(Array.from("moron"))
console.log(Array.from({name : "moron"}));

let num1 = 10
let num2 = 20
let num3 = 30

console.log(Array.of(num1,num2,num3))

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array