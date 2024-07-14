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
    // console.log("Hello JS community")
}

JsUser.greetingTwo = function(){
    // console.log(`Hello JS user, ${this.name}`)
}
// console.log(JsUser.greeting())
// console.log(JsUser.greetingTwo())

const twitteruser = new Object()

const twrtteruser = {}

twitteruser.id = "123abc"
twitteruser.name = "boody"
twitteruser.isLoggedIn = false

// console.log(twitteruser)

const regularuser = {
    email : "some@gmail.com",
    fullName : {
        userfullname : {
            firstname : "moron",
            lastName : "pathak"
        }
    }
}
//console.log(regularuser.fullName.userfullname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj5 = {5: "e", 6: "f"}

// const obj3 = {obj1 , obj2}

// const obj3 = Object.assign({},obj1, obj2) // {} = target, and rest all are source = obj1,obj2,obj3
// console.log(obj3)

const obj3 = {...obj1, ...obj2, ...obj5}
// console.log(obj3);

const users = [
    {
        id : 1,
        email : "boody@gmail.com"
    },{
        id : 2,
        email : "abc@gmial.com"
    },{
        id : 3,
        email : "xyz@gmail.com"
    }
]

// console.log(users[0].email);

// console.log(twitteruser);

// console.log(Object.keys(twitteruser));
// console.log(Object.values(twitteruser));
// console.log(Object.entries(twitteruser));

// console.log(twitteruser.hasOwnProperty('isLoggedIn'));

                                            //de-structing in Objects

const course = {
    coursename : "js series",
    price : "freefreefree",
    courseInstructer : "Hitesh Sir"
}

// console.log(course.courseInstructer)

const {courseInstructer : instructer} = course

//console.log(instructer);

                                            // API concept
// https://api.github.com/users/oldskoolmoron

// { api call using object(JSON)
//     "name" : "h",
//     "coursename" : "js in hindi",
//     "price" : "free"
// }

// [ api call using array (JSON)
//     {},
//     {},
//     {}
// ]
