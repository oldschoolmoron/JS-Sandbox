const userEmail = "An@nya.ai"

// if(userEmail){
//     console.log("Got user Email");
// }else{
//     console.log("Don't have user email");
// }

// truthy val = "0", 'false', " ", [], {}, function(){}, 

// falsly val = false, 0, -0, BigInt 0n, "", null, undefined, NaN

// if(userEmail.length === 0){
//     console.log("Array is Empty");
// }

const Emptyobj = {}
if(Object.keys(Emptyobj).length === 0){
    console.log("obj is empty.");
}

// nullish coalescing operator (??): null undefined

// The nullish coalescing operator (??) in JavaScript returns the right-hand operand when the 
// left-hand operand is null or undefined, otherwise it returns the left-hand operand.
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20
console.log(val1);

// Terniary Operator

// condition ? true : false

const choclate_maggie = 200
choclate_maggie <= 100 ? console.log("less than 100") : console.log("this costs an arm and a leg")