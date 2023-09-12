const name = "Radhika"
const repoCount = 50

// console.log(name + repoCount + " value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount} `);

const gameName = new String('Radhika.it.com')

// console.log(gameName[0]);
// console.log(gameName[1]);
// console.log(gameName[2]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));


const newString = gameName.substring(0, 4)
console.log(newString);

const anotherNewString = gameName.slice(-10, 8)
console.log(anotherNewString);

const newStringOne = "    kunaal    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://kushi.com/kushi%20kushi"

console.log(url.replace('%20', '-'))

console.log(url.includes('hitiesh'));
console.log(url.includes('kushi'));

console.log(gameName.split('.'));

