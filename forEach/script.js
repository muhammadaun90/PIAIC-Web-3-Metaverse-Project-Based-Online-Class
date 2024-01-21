// The forEach() method
// The forEach() method is used to perform an action on each element of an array.
const fruits = ['apple', 'banana', 'orange', 'grapes'];
function fruitIndex(fruit, index) {
    console.log(`${index}. ${fruit}`);
}
fruits.forEach(fruitIndex);

//Very often, the function that the forEach() method needs to use is passed in directly into the method call, like this:
const vegetable = ["potato", "onion", "garlic", "cucumber"];
vegetable.forEach (function (veggie, index) {
    console.log(`${index}. ${veggie}`);
});

const result = [];
const drone = {
    model: 'Titan Drone',
    maxSpeed: 100,
    color: 'yellow'
};
result.push(drone);
console.log(result);
// Using arrow function in the callback function of forEach()
const drones = [];
drones.push({model:'Sky Mini',color:"blue"});
drones.push({model:'Firefly Y450',maxSpeed:25});
drones.forEach(drone => result.push(drone));
console.log(result);