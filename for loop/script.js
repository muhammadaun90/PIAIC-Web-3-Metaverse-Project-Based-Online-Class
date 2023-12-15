/* 1. Setup a blank array, myWork.
2. Using a for loop, create a list of 10 objects, each of which is a numbered
lesson (e.g. Lesson 1, Lesson 2, Lesson 3….) with an alternating true/false
status for every other item to indicate whether the class will be running this
year. For example:
name: 'Lesson 1', status: true
3. You can specify the status by using a ternary operator that checks whether
the modulo of the given lesson value is equal to zero and by setting up a
Boolean value to alternate the values each iteration.
4. Create a lesson using a temporary object variable, containing the name
(lesson with the numeric value) and predefined status (which we set up in
the previous step).
5. Push the objects to the myWork array.
6. Output the array to the console. */

// Blank array with myWork variable
const myWork = [];
for(let i = 1; i < 11 ; i++){
    let status = 1%2 ? true : false; // ternary operator
    // Creating a Lesson using a temporary object variable
    let temporary = {
        name: `Lesson ${i}`,
        status: status
    };
    myWork.push(temporary); // push objects to myWork array
}
console.log(myWork);

// Simplest understanding of for loops
for (var i = 0; i <= 3; i++) {
    console.log("This is line ", i)
}