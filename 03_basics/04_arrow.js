// Every thing about arrow 


const user = {
    username: "moron",
    "registration price": 999,

    welcomeMessage: function() { // this keyword refers to the current context
        console.log(`${this.username}, welcome to the website`);
        console.log(this)
    }
    
} 
// Object.freeze(user) 
// user.welcomeMessage()
// user.username = "abc"
// user.welcomeMessage()


// this often ask in interviews =>

/*console.log(this);*/ 
// just cause we are in node enviornment so this gives you an empty object, but this is not the case with browsers, because the global object inside the browser is the window object, and only then you're able to capture all events of windows, clicks, form submissions etc...

function thisone(){
    console.log(this); // 
}
/*thisone()*/
 // Let's run this on your terminal and see what value will be generated inside it. When we ran it previously, we got a lot of values. When it was done outside, it was fine and gave you only an empty object. However, when you print 'this' inside a function (especially in a Node environment), you get global values as well. This includes microtasks, structure clone, a lot of performance evaluation, ideal time, fetch, etc. In short, we get a lot of values, implying that there is something inside it that you can access.


function coffee(){
    username : "moron",
    console.log(this.username)
}
// coffee() // So here, in the function, we see that `this.username` is not working. However, when we do the same by making an object, it works fine.

const chai = function() {
    username : "moron",
    console.log(this.username) // still not working
}
 // chai() // output is undefined

 const choclate_maggie = () => {
    let method = "consult to a doctor first";
    console.log(this);
}
choclate_maggie(); // output = {} empty object

// how to use arrow function
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//we can also write this by using implicit return 
const addTwo = (num1,num2) => num1 + num2
// console.log(addTwo(3,4))

const returnusername = (num1, num2) => ({username: "abc"})
console.log(returnusername(3,4))