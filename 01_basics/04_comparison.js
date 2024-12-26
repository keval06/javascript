//Normal,not new
// // console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


console.log("2" > 1);    //true  ->  js converts 02,2 into number and comapre
console.log("02" > 1);   //same

console.log(null > 0);      //comparison, false
console.log(null == 0);     //equality, false
console.log(null >= 0);     //comparison, true
//reason->  Equality [==] check and comparison chekck [<,>,<=,>=] works diferntly in js

//comparison converts null to a number . treating it as 0, and then compare,

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === 

console.log("2" === 2);     //=== also compares the data type of both variables along side values
console.log(null==0);

console.log("krishna"=="krishna");     //true
