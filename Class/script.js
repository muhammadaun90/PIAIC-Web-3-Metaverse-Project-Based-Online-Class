// Object.create() method to create a instansiate objects of our classes
class Animal {};
var myCat = Object.create(Animal);
console.log(Animal);

/* A more common method of creating objects from classes is to use 'new' keyword.
When using a default or empty constructor method, JavaScript implicitly calls the Object superclass to create the instance. */
class Bird {};
// Creating a new bird
var myParrot = new Bird();
console.log(Bird);

/* OOP Principles: Inheritance
1. There is a base class of "Animal".
2. There is another class, a sub-class inheriting from "Animal", and the name of this class is "Bird".
3. Next, there is another class, inheriting from "Bird", and this class is "Eagle".*/

class Animal2 {};
class Bird2 extends Animal2 {};
class Sparrow extends Bird2 {};

/* OOP Principles: Encapsulatoin
Encapsulation ha sto do with making a code implementation "hidden" from other users.
for eg */
"abc".toUpperCase();
/* I don't really need to worry or even waste time thinking about how the toUpperCase() method works.
All I want is to use it. */

// OOP Principles: Polymorphism (Multiple forms)
const bicycle = {
    bell: function () {
        return "Ring! Watch out, please.";
    }
}
const door = {
    bell() {
        return "Ring! Come in, please.";
    }
}
console.log(bicycle.bell());
console.log(door.bell());
// Now, to make this code truly polymorphic, I'll add another function declaration:
function ringTheBell(thing) {
    console.log(thing.bell);
}
ringTheBell(door);
ringTheBell(bicycle);

// Another example of polymorphism using classes in JavaScript
class Semester {
    learn() {
        console.log("JavaScript");
    }
}
class Courses extends Semester {
    learn() {
        console.log("Intro to Python");
    }
}
class Language extends Courses {
    learn() {
        console.log("Intro to Data Science");
    }
}
let django = new Courses();
let dataAnalytics = new Language();
django.learn();
dataAnalytics.learn();

/* Constructors are special functions that allow us to build instances of these built-in native objects.
All the constructors are capitalized; example */
function IceCream(flavor) {
    this.flavor = flavor;
    this.meltIt = function() {
        console.log(`The ${flavor} icecream has melted`);
    }
}
let mangoIcecream = new IceCream("mango");
let vanillaIcecream = new IceCream("vanilla");
console.log(mangoIcecream);
console.log(vanillaIcecream);

let apple = new String("apple")
console.log(apple);