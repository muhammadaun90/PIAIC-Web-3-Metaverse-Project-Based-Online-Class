// Functional Programming Approach
const carPrice = 650000;
const gSalesTax = 1.2;
function totalPrice(car, tax) {
    return car * tax;
}
const fullPay = totalPrice(carPrice, gSalesTax);
console.log(fullPay);

// Another example for functional programming paradigm
let currencyOne = 280;
let currencyTwo;
let exchangeRate = 1.1;
function convertCurrency(amount, rate) {
    return amount * rate;
}
currencyTwo = convertCurrency(currencyOne, exchangeRate);
console.log(currencyTwo);