// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']

// Create a function called logDairy. Within it, console log each of the items in the dairy array, using the for...of loop.
function logDairy() {
  for (item of dairy) {
    console.log(item);
  }
}
logDairy();

// Task 2
const animal = {

  canJump: true

};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

function birdCan() {
  for (key of Object.keys(bird)) {
    console.log(`${key}: ${bird[key]}`);
  }
}

birdCan();

// Task 3

function animalCan() {
  for (prop in bird) {
    console.log(`${prop}: ${bird[prop]}`);
  }
}

animalCan();