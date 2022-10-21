// 1 mile = 1.60934 kilometers
// Ask user to input value in miles
let mile = prompt("Enter value in miles");
console.log(mile," miles ");
let mileToKilometer = 1.60934;
console.log("1 mile = "+mileToKilometer," kms ");
let kilometer = mile / mileToKilometer;
console.log(kilometer, " kms");
console.log("The distance of "+mile+" miles " +" is equal to "+kilometer+" kms ");