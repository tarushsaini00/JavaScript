// array

const myArr = [0, 1, 2, 3, 4, 5] //also we can take [ture or "name"] in array
const myHeros = ["Shree Ram","Hanumanji", "Chhatrapati Shivaji", "Maharana Pratap"]

const myArr2 = new Array(1,2,3,4)


console.log(myArr2);
// console.log(myHeros[0]);
// console.log(myHeros[1]);
// console.log(myHeros[3]);
// console.log(myArray[0]);
// console.log(myArray[1]);

// Array methods
// myArray.push(7) // use for add value in array
// myArray.push(8)
// myArray.pop() // use for remove value form array


// myArray.unshift(5,9,8) // use for add value in array on top index 


// console.log(myArr.includes(9)); // use for ask value available in array
// console.log(myArr.indexOf(9)); // use for ask index of array available in array

const newArr = myArr.join() // this join() is convert array into string


// console.log(myArr);
// console.log(newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)
console.log("c ", myArr);
console.log(myn2);
