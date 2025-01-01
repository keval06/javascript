let a = 300

if (true) {
    let a = 10                                   
    const b = 20
    var c = 500

    // console.log("INNER: ", a); 
}

// console.log(a);
// console.log(b);
// console.log(c);

// const one = new function(){}
function one(){
    const username = "hitesh"
    
    function two(){                         
        const website = "youtube"
        console.log("Username is :",username);              //child can access variables , methpds of parents 
                                           // but converse is not true
    }
    // console.log(website);

     two()
}

// one()


if (true) {
    const username = "hitesh"
    
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);                   //ofcourse undefined
}

// console.log(username);                        //undefined bcz, declared in if(scope)

// ++++++++++++++++++ interesting ++++++++++++++++++  //


console.log(addone(5))               //call to addone()           

function addone(num){               //if function is declared using function method, keyword, calling of fun, before declaration of fun is allowed
    return num + 1
}

addTwo(5)                               //call to addtwo()
const addTwo = function(num){          //fun is declared but also stored in a variable, so calling before its declaration is not allowed
    return num + 2
}