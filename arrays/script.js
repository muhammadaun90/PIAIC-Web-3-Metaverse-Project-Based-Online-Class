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

// Iterating arrays with loops
var languages = ["JavaScript", "Python", "C#", "C++"];
for(var i = 0; i < languages.length; i++){
    console.log(languages[i]);
}

// Another example
var arr = [];
for(var i=0; i<5; i++){
    arr[i] = i * 4;
    console.log(arr[i]);
}

// Searching in Array
var num = [24,32,55,11,55,66,87];
var input = prompt("Enter number to find in an array");
console.log("User input ",input);
var found = false;
for(var i=0; i<num.length; i++){
    // console.log(num[i]);
    if(num[i] === input){
        console.log("Found "+ input + " on index = " + i);
        found = true;
        break;
    }
}
if(!found){
    console.log("Not found");
}

// Splice() method is used to add element in middle of an array & replace if needed
var cars = ["Lamborghni", "Tesla", "Toyota", "BMW"];
cars.splice(1,2, "Mercedes");
console.log(cars);
// Slice() function 
var arr = cars.slice(1,3);
console.log(arr);