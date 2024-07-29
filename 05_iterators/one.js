// for loop 

for (let i = 0; i < 10; i++) { //ctrl or cmd + D is used to select the next occurrence of the current 
                                // selection, which is useful for making multiple changes at once.

    const element = i; 
    if(element == 5){
    console.log("5 is the best element")}
    
}

for(let i=0; i<2; i++){
    // console.log(`outer loop val : ${i}`);
    for(let j=1; j <= 10; j++){
        // console.log(`Inner loop val ${j} and inner loop ${i}`);
        // console.log(i + ' * ' + j + ' = ' + i*j)
    }
}
let myArray = ["flash", "postman", "shaktiman"]
// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}

//break and continue

for (let index = 0; index < 5; index++) {
    // if(index == 2) break;
    if(index == 2) continue;
    console.log(`val of i is ${index}`);
}

