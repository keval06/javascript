const user = {                                      //a random object
    username: "hitesh",
    price: 999,

    welcomeMessage : function() {                    //a function also can be a element of an object-value
        console.log(`${this.username} , welcome to website and your price is ${this.price}`);       
                                                    //this referres to the current context
        // console.log(this);                         // aakho object j print 
    }

}

// user.welcomeMessage()
user.username = "sam"                               //value changed
// user.welcomeMessage()

// console.log(this);

// function chai(username){
//     username = "krishna"
//     console.log(this.username);
    
// }
// chai()

// const chai = function () {
//         let username = "hitesh"
//         console.log(this.username);
//     }
    
//     chai()

const chai = () => {                                            //arrow function
    let username = "krishan"
    console.log(this.username);
    
}
// chai()

// const addTwo = (num1, num2) => {         //if curly braces , have to write return , else undefined
//     return num1 + num2
// }
// console.log(addTwo(4,6));

const addTwo = (num1, num2) =>  num1 + num2         //valid, implicitly return arrow fun

const addTwo1 = (num1, num2) => ( num1 + num2 )      //valid


const addTwo2 = (num1, num2) => ({username: "hitesh"})
// console.log(addTwo2(3,5))                           //print all object
// console.log(addTwo2(3,5).username);                // acccess object elements


const myArray = [2, 5, 3, 7, 8]

for (let index = 0; index < myArray.length; index++) {
            console.log(index);
                
}

