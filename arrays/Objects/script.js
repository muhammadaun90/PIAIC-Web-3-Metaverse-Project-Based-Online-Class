// Checking array typeof
let arrCheck = [1,"Aun"];
console.log("arrCheck type is an ",typeof arrCheck);

// Object in arrays
let user1 = [{
    userName: "Aun",
    Age: 32,
    Qualification: "BS(CS)",
},
{
    userName: "Daniyal",
    Age: 28,
    Qualification: "Masters",
},
{
    userName: "Basit",
    Age: 27,
    Qualification: "Bachelors in Software Engineering",
}];
console.log(user1);

// Bracket Notation
let arrOfKeys = ["Speed", "Altitude", "Color"];
let drone = {
    Speed: 100,
    Altitude: 200,
    Color: "Red"
}
for (let i = 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]]);
}