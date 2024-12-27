const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)                                     //NOT a good method to concat two arrays,   ->  push array in another array , but as a one element

// console.log(marvel_heros);                                      //updated array with 3+1 elements

// console.log(marvel_heros[3][1]);                                //accessing elements, index start from 0

//#2 METHOD 
const allHeros = marvel_heros.concat(dc_heros)                  //concat returns new array, so store it in variable
// console.log(allHeros);   

//#3 METHOD - Spread

const all_new_heros = [...marvel_heros,...dc_heros]             // new array , [ ] brackets, 3 dots   comma
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]       //Array insde array inside array .........

const real_another_array = another_array.flat(Infinity)              //  .flat(depth) method to make a single array , of all sub arrays of parent array
// console.log(real_another_array);                                        


//Array. -> methods


console.log(Array.isArray([1,2,3]))                                   //return true, if it is array else false
console.log(Array.from("Hitesh"))                                    //creates an array from an object.
console.log(Array.from({name: "hitesh"}))                           // interesting, cant make

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));                      //Array.of(s1,s2,s3) -> make array of 3 variables
// [ 100, 200, 300 ]