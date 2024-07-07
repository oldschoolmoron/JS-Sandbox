const account_Id = 144553
let accountEmail = "xyz@gmail.com"
var accountPassword = "12345"
accountcity = "Lucknow"
let accountState

/* 
Prefer not to use var
cause of issue in block sc and fn sc
*/

console.log(account_Id)
console.table([account_Id, accountEmail, accountPassword,accountcity,accountState])