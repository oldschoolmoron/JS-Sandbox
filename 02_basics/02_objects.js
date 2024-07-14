// singleton
// object.create
const sym = Symbol("key1")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures

// object literals
const JsUser = {
    name : "moron",
    [sym] : "mykey1",
    "fullName" : "moron Pathak",
    age : 2, 
    location : "lucknow",
    email : "xyz@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Wednesday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(typeof JsUser.sym)
// console.log(JsUser[sym])

JsUser.email = "moron@openAI.com"
// Object.freeze(JsUser)
JsUser.email = "abc@openAI.com"

// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS community")
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`)
}
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())

