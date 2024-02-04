// Jest Testing in JavaScript
function concatStrings(strA, strB) {
    return strA + strB;
}
console.log(concatStrings(123, 456)); // Expected output: "123456"
console.assert(concatStrings("Hello", "World") === "HelloWorld");

function addFive(val) {
    return val + 5;
}
module.exports = addFive;