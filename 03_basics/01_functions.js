function sayMyName(){
    console.log("K");
    console.log("E");
    console.log("V");
    console.log("A");
    console.log("L");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//         console.log(number1 + number2);
//     }
// addTwoNumbers(3,8)

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2                            //fun() will return value but have to store it.
}

// const result = addTwoNumbers(3, 5)                   //one extra variable, store  returned value from fun(), and print it
// console.log(`Result is ${result}`);

//<-------OR------------>

// console.log("Result: ", addTwoNumbers(3, 5));           //and in direct print statement , call the funciton by value, passing arguments

function loginUserMessage(username){
    if(!username){                                         //if emppty string is passed, if block executed, otherwise print message
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Radha Rani"))                 //function will return , so print it

function loginUserMessage1(username = "kp"){
    if(!username){                                         //if emppty string is passed, if block executed, otherwise print message
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage1("kp"))                 //function will return , so print it



function calculateCartPrice(...num1){               //user is adding items into cart and you don't know the total items and price...how?
    return num1                                     //spread operaor is used to return all items as an array
}

function calculateCartPrice1(val1, val2, ...num1){      //val1, val2 stored in val1, val2, [ 500, 2000 ] will be returned
    return num1
}

// console.log(calculateCartPrice1(200, 400, 500, 2000))            //array will be printed of the items
// console.log(calculateCartPrice(200, 400, 500, 2000).reduce( (acc,curval)   => (acc + curval),0 )  )
//calculated total price by the reduce() method of array


const user = {                                                  //any random object
    username: "hitesh",
    prices: 199,
    number : 1291893810
}

function handleObject(anyobject){                               //object passing as a parameter

    console.log(`Username is ${anyobject.username} and price is ${anyobject.price} and also his number is ${anyobject.number}`);

}

// handleObject(user)                                           //call function, and pass object   
// handleObject({                                                  //fun() call that tyare bhi tatkalik dhorane object banavi sakay
//     username: "sam",
//     price: 399,
//     number:8949
//})

// const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){                           //pass array as a function parameter, same as object , urgent bhi banavi sakay
            return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
