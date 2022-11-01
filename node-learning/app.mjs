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