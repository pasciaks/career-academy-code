/*
In this exercise, you will work with some data provided as an array of objects, listing information about dishes available in the Little Lemon restaurant.

You will need to write a function declaration which will be able to do two things:

If the function is called with the argument true, it will output the names of the dishes and calculate their final price (including 20% tax)

If the function is called with the argument false, it will output the names of the dishes and give their prices without the additional tax

The expected outcome is that all the dishes' names and prices will be shown in the console output.

The text below shows the output that your code should produce:

Prices with 20% tax:
Dish: Italian pasta Price (incl.tax): $ 11.46
Dish: Rice with veggies Price (incl.tax): $ 10.38
Dish: Chicken with potatoes Price (incl.tax): $ 18.66
Dish: Vegetarian Pizza Price (incl.tax): $ 7.74

Prices without tax:
Dish: Italian pasta Price (incl.tax): $ 9.55
Dish: Rice with veggies Price (incl.tax): $ 8.65
Dish: Chicken with potatoes Price (incl.tax): $ 15.55
Dish: Vegetarian Pizza Price (incl.tax): $ 6.45
*/
// Given variables
const dishData = [
  {
    name: "Italian pasta",
    price: 9.55
  },
  {
    name: "Rice with veggies",
    price: 8.65
  },
  {
    name: "Chicken with potatoes",
    price: 15.55
  },
  {
    name: "Vegetarian Pizza",
    price: 6.45
  },
]
const tax = 1.20;

// Implement getPrices()
function getPrices(taxBoolean) {
  for (let i = 0; i < dishData.length; i++) {
    let finalPrice;
    if (taxBoolean == true) {
      finalPrice = dishData[i].price * tax;
    } else if (taxBoolean == false) {
      finalPrice = dishData[i].price;
    } else {
      console.log("You need to pass a boolean to the getPrices call!");
      return;
    }
    console.log("Dish: ", dishData[i].name, "Price: $", finalPrice);
  }

}

// Implement getDiscount()
function getDiscount(taxBoolean, guests) {
  getPrices(taxBoolean);
  if (typeof guests === 'number' && guests > 0 && guests < 30) {
    let discount = 0;
    if (guests < 5) {
      discount = 5;
    } else if (guests >= 5) {
      discount = 10;
    } else {

    }
    console.log('Discount is $' + discount);
  } else {
    console.log('The second argument must be a number between 0 and 30');
  }

}

// Call getDiscount()
getDiscount(true, 2);
getDiscount(false, 10);
getDiscount();
getDiscount("test", "test");


/*

Grades
Try Again  •  Grade Received: 13%   •  To Pass: 80% or higher
SubmissionsRequired
So1rPaCBEeyFDhLpwtOZqw~aTJhb~jBPrLL1rEe6wIwoYd7Xb5w
​
FAILED Test Case: getPrices method applies tax when taxBoolean parameter is true
Your Code Produced:
Dish:  Italian pasta Price: $ 11.46\nDish:  Rice with veggies Price: $ 10.38\nDish:  Chicken with potatoes Price: $ 18.66\nDish:  Vegetarian Pizza Price: $ 7.74\nExpected Output Is:
Dish: Italian pasta Price: $11.46
Dish: Rice with veggies Price: $10.38
Dish: Chicken with potatoes Price: $18.66
Dish: Vegetarian Pizza Price: $7.74

FAILED Test Case: getPrices method does not apply tax when taxBoolean parameter is false
Your Code Produced:
Dish:  Italian pasta Price: $ 9.55\nDish:  Rice with veggies Price: $ 8.65\nDish:  Chicken with potatoes Price: $ 15.55\nDish:  Vegetarian Pizza Price: $ 6.45\nExpected Output Is:
Dish: Italian pasta Price: $9.55
Dish: Rice with veggies Price: $8.65
Dish: Chicken with potatoes Price: $15.55
Dish: Vegetarian Pizza Price: $6.45

Passed: getPrices method logs expected error message when taxBoolean is not supplied
FAILED Test Case: getDiscount method when tax is applied and guests less than 5
Your Code Produced:
Dish:  Italian pasta Price: $ 11.46\nDish:  Rice with veggies Price: $ 10.38\nDish:  Chicken with potatoes Price: $ 18.66\nDish:  Vegetarian Pizza Price: $ 7.74\nDiscount is $5\nExpected Output Is:
Dish: Italian pasta Price: $11.46
Dish: Rice with veggies Price: $10.38
Dish: Chicken with potatoes Price: $18.66
Dish: Vegetarian Pizza Price: $7.74
Discount is: $5

FAILED Test Case: getDiscount method when tax is applied and guests more than 5
Your Code Produced:
Dish:  Italian pasta Price: $ 11.46\nDish:  Rice with veggies Price: $ 10.38\nDish:  Chicken with potatoes Price: $ 18.66\nDish:  Vegetarian Pizza Price: $ 7.74\nDiscount is $10\nExpected Output Is:
Dish: Italian pasta Price: $11.46
Dish: Rice with veggies Price: $10.38
Dish: Chicken with potatoes Price: $18.66
Dish: Vegetarian Pizza Price: $7.74
Discount is: $10

FAILED Test Case: getDiscount method when tax is not applied and guests less than 5
Your Code Produced:
Dish:  Italian pasta Price: $ 9.55\nDish:  Rice with veggies Price: $ 8.65\nDish:  Chicken with potatoes Price: $ 15.55\nDish:  Vegetarian Pizza Price: $ 6.45\nDiscount is $5\nExpected Output Is:
Dish: Italian pasta Price: $9.55
Dish: Rice with veggies Price: $8.65
Dish: Chicken with potatoes Price: $15.55
Dish: Vegetarian Pizza Price: $6.45
Discount is: $5

FAILED Test Case: getDiscount method when tax is not applied and guests more than 5
Your Code Produced:
Dish:  Italian pasta Price: $ 9.55\nDish:  Rice with veggies Price: $ 8.65\nDish:  Chicken with potatoes Price: $ 15.55\nDish:  Vegetarian Pizza Price: $ 6.45\nDiscount is $10\nExpected Output Is:
Dish: Italian pasta Price: $9.55
Dish: Rice with veggies Price: $8.65
Dish: Chicken with potatoes Price: $15.55
Dish: Vegetarian Pizza Price: $6.45
Discount is: $10

FAILED Test Case: getDiscount method logs expected error message when guests count not in range
Your Code Produced:
Dish:  Italian pasta Price: $ 11.46\nDish:  Rice with veggies Price: $ 10.38\nDish:  Chicken with potatoes Price: $ 18.66\nDish:  Vegetarian Pizza Price: $ 7.74\nThe second argument must be a number between 0 and 30\nExpected Output Is:
Dish: Italian pasta Price: $11.46
Dish: Rice with veggies Price: $10.38
Dish: Chicken with potatoes Price: $18.66
Dish: Vegetarian Pizza Price: $7.74
The second argument must be a number between 0 and 30


*/
