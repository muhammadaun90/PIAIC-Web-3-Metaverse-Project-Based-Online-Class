/* 1. Create a function named greet() that takes one argument, fullName. That
argument should be an array. Output the items of the array into the console
interpolated into a greeting message string.
2. Create a second function that has two arguments: the first one is a string for
the user's full name, and the second is the callback function.
3. Split the string into an array using the split() method.
4. Send the full-name array to the greet() function created in the first step.
5. Invoke the process of the callback function. */

// setTimeout(() => {
//     console.log("Hello Aun");
// }, 5000);


// setInterval(() => {
//     console.log("Hello Aun Zaidi");
// }, 1000);

const greet = (fullName) => {
    console.log(`Hello ${fullName[0]+' '+fullName[1]}, how are you?`);
}
const secondFunc = (user, callback) => {
    const fullName = user.split(" ");
    // console.log(fullName);
    callback(fullName);
}
secondFunc("Aun Zaidi", greet);