// Functional Programming Approach
const carPrice = 650000;
const gSalesTax = 1.2;
function totalPrice(car, tax) {
    return car * tax;
}
const fullPay = totalPrice(carPrice, gSalesTax);
console.log(fullPay);