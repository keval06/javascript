const name1 = "keval"
const repoCount1 = 100

console.log(name1+repoCount1+" Value");     //old way

console.log(`Hello i am ${name1} and my repo value is ${repoCount1} value`) //new way

//const gameName = new String("keval-kp-com")
// console.log(gameName.toString());
// console.log(gameName.at(3));

//chai aur code

const gameName = new String('keval-kp-com')        //string declaration , but as an object

// console.log(gameName[0]);
// console.log(gameName.__proto__);                    //prototype

// console.log(gameName.length);                       //length of string
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));                    //return char , take index as input
// console.log(gameName.indexOf('t'));                 //return index, take char as input

const newString = gameName.substring(0, 4)              //sub-string method, if (a,b) -> exclude b, -ve values not allowed
// console.log(newString);

// const anotherString = gameName.slice(-4, 0)             //same as sub string, -ve values allowed
// console.log(anotherString);

// const newStringOne = "   hitesh    "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))            //replace purpose

console.log(url.includes('sundar'))             //if exist ? true: false

console.log(gameName.split('-'));               //convert string obj to array, separateed by given values

//and many more string funxtions, methods can be read on mdn , conssole of browser, by creating string obj with "new" keyword