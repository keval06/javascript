const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

// const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

const myTotal = myNums.reduce(function(acc,currval){
    console.log(`acc : ${acc} and cuurent value : ${currval}`);
    return acc + currval
    
},0)
console.log(myTotal)

const myAllTotal = myNums.reduce((acc,val)  =>  acc+val, 0)

//array of object

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce( (acc,val)    =>  acc + val.price,0)            //accessing object by value so value.price
console.log(priceToPay);
