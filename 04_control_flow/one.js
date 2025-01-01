// if

const isUserloggedIn = true
const temperature = 41

if ( temperature === 40 ){                          //===
    console.log("Equal to 40");
} 
else if(temperature > 40) {
    // console.log("temperature is greater than 40");
}

else{
    console.log("temperature is less than 40")
}

// console.log("Execute");


// <, >, <=, >=, ==, !=, ===, !==           bija badha comparator

const score = 200

if (score > 100) {
    let power = "fly"
    // console.log(`User power: ${power}`);
}

// console.log(`User power: ${power}`);            //power is only defined in the if scope

const balance = 1000

// if (balance > 500) console.log("test1"),console.log("test2");   //not a good practice to write code

if (balance < 500) {
        console.log("less than 500");
    } else if (balance < 750) {
        console.log("less than 750");
        
    } else if (balance < 900) {
        console.log("less than 900");
        
    } else {
        // console.log("less than 1200");
    
    }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {                    //AND operator
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {          //OR operator
    console.log("User logged in");
}