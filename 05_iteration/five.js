//forEach method,  inbuilt method of array object       

const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (val){                             //f0rEach function, had to wright call back funnction, means fun without name
    // console.log(val);
} )

coding.forEach( (key)   =>  {                               //also same i arrow function 
    // console.log(key);
    
})

//pass function as a parameter in forEach loop

function printMe(value) {
    console.log(value);
       
}

// coding.forEach(printMe)                                     //took ma for each is for array and write function

coding.forEach((item , index, jamrukh)=>{
    // console.log(item, index, jamrukh  );
    
})

coding.forEach((kela , dadam, jamrukh)=>{
    // console.log(kela, dadam, jamrukh  );
    
})

//Array of object ,access value of object bu forEach method of Array


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },

    {
        languageName: "java",
        languageFileName: "java"
    },

    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach(function(item){                                        
    console.log([item]);                             //array ---> element = object ---> object.key  ---> output == values of all objects
    
})

// javascript
// java
// python