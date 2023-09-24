// singleton --> jb hamesha construtor se banta h
// Object.create


// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "koko",
    "Full Name": "KokoMskoko",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "koko@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.name)
// console.log(JsUser["email"])
// console.log(JsUser["Full Name"])
// console.log(JsUser[mySym])
// console.log(typeof JsUser.mySym)

JsUser.email = "koko@chatgpt.com"

// Object.freeze(JsUser) // This is use to freeze object. Using this we can't change object values

JsUser.email = "koko@micosoft.com"

// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JsUser");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JsUser, ${this.name}`);
}

console.log(JsUser.greetingTwo());
console.log(JsUser.greeting());


