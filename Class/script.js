// Object.create() method to create a instansiate objects of our classes
class Animal {};
var myCat = Object.create(Animal);
console.log(Animal);

/* A more common method of creating objects from classes is to use 'new' keyword.
When using a default or empty constructor method, JavaScript implicitly calls the Object superclass to create the instance. */
class Bird {};
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
        return "Ring, ring! Watch out, please."
    }
}
const door = {
    bell: function () {
        return "Ring, ring! Come here, please."
    }
}
bicycle.bell();
door.bell();
// Now, to make this code truly polymorphic, I'll add another function declaration:
function ringTheBell(thing) {
    console.log(thing.bell);
}
ringTheBell(door);