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