const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map( (num) => num + 10)                        //map will directly show the value so directly print, donts need to store
//remeber methods of arrow funtion, if {} -> diff. scope declared -> must type return


// const myNewNums = myNumbers
//                 .map((num) => num * 10 )                         //chaining of map fun( )
//                 .map( (num) => num + 1)
                // [
                //     11, 21, 31, 41,  51,
                //     61, 71, 81, 91, 101
                //   ]


const myNewNums = myNumbers                                     //.map().map().map().filter().....
                    .map((num)=>num*10)
                    .map((num)=>num + 1)
                    .filter((num)=> num>40)

                    // [
                    //     41, 51,  61, 71,
                    //     81, 91, 101
                    //   ]
console.log(myNewNums);