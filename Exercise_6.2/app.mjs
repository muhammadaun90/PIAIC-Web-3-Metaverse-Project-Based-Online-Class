/* 1. Create an array of descriptive words.
2. Create a function that contains a prompt asking the user for a name.
3. Select a random value from the array using Math.random.
4. Output into the console the prompt value and the randomly selected array
value.
5. Invoke the function. */

let descriptiveWords = ["Aun", "IT", "Software", "Web 3.0", "Metaverse"];
function askUser() {
    let userInput = prompt("Enter the name");
    let randomValue = Math.floor(Math.random() * descriptiveWords.length);
    console.log(userInput, descriptiveWords[randomValue]);
}
askUser();