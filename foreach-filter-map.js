const fruits = ['kiwi', 'mango', 'apple', 'pear'];
function appendIndex(fruit, index) {
  console.log(`${index}. ${fruit}`)
}
fruits.forEach(appendIndex);

const veggies = ['onion', 'garlic', 'potato'];
veggies.forEach(function (veggie, index) {
  console.log(`${index}. ${veggie}`);
});

const nums = [0, 10, 20, 30, 40, 50];
let result3 = nums.filter(function (num) {
  return num > 20;
})

console.log(result3);

let resultOfMap = [0, 10, 20, 30, 40, 50].map(function (num) {
  return num / 10
})

console.log(resultOfMap);

const result2 = [];
const drone = {
  speed: 100,
  color: 'yellow'
}
const droneKeys = Object.keys(drone);
droneKeys.forEach(function (key) {
  result2.push(key, drone[key])
})
console.log(result2)

