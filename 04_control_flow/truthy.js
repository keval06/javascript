const userEmail = []

if (userEmail) {
    // console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN


//truthy values
// "0", 'false', " ", [] -> Empty array, {} -> empty object , function(){}

if (userEmail.length === 0) {
        // console.log("Array is empty");
    }

// const emptyObj = {}
// if(Object.keys(emptyObj) === 0)

const myObj ={
    name : "hari",
    birth_place : "Gokul",
    kingdom: "dwarka"
}

// console.log(Object.entries(myObj))

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    // console.log("Object is empty");
}


// Nullish Coalescing Operator (??): specially for null undefined
//fetching data from the database and sometimes, it is null or undefined so...

let val1;
val1 = 5 ?? 10                              //5
val1 = null ?? 10                          //10
val1 = undefined ?? 10399                 //10399

console.log(val1);

// Terniary Operator
//conditional operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")

