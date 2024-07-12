const name = "moron"
const repoCount = 5

// console.log(name + repoCount + " Val")
//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('kode-gambler')
//console.log(gameName[0]);
//console.log(gameName.__proto__);
//console.log(gameName.length);
//console.log(gameName.toUpperCase())

// console.log(gameName.charAt('2'));
// console.log(gameName.indexOf('g'));

const newString = gameName.substring(2,7)
// console.log(newString)

const anotherString = gameName.slice(-11,6)
// console.log(anotherString)

const newStringOne = "    moron    "
// console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://kodegambler.com/ananya%20pathak"

// console.log(url.replace('%20', '-'))
// console.log(url.includes('ananya'))

console.log(gameName.split('-'));