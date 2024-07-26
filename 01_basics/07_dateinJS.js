// date

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate) //type object

// let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate.toDateString());
// let myCreatedDate = new Date(2023, 0, 23, 5, 2)

// let myCreatedDate = new Date("2023-01-23")
let myCreatedDate = new Date ("01-23-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getFullYear());
// console.log(newDate.getMonth() + 1)

newDate.toLocaleString('Default',{
    weekday: "long",
}) //to customize further

console.log(newDate)