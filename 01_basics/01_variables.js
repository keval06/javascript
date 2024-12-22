const accountId = 220210
let accountEmail = "kp@gmail.com"
var accountPassword = "1234"
accountCity = "ahmedabad"

// accountId = 22021 //not allowed beacuse 
// accountId is declared with const keyword

accountEmail = "kp@kp.com"
accountPassword = "2468"
// accountCity = "Bangluru"

let accountState;
console.log(accountId);
/*
 prefer not to use var,
 problem in block scope and function scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

//const
//let
//print table using console.log([])