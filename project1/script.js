// Assignment : The distance of 130 kms is equal to 209.2142 miles

// Ask user to input data in miles
let miles = prompt("Enter distance in miles");
console.log(miles, "miles");
// 1 mile = 1.60934 kilometers
let milesToKilometers = 1.60934;
let kilometers = miles / milesToKilometers;
console.log(kilometers, "kilometers");
let message = "The distance of " + kilometers + " kms is equal to " + miles + " miles";
console.log(message);