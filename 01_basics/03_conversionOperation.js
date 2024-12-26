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

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);       /2 tp power 3
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);       hello hitesh

// console.log("1" + 2);        12
// console.log(1 + "2");        12
// console.log("1" + 2 + 2);    122
// console.log(1 + 2 + "2");    32

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);          1
// console.log(+"");            0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
console.log(gameCounter);
let pregameCounter = ++gameCounter

let gameCounter1 = 200
let postgameCounter = gameCounter1++

console.log(pregameCounter);
console.log(postgameCounter);


// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion