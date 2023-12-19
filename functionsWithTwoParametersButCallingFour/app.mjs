// If you call a function with more arguments than parameters, nothing will happen.

function addTwo(a = 25, b = 35) {
    console.log(a+b);
}
addTwo();
// Calling a function with more arguments than parameters
addTwo(3,6,9,10); // output 3+6 = 9, as addTwo has only two parameters defined in the starting

// Another function program in which we call number with string
function add(x, y) {
    console.log(x+y);
}
add(7, "7");