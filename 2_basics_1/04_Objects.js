// const tinderUser = new Object() // This is an singleton Object🤞
const tinderUser = {}  //This is non-singleton Object👀

tinderUser.id = "1524abc"
tinderUser.name = "sammy"
tinderUser.isLoggdeIn = false

// console.log(tinderUser);

// How we can add Object in Object
const instaUser = {
    email: "sammy@gmail.com",
    fullName:{
        userfullName:{
            firstname: "sammy",
            lastName: "verma"
        }
    }
}

// console.log(instaUser.fullName.userfullName.firstname);

const obj1 = {1: "A", 2: "B"}
const obj2 = {3: "C", 4: "D"}
const obj4 = {5:"E"}
// const obj3 = {obj1, obj2}

// const obj3 = Object.assign({}, obj1, obj2) // this is use for combine tow or more Objects

const obj3 = {...obj1, ...obj2,...obj4} // this is also use for combine
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    }
]

// console.log(users[1].email);



// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); //This is use for get the "keys" of "Object" which type is array
// console.log(Object.values(tinderUser)); // This is use for get "values" of "Object"
// console.log(Object.entries(tinderUser)); // This is use for get "values" of "Object"

// console.log(tinderUser.hasOwnProperty('isLoggdeIn'));
// console.log(tinderUser.hasOwnProperty('names'));


const course = {
    coursename: "JavaScript",
    price: "999₹",
    courseInstructor: "Hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// JSON


// {
//     "name": "deepikapadukon",
//     "coursename":"acting"
//     "price": "Free"
// }

// json using array
// [
//     {},
//     {},
//     {}
// ]
