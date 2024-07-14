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

console.log("A ", Arr);

const myarr1 = Arr.slice(1 , 4);
console.log(myarr1);
console.log("B", Arr)

const myarr2 = Arr.splice(1, 4);
console.log(myarr2);
console.log("C", Arr)
// 'slice' returns a shallow copy of a portion of an array without modifying the original array, while 'splice' modifies the original array by removing or adding elements.


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array