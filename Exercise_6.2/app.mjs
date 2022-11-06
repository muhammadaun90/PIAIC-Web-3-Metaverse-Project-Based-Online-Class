/* 1. Create an array of descriptive words.
2. Create a function that contains a prompt asking the user for a name.
3. Select a random value from the array using Math.random.
4. Output into the console the prompt value and the randomly selected array
value.
5. Invoke the function. */

let myArr = ["Aun", "Computer Science", "IT", "JavaScript", "Constructors", "Destructors", "functions"];
function askUser (){
    let userName = prompt("What's your name?");
    let randomValue = Math.floor(Math.random() * myArr.length);
    console.log(myArr[randomValue] + " " + userName);
}
myArr();