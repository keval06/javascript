let score = 41
// console.log(score);
// console.log("Type of score is " + typeof score);

let newScore = "41abc"
// console.log(newScore);
// console.log("Type of new score is " + typeof newScore);

let valueInNumber = Number(score)
// console.log(valueInNumber);
// console.log("Type of valueInNumber is " + typeof valueInNumber);

let valueInNumber2 = Number(newScore)       //stringg to number
// console.log(valueInNumber2);                //value is NaN
// console.log("Type of valueInNumber2 is " + typeof valueInNumber2);      //type is number 

// "33" => 33
// "33abc" => NaN                   //conversion to numbers
//  true => 1; false => 0

let isLoggedin = 1          

let booleanIsLoggedin = Boolean(isLoggedin)

console.log(booleanIsLoggedin);
// 1 => true; 0 => false
// "" => false
// "hitesh" => true