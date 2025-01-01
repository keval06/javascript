// Immediately Invoked Function Expressions (IIFE)

//execute fun() immediately after it is written

//global scope na pollution thi problem thay kok vaar, to global sccope na je variables chhe,
// je bhi dwclaration chhe, tena pollution thi hatava mate iife is used.

(function chai(){
    // named IIFE                                   //naam valu iife
    console.log(`DB CONNECTED`);
})()    ;                                          //always remember

// <------have to use semicolon , between two IIFE function >

(   (name) => {                                          //no named iife, only parameters pass, arrow fun

    console.log(`DB CONNECTED TO ${name}`);
    
})("Dwarkadhish")