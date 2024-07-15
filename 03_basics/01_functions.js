function saymyName(){
    console.log("m")
    console.log("o")
    console.log("r")
    console.log("o")
    console.log("n")
}

// saymyName()

                //Parameters
// function add2nums(num1, num2){
//     console.log(num1 + num2)
// }


        // arguements
// add2nums(3 , null)


function add2nums(num1 , num2){
    let result = num1 + num2;
    return result;
}
const result = add2nums(3,5);
// console.log("result :",result);

function loginUserMessage(username = "me"){
    if(username === undefined){ // username === undefined or !undefined and by default "" and undefined values are considered false in JavaScript
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("moron"));
console.log(loginUserMessage("moron")) // If you pass any value here, it will overwrite the default value (parameters when calling the function)


