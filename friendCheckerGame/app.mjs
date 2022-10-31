/* Friend checker game
Ask the user to enter a name, using the switch statement to return a confirmation
that the user is a friend if the name selected is known in the case statements. You
can add a default response that you don't know the person if it's an unknown name.
Output the result into the console. */

import promptSync from 'prompt-sync'
const prompt = promptSync();

let userInput = prompt("Enter a name");
switch (userInput) {
    case "Aun" :
        console.log(userInput + " is a friend");
        break;
    case "Ali" :
        console.log(userInput + " is a friend");
        break;
    case "Hamza" :
        console.log(userInput + " is a friend")
        break;
    case "Rashid" :
        console.log(userInput + " is a friend")
        break;
    case "Manzer" :
        console.log(userInput + " is a friend")
        break;
    default :
        console.log(userInput + " is a stranger");
}