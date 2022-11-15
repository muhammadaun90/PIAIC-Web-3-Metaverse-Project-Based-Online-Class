let addTwo = (a,b) => console.log(a+b);
addTwo(5,9);

// synthetic sugar passing by arrow function
let subtract = (x,y) => {
    return x-y;
}
const result = subtract(9,3);
console.log(result);

// Another example
const greet = (name) => {
    console.log(`Hello ${name}`);
}
greet("Aun");

// One more example
let degree = (x,y) => {
    return x,y;
}
const finalDegree = degree("BS", "MS");
console.log(finalDegree);

// Another one
const addNum = (a = 12, b = 15) => {
    console.log(a+b);
}
addNum();