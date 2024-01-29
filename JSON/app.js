// JSON - JavaScript Object Notation
var person = `{
    "name": "Aun",
    "age": "33",
    "city": "Karachi"
}`
// Parsing a JSON string to create an object in JavaScript
var personObject = JSON.parse(person);
console.log("Name: ", personObject.name);
console.log("Age: ", personObject.age);
console.log("city: ", personObject.city);

// Creating a JSON string from a JavaScript object
var data = {
    name : 'Zain',
    age  : 2.5,
};
var jsonData = JSON.stringify(data);
console.log('JSON Data: ', jsonData);