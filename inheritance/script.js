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

// Inheritance using classes in JavaScript
class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus() {
        console.log("Lighs on? ", this.lightsOn);
    }
    getSelf() {
        console.log(this);
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}
class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn);
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
    toggleHighSpeed() {
        this.highSpeedOn = !this.highSpeedOn;
        console.log('High speed status:', this.highSpeedOn);
    }
    toggleLights() {
        super.toggleLights();
        super.lightsStatus();
        console.log('Lights are 100% operational.');
    }
}
var myFirstTrain = new Train('red', false);
console.log(myFirstTrain); // Train {color: 'red', lightsOn: false}
var mySecondTrain = new Train('blue', false);
var myThirdTrain = new Train('blue', false);
var train4 = new Train('red', false);
train4.toggleLights(); // undefined
train4.lightsStatus(); // Lights on? true
train4.getSelf(); // Train {color: 'red', lightsOn: true}
train4.getPrototype(); // {constructor: f, toggleLights: f, ligthsStatus: f, getSelf: f, getPrototype: f}
var train5 = new Train('blue', false);
var highSpeed1 = new HighSpeedTrain(200, false, 'green', false);
train5.toggleLights(); // undefined
train5.lightsStatus(); // Lights on? true
highSpeed1.toggleLights(); // Lights on? true, Lights are 100% operational.

class StationaryBike {
    constructor(position, gears) {
        this.position = position;
        this.gears = gears;
    }
}
class Treadmill {
    constructor(position, modes) {
        this.position = position;
        this.modes = modes;
    }
}
class Gym {
    constructor(openHrs, stationaryBikePos, treadmillPos) {
        this.openHrs = openHrs;
        this.stationaryBike = new StationaryBike(stationaryBikePos, 8);
        this.treadmill = new Treadmill(treadmillPos, 5);
    }
}
var boxingGym = new Gym("5-11 pm", "right-corner", "left-corner");
console.log(boxingGym.openHrs);
console.log(boxingGym.stationaryBike);
console.log(boxingGym.treadmill);