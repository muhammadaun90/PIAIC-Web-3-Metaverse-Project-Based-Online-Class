// Creating an object variable
let car = {
    model: "Yaris",
    make: "Toyota",
    year: 2022,
    color: "Black",
};
// Manipulating objects with loops
for(let key in car){
    // console.log(car[key]);
    console.log(key, car[key]);
}

// For of loops and objects
const bike = {
    horsePower: 150,
    type: "Mountain Bike",
    model: 2024,
    color: "Red"
};
/* for (const key of bike) {
    console.log(bike[key]); // Uncaught TypeError: bike is not iterable 'Object is not iterable'
    console.log(key, bike[key]);
} */

// Contrary to objects, arrays are iterable. For example:
const motorCycles = ["Honda", "Yamaha", "Suzuki"];
for (var motorCycle of motorCycles) {
    console.log(motorCycle);
}

/*Luckily, you can use the fact that a for of loop can be run on arrays to loop over objects.
The Object.keys() method*/
const course = {
    name: "Advanced JavaScript",
    duration: 8,
    difficulty: "Intermediate"
};
console.log("Course: ", Object.keys(course));

// The Object.values() method
const skills = {
    frontEnd: true,
    backEnd: false,
    database: true
};
console.log(Object.values(skills));
// The Object.entries() method returns an array of [key, value] pairs
console.log(Object.entries(skills));