// The spread operator allows you to pass all array elements into a function without having to type them all individually. Is this true or false?


// True


// False

// Correct
// Correct! The spread operator will include all of the array elements with much less code.

let arr = [1, 2, 3, 4, 5];

function spread(...arr) {
  console.log(arr);
}

spread(arr);

spread(1, 2, 3, 4);


function testSpread(a, b, c, d, e) {
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
  console.log(e);
}

testSpread(...arr);