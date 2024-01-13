// Inheritance in JavaScript
var bird = {
    canFly: true,
    hasWings: true,
    hasFeather: true
}
console.log(bird);
let parrot = Object.create(bird);
console.log("parrot can fly: ", parrot.canFly);
console.log("parrot has feather: ", parrot.hasFeather);
console.log("parrot has wings: ", parrot.hasWings);
let penguin = Object.create(bird);
penguin.canFly = false;
console.log("penguin has wings: ", penguin.hasWings);
console.log("penguin has feather: ", penguin.hasFeather);
console.log("penguin can fly: ", penguin.canFly);