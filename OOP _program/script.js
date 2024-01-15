/* Specifically, I'm preparing to build the following inheritance hierarchy:
Animal has two childs Cat and Bird while Cat has further two childs HouseCat and Tiger & Bird has one child Parrot */

class Animal {
    constructor(color = "yellow", energy = 100) {
        this.color = color;
        this.energy = energy;
    }
    isActive() {
        if (this.energy > 0) {
            this.energy -= 20;
            console.log("Energy is decreasing, currently at:", this.energy);
        } else if (this.energy == 0) {
            this.sleep();
        }
    }
    sleep() {
        this.energy += 20;
        console.log("Energy is increasing, currently at:", this.energy);
    }
    getColor() {
        console.log(this.color);
    }
}
// Each animal object, no matter which one it is, will share the properties of color and energy.
class Cat extends Animal {
    constructor(sound = "purr", canJumpHigh = true, canClimbTrees = true, color, energy) {
        super(color, energy);
        this.sound = sound;
        this.canJumpHigh = canJumpHigh;
        this.canClimbTrees = canClimbTrees;
    }
    makeSound() {
        console.log(this.sound);
    }
}
class Bird extends Animal {
    constructor(sound = "chipr", canFly = true, color, energy) {
        super(color, energy);
        this.sound = sound;
        this.canFly = canFly;
    }
    makeSound() {
        console.log(this.sound);
    }
}
class HouseCat extends Cat {
    constructor(houseCatSound = "meow", sound, canJumpHigh, canClimbTrees, color, energy) {
        super(sound, canJumpHigh, canJumpHigh, color, energy);
        this.houseCatSound = houseCatSound;
    }
    makeSound(option) {
        if (option) {
            super.makeSound();
        }
        console.log(this.houseCatSound);
    }
}
class Tiger extends Cat {
    constructor(tigerSound = "Roar!", sound, canJumpHigh, canClimbTrees, color, energy) {
        super(sound, canJumpHigh, canClimbTrees, color, energy)
        this.tigerSound = tigerSound;
    }
    makeSound(option) {
        if(option) {
            super.makeSound();
        }
        console.log(this.tigerSound);
    }
}
class Parrot extends Bird {
    constructor(canTalk = false, sound, canFly, color, energy) {
        super(sound, canFly, color, energy);
        this.canTalk = canTalk;
    }
    makeSound(option) {
        if(option) {
            super.makeSound();
        } else if (this.canTalk) {
            console.log("I'm a talking parrot!");
        }
    }
}
// Creating two parrots, one can talk another can't
let parrotOne = new Parrot(true);
let parrotTwo = new Parrot(false);
parrotOne.makeSound();
parrotTwo.makeSound();
console.log("Parrot One color: ", parrotOne.color); // yellow
console.log("Parrot One energy: ", parrotOne.energy); // 100
var penguin = new Bird("shriek", false, "black and white", 200); // setting all the custom properties
console.log(penguin); // Bird {color: 'black and white', energy: 200, sound: 'shriek', canFly: false }
console.log(penguin.sound); // 'shriek'
console.log(penguin.canFly); // false
console.log(penguin.color); // 'black and white'
console.log(penguin.energy); // 200
penguin.isActive(); // Energy is decreasing, currently at: 180
penguin.sleep(); // Energy is increasing, currently at: 200
// Additionally I created a pet Cat
var leo = new HouseCat();
// leo, no purring please:
leo.makeSound(false); // meow
// leo, both purr and meow now:
leo.makeSound(true); // purr, meow
// Additionally I created a Tiger
var cuddles = new Tiger();
cuddles.makeSound(false); // Roar!
cuddles.makeSound(true); // purr, Roar!