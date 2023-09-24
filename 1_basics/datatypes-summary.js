/*Javascript is a dynamic typing language. When you declare a variable, you do not need to specify what type this variable is. Javascript engine infers what type this variable is based on the value assigned to at run time. */

// Primitive

// 7 types: String, Number, Boolean, null, undefind, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outSideTemp = null
let userEmail;

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id == anotherid);

const bigNumber = 542157845124593636n
// Reference (Non Premitive)

// Array, Objects, Functions

const heros = ["shaktiman", "nagraj", "dogo"]

let myObj = {
    name: "Tarush",
    age: 19,
}

const myFunction = function(){
    console.log("namaste duniya");
}

console.log(typeof (outSideTemp));


/** Premitive Datatypes

                  Type                                   typeof

i)             Number                               number
ii)            String                                   string
iii)           Boolean                               boolean
iv)           Bigint                                   bigint
v)            Symbol                                symbol
vi)           Null                                      object
vii)          Undefined                           undefined


* Non-Premitive OR Referance OR Object datatype

                  Type                                   typeof

i)               Object                                object
ii)              Array                                  object
iii)             Function                            function(object)
 */


//*************************************************************************


// Stack (Primitive), Heap(Non Primitive)

let meYoutubeName = "rajdotcom"

