// the rest operator


function getData({ age, name, ...rest }) {
  console.log(age);
  console.log(name);
  console.log(rest);
}

getData({ age: 22, name: 'John', height: 180, weight: 80 });

let top7 = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

const [] = top7;

const [first, second, third, ...secondVisit] = top7;

console.log(first);
console.log(second);
console.log(third);
console.log(secondVisit);

/*

Question

The rest operator allows you to take items from an array and use them to create a separate sub-array. True or false?

True

Correct

Correct! The rest operator can be used to destructure existing array items, rather than typing them out again.


*/