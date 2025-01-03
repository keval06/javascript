 const coding = ["js", "ruby", "java", "python", "cpp"]


const values = coding.forEach( (item) => {
    // console.log(item);                                       //for each doesn't return so can't store it
    return item
} )

//  console.log(values);                                                    //undefined

//array.filter()

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter( (num) => {                           //call back fun
    return num > 4
} )
console.log(newNums);


// const newNums1 = myNums.filter( (value) =>  {
    
//     return value>4

// })

// console.log(newNums1);
 
const newNums1 = []                                         //empty array
myNums.filter((num)=>{          
//.                                                                //filter will return , so aplied push method and stored in array
    if(num>9){
        newNums1.push(num)
    }
})

console.log(newNums1);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// let userBook = books.filter(   (book)  =>  book.genre==="History")                      //Same as sql query , apply condtitions 
// console.log(userBook);

userBook = books.filter(    (book)  =>  {
    return book.publish >= 2000 && book.genre === "Science"
}  )

console.log(userBook);
