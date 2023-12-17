// Error handling in JavaScript
try {
    console.log(a+b);
} catch (error) {
    console.log("It won't add a & b as it's not been declared!");
}

// Another example for try catch & throw
try {
    throw new ReferenceError();
} catch (err) {
    console.log(err);
    console.log("There was a Reference Error");
}
console.log("My program does not stop");

try {
    console.log("hello");
} catch (err) {
    console.log("Good bye");
}

/* throw new Error(); // Uncaught Error
console.log("Hello"); */

/* try {
    console.log('Hello); // It will show "Uncaught SyntaxError: Invalid or unexpected token
} catch (e) {
    console.log('caught');
} */

try {
    throw new Error();
    console.log("Hello");
} catch (err) {
    console.log("Goodbye");
}