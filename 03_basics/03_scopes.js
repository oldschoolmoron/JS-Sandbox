
                                // global scope vs local scope
let a = "something"
var c = 300

if(true){
let a = 10
//const b = 20
var c = 30
// console.log("INdex : ",a)
}

// console.log(a)
// console.log(b)
// console.log(c)

// {} => scope

function one(){
    const username = "moron"
    function two(){
        const website = "youtube.com"
        console.log(username)
    }
    // console.log(website);
    //two()

}
//one()

if(true){
    const username = "xyz"
    if(username === "xyz"){
        const website = " youtube"
        //console.log(username + website)
    }
    // console.log(website)
}

// console.log(username)


                                        //part -3 (FUNCTION HOISTING)
                                        
addone(5)
function addone(num){
    return num + 1
}

//addtwo(5)
const addtwo = function(num){
    return num +2
}










