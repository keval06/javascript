// array


// const myArray = [6,12,18,24,"krishna is first love"]
// console.log(myArray);

const myArr = [0, 1, 2, 3, 4, 5]

const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)                //creating array using constructor, Array as an object

// console.log(myArr[1]);                              //accessign array elements using [] square brackets

// Array methods

//const myArr = [0, 1, 2, 3, 4, 5]
// myArr.push(6)                                       //insert 6, but at last index           
// myArr.push(7)
// console.log(myArr);                                 //remove last element from array

// myArr.pop()
// console.log(myArr);

// myArr.unshift(9)                                        //insert 9 at 0index, aagal thi
// console.log(myArr);

// myArr.shift()                                           //remove element at  0 index
// console.log(myArr);


// console.log(myArr.includes(9));                             //boolean, return true or false if element exist in it,
// console.log(myArr.indexOf(3));                              //return index of element , take element as input

// const newArr = myArr.join()                                 //converts all elements of arrray into string, seperatedd by comma(,)

// console.log(myArr);                                         //  [ 0, 1, 2, 3, 4, 5 ]
// console.log( newArr);                                       //  0,1,2,3,4,5


// slice, splice operation

console.log("A ", myArr);                                       //original array print

const myn1 = myArr.slice(1, 3)                                  //return array from index 1 to 2 of original array,3 exclude, original array remain same after operation

console.log(myn1);

console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)                                 //return array from index 1 to 3 of original array, 3 include, original array wiil be change, 
//                                                               // element at index 1 to 3 wiil be removed and stored in new array, vadhela elemnets no array
console.log("C ", myArr);
console.log(myn2);