let a = 500;
if (true){
    let a = 10;
    const b = 20
    // console.log("INNER: ", a);    
}


// console.log(a);
// console.log(b);
// console.log(c);

//nested scope
function one(){
    const username = "Tushar"

    function two(){
        const website = "YouTube"
        console.log(website);
    }
    console.log(username);

    // two()
}   

// one()


if (true) {
    const username = "Raj"
    if (username === "Raj") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


/* *************** intersting ***************** */

console.log(addOne(2))
function addOne(num){
    return num + 1;
}



const addTwo = function(num){
    return num + 1;
} 
addTwo(5)

