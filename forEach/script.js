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