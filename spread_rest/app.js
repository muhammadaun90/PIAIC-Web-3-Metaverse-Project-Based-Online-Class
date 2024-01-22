// Spread Opertor ...
let topCities = ["Berlin", "London", "Houston", "Chicago", "Dubai"];
function citiesToVisit(first, second, third, fourth, fifth) {
    console.log("First visit to: ", first);
    console.log("Second visit to: ", second);
    console.log("Third visit to: ", third);
    console.log("Fourth visit to: ", fourth);
    console.log("Fifth visit to: ", fifth);
}
citiesToVisit(...topCities);

// Rest Operator
let places = ["Gulberg", "Malir", "Maymar", "Gulshan-e-Iqbal", "Defence"];
let [] = places;
let [first, second, third, ...secondVisit] = places;
console.log(places);

function addTaxToPrices(taxRate, ...itemsBought) {
    return itemsBought.map(item => taxRate * item);
}
let shoppingCart = addTaxToPrices(2, 4, 6, 8, 10);
console.log(shoppingCart);

// It's also easy to join objects:
let flying = {wings: 2};
let swimming = {canSwim: true};
let flySwim = {...flying, ...swimming};
console.log(flySwim);

// Add new members to arrays without using the push() method
let shows = ["GOT", "KBC", "ABC"];
shows = [...shows, "Money Heist", "Berlin"];
console.log(shows);