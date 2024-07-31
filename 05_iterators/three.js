//                                          for of loop

// ["","",""]
// [{},{},{}]

const array = [1,32,3, 45, 5]

for(const num of array){
    // console.log(num);
}

const greetings = "hello world!"

for(const greet of greetings){
    if(greet == ' ') continue;
    // console.log(`each char is ${greet}`)
}

// maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United states of America")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map)

for( const [key, value] of map){
    // console.log(key, ':-', value);
}
// for(const key in map){
//     console.log(key); // the syntax is almost correct however, this doesn't generate any output cuz map is not iterable.
// }

const myObj = {
    'game1' : 'NFS',
    'game2' : 'FIFA'
}

// for(const [key, value] of myObj){
    // console.log(key, ':-', value) //myObj is not iterable
// }


//                                      for in loop
const myobject = {
    js : 'javascript',
    cpp : 'C++',
    rb: 'ruby',
}

for(const key in myobject){
    // console.log(`${key} shortcut is for ${myobject[key]}`);
}

const programming = ["js","rb", "py", "java", "cpp"]

for(const key in programming){
    // console.log(key)
    // console.log(programming[key])
}

//for each loop
const coding = ["Java", "ruby", "Scala", "python", "cpp"]

// coding.forEach(function (val) { //just because its a call back so we don't give name.
    // console.log(val);
// });

coding.forEach((val) => {
    // console.log(val);
});
function println(item){
    // console.log(item)
}
coding.forEach(println) // 

coding.forEach((item, index, arr) =>{
    console.log(item, index, arr);
})

const program = [
    {
        langName : "javaScript",
        langFileName :"js"
    },
    {
        langName : "python",
        langFileName : "py",
    },
    {
        langName : "c++",
        langFileName : "c++"
    },
]

program.forEach( (val) => {
    console.log(val.langName);
    console.log(val.langFileName)
})

