// The map method
// This method is used to map each array item over to another array's item, based on whatever work is performed inside the function that is passed-in to the map as a parameter.
[0, 10, 20, 30, 40, 50].map(function (num) {
    console.log(num/10);;
})

// The filer() method
const nums = [23, 55, 60, 68, 75, 88, 100];
nums.filter(function (num) {
    return num > 60;
}) // Output: [30,40,50]

var numbers = [0, 10, 20, 30, 40, 50];
numbers.filter(function (value, index, array) {
    return value % 2 === 0;
});
console.log(numbers);

/* Working with Maps in JavaScript
To make a new Map, you can use the Map constructor:
new Map(); 
However, it doesn't have inheritance. No prototypes! This makes it useful as a data storage.
*/
let bestPlayer = new Map();
bestPlayer.set(1, "Zain");
bestPlayer.set(2, "Aun");
bestPlayer.set(3, "Rabab");
console.log(bestPlayer);
// To get a specific value, you need to use the get() method
console.log("Best player is ", bestPlayer.get(1));

/* Working with Sets in JavaScript:
A set is a collection of unique values.
To build a new set, you can use the Set constructor:
new set();
The Set constructor can, for example, accept an array.
This means that we can use it to quickly filter an array for unique members.
*/
let cartoons = ['Tom & Jerry', 'Coco Melon', 'Johnny Bravo', 'Scooby Doo', 'Coco Melon', 'Johnny Bravo'];
let uniqueCartoons = new Set(cartoons);
console.log(uniqueCartoons);