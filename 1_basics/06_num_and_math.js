const score = 100
// console.log(score);

const balance = new Number(200)
// console.log(balance);


// console.log(balance.toString())
// console.log(balance.toFixed(1))
// console.log(typeof balance);

const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(3));

const hundreds = 1000000000
// console.log(hundreds.toLocaleString('en-IN')); 

// ******************* Maths ******************
console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.sqrt(144));
// console.log(Math.min(1,4,5,9));
// console.log(Math.max(1,4,5,9));

//value will come between 0 or 1
console.log(Math.random()); 

//value will come between 0 to 10
console.log(Math.random()*10); 

//value will come between 1 to 10
console.log((Math.random()*10) + 1);

// floor use for get value in round figure
console.log(Math.floor(Math.random()*10) + 1); 

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1))+min)



