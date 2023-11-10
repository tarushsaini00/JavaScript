
// this --> keyword jo current context ko reffer krta h

const user = {
    username: "Tarush",
    price: 1000,

    wellcomeMessage: function(){
        console.log(`${this.username} wellcome to website`);
        console.log(this); //It will show the context velue.
    }
}

// user.wellcomeMessage()
// user.username = "sam"
// user.wellcomeMessage()

// console.log(this); //It will show empty 

//These all in following is type of FUNCTIONS which is use in jacaScript!!!!

//In function we can't use this(). It will use in Object only!!!
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

// console.log(addTwo(5,8));


//This is how we can also write arrow function which is called  implicit return 
const addTwo = (num1, num2) =>  num1 + num2
console.log(addTwo(5,8));

