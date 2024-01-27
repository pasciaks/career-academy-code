const fruits = ['apple', 'pear', 'plum']
const berries = ['blueberry', 'strawberry']
const fruitsAndBerries = [...fruits, ...berries] // concatenate
console.log(fruitsAndBerries); // outputs a single array

const flying = { wings: 2 }
const car = { wheels: 4 }
const flyingCar = { ...flying, ...car }
console.log(flyingCar) // {wings: 2, wheels: 4}

let veggies = ['onion', 'parsley'];
veggies = [...veggies, 'carrot', 'beetroot'];
console.log(veggies);


const greeting = "Hello";
const arrayOfChars = [...greeting];
console.log(arrayOfChars); //  ['H', 'e', 'l', 'l', 'o']

const car1 = {
  speed: 200,
  color: 'yellow'
}
const car2 = { ...car1 }

car1.speed = 201

console.log(car1.speed, car2.speed)

const fruits1 = ['apples', 'pears']
const fruits2 = [...fruits1]
fruits1.pop()
console.log(fruits1, "not", fruits2)

// Note that the spread operator only performs a shallow copy of the source array or object. For more information on this, please refer to the additional reading.

// There are many more tricks that you can perform with the spread operator. Some of them are really handy when you start working with a library such as React.

const meal = ["soup", "steak", "ice cream"]
let [starter] = meal;
console.log(starter);



// object is not iterable so for OF loop will not work
// let obj = {
//   test: 1,
//   other: 2
// }

// for (prop of obj) {
//   console.log(prop);
// }

let food = "Chocolate";
console.log(`My favourite food is ${food}`);

let set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.add(2);
set.add(1);
console.log(set);



let obj = {
  key: 1,
  value: 4
};

let output = { ...obj };
output.value -= obj.key;

console.log(output.value);




function count(...basket) {
  console.log(basket.length)
}

count(10, 9, 8, 7, 6);

