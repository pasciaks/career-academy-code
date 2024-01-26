// class Cake {
//   constructor(lyr) {
//     this.layers = lyr + 1;
//   }
// }

// var result = new Cake(1);
// console.log(result.layers);

// class Animal {
//   constructor(lg) {
//     this.legs = lg;
//   }
// }

// class Dog extends Animal {
//   constructor() {
//     super(4);
//   }
// }

// var result = new Dog();
// console.log(result.legs);


// class Animal {

// }

// class Cat extends Animal {
//   constructor() {
//     super();
//     this.noise = "meow";
//   }
// }

// var result = new Animal();
// console.log(result.noise);


// class Person {
//   sayHello() {
//     console.log("Hello");
//   }
// }

// class Friend extends Person {
//   sayHello() {
//     console.log("Hey");
//   }
// }

// var result = new Friend();
// result.sayHello();

//-------------------------------------
// const car4 = {
//   speed: 400,
//   color: 'magenta'
// }
// console.log(Object.entries(car4));

// Object.entries(car4).forEach(([key, value]) => {
//   console.log(key, value);
// });
//-------------------------------------

// var clothingItem = {
//   price: 50,
//   color: 'beige',
//   material: 'cotton',
//   season: 'autumn'
// }

// for (const key of Object.keys(clothingItem)) {
//   console.log(key, ":", clothingItem[key])
// }

function testBracketsDynamicAccess() {
  var dynamicKey;
  if (Math.random() > 0.5) {
    dynamicKey = "speed";
  } else {
    dynamicKey = "color";
  }

  var drone = {
    speed: 15,
    color: "orange"
  }

  console.log(drone[dynamicKey]);
}
testBracketsDynamicAccess();