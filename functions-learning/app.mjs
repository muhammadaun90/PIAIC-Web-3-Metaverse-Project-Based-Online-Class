// Function definition
function hello(){
    return 'Hello World!';
}
// Calling function
console.log(hello());

let userName = function(){
    return 'Hello Aun!';
};
console.log(userName());

let square = function (number) {
    return number * number;
}
console.log(square(5));

// add function
function add(a,b){
    return a+b;
}
const result = add(2,5);
console.log(result);

// synthetic sugar passing by arrow function
const subtract = (a, b) => {
    return a-b;
}
const resultSub = subtract(7,2);
console.log(resultSub);

const arr1 = ["Aun", 1, 2, 5];
const arr2 = arr1;
console.log(arr1, arr2);

const greet = (name) => {
    console.log(`Hello ${name}`);
};
const sayHello = (hi, name) => {
    hi(name);
};
hi(greet, 'Aun');