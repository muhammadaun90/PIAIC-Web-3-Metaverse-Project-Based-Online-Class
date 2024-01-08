/*Task 1:
Write a function named letterFinder that accepts two parameters: word and match.
Task 2:
Code a 'for' loop inside the function's body. 
The for loop's counter should start at zero, increment by 1 on each iteration and 
exit when the counter variable's value is equal to the length of the word parameter.
Task 3:
Add an if statement inside the for loop whose condition works as follows:
Access each of the letters inside the passed in word using the counter variable, with word[i]. 
Check if the current word[i] is equal to the value of match.
Task 4:
console.log the following inside the body of the if statement: console.log('Found the', match, 'at', i).
Task 5:
Write the else condition. Here you'll just console log the following: console.log('---No match found at', i).
Task 6:
Call the letterFinder and pass it as its first argument as the string "test" and as its second argument, the string "t".
Your output should be the following:
Found the t at 0
---No match found at 1
---No match found at 2
Found the t at 3 */

function letterFinder(word, match) {
    for (let i = 0; i < word.length; i++) {
        if (word[i] == match) {
            console.log('Found the', match, 'at', i);
        } else{
            console.log('---No match found at', i);
        }
    }
}
letterFinder("test", "t");


// Another example from Coursera
function addTwoNums(a, b) {
    try {
        if (typeof (a) != 'number') {
            throw new ReferenceError('the first argument is not a number');
        } else if (typeof (b) != 'number') {
            throw new ReferenceError('the second argument is not a number');
        } else {
            console.log(a+b);
        }
    } catch (err) {
        // console.log(err);
        console.log("Error!", err);
    }
}
addTwoNums(5,"2");
console.log("It still works");

// Working again with the above 1st program here
function letterFinder(word, match) {
    let condition1 = typeof(word) === "string" && word.length >= 2;
    let condition2 = typeof(match) === "string" && match.length == 1;
    if (condition1 && condition2) {
        for (let i = 0; i < word.length; i++) {
            if (word[i] == match) {
                console.log('Found the', match, 'at', i);
            } else{
                console.log('---No match found at', i);
            }
        }
    } else {
        console.log("Please pass correct arguments to the function.");
    }
}
letterFinder(5, 4);
letterFinder("cat", "c");

var result = null;
console.log(result);

var x;
if(x === null) {
  console.log("null");
} else if(x === undefined) {
  console.log("undefined");
} else {
  console.log("ok");
}

/* When you pass an object as a parameter in a function.
If the function changes the object's properties, that change is visible outside the function. */
function myFunc(theObject) {
    theObject.make = "Toyota";
}
const myCar = {
    make: "Honda",
    model: "Accord",
    year: 2019
};
console.log(myCar.make);
myFunc(myCar);
console.log(myCar.make);

/* When you pass an array as a parameter.
If the function changes any of the array's values, 
that change is visible outside the function. */
function passArray(myArr) {
    myArr[0] = 30;
}
const arr = [45];
console.log(arr[0]);
passArray(arr);
console.log(arr[0]);

// Functional programming example: Currency convert

let currencyOne = 100;
let currencyTwo = 0;
let exchangeRate = 1.2;
function convertCurrency(amount, rate) {
    return amount * rate;
}
currencyTwo = convertCurrency(currencyOne, exchangeRate);
console.log(currencyTwo);

// Another example of functional programming paradigm approach
const bikePrice = 160000;
const itsTax = 1.1;
function totalPrice(bike, tax) {
    return bike * tax;
}
const toPay = totalPrice(bikePrice, itsTax);
console.log(toPay);

// var globalVar = 77;
// function scopeTest() {
//     var localVar = 88;
// }
// console.log(localVar); // result localVar is not defined as it's block scoped


function meal(animal) {
    animal.food = animal.food + 10;
}
var dog = {
    food: 10
};
meal(dog);
meal(dog);
console.log(dog.food);

function two() {
    return 2;
}
function one() {
    return 1;
}
function calculate(initialValue, incrementValue) {
    return initialValue() + incrementValue() + incrementValue();
}
console.log(calculate(two, one));

// Passing a function as an argument
function sayHello() {
    return "Hello, ";
}
function greeting(helloMessage, name) {
    console.log(helloMessage() + name);
}
// Pass `sayHello` as an argument to `greeting` function
greeting(sayHello, "JavaScript!"); // Hello, JavaScript!  