
// this --> keyword jo current context ko reffer krta h

const user = {
    username: "Tarush",
    price: 1000,

    wellcomeMessage: function(){
        console.log(`${this.username} wellcome to website`);
        console.log(this);
    }
}

// user.wellcomeMessage()
// user.username = "sam"
// user.wellcomeMessage()



// function coffe(){
//    let username = "Tara singh"
//     console.log(this.username);
// }
// coffe()


// const chai = function(){
//         let username = "Tara singh"
//         console.log(this.username);
// }

const chai = () => {
        let username = "Tara singh"
        console.log(this.username);
}

// chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


console.log(addTwo(5,8));


const addTwo = (num1, num2) =>  num1 + num2

