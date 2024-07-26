// if

/*if(condition) // true {

}*/

// <, >, <=, >=, == , !=, ===

/* if(condition) {    // true 
        print xyz;
} else {                //false 
        print abc
 }*/

/* const score = 100
if(score> 100){
    const power = "fly"
    console.log(`user power: ${power}`)
}

console.log(`user power : ${power}`); */


const balance = 0
if(balance > 500) console.log("test"); //shorthand notation

// nesting

/*if(balance != 0){
        if(balance < 1000){
                console.log("balance is less than 1k")
        }else if(balance < 3000){
                console.log("balance is less than 3k")
        }else {
                console.log("we have sufficeint balance")
        }
}else{
        console.log("your balance is nil")
} */

const userLoggedIn = true
const debitcard = true
const userLoggedInfrom_mail = false
const userLoggedInfrom_google = true

if(userLoggedIn && debitcard && 2==3){
        console.log("Allow to buy thing")
}

if(userLoggedInfrom_google || userLoggedInfrom_mail){
        console.log("user logged in")
}
