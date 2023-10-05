
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("D");
    console.log("R"); 
}

// sayMyName()

// function addTowNumbers (number1, number2){
//     console.log(number1 + number2);
// }

function addTowNumbers (number1, number2){
    // let result = number1 + number2;
    // return result;
    return number1 + number2
}

const result = addTowNumbers(3, 5);

// console.log("Result: ", result);

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please Enter a username")
        return;
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage(""));
// console.log(loginUserMessage("Kushboo"));
// console.log(loginUserMessage());


function calculateCartPrice(val1, val2, ...num1){
    return num1;
}

console.log(calculateCartPrice(200, 500, 1045, 45666));

const user = {
    username: "Modiji",
    price: 199
}

function handelObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handelObject(user)

handelObject({
    username: "sam",
    price: 399
})

const myNewArray = [100, 200, 300, 1000]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([100, 200, 300, 1000]));

