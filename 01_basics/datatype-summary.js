//Mainly two datatypes:- 1. Primitive, 2. nOn- primitive
//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100           //Number
const scoreValue = 100.3    //Number

const isLoggedIn = false    //Boolean
const outsideTemp = null    //null
let userEmail;              //undefined

const id = Symbol('123')    //Symbol
const anotherId = Symbol('123')

console.log(id === anotherId);      //false

// const bigNumber = 3456543576654356754n

//Type-2

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
const krishna = ["madhav", "gopal", "hari"]         //array
console.log(krishna[0]);

let myObj = {                   //Object is like dictionary of python, key and values
    name: "hitesh",
    age: 22,
}
let myObj2={
    name:"govind",
    age: "1000 years"
}
console.log(myObj.name);
console.log(myObj2.age);



const myFunction = function(){      //function 
    console.log("Hello world");
}
console.log(myFunction);
console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3