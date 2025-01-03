//higher order array loop
// for of loop
// for (const element of object) {}

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {                       //variable declaration num will woek same as i, after of name of variable which you want to iterate
    // console.log(num);                    // num will iterate in every element
}

const greetings = "Hello world!"            //for-of will work same as in string, print every char in new line
for (const greet of greetings) {
    // console.log(greet);
    
    // console.log(`Each char is ${greet}`)
}

const map = new Map()                                   //same as object, 
map.set('IN', "India")                                 //key-value pair insert , map_name.set("","" method)
map.set('USA', "United States of America")      
map.set('Fr', "France")
map.set('IN', "India")


console.log(map);

// Map(3) {
//   'IN' => 'India',
//   'USA' => 'United States of America',
//   'Fr' => 'France'
// }

// console.log(typeof map);

for (const [key,value] of map) {
    console.log(key,":-",value);
    
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const key of myObject) {           
    console.log(myObject);                          //TypeError: myObject is not iterable
    
}

//object is not iterable so we can't use for-of loop