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