// Object.create() method to create a instansiate objects of our classes
class Animal {};
var myCat = Object.create(Animal);
console.log(Animal);

/* A more common method of creating objects from classes is to use 'new' keyword.
When using a default or empty constructor method, JavaScript implicitly calls the Object superclass to create the instance. */
class Bird {};
var myParrot = new Bird();
console.log(Bird);