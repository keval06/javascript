const score = 400                           //variable of Number data type
console.log(score);

// const balance = new Number(100.980)             //Object of Number data type
// console.log(balance);

// console.log(balance.toString());            //object to string, non primitive to primitive
// console.log(balance.toString().length);     //if converted to string, use all properties of string

// console.log(balance.toFixed(1));            //decimal pachhi na digit sambhale

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(4));        //decimal pahela na digit ne dhayn ma rakhe

const hundreds = 1000000                        
console.log(hundreds.toLocaleString('en-IN'));  //convert to Locale String, easy in counting zero


// +++++++++++++ Maths +++++++++++++++++++++++++++++


console.log(Math);                             //in-built library Math
console.log(Math.abs(-4));                      //absolutr, convert all to +ve 
console.log(Math.round(4.6));                   //round, point pachhi nu dhyan rakhe, 5 krta moti to 1 vadhre baki nandan sir

console.log(Math.ceil(9.2));                    //ceil, sankhya rekha par jamni baju
console.log(Math.floor(4.9));                   //floor, snkhya rekha par dabi baju

console.log(Math.min(4, 3, 6, 8));              //min, selects min value from the given array
console.log(Math.max(4, 3, 6, 8));              //max, selects max value from the given array

console.log(Math.random());                     //random value bw 0 to 1
console.log((Math.random()*10) + 1);           //random vlaue bw0 to 10
console.log(Math.floor(Math.random()*10) + 1);      //only flooor value

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
//values bw range (max,min)