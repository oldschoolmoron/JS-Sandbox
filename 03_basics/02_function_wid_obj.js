function calculatecartPrice(...num1){ // ... -> this is called rest operator
    return num1
} // output = 200, 400 , 600
function calculatetotalsum(val1, val2, ...num1){
    return num1;
} // output = 600 cuz first val take = 200, val2 = 400 and rest is on screen

// console.log(calculatecartPrice(200,400, 600))
// console.log(calculatetotalsum(200, 400, 600))

const user = {
    username: "moron",
    prices : 99
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)

handleObject({
    username : "Anupam",
    price : "priceless"
})

const myNewArray = [200, 400, 600, 800]

function returnSecondVal(getArr){
    return getArr[2]
}
// console.log(returnSecondVal(myNewArray)) or
console.log(returnSecondVal([200, 500, 1000, 300]))