var foods = ["Biryani", "Haleem", "Chicken Karahi", "25", {userName: "Aun"}];
console.log(foods);

// Array Data Structure
// 1. Random Access
foods[1] = "Pizza"; // Overright array item 1 Haleem with Pizza
console.log(foods[1]);
// 2. Stack (Last in first out)
// Push allows to enter new array items after last items 
foods.push("32", "Computer Science");
console.log(foods);
console.log(foods.length);
// Pop function removes & return last elements from array
foods.pop();

// Practice: 1. Create an array to use as your shopping list with 3 items: "Milk," "Bread," and "Apples."
// 2. Check your list length in the console.
// 3. Update "Bread" to "Bananas."
// 4. Output your entire list to the console.

var groceries = ["Milk", "Bread", "Apples"];
console.log(groceries.length);
groceries[1] = "Bananas";
console.log(groceries);

// 3. Queue (First in first out)
var fruits = [];
fruits.push("Bananas");
fruits.push("Mango");
fruits.push("Orange");
fruits.push("Watermelon");
console.log(fruits, fruits.length);
fruits.shift();
console.log(fruits, fruits.length);
// unshift will add before the first element in array
fruits.unshift("Grapes");
console.log(fruits, fruits.length);