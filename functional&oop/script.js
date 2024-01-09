// Functional Programming Approach
const carPrice = 650000;
const gSalesTax = 1.2;
function totalPrice(car, tax) {
    return car * tax;
}
const fullPay = totalPrice(carPrice, gSalesTax);
console.log("It's total price is: ", fullPay);

// Another example for functional programming paradigm
let currencyOne = 280;
let currencyTwo;
let exchangeRate = 1.1;
function convertCurrency(amount, rate) {
    return amount * rate;
}
currencyTwo = convertCurrency(currencyOne, exchangeRate);
console.log("Currency Two: ", currencyTwo);

// OOP paradigm approach
 const buy = {
    shalwarKameez: 4000,
    salesTax: 1.05,
    fullPay: function () {
        var calculate = this.shalwarKameez * this.salesTax;
        console.log("Full Pay is: ", calculate);
    }
}
buy.fullPay();

const buy2 = {
    sandal: 5000,
    salesTax: 1.06,
    fullPay: function () {
        var calculate = this.sandal * this.salesTax;
        console.log("Full Pay is: ", calculate);
    }
}
buy2.fullPay();