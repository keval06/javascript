//for-in loop ----> for object


const myObject = {
    js : "javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {                                           //only one variable 
            // console.log(`${key} shortcut is for ${myObject[key]}`);
            // console.log(key,value);          //will not work
            
            
    }
//map is not iterable so we can't use for-in loop

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {                            //for in  loop will give index, but in for of loop , direct value prrin
    // console.log(key);
}

for (const key in programming) {                            
    // console.log(programming[key]);                          //now print values of array elemens
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

console.log(map);


for (const key in map) {                            //for in loop willl run but dont get any output.
    console.log(key);
}
