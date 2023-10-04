
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
    return`${username} just logged in`
}

console.log(loginUserMessage(""));
// console.log(loginUserMessage("Kushboo"));
// console.log(loginUserMessage());