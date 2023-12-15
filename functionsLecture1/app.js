// Declaring functions
function sayHello() {
    let name = prompt("Enter your name!");
    console.log("Hello", name + "!");
}
sayHello();

// List an arrays thru functions using for loops
var colors = ["Red", "Orange", "Blue", "Green", "White", "Yellow", "Pink"]
function arrayItems(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);        
    }
}
arrayItems(colors);